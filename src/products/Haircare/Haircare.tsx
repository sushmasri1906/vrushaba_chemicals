"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	CheckCircle2,
	Search,
	ShieldCheck,
	Sparkles,
	X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

type Product = {
	slug: string;
	name: string;
	chemicalName: string;
	cas: string;
	code: string;
	description: string;
};

type CategoryFilter = "all" | "hair-care" | "speciality";

/* -------------------------------------------------------------------------- */
/*                              PRODUCT DATA                                  */
/* -------------------------------------------------------------------------- */

const hairCareProducts: Product[] = [
	{
		slug: "vrushcare-po",
		name: "VRUSHCARE PO",
		chemicalName: "Piroctone Olamine",
		cas: "68890-66-4",
		code: "PO",
		description:
			"Piroctone Olamine for use in suitable hair care and personal care formulations.",
	},
	{
		slug: "vrushcare-bzc",
		name: "VRUSHCARE BZC",
		chemicalName: "Benzethonium Chloride / Hyamine",
		cas: "121-54-0",
		code: "BZC",
		description:
			"Benzethonium Chloride for suitable formulation requirements and applications.",
	},
	{
		slug: "vrushcare-dsmo",
		name: "VRUSHCARE DSMO",
		chemicalName: "Silver (I) Oxide / Disilver Oxide / Argentous Oxide",
		cas: "20667-12-3",
		code: "DSMO",
		description:
			"Silver oxide ingredient for applications requiring evaluation of its suitability and compatibility.",
	},
	{
		slug: "vrushcare-zpto",
		name: "VRUSHCARE ZINC-2-PYRIDINETHIONE-1-OXIDE (ZPTO)",
		chemicalName: "Zinc Pyrithione",
		cas: "13463-41-7",
		code: "ZPTO",
		description:
			"Speciality ingredient requiring application-specific regulatory and formulation assessment.",
	},
];

/* -------------------------------------------------------------------------- */
/*                                BACKGROUNDS                                */
/* -------------------------------------------------------------------------- */

const hairCareBackgrounds = {
	hero: "https://res.cloudinary.com/spkdq7z2/image/upload/v1792673928/6623babd-f1ff-422a-bad6-5dff083787cc.png",
	catalogue:
		"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972320/1dfa0700-f59a-4b00-a938-051bca8c1080.png",
};

/* -------------------------------------------------------------------------- */
/*                              FILTER OPTIONS                                */
/* -------------------------------------------------------------------------- */

const categoryOptions: {
	label: string;
	value: CategoryFilter;
	description: string;
}[] = [
	{
		label: "All Products",
		value: "all",
		description: "Explore the complete Hair Care portfolio.",
	},
	{
		label: "Hair Care",
		value: "hair-care",
		description: "Browse hair care formulation ingredients.",
	},
	{
		label: "Speciality",
		value: "speciality",
		description: "Browse speciality chemical ingredients.",
	},
];

/* -------------------------------------------------------------------------- */
/*                              HELPER FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

function getCategory(product: Product): "hair-care" | "speciality" {
	return product.code === "PO" ? "hair-care" : "speciality";
}

/* -------------------------------------------------------------------------- */
/*                              HAIR CARE PAGE                               */
/* -------------------------------------------------------------------------- */

export default function HairCare() {
	const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

	const [searchQuery, setSearchQuery] = useState("");

	const normalizedQuery = searchQuery.trim().toLowerCase();

	/* ---------------------------------------------------------------------- */
	/*                             FILTER PRODUCTS                            */
	/* ---------------------------------------------------------------------- */

	const filteredProducts = useMemo(() => {
		return hairCareProducts.filter((product) => {
			const matchesCategory =
				activeCategory === "all" || getCategory(product) === activeCategory;

			const searchableContent = [
				product.name,
				product.chemicalName,
				product.cas,
				product.code,
				product.description,
			]
				.join(" ")
				.toLowerCase();

			const matchesSearch =
				normalizedQuery.length === 0 ||
				searchableContent.includes(normalizedQuery);

			return matchesCategory && matchesSearch;
		});
	}, [activeCategory, normalizedQuery]);

	/* ---------------------------------------------------------------------- */
	/*                                RENDER                                  */
	/* ---------------------------------------------------------------------- */

	return (
		<main className="min-h-screen overflow-hidden bg-[#FFF8F8] text-[#303936]">
			{/* ================================================================ */}
			{/* HERO SECTION                                                     */}
			{/* ================================================================ */}

			<section
				className="relative isolate overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: `url("${hairCareBackgrounds.hero}")`,
				}}>
				<div className="absolute inset-0 -z-10 bg-[#FFF4F5]/90" />

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full border border-[#B42391]/10 sm:h-96 sm:w-96"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-10 top-28 -z-10 h-52 w-52 rounded-full border border-[#0E3C6E]/10 sm:h-72 sm:w-72"
				/>

				<div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
					{/* Breadcrumb */}

					<nav
						aria-label="Breadcrumb"
						className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#806775]">
						<Link href="/" className="transition hover:text-[#B42391]">
							Home
						</Link>

						<span aria-hidden="true">/</span>

						<Link href="/products" className="transition hover:text-[#B42391]">
							Products
						</Link>

						<span aria-hidden="true">/</span>

						<span className="font-medium text-[#B42391]">Hair Care</span>
					</nav>

					{/* Hero Content */}

					<div className="max-w-3xl">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B42391]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B42391]">
							<Sparkles size={14} />
							Vrushaba Chemicals
						</div>

						<h1 className="font-serif text-5xl leading-tight text-[#0E3C6E] sm:text-6xl lg:text-7xl">
							Hair Care
							<span className="block italic text-[#B42391]">Ingredients</span>
						</h1>

						<p className="mt-6 max-w-2xl text-base leading-7 text-[#5F5158] sm:text-lg sm:leading-8">
							Explore our hair care ingredient portfolio, featuring speciality
							chemicals for formulation development and personal care
							applications. Discover product information and chemical
							identification details in our catalogue.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#hair-care-catalogue"
								className="inline-flex items-center gap-2 rounded-full bg-[#B42391] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#941B76]">
								Explore Ingredients
								<ArrowRight size={16} />
							</a>

							<Link
								href="/contact"
								className="inline-flex items-center gap-2 rounded-full border border-[#B42391]/25 bg-white/80 px-6 py-3 text-sm font-semibold text-[#B42391] transition hover:bg-white">
								Contact Us
								<ArrowUpRight size={16} />
							</Link>
						</div>
					</div>

					{/* Hero Features */}

					<div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#B42391]/15 pt-6">
						<div className="flex items-center gap-2 text-sm text-[#5F5158]">
							<ShieldCheck size={18} className="text-[#B42391]" />
							Speciality Ingredients
						</div>

						<div className="flex items-center gap-2 text-sm text-[#5F5158]">
							<CheckCircle2 size={18} className="text-[#B42391]" />
							Product Information
						</div>

						<div className="flex items-center gap-2 text-sm text-[#5F5158]">
							<CheckCircle2 size={18} className="text-[#B42391]" />
							Individual Product Profiles
						</div>
					</div>
				</div>
			</section>

			{/* ================================================================ */}
			{/* PRODUCT CATALOGUE                                                */}
			{/* ================================================================ */}

			<section
				id="hair-care-catalogue"
				className="scroll-mt-20 bg-[#FFF8F8] py-14 sm:py-20">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					{/* Catalogue Heading */}

					<div className="mb-10 max-w-3xl">
						<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B42391]">
							Explore Our Range
						</p>

						<h2 className="font-serif text-3xl text-[#0E3C6E] sm:text-4xl lg:text-5xl">
							Hair Care Products
						</h2>

						<p className="mt-4 text-sm leading-7 text-[#655A61] sm:text-base">
							Discover our available ingredients and their chemical
							identification details. Use the category filters or search by
							product name, chemical name, product code, or CAS number to find a
							product.
						</p>
					</div>

					{/* ======================================================== */}
					{/* SEARCH AND FILTERS                                        */}
					{/* ======================================================== */}

					<div className="mb-8 rounded-3xl border border-[#B42391]/10 bg-white p-5 shadow-sm sm:p-7">
						<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
							{/* Search */}

							<div className="w-full lg:max-w-xl">
								<label
									htmlFor="hair-care-search"
									className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[#0E3C6E]">
									Search Ingredients
								</label>

								<div className="relative">
									<Search
										size={19}
										aria-hidden="true"
										className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#806775]"
									/>

									<input
										id="hair-care-search"
										type="search"
										value={searchQuery}
										onChange={(event) => setSearchQuery(event.target.value)}
										placeholder="Search name, chemical, code or CAS number..."
										className="w-full rounded-2xl border border-[#B42391]/15 bg-[#FFF8F8] py-3.5 pl-12 pr-12 text-sm text-[#303936] outline-none transition placeholder:text-[#9A858F] focus:border-[#B42391] focus:ring-4 focus:ring-[#B42391]/10"
									/>

									{searchQuery && (
										<button
											type="button"
											onClick={() => setSearchQuery("")}
											aria-label="Clear search"
											className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#806775] transition hover:bg-[#FBE5EF] hover:text-[#B42391]">
											<X size={16} />
										</button>
									)}
								</div>
							</div>

							{/* Result Count */}

							<div className="text-sm text-[#655A61]">
								<span className="font-semibold text-[#0E3C6E]">
									{filteredProducts.length}
								</span>{" "}
								{filteredProducts.length === 1
									? "product found"
									: "products found"}
							</div>
						</div>

						{/* Category Filters */}

						<div className="mt-6 border-t border-[#B42391]/10 pt-6">
							<p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E3C6E]">
								Filter by Category
							</p>

							<div
								className="flex flex-wrap gap-2"
								role="group"
								aria-label="Filter hair care products by category">
								{categoryOptions.map((option) => {
									const isActive = activeCategory === option.value;

									return (
										<button
											key={option.value}
											type="button"
											aria-pressed={isActive}
											onClick={() => setActiveCategory(option.value)}
											className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
												isActive
													? "border-[#B42391] bg-[#B42391] text-white shadow-md shadow-[#B42391]/15"
													: "border-[#B42391]/15 bg-white text-[#655A61] hover:border-[#B42391]/40 hover:bg-[#FFF4F8] hover:text-[#B42391]"
											}`}>
											{option.label}
										</button>
									);
								})}
							</div>

							<p className="mt-3 text-xs leading-5 text-[#806775]">
								{
									categoryOptions.find(
										(option) => option.value === activeCategory,
									)?.description
								}
							</p>
						</div>
					</div>

					{/* ======================================================== */}
					{/* PRODUCT CARDS                                            */}
					{/* ======================================================== */}

					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
							{filteredProducts.map((product, index) => (
								<article
									key={product.slug}
									className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#B42391]/10 bg-white shadow-[0_8px_30px_rgba(180,35,145,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B42391]/25 hover:shadow-[0_16px_40px_rgba(180,35,145,0.12)]">
									{/* Decorative Top Border */}

									<div className="h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#B42391] to-[#EBCFD0] transition-transform duration-500 group-hover:scale-x-100" />

									<div className="relative flex flex-1 flex-col p-6">
										{/* Background Index */}

										<span
											aria-hidden="true"
											className="pointer-events-none absolute right-4 top-5 font-serif text-7xl font-bold leading-none text-[#B42391]/[0.045]">
											{String(index + 1).padStart(2, "0")}
										</span>

										{/* Product Icon */}

										<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBE5EF] text-[#B42391] transition duration-300 group-hover:scale-105 group-hover:bg-[#B42391] group-hover:text-white">
											<span className="font-serif text-lg font-semibold">
												{product.code}
											</span>
										</div>

										{/* Category Badge */}

										<div className="mb-3">
											<span className="inline-flex rounded-full bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B42391]">
												{getCategory(product) === "hair-care"
													? "Hair Care"
													: "Speciality"}
											</span>
										</div>

										{/* Product Code */}

										<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B477E]">
											Product Code: {product.code}
										</p>

										{/* Product Name */}

										<h3 className="mt-3 break-words font-serif text-xl leading-snug text-[#0E3C6E] transition-colors group-hover:text-[#B42391]">
											{product.name}
										</h3>

										{/* Chemical Name */}

										<div className="mt-5">
											<p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#806775]">
												Chemical Name
											</p>

											<p className="text-sm leading-6 text-[#655A61]">
												{product.chemicalName}
											</p>
										</div>

										{/* CAS Number */}

										<div className="mt-4 rounded-xl bg-[#FFF8F8] p-3.5">
											<p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#806775]">
												CAS Number
											</p>

											<p className="mt-1 font-mono text-sm font-semibold text-[#0E3C6E]">
												{product.cas}
											</p>
										</div>

										{/* Description */}

										<p className="mt-4 flex-1 text-sm leading-6 text-[#655A61]">
											{product.description}
										</p>

										{/* Individual Chemical Details */}

										<Link
											href={`/products/hair-care/${product.slug}`}
											aria-label={`View details for ${product.name}`}
											className="mt-6 inline-flex w-full items-center justify-between gap-3 rounded-xl bg-[#0E3C6E] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B42391] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B42391]/20">
											View Product Details
											<ArrowUpRight
												size={17}
												className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
											/>
										</Link>
									</div>
								</article>
							))}
						</div>
					) : (
						/* ==================================================== */
						/* EMPTY SEARCH RESULTS                                  */
						/* ==================================================== */

						<div className="rounded-3xl border border-dashed border-[#B42391]/25 bg-white px-6 py-16 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBE5EF] text-[#B42391]">
								<Search size={24} />
							</div>

							<h3 className="mt-5 font-serif text-2xl text-[#0E3C6E]">
								No Products Found
							</h3>

							<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#655A61]">
								We couldn&apos;t find any ingredients matching your search. Try
								another product name, chemical name, product code, or CAS
								number.
							</p>

							<button
								type="button"
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("all");
								}}
								className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B42391] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#941B76]">
								Clear Filters
								<X size={16} />
							</button>
						</div>
					)}

					{/* Catalogue Footer */}

					<div className="mt-8 flex flex-col gap-3 border-t border-[#B42391]/10 pt-6 text-xs leading-5 text-[#806775] sm:flex-row sm:items-center sm:justify-between">
						<p>
							Showing {filteredProducts.length} of {hairCareProducts.length}{" "}
							products.
						</p>

						{(searchQuery || activeCategory !== "all") && (
							<button
								type="button"
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("all");
								}}
								className="self-start font-semibold text-[#B42391] transition hover:text-[#0E3C6E] sm:self-auto">
								Reset search and filters
							</button>
						)}
					</div>
				</div>
			</section>

			{/* ================================================================ */}
			{/* ENQUIRY CTA                                                      */}
			{/* ================================================================ */}

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

						<p className="mt-4 text-sm leading-7 text-[#655A61] sm:text-base">
							Contact our team for product availability, specifications,
							technical documentation, and quotation requests.
						</p>
					</div>

					<Link
						href="/contact"
						className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#B42391] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#941B76] md:self-center">
						Contact Our Team
						<ArrowRight size={17} />
					</Link>
				</div>
			</section>
		</main>
	);
}
