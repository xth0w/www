import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Your Name",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"A minimal personal blog & writing space, built with Astro. Notes on whatever I happen to be thinking about — usually some mix of code, design, and the occasional half-formed idea. Replace this paragraph in src/site.config.ts to make the site your own.",
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "Astro Sienna",
	hideThemeCredit: false,
	profile: {
		name: "John Doe",
		email: "john@example.com",
		github: "https://github.com/example",
		linkedin: "https://www.linkedin.com/in/example/",
		jobTitle: "Software Engineer",
		employer: "Example Inc.",
		employerUrl: "https://example.com",
		alumni: "Example University",
		avatar: "/avatar.png",
	},
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/posts/",
		title: "Posts",
	},
	{
		path: "/about/",
		title: "About",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: "#1a1715",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: "#1a1715",
			editorTabBarBackground: "#15120e",
			frameBoxShadowCssValue: "none",
			terminalBackground: "#1a1715",
			terminalTitlebarBackground: "#15120e",
		},
		uiLineHeight: "inherit",
	},
	themes: ["min-dark"],
	useThemedScrollbars: false,
};
