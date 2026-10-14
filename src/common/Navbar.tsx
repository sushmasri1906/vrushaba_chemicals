// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
// 	ArrowDownRight,
// 	ArrowRight,
// 	ArrowUpRight,
// 	ChevronDown,
// 	FlaskConical,
// 	Menu,
// 	Microscope,
// 	Palette,
// 	ShieldCheck,
// 	Sparkles,
// 	Sun,
// 	X,
// } from "lucide-react";

// const navigation = [
// 	{ name: "Home", href: "/" },
// 	{ name: "About Us", href: "/about-us" },
// 	{ name: "Research & Development", href: "/research-development" },
// 	{ name: "Applications", href: "/applications" },
// ];

// const products = [
// 	{
// 		number: "01",
// 		title: "Sun Care",
// 		description: "Ingredients for sun protection formulations.",
// 		href: "/products/sun-care",
// 		icon: Sun,
// 		color: "#F5E9C8",
// 	},
// 	{
// 		number: "02",
// 		title: "Hair Care",
// 		description: "Specialised ingredients for hair care.",
// 		href: "/products/hair-care",
// 		icon: Sparkles,
// 		color: "#E6EFE7",
// 	},
// 	{
// 		number: "03",
// 		title: "Hair Dyes",
// 		description: "Intermediates, couplers and colour ingredients.",
// 		href: "/products/hair-dye",
// 		icon: Palette,
// 		color: "#EBCFD0",
// 	},
// ];

// const LOGO_URL =
// 	"https://res.cloudinary.com/spkdq7z2/image/upload/v1791971168/Vrushaba_Logo_Final_-_PNG_1.png";

// export default function Navbar() {
// 	const [scrolled, setScrolled] = useState(false);
// 	const [mobileOpen, setMobileOpen] = useState(false);
// 	const [productsOpen, setProductsOpen] = useState(false);
// 	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

// 	useEffect(() => {
// 		const handleScroll = () => setScrolled(window.scrollY > 40);

// 		handleScroll();
// 		window.addEventListener("scroll", handleScroll, { passive: true });

// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	useEffect(() => {
// 		const handleKeyDown = (event: KeyboardEvent) => {
// 			if (event.key === "Escape") closeMenus();
// 		};

// 		window.addEventListener("keydown", handleKeyDown);
// 		return () => window.removeEventListener("keydown", handleKeyDown);
// 	}, []);

// 	const closeMenus = () => {
// 		setMobileOpen(false);
// 		setProductsOpen(false);
// 		setMobileProductsOpen(false);
// 	};

// 	const desktopLinkClass = `group relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-300 ${
// 		scrolled
// 			? "text-[#303936]/85 hover:text-[#0E3C6E]"
// 			: "text-white/90 hover:text-white"
// 	}`;

// 	const underlineClass = `absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
// 		scrolled ? "bg-[#0E3C6E]" : "bg-white"
// 	}`;

// 	return (
// 		<>
// 			{/* Announcement bar: remains at the top and scrolls away normally */}
// 			<div className="absolute inset-x-0 top-0 z-[60] hidden border-b border-white/20 bg-black/10 lg:block">
// 				<div className="mx-auto flex h-[37px] max-w-[1600px] items-center justify-between gap-4 px-10 text-[10px] font-medium tracking-[0.14em] text-white/90 xl:px-16">
// 					<p>FUNCTIONAL &amp; ACTIVE INGREDIENTS FOR PERSONAL CARE</p>

// 					<Link
// 						href="/contact"
// 						className="group inline-flex items-center gap-2 transition-colors hover:text-white">
// 						CONNECT WITH OUR TEAM
// 						<ArrowUpRight
// 							size={13}
// 							className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// 						/>
// 					</Link>
// 				</div>
// 			</div>

// 			{/* Main navigation */}
// 			<header
// 				className={`fixed inset-x-0 z-50 transition-[top,background-color,box-shadow,border-color] duration-300 ease-out ${
// 					scrolled
// 						? "top-0 border-b border-[#E6E8E0] bg-[#FAF8F2]/95 text-[#303936] shadow-[0_8px_30px_-18px_rgba(14,60,110,0.28)] backdrop-blur-xl"
// 						: "top-0 bg-transparent text-white lg:top-[37px]"
// 				} ${
// 					!scrolled
// 						? "bg-[#FAF8F2] text-[#303936] lg:bg-transparent lg:text-white"
// 						: ""
// 				}`}>
// 				<div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 xl:px-16">
// 					<div
// 						className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
// 							scrolled
// 								? "h-[70px] sm:h-[76px] lg:h-[78px]"
// 								: "h-[76px] sm:h-[84px] lg:h-[92px]"
// 						}`}>
// 						{/* Logo */}
// 						<Link
// 							href="/"
// 							onClick={closeMenus}
// 							aria-label="Vrushaba Chemicals home"
// 							className="group flex shrink-0 items-center gap-2.5">
// 							<span
// 								className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border p-1 transition-all duration-300 sm:h-12 sm:w-12 ${
// 									scrolled
// 										? "border-[#DCE4DB] bg-white"
// 										: "border-white/50 bg-white/95 shadow-sm"
// 								}`}>
// 								{/* eslint-disable-next-line @next/next/no-img-element */}
// 								<img
// 									src={LOGO_URL}
// 									alt="Vrushaba Chemicals"
// 									width={48}
// 									height={48}
// 									className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
// 								/>
// 							</span>

// 							<span className="hidden sm:block">
// 								<span
// 									className={`block font-serif text-lg leading-tight transition-colors duration-300 ${
// 										scrolled ? "text-[#0E3C6E]" : "text-white"
// 									}`}>
// 									Vrushaba
// 								</span>
// 								<span
// 									className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
// 										scrolled ? "text-[#64736C]" : "text-white/80"
// 									}`}>
// 									Chemicals
// 								</span>
// 							</span>
// 						</Link>

// 						{/* Desktop links */}
// 						<nav
// 							aria-label="Main navigation"
// 							className="hidden items-center gap-5 lg:flex xl:gap-7">
// 							{navigation.slice(0, 2).map((item) => (
// 								<Link
// 									key={item.name}
// 									href={item.href}
// 									className={desktopLinkClass}>
// 									{item.name}
// 									<span className={underlineClass} />
// 								</Link>
// 							))}

// 							{/* Products dropdown */}
// 							<div
// 								className="relative"
// 								onMouseEnter={() => setProductsOpen(true)}
// 								onMouseLeave={() => setProductsOpen(false)}>
// 								<button
// 									type="button"
// 									aria-expanded={productsOpen}
// 									aria-controls="products-mega-menu"
// 									onClick={() => setProductsOpen((open) => !open)}
// 									className={`${desktopLinkClass} flex items-center gap-1.5`}>
// 									Products
// 									<ChevronDown
// 										size={14}
// 										className={`transition-transform duration-300 ${
// 											productsOpen ? "rotate-180" : ""
// 										}`}
// 									/>
// 									<span
// 										className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
// 											productsOpen ? "w-full" : "w-0"
// 										} ${scrolled ? "bg-[#0E3C6E]" : "bg-white"}`}
// 									/>
// 								</button>
// 							</div>

// 							{navigation.slice(2).map((item) => (
// 								<Link
// 									key={item.name}
// 									href={item.href}
// 									className={desktopLinkClass}>
// 									{item.name}
// 									<span className={underlineClass} />
// 								</Link>
// 							))}
// 						</nav>

// 						{/* Desktop CTA */}
// 						<Link
// 							href="/contact"
// 							className={`group hidden shrink-0 items-center gap-3 rounded-full px-4 py-2.5 text-[12px] font-medium transition-all duration-300 xl:px-5 lg:flex ${
// 								scrolled
// 									? "bg-[#0E3C6E] text-white shadow-sm hover:bg-[#174F82] hover:shadow-md"
// 									: "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#0E3C6E]"
// 							}`}>
// 							Enquire Now
// 							<span
// 								className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
// 									scrolled ? "bg-white/15" : "bg-white/15"
// 								}`}>
// 								<ArrowUpRight size={14} />
// 							</span>
// 						</Link>

// 						{/* Mobile menu toggle */}
// 						<button
// 							type="button"
// 							onClick={() => {
// 								setMobileOpen((open) => !open);
// 								setMobileProductsOpen(false);
// 								setProductsOpen(false);
// 							}}
// 							aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
// 							aria-expanded={mobileOpen}
// 							aria-controls="mobile-navigation"
// 							className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE4DB] bg-white/80 text-[#0E3C6E] transition-colors hover:bg-[#E6EFE7] lg:hidden">
// 							{mobileOpen ? <X size={21} /> : <Menu size={21} />}
// 						</button>
// 					</div>
// 				</div>

// 				{/* Desktop mega menu */}
// 				<div
// 					id="products-mega-menu"
// 					aria-label="Products menu"
// 					aria-hidden={!productsOpen}
// 					onMouseEnter={() => setProductsOpen(true)}
// 					onMouseLeave={() => setProductsOpen(false)}
// 					className={`absolute inset-x-0 top-full hidden border-y border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_50px_-28px_rgba(14,60,110,0.25)] transition-all duration-300 lg:block ${
// 						productsOpen
// 							? "visible translate-y-0 opacity-100"
// 							: "invisible pointer-events-none -translate-y-2 opacity-0"
// 					}`}>
// 					<div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-7 px-10 py-9 xl:gap-8 xl:px-16 xl:py-11">
// 						<div className="col-span-3 flex flex-col justify-between border-r border-[#E3E7DF] pr-7 xl:pr-8">
// 							<div>
// 								<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6B8D79]">
// 									Our portfolio
// 								</span>

// 								<h2 className="mt-4 font-serif text-3xl leading-tight text-[#0E3C6E] xl:text-4xl">
// 									Chemistry for
// 									<br />
// 									better care.
// 								</h2>

// 								<p className="mt-4 max-w-xs text-sm leading-6 text-[#303936]/70">
// 									Explore specialised ingredients for the evolving personal care
// 									industry.
// 								</p>
// 							</div>

// 							<Link
// 								href="/products"
// 								onClick={closeMenus}
// 								tabIndex={productsOpen ? 0 : -1}
// 								className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0E3C6E] transition-all hover:gap-3">
// 								All products <ArrowRight size={15} />
// 							</Link>
// 						</div>

// 						<div className="col-span-6 grid grid-cols-3 gap-2 xl:gap-3">
// 							{products.map((product) => {
// 								const Icon = product.icon;

// 								return (
// 									<Link
// 										key={product.number}
// 										href={product.href}
// 										onClick={closeMenus}
// 										tabIndex={productsOpen ? 0 : -1}
// 										className="group rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#E3E7DF] hover:bg-white hover:shadow-lg xl:p-4">
// 										<span
// 											style={{ backgroundColor: product.color }}
// 											className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0E3C6E] transition-transform group-hover:scale-105 xl:h-12 xl:w-12">
// 											<Icon size={21} strokeWidth={1.5} />
// 										</span>

// 										<span className="mt-5 block text-[10px] tracking-[0.18em] text-[#84918A]">
// 											{product.number}
// 										</span>

// 										<h3 className="mt-1 font-serif text-base text-[#0E3C6E] xl:text-lg">
// 											{product.title}
// 										</h3>

// 										<p className="mt-2 text-xs leading-5 text-[#303936]/70">
// 											{product.description}
// 										</p>

// 										<ArrowDownRight
// 											size={17}
// 											className="mt-4 text-[#6B8D79] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
// 										/>
// 									</Link>
// 								);
// 							})}
// 						</div>

// 						<div className="col-span-3 flex flex-col justify-between rounded-2xl bg-[#E6EFE7] p-5 xl:p-6">
// 							<div>
// 								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#315B4C]">
// 									<FlaskConical size={19} />
// 								</span>

// 								<h3 className="mt-5 font-serif text-xl leading-snug text-[#315B4C]">
// 									The right ingredient starts here.
// 								</h3>

// 								<p className="mt-3 text-xs leading-5 text-[#315B4C]/80">
// 									Looking for a particular chemical, CAS number or product
// 									specification?
// 								</p>
// 							</div>

// 							<Link
// 								href="/contact"
// 								onClick={closeMenus}
// 								tabIndex={productsOpen ? 0 : -1}
// 								className="mt-6 flex items-center justify-between gap-2 border-b border-[#A8BFA8] pb-3 text-xs font-semibold text-[#315B4C] transition-colors hover:text-[#0E3C6E]">
// 								Discuss your requirements <ArrowUpRight size={16} />
// 							</Link>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Mobile menu */}
// 				<div
// 					id="mobile-navigation"
// 					aria-hidden={!mobileOpen}
// 					className={`absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_40px_-25px_rgba(14,60,110,0.25)] transition-all duration-300 sm:max-h-[calc(100dvh-84px)] lg:hidden ${
// 						mobileOpen
// 							? "visible translate-y-0 opacity-100"
// 							: "invisible pointer-events-none -translate-y-2 opacity-0"
// 					}`}>
// 					<nav
// 						aria-label="Mobile navigation"
// 						className="mx-auto max-w-2xl px-5 pb-7 pt-4 sm:px-8">
// 						{navigation.slice(0, 2).map((item, index) => (
// 							<Link
// 								key={item.name}
// 								href={item.href}
// 								onClick={closeMenus}
// 								tabIndex={mobileOpen ? 0 : -1}
// 								className="flex items-center justify-between border-b border-[#E6E8E0] py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
// 								<span>
// 									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
// 										0{index + 1}
// 									</span>
// 									{item.name}
// 								</span>
// 								<ArrowUpRight size={16} className="text-[#6B8D79]" />
// 							</Link>
// 						))}

// 						{/* Mobile product accordion */}
// 						<div className="border-b border-[#E6E8E0]">
// 							<button
// 								type="button"
// 								onClick={() => setMobileProductsOpen((open) => !open)}
// 								aria-expanded={mobileProductsOpen}
// 								aria-controls="mobile-products-list"
// 								tabIndex={mobileOpen ? 0 : -1}
// 								className="flex w-full items-center justify-between py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
// 								<span>
// 									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
// 										03
// 									</span>
// 									Products
// 								</span>

// 								<ChevronDown
// 									size={17}
// 									className={`transition-transform duration-300 ${
// 										mobileProductsOpen ? "rotate-180" : ""
// 									}`}
// 								/>
// 							</button>

// 							<div
// 								id="mobile-products-list"
// 								aria-hidden={!mobileProductsOpen}
// 								className={`grid transition-all duration-300 ${
// 									mobileProductsOpen
// 										? "grid-rows-[1fr] opacity-100"
// 										: "grid-rows-[0fr] opacity-0"
// 								}`}>
// 								<div className="overflow-hidden">
// 									<div className="space-y-2 pb-4">
// 										<Link
// 											href="/products"
// 											onClick={closeMenus}
// 											tabIndex={mobileOpen && mobileProductsOpen ? 0 : -1}
// 											className="block rounded-xl bg-[#DCEAF5] px-4 py-3 text-sm font-medium text-[#0E3C6E] hover:bg-[#CFDFEF]">
// 											View all products
// 										</Link>

// 										{products.map((product) => {
// 											const Icon = product.icon;

// 											return (
// 												<Link
// 													key={product.number}
// 													href={product.href}
// 													onClick={closeMenus}
// 													tabIndex={mobileOpen && mobileProductsOpen ? 0 : -1}
// 													className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white">
// 													<span
// 														style={{ backgroundColor: product.color }}
// 														className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#0E3C6E]">
// 														<Icon size={18} strokeWidth={1.5} />
// 													</span>

// 													<span className="min-w-0 flex-1">
// 														<span className="block text-sm font-medium text-[#0E3C6E]">
// 															{product.title}
// 														</span>
// 														<span className="mt-1 block text-xs leading-5 text-[#303936]/65">
// 															{product.description}
// 														</span>
// 													</span>

// 													<ArrowUpRight
// 														size={15}
// 														className="shrink-0 text-[#6B8D79]"
// 													/>
// 												</Link>
// 											);
// 										})}
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						{navigation.slice(2).map((item, index) => (
// 							<Link
// 								key={item.name}
// 								href={item.href}
// 								onClick={closeMenus}
// 								tabIndex={mobileOpen ? 0 : -1}
// 								className="flex items-center justify-between gap-3 border-b border-[#E6E8E0] py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
// 								<span>
// 									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
// 										0{index + 4}
// 									</span>
// 									{item.name}
// 								</span>
// 								<ArrowUpRight size={16} className="shrink-0 text-[#6B8D79]" />
// 							</Link>
// 						))}

// 						{/* Mobile enquiry panel */}
// 						<div className="mt-6 rounded-2xl bg-[#E6EFE7] p-5">
// 							<div className="flex items-center gap-2 text-[#315B4C]">
// 								<Microscope size={18} />
// 								<span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
// 									Let&apos;s work together
// 								</span>
// 							</div>

// 							<p className="mt-3 font-serif text-xl text-[#0E3C6E]">
// 								Have an ingredient in mind?
// 							</p>

// 							<p className="mt-2 text-xs leading-5 text-[#303936]/75">
// 								Tell us what you are looking for and start a conversation with
// 								our team.
// 							</p>

// 							<Link
// 								href="/contact"
// 								onClick={closeMenus}
// 								tabIndex={mobileOpen ? 0 : -1}
// 								className="mt-5 flex items-center justify-between rounded-full bg-[#0E3C6E] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#174F82]">
// 								Send an enquiry <ArrowRight size={17} />
// 							</Link>
// 						</div>

// 						<div className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.12em] text-[#84918A]">
// 							<ShieldCheck size={13} />
// 							PERSONAL CARE INGREDIENTS
// 						</div>
// 					</nav>
// 				</div>
// 			</header>
// 		</>
// 	);
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	ChevronDown,
	FlaskConical,
	Menu,
	Microscope,
	Palette,
	ShieldCheck,
	Sparkles,
	Sun,
	X,
} from "lucide-react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about-us" },
	{ name: "Research & Development", href: "/research-development" },
	{ name: "Applications", href: "/applications" },
];

const products = [
	{
		number: "01",
		title: "Sun Care",
		description: "Ingredients for sun protection formulations.",
		href: "/products/sun-care",
		icon: Sun,
		color: "#F5E9C8",
	},
	{
		number: "02",
		title: "Hair Care",
		description: "Specialised ingredients for hair care.",
		href: "/products/hair-care",
		icon: Sparkles,
		color: "#E6EFE7",
	},
	{
		number: "03",
		title: "Hair Dyes",
		description: "Intermediates, couplers and colour ingredients.",
		href: "/products/hair-dye",
		icon: Palette,
		color: "#EBCFD0",
	},
];

const LOGO_URL =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1791971168/Vrushaba_Logo_Final_-_PNG_1.png";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeMenus();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const closeMenus = () => {
		setMobileOpen(false);
		setProductsOpen(false);
		setMobileProductsOpen(false);
	};

	const desktopLinkClass = `group relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-300 ${
		scrolled
			? "text-[#303936]/85 hover:text-[#0E3C6E]"
			: "text-white/90 hover:text-white"
	}`;

	const underlineClass = `absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
		scrolled ? "bg-[#0E3C6E]" : "bg-white"
	}`;

	return (
		<>
			{/* Announcement bar: remains at the top and scrolls away normally */}
			<div className="absolute inset-x-0 top-0 z-[60] hidden border-b border-white/30 bg-black/20 lg:block">
				<div className="mx-auto flex h-[37px] max-w-[1600px] items-center justify-between gap-4 px-10 text-[10px] font-medium tracking-[0.14em] text-white/90 xl:px-16">
					<p>FUNCTIONAL &amp; ACTIVE INGREDIENTS FOR PERSONAL CARE</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 transition-colors hover:text-white">
						CONNECT WITH OUR TEAM
						<ArrowUpRight
							size={13}
							className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</Link>
				</div>
			</div>

			{/* Main navigation */}
			<header
				className={`fixed inset-x-0 z-50 transition-[top,background-color,box-shadow,border-color] duration-300 ease-out ${
					scrolled
						? "top-0 border-b border-[#E6E8E0] bg-[#FAF8F2]/95 text-[#303936] shadow-[0_8px_30px_-18px_rgba(14,60,110,0.28)] backdrop-blur-xl"
						: "top-0 bg-transparent text-white lg:top-[37px]"
				} ${
					!scrolled
						? "bg-[#FAF8F2] text-[#303936] lg:bg-transparent lg:text-white"
						: ""
				}`}>
				<div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 xl:px-16">
					<div
						className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
							scrolled
								? "h-[70px] sm:h-[76px] lg:h-[78px]"
								: "h-[76px] sm:h-[84px] lg:h-[92px]"
						}`}>
						{/* Logo */}
						<Link
							href="/"
							onClick={closeMenus}
							aria-label="Vrushaba Chemicals home"
							className="group flex shrink-0 items-center gap-2.5">
							<span
								className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border p-1 transition-all duration-300 sm:h-12 sm:w-12 ${
									scrolled
										? "border-[#DCE4DB] bg-white"
										: "border-white/50 bg-white/95 shadow-sm"
								}`}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={LOGO_URL}
									alt="Vrushaba Chemicals"
									width={48}
									height={48}
									className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
								/>
							</span>

							<span className="hidden sm:block">
								<span
									className={`block font-serif text-lg leading-tight transition-colors duration-300 ${
										scrolled ? "text-[#0E3C6E]" : "text-white"
									}`}>
									Vrushaba
								</span>
								<span
									className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
										scrolled ? "text-[#64736C]" : "text-white/80"
									}`}>
									Chemicals
								</span>
							</span>
						</Link>

						{/* Desktop links */}
						<nav
							aria-label="Main navigation"
							className="hidden items-center gap-5 lg:flex xl:gap-7">
							{navigation.slice(0, 2).map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={desktopLinkClass}>
									{item.name}
									<span className={underlineClass} />
								</Link>
							))}

							{/* Products dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setProductsOpen(true)}
								onMouseLeave={() => setProductsOpen(false)}>
								<button
									type="button"
									aria-expanded={productsOpen}
									aria-controls="products-mega-menu"
									onClick={() => setProductsOpen((open) => !open)}
									className={`${desktopLinkClass} flex items-center gap-1.5`}>
									Products
									<ChevronDown
										size={14}
										className={`transition-transform duration-300 ${
											productsOpen ? "rotate-180" : ""
										}`}
									/>
									<span
										className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
											productsOpen ? "w-full" : "w-0"
										} ${scrolled ? "bg-[#0E3C6E]" : "bg-white"}`}
									/>
								</button>
							</div>

							{navigation.slice(2).map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={desktopLinkClass}>
									{item.name}
									<span className={underlineClass} />
								</Link>
							))}
						</nav>

						{/* Desktop CTA */}
						<Link
							href="/contact"
							className={`group hidden shrink-0 items-center gap-3 rounded-full px-4 py-2.5 text-[12px] font-medium transition-all duration-300 xl:px-5 lg:flex ${
								scrolled
									? "bg-[#0E3C6E] text-white shadow-sm hover:bg-[#174F82] hover:shadow-md"
									: "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#0E3C6E]"
							}`}>
							Enquire Now
							<span
								className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
									scrolled ? "bg-white/15" : "bg-white/15"
								}`}>
								<ArrowUpRight size={14} />
							</span>
						</Link>

						{/* Mobile menu toggle */}
						<button
							type="button"
							onClick={() => {
								setMobileOpen((open) => !open);
								setMobileProductsOpen(false);
								setProductsOpen(false);
							}}
							aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
							aria-expanded={mobileOpen}
							aria-controls="mobile-navigation"
							className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE4DB] bg-white/80 text-[#0E3C6E] transition-colors hover:bg-[#E6EFE7] lg:hidden">
							{mobileOpen ? <X size={21} /> : <Menu size={21} />}
						</button>
					</div>
				</div>

				{/* Desktop mega menu */}
				<div
					id="products-mega-menu"
					aria-label="Products menu"
					aria-hidden={!productsOpen}
					onMouseEnter={() => setProductsOpen(true)}
					onMouseLeave={() => setProductsOpen(false)}
					className={`absolute inset-x-0 top-full hidden border-y border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_50px_-28px_rgba(14,60,110,0.25)] transition-all duration-300 lg:block ${
						productsOpen
							? "visible translate-y-0 opacity-100"
							: "invisible pointer-events-none -translate-y-2 opacity-0"
					}`}>
					<div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-7 px-10 py-9 xl:gap-8 xl:px-16 xl:py-11">
						<div className="col-span-3 flex flex-col justify-between border-r border-[#E3E7DF] pr-7 xl:pr-8">
							<div>
								<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6B8D79]">
									Our portfolio
								</span>

								<h2 className="mt-4 font-serif text-3xl leading-tight text-[#0E3C6E] xl:text-4xl">
									Chemistry for
									<br />
									better care.
								</h2>

								<p className="mt-4 max-w-xs text-sm leading-6 text-[#303936]/70">
									Explore specialised ingredients for the evolving personal care
									industry.
								</p>
							</div>

							<Link
								href="/products"
								onClick={closeMenus}
								tabIndex={productsOpen ? 0 : -1}
								className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0E3C6E] transition-all hover:gap-3">
								All products <ArrowRight size={15} />
							</Link>
						</div>

						<div className="col-span-6 grid grid-cols-3 gap-2 xl:gap-3">
							{products.map((product) => {
								const Icon = product.icon;

								return (
									<Link
										key={product.number}
										href={product.href}
										onClick={closeMenus}
										tabIndex={productsOpen ? 0 : -1}
										className="group rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#E3E7DF] hover:bg-white hover:shadow-lg xl:p-4">
										<span
											style={{ backgroundColor: product.color }}
											className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0E3C6E] transition-transform group-hover:scale-105 xl:h-12 xl:w-12">
											<Icon size={21} strokeWidth={1.5} />
										</span>

										<span className="mt-5 block text-[10px] tracking-[0.18em] text-[#84918A]">
											{product.number}
										</span>

										<h3 className="mt-1 font-serif text-base text-[#0E3C6E] xl:text-lg">
											{product.title}
										</h3>

										<p className="mt-2 text-xs leading-5 text-[#303936]/70">
											{product.description}
										</p>

										<ArrowDownRight
											size={17}
											className="mt-4 text-[#6B8D79] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
										/>
									</Link>
								);
							})}
						</div>

						<div className="col-span-3 flex flex-col justify-between rounded-2xl bg-[#E6EFE7] p-5 xl:p-6">
							<div>
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#315B4C]">
									<FlaskConical size={19} />
								</span>

								<h3 className="mt-5 font-serif text-xl leading-snug text-[#315B4C]">
									The right ingredient starts here.
								</h3>

								<p className="mt-3 text-xs leading-5 text-[#315B4C]/80">
									Looking for a particular chemical, CAS number or product
									specification?
								</p>
							</div>

							<Link
								href="/contact"
								onClick={closeMenus}
								tabIndex={productsOpen ? 0 : -1}
								className="mt-6 flex items-center justify-between gap-2 border-b border-[#A8BFA8] pb-3 text-xs font-semibold text-[#315B4C] transition-colors hover:text-[#0E3C6E]">
								Discuss your requirements <ArrowUpRight size={16} />
							</Link>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					id="mobile-navigation"
					aria-hidden={!mobileOpen}
					className={`absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_40px_-25px_rgba(14,60,110,0.25)] transition-all duration-300 sm:max-h-[calc(100dvh-84px)] lg:hidden ${
						mobileOpen
							? "visible translate-y-0 opacity-100"
							: "invisible pointer-events-none -translate-y-2 opacity-0"
					}`}>
					<nav
						aria-label="Mobile navigation"
						className="mx-auto max-w-2xl px-5 pb-7 pt-4 sm:px-8">
						{navigation.slice(0, 2).map((item, index) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={closeMenus}
								tabIndex={mobileOpen ? 0 : -1}
								className="flex items-center justify-between border-b border-[#E6E8E0] py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
								<span>
									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
										0{index + 1}
									</span>
									{item.name}
								</span>
								<ArrowUpRight size={16} className="text-[#6B8D79]" />
							</Link>
						))}

						{/* Mobile product accordion */}
						<div className="border-b border-[#E6E8E0]">
							<button
								type="button"
								onClick={() => setMobileProductsOpen((open) => !open)}
								aria-expanded={mobileProductsOpen}
								aria-controls="mobile-products-list"
								tabIndex={mobileOpen ? 0 : -1}
								className="flex w-full items-center justify-between py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
								<span>
									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
										03
									</span>
									Products
								</span>

								<ChevronDown
									size={17}
									className={`transition-transform duration-300 ${
										mobileProductsOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							<div
								id="mobile-products-list"
								aria-hidden={!mobileProductsOpen}
								className={`grid transition-all duration-300 ${
									mobileProductsOpen
										? "grid-rows-[1fr] opacity-100"
										: "grid-rows-[0fr] opacity-0"
								}`}>
								<div className="overflow-hidden">
									<div className="space-y-2 pb-4">
										<Link
											href="/products"
											onClick={closeMenus}
											tabIndex={mobileOpen && mobileProductsOpen ? 0 : -1}
											className="block rounded-xl bg-[#DCEAF5] px-4 py-3 text-sm font-medium text-[#0E3C6E] hover:bg-[#CFDFEF]">
											View all products
										</Link>

										{products.map((product) => {
											const Icon = product.icon;

											return (
												<Link
													key={product.number}
													href={product.href}
													onClick={closeMenus}
													tabIndex={mobileOpen && mobileProductsOpen ? 0 : -1}
													className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white">
													<span
														style={{ backgroundColor: product.color }}
														className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#0E3C6E]">
														<Icon size={18} strokeWidth={1.5} />
													</span>

													<span className="min-w-0 flex-1">
														<span className="block text-sm font-medium text-[#0E3C6E]">
															{product.title}
														</span>
														<span className="mt-1 block text-xs leading-5 text-[#303936]/65">
															{product.description}
														</span>
													</span>

													<ArrowUpRight
														size={15}
														className="shrink-0 text-[#6B8D79]"
													/>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</div>

						{navigation.slice(2).map((item, index) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={closeMenus}
								tabIndex={mobileOpen ? 0 : -1}
								className="flex items-center justify-between gap-3 border-b border-[#E6E8E0] py-4 text-sm font-medium transition-colors hover:text-[#0E3C6E]">
								<span>
									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
										0{index + 4}
									</span>
									{item.name}
								</span>
								<ArrowUpRight size={16} className="shrink-0 text-[#6B8D79]" />
							</Link>
						))}

						{/* Mobile enquiry panel */}
						<div className="mt-6 rounded-2xl bg-[#E6EFE7] p-5">
							<div className="flex items-center gap-2 text-[#315B4C]">
								<Microscope size={18} />
								<span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
									Let&apos;s work together
								</span>
							</div>

							<p className="mt-3 font-serif text-xl text-[#0E3C6E]">
								Have an ingredient in mind?
							</p>

							<p className="mt-2 text-xs leading-5 text-[#303936]/75">
								Tell us what you are looking for and start a conversation with
								our team.
							</p>

							<Link
								href="/contact"
								onClick={closeMenus}
								tabIndex={mobileOpen ? 0 : -1}
								className="mt-5 flex items-center justify-between rounded-full bg-[#0E3C6E] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#174F82]">
								Send an enquiry <ArrowRight size={17} />
							</Link>
						</div>

						<div className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.12em] text-[#84918A]">
							<ShieldCheck size={13} />
							PERSONAL CARE INGREDIENTS
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}
