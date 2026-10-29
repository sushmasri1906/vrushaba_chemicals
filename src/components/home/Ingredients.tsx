"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, Droplets, Wind, House } from "lucide-react";

const categories = [
	{
		number: "01",
		label: "SKIN",
		title: "Sun Care",
		description:
			"Specialised ingredients for skincare formulations, from everyday essentials to advanced beauty applications.",
		href: "/products/sun-care",
		icon: Sparkles,
		background: "#F5E8E5",
	},
	{
		number: "02",
		label: "SKIN + HAIR",
		title: "Skin & Hair",
		description:
			"Versatile ingredients for personal care applications across skin and hair formulations.",
		href: "/products/sun-care",
		icon: Droplets,
		background: "#E6EFE7",
	},
	{
		number: "03",
		label: "HAIR",
		title: "Hair Care",
		description:
			"Explore ingredients for hair care, conditioning, styling, and hair colour applications.",
		href: "/products/hair-care",
		icon: Wind,
		background: "#DCEAF5",
	},
	{
		number: "04",
		label: "BODY + HOME",
		title: "Body & Home",
		description:
			"Discover chemical ingredients for body care and home care product applications.",
		href: "/products/body-home",
		icon: House,
		background: "#F1EBDD",
	},
];

const backgroundImage =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1792672415/584fc71f-e807-456a-96ba-7d3a5a453cb1.png";

export default function Ingredients() {
	const reduceMotion = useReducedMotion();

	const reveal = {
		hidden: {
			opacity: 0,
			y: reduceMotion ? 0 : 24,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<section className="relative isolate overflow-hidden bg-[#FAF8F2] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
			{/* Skin-tone skincare background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-20">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url("${backgroundImage}")` }}
				/>
			</div>

			{/* Readability overlay */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 bg-[#FAF8F2]/80"
			/>

			{/* Soft brand-colour accents */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#EBCFD0]/25 blur-[100px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#DCEAF5]/35 blur-[100px]"
			/>

			<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
				{/* Page introduction */}
				<motion.div
					variants={reveal}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.7,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-12 lg:items-end lg:gap-10">
					<div className="lg:col-span-7">
						<div className="mb-5 flex items-center gap-3 sm:mb-6">
							<span className="h-px w-10 shrink-0 bg-[#0365D0]" />

							<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0365D0] sm:text-xs">
								Explore Our Categories
							</p>
						</div>

						<h1 className="max-w-3xl font-serif text-[clamp(2.6rem,5.5vw,5.2rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#0E3C6E]">
							Ingredients for
							<span className="mt-2 block text-[#0365D0]">
								every formulation.
							</span>
						</h1>
					</div>

					<div className="lg:col-span-5 lg:pb-2 lg:pl-6">
						<p className="max-w-lg text-sm leading-7 text-[#303936] sm:text-base sm:leading-8">
							Discover our range of chemical ingredients and solutions for skin
							care, hair care, and body and home care. Explore each category to
							find ingredients suited to your formulation needs.
						</p>

						<div className="mt-5 flex items-center gap-3">
							<span className="h-2 w-2 shrink-0 rounded-full bg-[#0365D0]" />

							<span className="text-[10px] font-semibold tracking-[0.12em] text-[#0E3C6E] sm:text-xs">
								25 YEARS OF INDUSTRY EXPERIENCE
							</span>
						</div>
					</div>
				</motion.div>

				{/* Category cards */}
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:gap-6">
					{categories.map((category, index) => {
						const Icon = category.icon;

						return (
							<motion.div
								key={category.number}
								variants={reveal}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.12 }}
								transition={{
									duration: reduceMotion ? 0.01 : 0.6,
									delay: reduceMotion ? 0 : index * 0.08,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="h-full">
								<Link
									href={category.href}
									aria-label={`Explore ${category.title} ingredients`}
									className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white/85 p-5 shadow-[0_16px_45px_-30px_rgba(14,60,110,0.25)] backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#B9CBDC] hover:bg-white/95 hover:shadow-[0_24px_55px_-30px_rgba(14,60,110,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0365D0] focus-visible:ring-offset-4 sm:min-h-[310px] sm:p-7 lg:p-8">
									{/* Decorative background shape */}
									<div
										aria-hidden="true"
										style={{ backgroundColor: category.background }}
										className="absolute -right-12 -top-14 h-40 w-40 rounded-full opacity-80 transition-transform duration-700 ease-out group-hover:scale-125 sm:h-48 sm:w-48"
									/>

									{/* Bottom hover accent */}
									<div
										aria-hidden="true"
										className="absolute bottom-0 left-0 h-1 w-0 bg-[#0365D0] transition-all duration-500 group-hover:w-full"
									/>

									{/* Card header */}
									<div className="relative flex items-start justify-between">
										<span className="font-mono text-[10px] tracking-[0.18em] text-[#718078] sm:text-xs">
											{category.number} / 04
										</span>

										<div
											style={{
												backgroundColor: category.background,
												color: "#0E3C6E",
											}}
											className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl">
											<Icon size={22} strokeWidth={1.5} />
										</div>
									</div>

									{/* Card content */}
									<div className="relative mt-auto pt-10 sm:pt-12">
										<p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0365D0]">
											{category.label}
										</p>

										<h2 className="font-serif text-2xl font-medium tracking-[-0.035em] text-[#0E3C6E] transition-colors duration-300 group-hover:text-[#0365D0] sm:text-3xl lg:text-4xl">
											{category.title}
										</h2>

										<p className="mt-3 max-w-md text-sm leading-6 text-[#34443E] sm:mt-4 sm:leading-7">
											{category.description}
										</p>

										<div className="mt-5 flex items-center justify-between border-t border-[#0E3C6E]/10 pt-4 sm:mt-6 sm:pt-5">
											<span className="text-xs font-semibold text-[#0E3C6E] sm:text-sm">
												Explore Category
											</span>

											<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8E1E7] text-[#0E3C6E] transition-all duration-300 group-hover:border-[#0E3C6E] group-hover:bg-[#0E3C6E] group-hover:text-white sm:h-10 sm:w-10">
												<ArrowUpRight size={18} />
											</span>
										</div>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom call to action */}
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.6,
						delay: reduceMotion ? 0 : 0.15,
					}}
					className="mt-8 flex flex-col gap-3 border-t border-[#0E3C6E]/15 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
					<p className="text-xs leading-6 text-[#34443E] sm:text-sm">
						Looking for a specific ingredient or formulation solution?
					</p>

					<Link
						href="/contact"
						className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0E3C6E] transition-colors hover:text-[#0365D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0365D0] focus-visible:ring-offset-4">
						Discuss Your Requirements
						<ArrowUpRight size={17} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
