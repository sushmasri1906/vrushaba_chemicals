"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	CheckCircle2,
	ShieldCheck,
} from "lucide-react";

type Product = {
	name: string;
	cas: string;
	code: string;
	slug: string;
	description: string;
};

type Category = "uva" | "uvb" | "other";

/* -------------------------------------------------------------------------- */
/*                                UVA PRODUCTS                                */
/* -------------------------------------------------------------------------- */

const uvaProducts: Product[] = [
	{
		name: "VRUSHCARE Avobenzone",
		cas: "70356-09-1",
		code: "AVS",
		slug: "vrushcare-avobenzone",
		description:
			"UVA filter ingredient for sunscreen and sun care formulations.",
	},
	{
		name: "VRUSHCARE DHHB",
		cas: "302776-68-7",
		code: "DHHB",
		slug: "vrushcare-dhhb",
		description: "UVA filter ingredient for eligible sunscreen applications.",
	},
	{
		name: "VRUSHCARE BEMT",
		cas: "187393-00-6",
		code: "BEMT",
		slug: "vrushcare-bemt",
		description:
			"Broad-spectrum UV filter ingredient for sun care formulations.",
	},
	{
		name: "VRUSHCARE Benzophenone-3",
		cas: "131-57-7",
		code: "BP3",
		slug: "vrushcare-benzophenone-3",
		description:
			"UV filter ingredient used in eligible sunscreen and sun care formulations.",
	},
];

/* -------------------------------------------------------------------------- */
/*                                UVB PRODUCTS                                */
/* -------------------------------------------------------------------------- */

const uvbProducts: Product[] = [
	{
		name: "VRUSHCARE Ethylhexyl Triazone",
		cas: "88122-99-0",
		code: "EHT",
		slug: "vrushcare-ethyl-hexyl-triazone",
		description: "UVB filter ingredient for sunscreen formulations.",
	},
	{
		name: "VRUSHCARE Octyl Methoxycinnamate",
		cas: "5466-77-3",
		code: "OMC",
		slug: "vrushcare-octyl-methoxycinnamate",
		description:
			"UVB filter ingredient used in eligible sun care formulations.",
	},
	{
		name: "VRUSHCARE Etone Amine",
		cas: "26218-04-2",
		code: "EHAB",
		slug: "vrushcare-etone-amine",
		description: "UVB filter ingredient for sunscreen formulations.",
	},
	{
		name: "VRUSHCARE Octocrylene",
		cas: "6197-30-4",
		code: "OC",
		slug: "vrushcare-octocrylene",
		description: "UV filter ingredient used in sunscreen formulations.",
	},
	{
		name: "VRUSHCARE Octyl Salicylate",
		cas: "118-60-5",
		code: "OS",
		slug: "vrushcare-octyl-salicylate",
		description: "UVB filter ingredient for sun care applications.",
	},
	{
		name: "VRUSHCARE PABA",
		cas: "150-13-0",
		code: "PABA",
		slug: "vrushcare-paba",
		description:
			"UV-filter ingredient. Confirm permitted use and regulatory requirements in the target market.",
	},
];

/* -------------------------------------------------------------------------- */
/*                           OTHER PRODUCTS / ACTIVES                         */
/* -------------------------------------------------------------------------- */

const productsx: Product[] = [
	{
		name: "VRUSHCARE Chlorphenesin",
		cas: "104-29-0",
		code: "CPN",
		slug: "vrushcare-chlorphenesin",
		description:
			"Preservative and antimicrobial ingredient for cosmetic formulations.",
	},
	{
		name: "VRUSHCARE 5-Nitrobenzimidazole",
		cas: "94-52-0",
		code: "NBI",
		slug: "vrushcare-5-nitrobenzimidazole",
		description:
			"Chemical compound for applicable industrial and laboratory applications.",
	},
	{
		name: "VRUSHCARE 4-n-Butylresorcinol",
		cas: "18979-61-8",
		code: "4NBR",
		slug: "vrushcare-4-n-butyl-resorcinol",
		description:
			"Skin-tone and pigmentation-care active ingredient for applicable cosmetic formulations.",
	},
	{
		name: "VRUSHCARE 3,5-Di-tert-butyl-4-hydroxybenzyl Alcohol",
		cas: "88-26-6",
		code: "DTBHBA",
		slug: "vrushcare-3-5-di-tert-butyl-4-hydroxy-benzyl-alcohol",
		description:
			"Antioxidant and chemical intermediate for applicable industrial formulations.",
	},
	{
		name: "VRUSHCARE 6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine 3-oxide",
		cas: "55921-65-8",
		code: "PDPO",
		slug: "vrushcare-6-1-pyrrolidinyl-2-4-pyrimidine-diamine-3-oxide",
		description:
			"Active ingredient for hair-care formulations targeting hair growth and hair loss.",
	},
];

/* -------------------------------------------------------------------------- */
/*                              BACKGROUND IMAGES                             */
/* -------------------------------------------------------------------------- */

const backgroundImages: Record<Category, string> = {
	uva: "https://res.cloudinary.com/spkdq7z2/image/upload/v1792673928/6623babd-f1ff-422a-bad6-5dff083787cc.png",
	uvb: "https://res.cloudinary.com/spkdq7z2/image/upload/v1791972320/1dfa0700-f59a-4b00-a938-051bca8c1080.png",
	other:
		"https://res.cloudinary.com/spkdq7z2/image/upload/v1792673928/6623babd-f1ff-422a-bad6-5dff083787cc.png",
};

/* -------------------------------------------------------------------------- */
/*                               CATEGORY DATA                                */
/* -------------------------------------------------------------------------- */

const categoryData: Record<
	Category,
	{
		label: string;
		heading: string;
		description: string;
	}
> = {
	uva: {
		label: "UVA Protection",
		heading: "UVA Filters",
		description:
			"Explore ingredients used in UVA protection and sun care formulations.",
	},
	uvb: {
		label: "UVB Protection",
		heading: "UVB Filters",
		description:
			"Explore ingredients used in UVB protection and sun care formulations.",
	},
	other: {
		label: "Specialty Ingredients",
		heading: "Other Ingredients",
		description:
			"Explore specialty ingredients, cosmetic actives, preservatives and chemical intermediates.",
	},
};

/* -------------------------------------------------------------------------- */
/*                                SUN CARE PAGE                               */
/* -------------------------------------------------------------------------- */

export default function SunCarePage() {
	const [activeTab, setActiveTab] = useState<Category>("uva");

	const carouselRef = useRef<HTMLDivElement>(null);

	const products: Product[] =
		activeTab === "uva"
			? uvaProducts
			: activeTab === "uvb"
				? uvbProducts
				: productsx;

	const activeCategory = categoryData[activeTab];

	function changeTab(tab: Category) {
		setActiveTab(tab);

		if (carouselRef.current) {
			carouselRef.current.scrollTo({
				left: 0,
				behavior: "smooth",
			});
		}
	}

	function moveCarousel(direction: "left" | "right") {
		if (!carouselRef.current) return;

		const container = carouselRef.current;

		const firstCard = container.querySelector<HTMLElement>(
			"[data-product-card]",
		);

		const cardWidth = firstCard?.offsetWidth ?? 280;
		const gap = 20;

		container.scrollBy({
			left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
			behavior: "smooth",
		});
	}

	return (
		<main className="overflow-hidden bg-[#FAF8F2] text-[#303936]">
			{/* HERO SECTION */}

			<section
				className="relative isolate bg-cover bg-center"
				style={{
					backgroundImage: `url("${backgroundImages.uva}")`,
				}}>
				<div className="absolute inset-0 -z-10 bg-[#FAF8F2]/85" />

				<div className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pt-40">
					<nav aria-label="Breadcrumb" className="mb-12 text-xs text-[#536B7A]">
						<Link href="/" className="hover:text-[#0365D0]">
							Home
						</Link>

						<span className="mx-2">/</span>

						<Link href="/products" className="hover:text-[#0365D0]">
							Products
						</Link>

						<span className="mx-2">/</span>

						<span>Sun Care</span>
					</nav>

					<div className="max-w-2xl">
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0E3C6E]">
							Vrushaba Chemicals · Sun Care
						</p>

						<h1 className="font-serif text-5xl leading-tight text-[#0E3C6E] sm:text-6xl lg:text-7xl">
							Sun Care
							<span className="block italic text-[#567F9B]">Ingredients</span>
						</h1>

						<p className="mt-6 max-w-xl text-base leading-7 text-[#354D5D] sm:text-lg">
							Explore our ingredient catalogue, featuring UV filters and
							specialty ingredients for diverse cosmetic and personal care
							formulations.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#sun-care-catalogue"
								className="inline-flex items-center gap-2 rounded-full bg-[#0E3C6E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0365D0]">
								Explore Ingredients
								<ArrowRight size={16} />
							</a>

							<Link
								href="/contact"
								className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/25 bg-white/60 px-6 py-3 text-sm font-medium text-[#0E3C6E] transition hover:bg-white">
								Contact Us
								<ArrowUpRight size={16} />
							</Link>
						</div>
					</div>

					<div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#0E3C6E]/15 pt-6">
						<span className="flex items-center gap-2 text-sm text-[#354D5D]">
							<ShieldCheck size={18} className="text-[#0E3C6E]" />
							Personal care ingredients
						</span>

						<span className="flex items-center gap-2 text-sm text-[#354D5D]">
							<CheckCircle2 size={18} className="text-[#0E3C6E]" />
							Product information
						</span>
					</div>
				</div>
			</section>

			{/* PRODUCT CATALOGUE */}

			<section
				id="sun-care-catalogue"
				className="scroll-mt-20 bg-[#FAF8F2] py-14 sm:py-20">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<div className="mb-8 max-w-2xl">
						<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#56728A]">
							Explore Our Range
						</p>

						<h2 className="font-serif text-3xl text-[#0E3C6E] sm:text-4xl">
							Our Ingredients
						</h2>

						<p className="mt-3 text-sm leading-6 text-[#56615E] sm:text-base">
							Select a category to explore our products. Open any product to
							view its technical profile.
						</p>
					</div>

					{/* CATEGORY PRODUCT CAROUSEL */}

					<div
						className="relative isolate overflow-hidden rounded-[28px] border border-[#0E3C6E]/10 bg-cover bg-center transition-all duration-500"
						style={{
							backgroundImage: `url("${backgroundImages[activeTab]}")`,
						}}>
						<div
							className={`absolute inset-0 -z-10 transition-colors duration-500 ${
								activeTab === "uva"
									? "bg-[#DCEAF5]/90"
									: activeTab === "uvb"
										? "bg-[#F8E4D9]/90"
										: "bg-[#E6EFE7]/90"
							}`}
						/>

						<div className="p-5 sm:p-8 lg:p-10">
							{/* CATEGORY HEADER */}

							<div className="mb-8 flex items-center justify-between gap-4">
								<div>
									<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#456782]">
										{activeCategory.label}
									</p>

									<h3 className="mt-2 font-serif text-3xl text-[#0E3C6E] sm:text-4xl">
										{activeCategory.heading}
									</h3>

									<p className="mt-2 max-w-lg text-sm leading-6 text-[#354D5D]">
										{activeCategory.description}
									</p>
								</div>

								{/* DESKTOP CONTROLS */}

								<div className="hidden shrink-0 gap-2 sm:flex">
									<button
										type="button"
										onClick={() => moveCarousel("left")}
										aria-label="Previous product"
										className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0E3C6E]/25 bg-white/80 text-[#0E3C6E] transition hover:bg-[#0E3C6E] hover:text-white">
										<ArrowLeft size={18} />
									</button>

									<button
										type="button"
										onClick={() => moveCarousel("right")}
										aria-label="Next product"
										className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0E3C6E]/25 bg-white/80 text-[#0E3C6E] transition hover:bg-[#0E3C6E] hover:text-white">
										<ArrowRight size={18} />
									</button>
								</div>
							</div>

							{/* PRODUCT CARDS */}

							<div
								ref={carouselRef}
								key={activeTab}
								className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
								{products.map((product) => (
									<article
										key={product.slug}
										data-product-card
										className="group flex w-[82%] min-w-[82%] snap-start flex-col rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_8px_30px_rgba(14,60,110,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(14,60,110,0.12)] sm:w-[46%] sm:min-w-[46%] lg:w-[calc(25%-15px)] lg:min-w-[calc(25%-15px)]">
										<div
											className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
												activeTab === "other" ? "bg-[#E6EFE7]" : "bg-[#DCEAF5]"
											} text-[#0E3C6E] transition-transform duration-300 group-hover:scale-105`}>
											<span className="font-serif text-lg">
												{product.code.slice(0, 2)}
											</span>
										</div>

										<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#678096]">
											{product.code}
										</p>

										<h4 className="mt-2 min-h-[3.5rem] font-serif text-xl leading-snug text-[#0E3C6E]">
											{product.name}
										</h4>

										<p className="mt-3 text-xs text-[#66716D]">
											CAS No. {product.cas}
										</p>

										<p className="mt-4 flex-1 text-sm leading-6 text-[#56615E]">
											{product.description}
										</p>

										<Link
											href={`/products/sun-care/${product.slug}`}
											className="mt-6 inline-flex items-center justify-between gap-2 border-t border-[#0E3C6E]/10 pt-4 text-sm font-semibold text-[#0E3C6E] transition hover:text-[#0365D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0365D0]">
											View Product Details
											<ArrowUpRight size={17} className="shrink-0" />
										</Link>
									</article>
								))}
							</div>

							{/* MOBILE CONTROLS */}

							<div className="mt-4 flex justify-center gap-3 sm:hidden">
								<button
									type="button"
									onClick={() => moveCarousel("left")}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E3C6E]/25 bg-white text-[#0E3C6E]"
									aria-label="Previous product">
									<ArrowLeft size={17} />
								</button>

								<button
									type="button"
									onClick={() => moveCarousel("right")}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E3C6E]/25 bg-white text-[#0E3C6E]"
									aria-label="Next product">
									<ArrowRight size={17} />
								</button>
							</div>
						</div>
					</div>

					<div className="mt-10 flex flex-col items-center">
						<p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#56728A]">
							Browse by Category
						</p>

						<div
							className="flex flex-wrap justify-center gap-1.5 rounded-2xl border border-[#0E3C6E]/10 bg-white p-1.5 shadow-sm sm:rounded-full"
							role="tablist"
							aria-label="Product categories">
							<button
								type="button"
								role="tab"
								aria-selected={activeTab === "uva"}
								onClick={() => changeTab("uva")}
								className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
									activeTab === "uva"
										? "bg-[#0E3C6E] text-white shadow-md"
										: "text-[#354D5D] hover:bg-[#DCEAF5]"
								}`}>
								UVA Filters
							</button>

							<button
								type="button"
								role="tab"
								aria-selected={activeTab === "uvb"}
								onClick={() => changeTab("uvb")}
								className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
									activeTab === "uvb"
										? "bg-[#0E3C6E] text-white shadow-md"
										: "text-[#354D5D] hover:bg-[#F8E4D9]"
								}`}>
								UVB Filters
							</button>

							<button
								type="button"
								role="tab"
								aria-selected={activeTab === "other"}
								onClick={() => changeTab("other")}
								className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
									activeTab === "other"
										? "bg-[#0E3C6E] text-white shadow-md"
										: "text-[#354D5D] hover:bg-[#E6EFE7]"
								}`}>
								Other Ingredients
							</button>
						</div>

						<p className="mt-4 text-center text-xs text-[#65716D]">
							Showing {products.length}{" "}
							{activeTab === "uva"
								? "UVA filter"
								: activeTab === "uvb"
									? "UVB filter"
									: "other ingredient"}
							{products.length !== 1 ? "s" : ""}
						</p>
					</div>
				</div>
			</section>

			{/* ENQUIRY SECTION */}

			<section
				className="relative isolate overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: `url("${backgroundImages.uva}")`,
				}}>
				<div className="absolute inset-0 -z-10 bg-[#DCEAF5]/90" />

				<div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center lg:px-12 lg:py-20">
					<div className="max-w-2xl">
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#456782]">
							Have a Product Requirement?
						</p>

						<h2 className="mt-3 font-serif text-3xl leading-tight text-[#0E3C6E] sm:text-4xl">
							Let&apos;s discuss your formulation needs.
						</h2>

						<p className="mt-3 text-sm leading-6 text-[#354D5D]">
							Contact our team for product availability, specifications and
							quotation requests.
						</p>
					</div>

					<Link
						href="/contact"
						className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#0E3C6E] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#0365D0] md:self-center">
						Contact Our Team
						<ArrowRight size={17} />
					</Link>
				</div>
			</section>
		</main>
	);
}
