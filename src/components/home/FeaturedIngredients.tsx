"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	Search,
	FlaskConical,
	Sun,
	Droplets,
	Palette,
	FileText,
	SlidersHorizontal,
	ChevronDown,
	Microscope,
} from "lucide-react";

type Category = "All Ingredients" | "Sun Care" | "Hair Care" | "Hair Colour";

type Ingredient = {
	id: string;
	name: string;
	subtitle: string;
	category: Exclude<Category, "All Ingredients">;
	cas: string;
	description: string;
	code: string;
	icon: typeof FlaskConical;
	accent: string;
	surface: string;
	tag: string;
};

const ingredients: Ingredient[] = [
	{
		id: "01",
		name: "UV Filter Ingredients",
		subtitle: "Sun care formulations",
		category: "Sun Care",
		cas: "Add verified CAS number",
		description:
			"Selected ingredients for sunscreen development and sun care formulation requirements.",
		code: "SC",
		icon: Sun,
		accent: "#397DB7",
		surface: "#EAF3FA",
		tag: "SUN PROTECTION",
	},
	{
		id: "02",
		name: "Hair Conditioning Agents",
		subtitle: "Hair and scalp care",
		category: "Hair Care",
		cas: "Add verified CAS number",
		description:
			"Functional ingredients for specialised hair care products and formulation systems.",
		code: "HC",
		icon: Droplets,
		accent: "#547C60",
		surface: "#EAF1E9",
		tag: "HAIR CARE",
	},
	{
		id: "03",
		name: "Hair Dye Intermediates",
		subtitle: "Hair colour formulations",
		category: "Hair Colour",
		cas: "Add verified CAS number",
		description:
			"Selected intermediates used in relevant oxidative hair colouring systems.",
		code: "HY",
		icon: Palette,
		accent: "#AD7779",
		surface: "#F8EAEA",
		tag: "HAIR COLOUR",
	},
];

const filters: {
	label: Category;
	icon: typeof FlaskConical;
}[] = [
	{ label: "All Ingredients", icon: SlidersHorizontal },
	{ label: "Sun Care", icon: Sun },
	{ label: "Hair Care", icon: Droplets },
	{ label: "Hair Colour", icon: Palette },
];

export default function FeaturedIngredients() {
	const [search, setSearch] = useState("");
	const [activeCategory, setActiveCategory] =
		useState<Category>("All Ingredients");

	const reduceMotion = useReducedMotion();

	const filteredIngredients = useMemo(() => {
		const query = search.trim().toLowerCase();

		return ingredients.filter((ingredient) => {
			const matchesCategory =
				activeCategory === "All Ingredients" ||
				ingredient.category === activeCategory;

			const matchesSearch =
				!query ||
				[
					ingredient.name,
					ingredient.subtitle,
					ingredient.category,
					ingredient.cas,
					ingredient.description,
				].some((value) => value.toLowerCase().includes(query));

			return matchesCategory && matchesSearch;
		});
	}, [search, activeCategory]);

	return (
		<section
			id="featured-ingredients"
			className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
			{/* Background atmosphere */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-36 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#DCEAF5]/60 blur-3xl sm:h-[560px] sm:w-[560px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-40 -left-36 -z-10 h-[400px] w-[400px] rounded-full bg-[#E6EFE7]/80 blur-3xl"
			/>

			<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
				{/* Editorial heading */}
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.7,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
					<div className="lg:col-span-8">
						<div className="mb-5 flex items-center gap-3">
							<span className="h-px w-10 bg-[#0365D0]" />
							<span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0365D0] sm:text-xs sm:tracking-[0.3em]">
								Discover Our Products
							</span>
						</div>

						<h2 className="max-w-4xl font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-[#0E3C6E]">
							Find the Right Ingredient
							<span className="mt-1 block text-[#0365D0]">for Your Needs.</span>
						</h2>
					</div>

					<div className="lg:col-span-4 lg:pb-2">
						<p className="max-w-xl text-sm leading-7 text-[#52635C] sm:text-base sm:leading-8">
							Explore our ingredient catalogue by product name, chemical
							identity, CAS number, or application category. Access available
							product information and connect with our team for specific
							requirements.
						</p>

						<div className="mt-5 flex items-center gap-3 text-xs text-[#718078]">
							<Microscope size={17} strokeWidth={1.5} />
							<span>
								Product knowledge. Technical clarity. Application focus.
							</span>
						</div>
					</div>
				</motion.div>

				{/* Search and filters */}
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.6,
						delay: reduceMotion ? 0 : 0.1,
					}}
					className="mt-12 rounded-[22px] border border-[#DFE6DE] bg-white/75 p-4 shadow-[0_16px_45px_-35px_rgba(14,60,110,0.25)] backdrop-blur-sm sm:mt-14 sm:p-5 lg:mt-16">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						{/* Search input */}
						<div className="relative w-full lg:max-w-[390px]">
							<Search
								size={19}
								strokeWidth={1.7}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718078]"
							/>

							<input
								type="search"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Search name, chemical identity or CAS..."
								aria-label="Search ingredients by name, chemical identity or CAS number"
								className="h-[52px] w-full rounded-xl border border-[#DFE6DE] bg-[#FAF8F2]/80 pl-12 pr-4 text-sm text-[#34443E] outline-none transition-all placeholder:text-[#89938D] focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
							/>
						</div>

						{/* Category filters */}
						<div className="flex flex-wrap items-center gap-2">
							{filters.map((filter) => {
								const Icon = filter.icon;
								const isActive = activeCategory === filter.label;

								return (
									<button
										key={filter.label}
										type="button"
										onClick={() => setActiveCategory(filter.label)}
										aria-pressed={isActive}
										className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
											isActive
												? "border-[#0E3C6E] bg-[#0E3C6E] text-white shadow-sm"
												: "border-[#DFE6DE] bg-white text-[#52635C] hover:border-[#0E3C6E]/35 hover:bg-[#E6EFE7]/50 hover:text-[#0E3C6E]"
										}`}>
										<Icon size={15} strokeWidth={1.7} />
										{filter.label}
									</button>
								);
							})}
						</div>
					</div>
				</motion.div>

				{/* Catalogue metadata */}
				<div className="mb-5 mt-10 flex items-center justify-between gap-4 sm:mt-12">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718078]">
							The catalogue
						</p>
						<h3 className="mt-1.5 font-serif text-2xl text-[#0E3C6E] sm:text-3xl">
							Featured Ingredients
						</h3>
					</div>

					<span className="rounded-full border border-[#DFE6DE] bg-white/70 px-3.5 py-2 text-xs text-[#52635C]">
						{filteredIngredients.length}{" "}
						{filteredIngredients.length === 1 ? "result" : "results"}
					</span>
				</div>

				{/* Ingredient cards */}
				{filteredIngredients.length > 0 ? (
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
						{filteredIngredients.map((ingredient, index) => {
							const Icon = ingredient.icon;

							return (
								<motion.article
									key={ingredient.id}
									layout={!reduceMotion}
									initial={{
										opacity: 0,
										y: reduceMotion ? 0 : 24,
									}}
									whileInView={{
										opacity: 1,
										y: 0,
									}}
									viewport={{ once: true, amount: 0.15 }}
									transition={{
										duration: reduceMotion ? 0.01 : 0.55,
										delay: reduceMotion ? 0 : index * 0.08,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#DFE6DE] bg-white/85 transition-all duration-500 hover:-translate-y-1 hover:border-[#0E3C6E]/20 hover:shadow-[0_24px_55px_-32px_rgba(14,60,110,0.3)] sm:rounded-[25px]">
									{/* Product visual */}
									<div
										className="relative flex h-[210px] items-center justify-center overflow-hidden sm:h-[225px]"
										style={{
											background: `linear-gradient(135deg, ${ingredient.surface} 0%, #FAF8F2 100%)`,
										}}>
										<div
											aria-hidden="true"
											className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/80"
										/>
										<div
											aria-hidden="true"
											className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/80"
										/>

										{/* Abstract scientific visual */}
										<div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/90 bg-white/65 shadow-[0_15px_50px_-30px_rgba(14,60,110,0.3)] backdrop-blur-sm transition-transform duration-700 group-hover:scale-105 sm:h-36 sm:w-36">
											<div
												className="absolute inset-3 rounded-full border"
												style={{ borderColor: `${ingredient.accent}40` }}
											/>
											<div
												className="flex h-[76px] w-[76px] items-center justify-center rounded-[24px] text-white shadow-lg sm:h-[86px] sm:w-[86px]"
												style={{ backgroundColor: ingredient.accent }}>
												<Icon size={36} strokeWidth={1.25} aria-hidden="true" />
											</div>

											<span
												className="absolute -right-1 top-5 h-3 w-3 rounded-full border-2 border-white"
												style={{ backgroundColor: ingredient.accent }}
											/>
											<span
												className="absolute -bottom-1 left-7 h-2.5 w-2.5 rounded-full border-2 border-white"
												style={{ backgroundColor: ingredient.accent }}
											/>
										</div>

										<span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-[#0E3C6E] backdrop-blur-sm">
											{ingredient.tag}
										</span>

										<span className="absolute bottom-4 right-4 font-mono text-xs tracking-widest text-[#0E3C6E]/50">
											VC / {ingredient.id}
										</span>
									</div>

									{/* Details */}
									<div className="flex flex-1 flex-col p-5 sm:p-6">
										<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718078]">
											{ingredient.subtitle}
										</p>

										<h4 className="mt-2 font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#0E3C6E] sm:text-[27px]">
											{ingredient.name}
										</h4>

										<p className="mt-3 text-sm leading-7 text-[#52635C]">
											{ingredient.description}
										</p>

										{/* Chemical identity */}
										<div className="mt-5 rounded-xl border border-[#DFE6DE] bg-[#FAF8F2]/80 px-4 py-3">
											<div className="flex items-center justify-between gap-3">
												<span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#718078]">
													CAS Number
												</span>

												<FileText
													size={15}
													className="shrink-0 text-[#718078]"
												/>
											</div>

											<p className="mt-1.5 break-words font-mono text-xs text-[#34443E]">
												{ingredient.cas}
											</p>
										</div>

										{/* Card footer */}
										<div className="mt-auto flex items-center justify-between gap-3 border-t border-[#DFE6DE] pt-5 mt-5">
											<span className="text-xs text-[#718078]">
												Technical information
											</span>

											<Link
												href={`/contact?category=${encodeURIComponent(ingredient.category)}&product=${encodeURIComponent(ingredient.name)}`}
												aria-label={`Enquire about ${ingredient.name}`}
												className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E3C6E] text-white transition-all duration-300 hover:rotate-45 hover:bg-[#0365D0]">
												<ArrowUpRight size={19} strokeWidth={1.7} />
											</Link>
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				) : (
					<div className="rounded-[22px] border border-dashed border-[#C9D6CC] bg-white/60 px-6 py-16 text-center">
						<Search
							size={28}
							className="mx-auto text-[#718078]"
							strokeWidth={1.4}
						/>

						<h4 className="mt-4 font-serif text-2xl text-[#0E3C6E]">
							No matching ingredients
						</h4>

						<p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#718078]">
							Try another product name, CAS number, or application category.
						</p>

						<button
							type="button"
							onClick={() => {
								setSearch("");
								setActiveCategory("All Ingredients");
							}}
							className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0365D0] hover:text-[#0E3C6E]">
							Clear filters <ArrowRight size={16} />
						</button>
					</div>
				)}

				{/* Bottom CTA panel */}
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.65,
					}}
					className="relative mt-10 overflow-hidden rounded-[24px] bg-[#0E3C6E] px-6 py-8 sm:mt-14 sm:px-9 sm:py-10 lg:px-12">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-2 -top-14 h-44 w-44 rounded-full border border-white/10"
					/>

					<div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
						<div className="max-w-2xl">
							<div className="mb-3 flex items-center gap-2">
								<span className="h-px w-7 bg-[#9DC9ED]" />
								<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8D9F3]">
									Your formulation. Our expertise.
								</p>
							</div>

							<h3 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-white sm:text-4xl">
								Looking for a specific ingredient?
							</h3>

							<p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
								Tell us your product name, chemical identity, CAS number, or
								application requirement. Our team can help you find the relevant
								product information.
							</p>
						</div>

						<Link
							href="/products"
							className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-5 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#0E3C6E] transition-colors duration-300 hover:bg-[#DCEAF5]">
							View All Products
							<span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6EFE7] transition-transform duration-300 group-hover:translate-x-0.5">
								<ArrowDownRight size={19} strokeWidth={1.7} />
							</span>
						</Link>
					</div>
				</motion.div>

				{/* Supporting note */}
				<p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-6 text-[#718078] sm:text-xs">
					Product availability, chemical identity, CAS numbers, and technical
					documentation should be confirmed against the relevant product
					specifications.
				</p>
			</div>
		</section>
	);
}
