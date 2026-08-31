# Specht Labs

The site uses [VuePress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume).

## Install

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

# Run the frozen install and build used by CI
mise run ci

# Update VuePress and its theme
mise run vp-update
```

## Deployment

Pushes to `main` run the frozen Bun install and production build in `.github/workflows/deploy.yml`. A successful build deploys the same artifact to GitHub Pages and Specht Labs Static Pages. Pull requests run the build check without uploading an artifact.

## References

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
