---
title: About Me
createTime: 2025/03/28 12:49:34
permalink: /about/
cover: /images/specht-labs-rounded.png
---

## Hi, I'm Cedric

but most people know me as *cedi*

<CardGrid>
<ImageCard image="https://avatars.githubusercontent.com/u/1952599?v=4" />
<Card>

I'm a **Senior Site Reliability Engineering and Tech Lead** at [Microsoft Azure](https://github.com/microsoft), working on **distributed systems, chaos engineering, and platform resilience** at scale.
If it's complex, distributed, and needs to stay up — I'm into it.

I specialize in building and maintaining large-scale distributed systems, driving reliability, and leading technical initiatives to improve platform resilience.

</Card>
</CardGrid>

<LinkCard title="Download my CV" icon="pepicons-pencil:cv" href="/assets/CV_Cedric-Kienzler_2025.pdf"/>

## What I Do

- Building reliable, large-scale systems with a focus on **resilience, SLOs, and automation**
- Leading teams and setting technical direction in high-stakes, high-scale environments
- Designing chaos experiments, improving release workflows, and modernizing infrastructure
- Evangelizing good SRE practices through talks, docs, and community work

## Community & Chaos

I regularly help with infrastructure, planning, and logistics for events like the Chaos Communication Congress.
During the pandemic, I helped build:

- *jitsi.rocks* - A collection of Jitsi Video Servers to stay connected
- *Open Infrastructure* - A collective of people building desperately needed infrastructure for education institutions to keep classes going
- The Kubernetes stack powering the [rC3 - NOW HERE](https://rc3.world/2021/) virtual workd

## What I Tinker With

- Home lab with **Raspberry Pi K3s cluster**, **CEPH storage**, and a **Stratum 1 NTP/PTP time server**
- **Cluster API** managed cloud Kubernetes cluster running a full **Grafana LGTM Stack**
- Kernel recompilation just for fun (and for weird hardware drivers)
- Low-level **distributed systems** algorithms to explore gossip and consensus protocols

## When Not Writing YAML

I’m also a hobbyist **analog photographer** with a small collection of 35mm and medium format cameras (Leica M6, Hasselblad 500 c/m, Canon A1).
I develop film at home and have a tiny darkroom with a 35mm enlarger.

## Things I Believe in

- Be excellent to each other 🤝
- Focus on fundamentals > chasing hype
- Alert on **symptoms**, not **vitals**
- Incidents are opportunities to learn
- There is no single "root cause"
- [How Complex Systems Fail](https://how.complexsystems.fail) is required reading
- Your beloved system architecture exists mostly **in your head** and ~~behaves~~ fails differently than you'd expect. (See the [Above the line/below the line](https://snafucatchers.github.io/#2_3_The_above-the-line/below-the-line_framework) framework)

## Let’s Connect

[![GitHub Specht Labs](https://img.shields.io/badge/SpechtLabs-008080?style=for-the-badge&logo=github&logoColor=white)](https://github.com/specht-labs)
[![Mastodon](https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white)](http://hachyderm.io/@cedi)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/c3di1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logoColor=white)](https://www.linkedin.com/in/cekienzl)

## Experiences

::: timeline

- Senior Site Reliability Engineer / Technical Lead - Microsoft Azure
  time=02/2022 to 05/2025

  Technical Lead in Azure’s Safe Change infrastructure SRE Team, responsible for chaos engineering, resiliency validation, and release infrastructure Harmonisation: Led the modernisation of Azure's release infrastructure, migrating 60+ repositories and 600+ pipelines, increasing deployment reliability and speed across multiple critical customer-facing services including, among others, Azure Cosmos DB, Log Analytics, Web Apps & Function Apps.

  - **Platorm Engineering & DevOps Expertise:** Developed Platform tooling improvements to streamline engineering workflows and improve developer experience and led shift-left initiatives, integrating early validation mechanisms to catch issues earlier in the development lifecycle.
  - **Chaos Engineering & Resilience Validation:** Designed and implemented Chaos Engineering experiments to validate system failure hypotheses covering 80% of high-impact critical customer scenarios and improve resilience strategies and built synthetic monitoring and business validation testing to proactively identify and mitigate reliability risks.
  - **Organised multiple internal learning sessions**, developing a 9-part self-guided onboarding tutorial as part of the SRE Academy, enabling new engineers to onboard 75% faster to the new release system.
  - **Leadership and Team Management:** Technical lead & Scrum Master for my immediate team of 5 engineers, responsible for setting technical direction, mentoring, and defining strategies and goals for the team as well as the broader department, serving as the technical lead for a newly formed team within the Safe Change Infrastructure SRE organisation, and supporting to multiple program managers and teams from across three other SRE organisations in bootstrapping new SRE engagements.
  - **Cross-Org Collaboration and Stakeholder Engagement:** Partnered with 10+ service teams across Azure to help them migrate to the new release system, contributing high-quality pull requests to their repositories as best-practice examples driving down change related outages by 20%.
  - **SRE Best Practices an Knowledge Sharing:** Core Contributor & Commimee Member for the Azure SRE Playbook, authoring a new SRE patterns with 3 sub-patterns and overseeing the review and integration of 3 additional major patterns.
  - **Technical Evangelism & Internal Training:** Speaker at Azure SRE Tech Talks, delivering sessions on reliability,
deployment strategies, and Platform engineering.
  - **Maintained and expanded the Azure SRE Wiki**, working across all SRE organisations to standardise and
document operational excellence.
  - **Recognition & Awards:** Azure Reliability Quality Star – Leadership Excellence Award for sustained high-
quality contributions to Azure’s engineering culture and reliability improvements

- Tech-lead Manager Kubernetes SRE - German Edge Cloud
  time=07/2020 to 01/2022

  Built and led the Kubernetes SRE Team: Established and scaled a remote team from two to 6 highly skilled SREs, taking full ownership of the company’s Managed Kubernetes Platform, spread across 3 availability zones and hosting 50+ customer clusters. Ensured only high-quality changes made it into production by reviewing code, design documents, and architecture changes daily, implementing state of the art GitOps tooling and observability, resulting in a 75% reduction in change related outages over 12 months.

  - **Incident & Change Management:** Developed and implemented new incident, change, and problem management processes, improving reliability and operational eﬃciency, enabling an average 10 minute time-to-engage and reducing time-to-mitigation by several hours on average through more streamlined and eﬃcient incident management processes and standard operating procedures.
  - **Cross-Functional Collaboration:** Worked closely with the Service Management team to improve incident response, change reviews, and operational excellence as well as the Infrastructure, OpenStack, and CEPH Storage teams, ensuring seamless integration and optimised performance across compute, storage, and networking layers resulting in 10% increased storage throughput and decrease in etcd commit latencies driving customer satisfaction.
  - **Platform & Product Leadership:** Took on the Product and Platform Owner role, shielding the team from unnecessary business complexity while aligning priorities with company strategy and CTO directives.
  - **Financial Oversight & Cost Optimisation:** Managed the budget for the Managed Kubernetes Service, including forecasting infrastructure costs and collaborating with accounting on financial planning.
  - **Sales & Pricing Strategy:** Worked with Sales and Finance leadership to define a competitive pricing structure for the Kubernetes oﬀering.
  - **Cloud-Native & Open Source Advocacy:** Fostered a culture of open-source collaboration, contributing improvements back to the cloud-native community and positioning the company’s oﬀerings within CNCF certification programs.

- Site Reliability Engineer 2, SharePoint Online - Microsoft
  time=01/2019 to 03/2020

  Running Live-Site operations for one of the largest M365 services with over 200 million monthly active users and over 1 exabyte of data, including incident response and management, rapidly diagnosing and resolving critical issues to maintain SharePoint Online’s 99,99% SLA.

  - **Disaster Recovery & Infrastructure Modernisation:** Led an initiative to improve disaster recovery playbooks using a more resilient storage solution, ensuring recovery procedures remained accessible even during blackout scenarios.
  - **Onboarding & Global Expansion:** Played a key role in onboarding and training a new SRE team in China, enabling 24/7 follow-the-sun operations.
  - **Community & Knowledge Sharing:** Organised meet-ups for MicrosoK Ireland’s Open Source Club

- Software Engineer, Network Security - Sophos
  time=01/2017 to 12/2018

  - **Network Security & Threat Detection:** Worked on the Synchronised Security Engine, significantly improving network threat detec;on rates compared to competing vendors.
  - **IPSec & Network Protocol Implementation:** Worked on the implementation of IPsec IKEv2 in the Linux Kernel for the Firewall Appliance
  - Scalability & Load Testing: Implemented extensive firewall load testing using the Ixia BreakingPoint plaAorm, ensuring performance under high traﬃc loads. Developed custom load-testing frameworks with Python Mininet SDN, simulating concurrent user traﬃc.
  - **Testing & Release Acceleration:** Expanded the integration test suite for firewall products, leading to faster and more reliable release cycles.

- Software Engineer - MARKANT Handels and Service GmbH
  time=08/2015 to 12/2016

  - **Infrastructure Modernisation:** Led a department-wide initiative migrating from CVS to Git, upgrading IDE versions, and implementing a CI/CD pipeline for improved development workflows, increasing deployment velocity from once a week to multiple times a day.
  - **Operational Support Tooling:** Built custom tools to assist operations teams, enhancing incident response times in highly time-sensitive trading systems.
  - **Mentorship & Training:** Trained apprentices and junior engineers in soKware architecture, clean code principles, and design pamerns.

- Junior Software Engineer, Streit Datentechnik GmbH
  time=09/2012 to 07/2015

  - **Software Development:** Learned MS Visual C++, C# .NET, MS T-SQL, MFC, and the Win32 API, broadening problem-solving capabilities across multiple technologies.
  - **Reverse Engineering & Analysis:** Developed a disassembler to read dependencies from Windows-PE and C# executables for debugging and system analysis.

:::

::: tabs

@tab Experience

- Technical Leadership & Mentorship
- Key Stakeholder Management
- Staff Training
- Distributed Systems & Low-Level Systems Programming
- Chaos Engineering & Resilience Testing
- CI/CD & Deployment Orchestration
- Infrastructure as Code

@tab Interests

- Reliability Engineering
- Software Engineering
- Cloud Computing & Cloud-Native Platforms
- Automation & Infrastructure as Code
- Distributed Systems Architecture
- Site Reliability Engineering (SRE)
- Chaos Engineering & Resilience Testing
- Kubernetes & Container Orchestration
- Observability & Monitoring (Metrics, Logging, Tracing)
- Low-Level Systems Programming
- Networking & Security
- DevOps & CI/CD Pipelines
- Technical Leadership & Mentorship
- Open Source Contributions & Cloud-Native Advocacy
- Public Speaking & Knowledge Sharing
- Home Lab Experimentation (Kubernetes, IoT, LoRaWAN, ESP32)

@tab Technologies

- Container Orchestration
  - Kubernetes
  - Docker / Docker-Compose
- Kubernetes
  - GitOps with **ArgoCD**
  - Cilium CNI
  - K3s
  - ClusterAPI
- Observability
  - Grafana LGTM Stack
    - Loki (Self-hosted in K8s)
    - Grafana Dashboard (Self-hosted in K8s)
    - Tempo (Self-hosted in K8s)
    - Mimir (Self-hosted in K8s)
  - Service Level Indicators & Service Level Objectives
- CI/CD
  - GitLab CI/CD
  - GitHub Actions
- Project Management Tools
  - JIRA
  - Confluence
  - Azure DevOps
  - Azure Wiki
  - DocFX
  - Hugo
  - VuePress
- Chaos Engineering
  - Chaos Mesh (for K8s)
  - Azure Chaos Studio (for Azure infrastructure)
- Infrastructure as Code
  - Terraform
  - Azure Resource Manager (ARM)
  - Bicep
  - Ansible
- Programming Languages
  - Go
  - Rust
  - C++
  - Python
  - TypeScript
  - BASH
- Networking
  - Hardware
    - Arista EOS
    - HPE / Aruba
  - Protocols
    - IPsec IKEv2
    - BGP
    - Wireguard
  - Technologies
    - Tailscale
    - mininet
:::
