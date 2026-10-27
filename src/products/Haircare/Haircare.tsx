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
	chemicalName: string;
	cas: string;
	code: string;
	description: string;
};

const hairCareProducts: Product[] = [
	{
		name: "VRUSHCARE PO",
		chemicalName: "Piroctone Olamine",
		cas: "68890-66-4",
		code: "PO",
		description:
			"Piroctone Olamine for use in suitable hair care and personal care formulations.",
	},
	{
		name: "VRUSHCARE BZC",
		chemicalName: "Benzethonium Chloride / Hyamine",
		cas: "121-54-0",
		code: "BZC",
		description:
			"Benzethonium Chloride for suitable formulation requirements and applications.",
	},
	{
		name: "VRUSHCARE DSMO",
		chemicalName: "Silver (I) Oxide / Disilver Oxide / Argentous Oxide",
		cas: "20667-12-3",
		code: "DSMO",
		description:
			"Silver oxide ingredient for applications requiring evaluation of its suitability and compatibility.",
	},
	{
		name: "VRUSHCARE ZINC-2-PYRIDINETHIONE-1-OXIDE (ZPTO)",
		chemicalName: "Zinc Pyrithione",
		cas: "13463-41-7",
		code: "ZPTO",
		description:
			"Speciality ingredient requiring application-specific regulatory and formulation assessment.",
	},
];

const hairCareBackgrounds = {
	hero: "https://res.cloudinary.com/spkdq7z2/image/upload/v1792673928/6623babd-f1ff-422a-bad6-5dff083787cc.png",
	catalogue:
		"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972320/1dfa0700-f59a-4b00-a938-051bca8c1080.png",
};

export default function HairCarePage() {
	const [activeCategory, setActiveCategory] = useState<"all" | "speciality">(
		"all",
	);

	const carouselRef = useRef<HTMLDivElement>(null);

	const products =
		activeCategory === "all"
			? hairCareProducts
			: hairCareProducts.filter((product) =>
					["BZC", "DSMO", "ZPTO"].includes(product.code),
				);

	function changeCategory(category: "all" | "speciality") {
		setActiveCategory(category);

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
		<main className="overflow-hidden bg-[#FFF8F8] text-[#303936]">
			{/* Hero Section */}
			<section
				className="relative isolate bg-cover bg-center"
				style={{
					backgroundImage: `url("${hairCareBackgrounds.hero}")`,
				}}>
				<div className="absolute inset-0 -z-10 bg-[#FFF4F5]/90" />

				<div className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pt-40">
					{/* Breadcrumb */}
					<nav aria-label="Breadcrumb" className="mb-12 text-xs text-[#806775]">
						<Link href="/" className="transition hover:text-[#B42391]">
							Home
						</Link>

						<span className="mx-2">/</span>

						<Link href="/products" className="transition hover:text-[#B42391]">
							Products
						</Link>

						<span className="mx-2">/</span>

						<span className="text-[#B42391]">Hair Care</span>
					</nav>

					{/* Hero Content */}
					<div className="max-w-2xl">
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B42391]">
							Vrushaba Chemicals · Personal Care
						</p>

						<h1 className="font-serif text-5xl leading-tight text-[#0E3C6E] sm:text-6xl lg:text-7xl">
							Hair Care
							<span className="block italic text-[#B42391]">Ingredients</span>
						</h1>

						<p className="mt-6 max-w-xl text-base leading-7 text-[#5F5158] sm:text-lg">
							Explore our hair care ingredient portfolio, featuring speciality
							ingredients for formulation development and personal care
							applications.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#hair-care-catalogue"
								className="inline-flex items-center gap-2 rounded-full bg-[#B42391] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#941B76]">
								Explore Ingredients
								<ArrowRight size={16} />
							</a>

							<Link
								href="/contact"
								className="inline-flex items-center gap-2 rounded-full border border-[#B42391]/25 bg-white/70 px-6 py-3 text-sm font-medium text-[#B42391] transition hover:bg-white">
								Contact Us
								<ArrowUpRight size={16} />
							</Link>
						</div>
					</div>

					{/* Hero Features */}
					<div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#B42391]/15 pt-6">
						<span className="flex items-center gap-2 text-sm text-[#5F5158]">
							<ShieldCheck size={18} className="text-[#B42391]" />
							Speciality Ingredients
						</span>

						<span className="flex items-center gap-2 text-sm text-[#5F5158]">
							<CheckCircle2 size={18} className="text-[#B42391]" />
							Product Information
						</span>
					</div>
				</div>
			</section>

			{/* Product Catalogue */}
			<section
				id="hair-care-catalogue"
				className="scroll-mt-20 bg-[#FFF8F8] py-14 sm:py-20">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					{/* Catalogue Heading */}
					<div className="mb-8 max-w-2xl">
						<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B42391]">
							Explore Our Range
						</p>

						<h2 className="font-serif text-3xl text-[#0E3C6E] sm:text-4xl">
							Hair Care Products
						</h2>

						<p className="mt-3 text-sm leading-6 text-[#655A61] sm:text-base">
							Discover our available ingredients and their chemical
							identification details. Contact our team for product
							specifications and application-related information.
						</p>
					</div>

					{/* Product Carousel Container */}
					<div
						className="relative isolate overflow-hidden rounded-[28px] border border-[#B42391]/10 bg-cover bg-center transition-all duration-500"
						style={{
							backgroundImage: `url("${hairCareBackgrounds.catalogue}")`,
						}}>
						<div className="absolute inset-0 -z-10 bg-[#F8E5EB]/90" />

						<div className="p-5 sm:p-8 lg:p-10">
							{/* Category Heading and Desktop Controls */}
							<div className="mb-8 flex items-center justify-between gap-4">
								<div>
									<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9B477E]">
										Our Product Collection
									</p>

									<h3 className="mt-2 font-serif text-3xl text-[#0E3C6E] sm:text-4xl">
										Hair Care Range
									</h3>

									<p className="mt-2 max-w-lg text-sm leading-6 text-[#655A61]">
										Explore speciality ingredients for suitable hair care and
										personal care applications.
									</p>
								</div>

								<div className="hidden shrink-0 gap-2 sm:flex">
									<button
										type="button"
										onClick={() => moveCarousel("left")}
										aria-label="Previous product"
										className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B42391]/25 bg-white/90 text-[#B42391] transition hover:bg-[#B42391] hover:text-white">
										<ArrowLeft size={18} />
									</button>

									<button
										type="button"
										onClick={() => moveCarousel("right")}
										aria-label="Next product"
										className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B42391]/25 bg-white/90 text-[#B42391] transition hover:bg-[#B42391] hover:text-white">
										<ArrowRight size={18} />
									</button>
								</div>
							</div>

							{/* Horizontal Product Cards */}
							<div
								ref={carouselRef}
								key={activeCategory}
								className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
								{products.map((product, index) => (
									<article
										key={product.code}
										data-product-card
										className="group relative flex w-[82%] min-w-[82%] snap-start flex-col overflow-hidden rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(180,35,145,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(180,35,145,0.15)] sm:w-[46%] sm:min-w-[46%] lg:w-[calc(25%-15px)] lg:min-w-[calc(25%-15px)]">
										{/* Decorative Top Border */}
										<div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#B42391] to-[#EBCFD0] transition-transform duration-500 group-hover:scale-x-100" />

										{/* Product Icon */}
										<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBE5EF] text-[#B42391] transition-transform duration-300 group-hover:scale-105">
											<span className="font-serif text-lg font-semibold">
												{product.code.slice(0, 2)}
											</span>
										</div>

										{/* Product Code */}
										<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B42391]">
											{product.code}
										</p>

										{/* Product Name */}
										<h4 className="mt-2 min-h-[3.5rem] break-words font-serif text-xl leading-snug text-[#0E3C6E] transition-colors group-hover:text-[#B42391]">
											{product.name}
										</h4>

										{/* Chemical Name */}
										<p className="mt-3 min-h-[2.5rem] text-xs leading-5 text-[#655A61]">
											{product.chemicalName}
										</p>

										{/* CAS Number */}
										<p className="mt-3 text-xs text-[#806775]">
											CAS No.{" "}
											<span className="font-mono font-semibold text-[#0E3C6E]">
												{product.cas}
											</span>
										</p>

										{/* Description */}
										<p className="mt-4 flex-1 text-sm leading-6 text-[#655A61]">
											{product.description}
										</p>

										{/* Contact Link */}
										<Link
											href="/contact"
											className="mt-6 inline-flex items-center justify-between gap-2 border-t border-[#B42391]/10 pt-4 text-sm font-semibold text-[#B42391] transition hover:text-[#0E3C6E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B42391]">
											Enquire About Product
											<ArrowUpRight
												size={17}
												className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
											/>
										</Link>

										{/* Decorative Index */}
										<span
											aria-hidden="true"
											className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-8xl font-bold leading-none text-[#B42391]/[0.045]">
											0{index + 1}
										</span>
									</article>
								))}
							</div>

							{/* Mobile Carousel Controls */}
							<div className="mt-4 flex justify-center gap-3 sm:hidden">
								<button
									type="button"
									onClick={() => moveCarousel("left")}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B42391]/25 bg-white text-[#B42391] transition hover:bg-[#B42391] hover:text-white"
									aria-label="Previous product">
									<ArrowLeft size={17} />
								</button>

								<button
									type="button"
									onClick={() => moveCarousel("right")}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B42391]/25 bg-white text-[#B42391] transition hover:bg-[#B42391] hover:text-white"
									aria-label="Next product">
									<ArrowRight size={17} />
								</button>
							</div>
						</div>
					</div>

					{/* Category Selector */}
					<div className="mt-10 flex flex-col items-center">
						<p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9B477E]">
							Browse Products
						</p>

						<div
							className="inline-flex rounded-full border border-[#B42391]/10 bg-white p-1.5 shadow-sm"
							role="tablist"
							aria-label="Hair care product categories">
							<button
								type="button"
								role="tab"
								aria-selected={activeCategory === "all"}
								onClick={() => changeCategory("all")}
								className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 sm:px-10 ${
									activeCategory === "all"
										? "bg-[#B42391] text-white shadow-md"
										: "text-[#655A61] hover:bg-[#FBE5EF]"
								}`}>
								All Products
							</button>

							<button
								type="button"
								role="tab"
								aria-selected={activeCategory === "speciality"}
								onClick={() => changeCategory("speciality")}
								className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 sm:px-10 ${
									activeCategory === "speciality"
										? "bg-[#B42391] text-white shadow-md"
										: "text-[#655A61] hover:bg-[#FBE5EF]"
								}`}>
								Speciality
							</button>
						</div>

						<p className="mt-4 text-center text-xs text-[#806775]">
							Showing{" "}
							{activeCategory === "all" ? "all hair care" : "speciality"}{" "}
							products
						</p>
					</div>
				</div>
			</section>

			{/* Enquiry CTA */}
			<section
				className="relative isolate overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: `url("${hairCareBackgrounds.hero}")`,
				}}>
				<div className="absolute inset-0 -z-10 bg-[#FBE5EF]/90" />

				<div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center lg:px-12 lg:py-20">
					<div className="max-w-2xl">
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9B477E]">
							Have a Product Requirement?
						</p>

						<h2 className="mt-3 font-serif text-3xl leading-tight text-[#0E3C6E] sm:text-4xl">
							Let&apos;s discuss your hair care formulation needs.
						</h2>

						<p className="mt-3 text-sm leading-6 text-[#655A61]">
							Contact our team for product availability, specifications and
							quotation requests.
						</p>
					</div>

					<Link
						href="/contact"
						className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#B42391] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#941B76] md:self-center">
						Contact Our Team
						<ArrowRight size={17} />
					</Link>
				</div>
			</section>
		</main>
	);
}
