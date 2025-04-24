---
title: Using Tailscale IDP with Synology NAS - A Step-by-Step Guide
createTime: 2025/04/22 11:09:55
permalink: /blog/tailscale-synology-idp-tutorial/

tags:
- networking
- tailscale
- Synology
---

If you're looking to set up OpenID Connect (OIDC) authentication for your Synology NAS using Tailscale’s `tsidp` identity provider, you're in the right place. This guide walks you through everything from installing the IDP on a Linux host, configuring it with Tailscale, and enabling SSO on your Synology NAS.

## Prerequisites

Before you start, make sure you have the following:

- **A Linux host** where you’ll run your `tsidp` server:
  - Go 1.24.0 or later installed
  - SSH access
- **A Tailscale account**:
  - Already configured and active
  - Admin access to edit the ACL file
- **Your Synology NAS joined to your tailnet**
  → [Follow this guide to do so](https://tailscale.com/kb/1131/synology)

---

## Installing `tsidp`

Installing the `tsidp` binary is a breeze if you already have Go installed:

```bash
go install tailscale.com/cmd/tsidp@latest
```

Now set up a systemd service for `tsidp` on your Linux host:

 `/etc/systemd/system/tsidp.service`

```ini
[Unit]
Description=Tailscale (OIDC) IDP

[Service]
TimeoutStartSec=0
User=root
EnvironmentFile=/etc/default/tsidp
ExecStart=/root/go/bin/tsidp
Restart=on-failure
TimeoutStopSec=20s
SendSIGKILL=no

[Install]
WantedBy=multi-user.target
```

`/etc/default/tsidp`

```env
TAILSCALE_USE_WIP_CODE=1
```

Now reload systemd and start the service:

```bash
systemctl daemon-reload
systemctl enable tsidp --now
systemctl status tsidp
```

You should see logs indicating the service is running but not yet authenticated:

`tsidp[39714]: LocalBackend state is NeedsLogin; running StartLoginInteractive...`

To authenticate, run:

```bash
journalctl -u tsidp
```

Look for a URL like: `https://login.tailscale.com/a/<REDACTED>`

Open this in your browser and click "Connect".

![Tailscale Login](https://gist.github.com/user-attachments/assets/51b5b694-82a6-4efe-b093-be42f3bb55a3)

Once authenticated, your IDP server will appear in your tailnet devices:

![Tailnet Status](https://gist.github.com/user-attachments/assets/ab78d893-e6c3-470e-98f3-467a3afd9d86)

---

## 🔍 Verifying Connectivity

You’ll need to properly tag your devices and update your Tailscale ACLs.

### Example Tagging in the Admin Console

Ensure the `tsidp` and Synology NAS devices are appropriately tagged:

![Device Tags](https://gist.github.com/user-attachments/assets/1b3206ef-abe2-400b-8287-d4de308a8ae4)
![NAS Tag](https://gist.github.com/user-attachments/assets/bf21f4d5-6072-4f98-ac3b-b8318d3e131c)

### Example ACL (`tailscale.acl.hujson`)

```json
{
  "groups": {
    "group:admins": ["cedi@github"]
  },
  "hosts": {
    "nas": "100.71.201.45",
    "nuc": "100.122.149.90",
    "idp": "100.115.22.54"
  },
  "tagOwners": {
    "tag:core-infra": ["group:admins"],
    "tag:core-services": ["group:admins"]
  },
  "acls": [
    {
      "action": "accept",
      "src": ["tag:core-services"],
      "dst": ["tag:core-services:*"]
    },
    {
      "action": "accept",
      "src": ["tag:core-infra"],
      "dst": ["tag:core-infra:*"]
    }
  ],
  "grants": [
    {
      "src": ["autogroup:member", "autogroup:tagged"],
      "dst": ["tag:core-services"],
      "ip": ["*"]
    }
  ],
  "tests": [
    {
      "src": "cedi@github",
      "proto": "tcp",
      "accept": ["idp:443"]
    }
  ]
}
```

Once in place, this allows:

- NAS → `tsidp` communication
- User → `tsidp` communication
- User → NAS communication

You can verify that the OIDC server is up:

```bash
curl https://idp.<tailnet-name>.ts.net/.well-known/openid-configuration
```

You should get a full OIDC metadata document in response.

---

## Configure Synology NAS as OIDC Client

Open your Synology **Control Panel** → **Domain/LDAP** → **SSO Client** tab and enable **OpenID Connect SSO service**.

![Enable SSO](https://gist.github.com/user-attachments/assets/3c4b8fd0-0d76-47c9-8cc4-892d760253d2)

Click **Edit** to configure the SSO settings:

![Edit Settings](https://gist.github.com/user-attachments/assets/96d35d51-d523-42fd-aa1e-fd6fb8a071a6)

### Use these values

- **Profile**: `OIDC`
- **Account Type**: `Domain/LDAP/local`
- **Name**: `Tailscale IDP`
- **Well-known URL**: `https://idp.<tailnet-name>.ts.net/.well-known/openid-configuration`
- **App ID**: `foo` _(arbitrary)_
- **Secret**: `bar` _(arbitrary)_
- **Redirect URI**: `https://nas.<tailnet-name>.ts.net:5001` _(must be HTTPS!)_
- **Scope**: `openid`
- **Username Claim**: `username`

### Matching Users

The Synology OIDC client matches the `username` claim from the IDP against local accounts.

In this example, the Tailscale login is `cedi@github`, but `tsidp` splits on `@`, so the resulting username is just `cedi`.

Make sure this matches the user on your NAS:

![Synology User Match](https://gist.github.com/user-attachments/assets/4dfd0c53-2613-46cf-9a3d-129c0e23c9cf)

---

## Testing the Login

Now, navigate to your NAS via browser: `https://nas.<tailnet-name>.ts.net:5001`

You should see an additional **SSO Authentication** tab on the login screen:

![Login Screen](https://gist.github.com/user-attachments/assets/a2cc6fa0-8eb1-4279-89ad-840eaf0b4502)

Switch to **SSO Authentication** and hit the arrow:

![SSO Login](https://gist.github.com/user-attachments/assets/0820f4a8-39d6-4342-8cd8-ece77677c361)

Allow your browser’s pop-up and complete the login:

![Authenticated](https://gist.github.com/user-attachments/assets/5b6c1218-1e4c-44bc-b289-00f441809e61)

Boom! You’re now logged in using Tailscale’s OIDC authentication!
