"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	ChevronDown,
	FlaskConical,
	Menu,
	Microscope,
	ShieldCheck,
	Sparkles,
	Sun,
	X,
} from "lucide-react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about-us" },
	// { name: "Research & Development", href: "/research-development" },
	// { name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
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
];

const LOGO_URL =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1791971168/Vrushaba_Logo_Final_-_PNG_1.png";

export default function Navbar() {
	const headerRef = useRef<HTMLElement>(null);

	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

	const closeMenus = useCallback(() => {
		setMobileOpen(false);
		setProductsOpen(false);
		setMobileProductsOpen(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);

		handleScroll();

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (event: PointerEvent) => {
			const target = event.target;

			if (
				target instanceof Node &&
				headerRef.current &&
				!headerRef.current.contains(target)
			) {
				closeMenus();
			}
		};

		document.addEventListener("pointerdown", handleOutsideClick);

		return () => {
			document.removeEventListener("pointerdown", handleOutsideClick);
		};
	}, [closeMenus]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeMenus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [closeMenus]);

	const desktopLinkClass =
		"group relative whitespace-nowrap py-3 text-[13px] font-medium text-[#303936]/90 transition-colors duration-300 hover:text-[#0365D0]";

	const underlineClass =
		"absolute bottom-0 left-0 h-px w-0 bg-[#0E3C6E] transition-all duration-300 group-hover:w-full";

	return (
		<>
			{/* Main Navbar */}
			<header
				ref={headerRef}
				className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
					scrolled
						? "border-[#E6E8E0] bg-[#FAF8F2]/95 text-[#303936] shadow-[0_8px_30px_-18px_rgba(14,60,110,0.18)] backdrop-blur-xl"
						: "border-[#E6E8E0]/70 bg-[#FAF8F2]/95 text-[#303936] backdrop-blur-xl"
				}`}>
				<div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 xl:px-16">
					<div
						className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
							scrolled
								? "h-[68px] sm:h-[74px] lg:h-[78px]"
								: "h-[72px] sm:h-[80px] lg:h-[88px]"
						}`}>
						{/* Logo - No Box, Border, or Background */}
						<Link
							href="/"
							onClick={closeMenus}
							aria-label="Vrushaba Chemicals home"
							className="group flex min-w-0 shrink-0 items-center">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={LOGO_URL}
								alt="Vrushaba Chemicals"
								width={220}
								height={72}
								className="h-12 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[54px] sm:max-w-[200px] lg:h-[60px] lg:max-w-[220px]"
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav
							aria-label="Main navigation"
							className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-7">
							{navigation.slice(0, 2).map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={desktopLinkClass}>
									{item.name}
									<span className={underlineClass} />
								</Link>
							))}

							{/* Products Dropdown Button */}
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
									className={`absolute bottom-0 left-0 h-px bg-[#0E3C6E] transition-all duration-300 ${
										productsOpen ? "w-full" : "w-0"
									}`}
								/>
							</button>

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

						{/* Desktop Enquiry Button */}
						<Link
							href="/contact"
							className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#0E3C6E] px-3.5 py-2.5 text-[12px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#0365D0] lg:flex xl:gap-3 xl:px-5">
							Enquire Now
							<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
								<ArrowUpRight size={14} />
							</span>
						</Link>

						{/* Mobile Menu Button */}
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
							className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE4DB] bg-white text-[#0E3C6E] transition-colors hover:bg-[#E6EFE7] lg:hidden">
							{mobileOpen ? <X size={21} /> : <Menu size={21} />}
						</button>
					</div>
				</div>

				{/* Desktop Products Dropdown */}
				<div
					id="products-mega-menu"
					aria-hidden={!productsOpen}
					className={`absolute inset-x-0 top-full hidden border-y border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_50px_-28px_rgba(14,60,110,0.25)] transition-all duration-300 lg:block ${
						productsOpen
							? "visible translate-y-0 opacity-100"
							: "invisible pointer-events-none -translate-y-2 opacity-0"
					}`}>
					<div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-7 px-10 py-9 xl:gap-8 xl:px-16 xl:py-11">
						{/* Introduction */}
						<div className="col-span-4 border-r border-[#E3E7DF] pr-7 xl:pr-8">
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

						{/* Product Categories */}
						<div className="col-span-5 space-y-3">
							{products.map((product) => {
								const Icon = product.icon;

								return (
									<Link
										key={product.href}
										href={product.href}
										onClick={closeMenus}
										className="group flex items-center gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-[#DCE4DB] hover:bg-white">
										<span
											style={{
												backgroundColor: product.color,
											}}
											className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#0E3C6E]">
											<Icon size={22} strokeWidth={1.5} />
										</span>

										<span className="min-w-0 flex-1">
											<span className="block text-[9px] tracking-[0.18em] text-[#84918A]">
												{product.number}
											</span>

											<span className="mt-1 block font-serif text-lg text-[#0E3C6E] transition-colors group-hover:text-[#0365D0]">
												{product.title}
											</span>

											<span className="mt-1 block text-xs leading-5 text-[#303936]/70">
												{product.description}
											</span>
										</span>

										<ArrowUpRight
											size={18}
											className="shrink-0 text-[#6B8D79] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0365D0]"
										/>
									</Link>
								);
							})}
						</div>

						{/* Enquiry Panel */}
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
								className="mt-6 flex items-center justify-between gap-2 border-b border-[#A8BFA8] pb-3 text-xs font-semibold text-[#315B4C] hover:text-[#0E3C6E]">
								Discuss your requirements
								<ArrowUpRight size={16} />
							</Link>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					id="mobile-navigation"
					aria-hidden={!mobileOpen}
					className={`absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-[#E5E6DD] bg-[#FAF8F2] text-[#303936] shadow-[0_24px_40px_-25px_rgba(14,60,110,0.25)] transition-all duration-300 sm:max-h-[calc(100dvh-74px)] lg:hidden ${
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
								className="flex items-center justify-between border-b border-[#E6E8E0] py-4 text-sm font-medium text-[#303936] hover:text-[#0E3C6E]">
								<span>
									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
										0{index + 1}
									</span>

									{item.name}
								</span>

								<ArrowUpRight size={16} className="text-[#6B8D79]" />
							</Link>
						))}

						{/* Mobile Products Accordion */}
						<div className="border-b border-[#E6E8E0]">
							<button
								type="button"
								onClick={() => setMobileProductsOpen((open) => !open)}
								aria-expanded={mobileProductsOpen}
								aria-controls="mobile-products-list"
								tabIndex={mobileOpen ? 0 : -1}
								className="flex w-full items-center justify-between py-4 text-sm font-medium text-[#303936] hover:text-[#0E3C6E]">
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
										{products.map((product) => {
											const Icon = product.icon;

											return (
												<Link
													key={product.href}
													href={product.href}
													onClick={closeMenus}
													tabIndex={mobileOpen && mobileProductsOpen ? 0 : -1}
													className="group flex items-center gap-3 rounded-xl border border-[#E6E8E0] p-3 transition-colors hover:bg-white">
													<span
														style={{
															backgroundColor: product.color,
														}}
														className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#0E3C6E]">
														<Icon size={18} strokeWidth={1.5} />
													</span>

													<span className="min-w-0 flex-1">
														<span className="block text-sm font-medium text-[#0E3C6E] group-hover:text-[#0365D0]">
															{product.title}
														</span>

														<span className="mt-1 block text-xs leading-5 text-[#303936]/65">
															{product.description}
														</span>
													</span>

													<ArrowUpRight
														size={16}
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
								className="flex items-center justify-between gap-3 border-b border-[#E6E8E0] py-4 text-sm font-medium text-[#303936] hover:text-[#0E3C6E]">
								<span>
									<span className="mr-3 text-[10px] tracking-widest text-[#8A9A8D]">
										0{index + 4}
									</span>

									{item.name}
								</span>

								<ArrowUpRight size={16} className="shrink-0 text-[#6B8D79]" />
							</Link>
						))}

						{/* Mobile Enquiry Panel */}
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
								Send an enquiry
								<ArrowRight size={17} />
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
