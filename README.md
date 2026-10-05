# Specht Labs

The site uses [VuePress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume).

## Install

Every tool is pinned in `.mise.toml`:

```sh
mise install
mise run install
```

## Run the site

```sh
# Start the development server
mise run dev

# Build for production
mise run build

# Preview the production build locally
mise run preview

# Lint Markdown, the VuePress config's TypeScript, YAML and workflows
mise run lint

# Everything CI runs: lint and the production build
mise run check

# Update VuePress and its theme
mise run vp-update
```

## Deployment

`.github/workflows/website.yaml` lints and builds every pull request. Pushes to `main` run the same jobs and then deploy the build to GitHub Pages and Specht Labs Static Pages.

## References

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
