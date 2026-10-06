declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const comp: ComponentOptions
  export default comp
}

declare module '@temp/github-data.js' {
  import type { GitHubData } from '../plugins/github-data'

  const data: GitHubData
  export default data
}
