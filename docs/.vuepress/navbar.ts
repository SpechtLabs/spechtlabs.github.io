import { defineNavbarConfig } from 'vuepress-theme-plume';

async function fetchNavbarConfig() {
  return defineNavbarConfig([
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/', },
    { text: 'About Me', link: '/about/' },
  ]);
}

// Example usage in a VuePress config file
export const navbar = await fetchNavbarConfig();
