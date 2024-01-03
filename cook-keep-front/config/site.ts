export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "COOK KEEP",
	description: "Cooking Recipes",
	navItems: [
		{
			label: "Home",
			href: "/",
		},

    {
      label: "My List",
      href: "/favorites",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},

    {
      label: "My List",
      href: "/favorites",
    },
    {
      label: "About",
      href: "/about",
    },
	{
		label: "Logout",
		href: "/logout",
		},
	],
	links: {
		github: "https://github.com/is404notfound/Cook-keep",
	},
};
