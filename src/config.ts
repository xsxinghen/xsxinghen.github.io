import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'xs星痕 | Blog',
  subtitle: '',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // 主题色的默认色调，取值范围为 0 至 360。例如：红色为 0，蓝绿色为 200，青色为 250，粉色为 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // 相对于 /src 目录。如果以 / 开头，则相对于 /public 目录
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    
    {
      src:'/favicon/favicon.ico',
    }
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // 相对于 /public 目录的网站图标（favicon）路径 。
    //   theme: 'light',              // （可选）“light”（浅色）或 “dark”（深色），仅当您为浅色模式和深色模式分别设置了不同的网站图标（favicon）时才进行设置 。
    //   sizes: '32x32',              // （可选）网站图标的尺寸，仅在您拥有不同尺寸的网站图标时进行设置 。
    // }
  ]
}
// about 在 content/spec/about.md 里设置
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
   // {
    //  name: 'GitHub',
    //  url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
    //  external: true,                               // Show an external link icon and will open in a new tab
   // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://avatars.githubusercontent.com/u/84395857?v=4',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'xs星痕',
  bio: '一个建立于21世纪的Blog，存活于互联网的边缘.',
  links: [
    // {
     // name: 'Twitter',
     // icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/collection/fa6-brands for icon codes
                                        // 如果相应的图标集尚未包含在内，你需要进行安装 。
                                        // `pnpm add @iconify-json/<icon-set-name>`
     // url: 'https://twitter.com',
     // },
    // {
      // name: 'Steam',
      // icon: 'fa6-brands:steam',
      // url: 'https://store.steampowered.com',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/xsxinghen',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
