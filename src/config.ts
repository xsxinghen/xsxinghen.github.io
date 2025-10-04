import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "xs星痕 | Blog",
	subtitle: "一个建立于21世纪的Blog，存活于互联网的边缘。",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.About,
		//导航栏添加菜单
		//1.src/pages添加文件 标题.astro 可以复制about.astro;
		//2.src/types/config.ts里添加修改 ==> export enum LinkPreset 下修改；
		//3.src/constants/link-presets.ts修改翻译
		//4.src/i18n/i18nKey.ts 添加
		//{
		//	name: "GitHub",
		//	url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
		//	external: true, // Show an external link icon and will open in a new tab
		//},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://avatars.githubusercontent.com/u/84395857?v=4", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "xs星痕",
	bio: "一个建立于21世纪的Blog，存活于互联网的边缘。",
	links: [
	{
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/xsxinghen',
    },
    {
      name: 'E-Mail',
      icon: 'material-symbols:mail-rounded',
      url: 'mailto:xsxinghen@gmail.com',
    },
	],
	  
    // Visit https://icones.js.org/collection/fa6-brands for icon codes
    // 如果相应的图标集尚未包含在内，你需要进行安装 。
    // `pnpm add @iconify-json/<icon-set-name>`
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
