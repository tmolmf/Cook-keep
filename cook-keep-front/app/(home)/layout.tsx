import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Image from 'next/image';
import backgroundImg from '../public/home-background.png';
import React from 'react'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
			<meta name="robots" content="index, follow" />	
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
			
			<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	
</link>
			</head>
			<body
				className={clsx(
					"font-sans antialiased h-screen after:bg-home after:bg-center after:bg-cover after:bg-fixed after:absolute after:inset-0 after:z-[-1]",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container flex-grow px-2 pt-2 mx-auto max-w-7xl">
							{children}
						</main>
						<footer className="flex items-center justify-center w-full py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/is404notfound/Cook-keep"
								title="Cook-keep Github"
							>
								<span className="text-default-600">Developed by</span>
								<p className="text-primary">Easyoon & Legacy Kwon</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
