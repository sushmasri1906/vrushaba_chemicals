"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sun, Waves, Flower2 } from "lucide-react";

const categories = [
	{
		id: "01",
		title: "Sun Care Ingredients",
		subtitle: "Supporting the science of sun protection.",
		description:
			"Explore specialised ingredients used in sunscreen and sun care formulations, including selected UV-filter-related compounds and other functional ingredients.",
		href: "/products/sun-care",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791975007/9d6f95fa-c1ff-4aee-81ac-4ed18a71afd5.png",
		imageAlt: "Premium sun care skincare products in a natural setting",
		icon: Sun,
		tint: "#DCEAF5",
		accent: "#72B6EE",
		imagePosition: "object-center",
	},
	{
		id: "02",
		title: "Hair Care Ingredients",
		subtitle: "Chemistry for specialised hair care formulations.",
		description:
			"Discover ingredients for hair and scalp care applications, with product selection guided by chemical identity, intended function, and formulation requirements.",
		href: "/products/hair-care",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791975083/6f79c132-5223-4e14-90d6-0cea65227ec5.png",
		imageAlt: "Botanical hair care formulation with glass skincare bottle",
		icon: Waves,
		tint: "#E6EFE7",
		accent: "#A9C8B2",
		imagePosition: "object-center",
	},
	// {
	// 	id: "03",
	// 	title: "Hair Colour Ingredients",
	// 	subtitle: "The chemistry behind colour development.",
	// 	description:
	// 		"Explore hair dye intermediates, couplers, and specialised colour ingredients for relevant hair colouring systems.",
	// 	href: "/products/hair-dye",
	// 	image:
	// 		"https://res.cloudinary.com/spkdq7z2/image/upload/v1791975159/0ffa660b-64fb-4130-a1df-8c81d4957e64.png",
	// 	imageAlt: "Glossy hair and professional hair colour inspiration",
	// 	icon: Flower2,
	// 	tint: "#F9E5E2",
	// 	accent: "#EBCFD0",
	// 	imagePosition: "object-center",
	// },
];

export default function ProductCategories() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="product-categories"
			className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-28">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#DCEAF5]/65 blur-[2px] sm:h-[580px] sm:w-[580px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-40 top-[30%] -z-10 h-[360px] w-[360px] rounded-full bg-[#EBCFD0]/20 blur-3xl"
			/>

			<div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-16">
				{/* Section heading */}
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.7,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-[68px]">
					<div className="mb-5 flex items-center justify-center gap-4 sm:mb-7">
						<span className="h-px w-8 bg-[#0365D0] sm:w-12" />

						<span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0E3C6E] sm:text-xs sm:tracking-[0.3em]">
							Explore Our Portfolio
						</span>

						<span className="h-px w-8 bg-[#0365D0] sm:w-12" />
					</div>

					<h2 className="font-serif text-[clamp(2.65rem,5.5vw,5.25rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#0E3C6E]">
						Specialised Ingredients.
						<span className="mt-1 block text-[#0365D0]">
							Diverse Applications.
						</span>
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#52635C] sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
						Discover our portfolio of ingredients designed for different
						personal-care formulation requirements.
					</p>
				</motion.div>

				{/* Category cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-7">
					{categories.map((category, index) => {
						const Icon = category.icon;

						return (
							<motion.article
								key={category.id}
								initial={{
									opacity: 0,
									y: reduceMotion ? 0 : 35,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{ once: true, amount: 0.15 }}
								transition={{
									duration: reduceMotion ? 0.01 : 0.65,
									delay: reduceMotion ? 0 : index * 0.12,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#DFE6DE] bg-white/75 shadow-[0_12px_40px_-28px_rgba(14,60,110,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(14,60,110,0.26)] sm:rounded-[24px]">
								{/* Image */}
								<Link
									href={category.href}
									aria-label={`Explore ${category.title}`}
									className="relative block overflow-hidden">
									<div className="relative h-[245px] overflow-hidden sm:h-[255px] lg:h-[235px] xl:h-[280px]">
										<Image
											src={category.image}
											alt={category.imageAlt}
											fill
											priority={index === 0}
											sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
											className={`object-cover ${category.imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.055]`}
										/>

										<div className="absolute inset-0 bg-gradient-to-t from-[#0E3C6E]/25 via-transparent to-white/5 transition-opacity duration-500 group-hover:from-[#0E3C6E]/15" />

										<div className="absolute right-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 px-3 text-[10px] font-semibold tracking-[0.15em] text-[#0E3C6E] backdrop-blur-md">
											{category.id}
										</div>
									</div>
								</Link>

								{/* Card content */}
								<div
									className="relative flex flex-1 flex-col px-5 pb-6 pt-0 sm:px-6 sm:pb-7 lg:px-6 xl:px-7"
									style={{
										background: `linear-gradient(180deg, ${category.tint}30 0%, rgba(255,255,255,0.96) 72%)`,
									}}>
									<div
										className="-mt-6 mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[5px] border-white shadow-sm transition-transform duration-500 group-hover:scale-105"
										style={{ backgroundColor: category.tint }}>
										<Icon
											size={25}
											strokeWidth={1.5}
											className="text-[#0E3C6E]"
										/>
									</div>

									<h3 className="font-serif text-[27px] font-medium leading-[1.15] tracking-[-0.035em] text-[#0E3C6E] sm:text-[28px] xl:text-[30px]">
										{category.title}
									</h3>

									<p className="mt-2.5 text-sm font-medium leading-6 text-[#52635C]">
										{category.subtitle}
									</p>

									<div
										className="my-5 h-[3px] w-11 rounded-full transition-all duration-500 group-hover:w-16"
										style={{ backgroundColor: category.accent }}
									/>

									<p className="mb-7 flex-1 text-[13px] leading-[1.85] text-[#52635C] sm:text-sm sm:leading-7">
										{category.description}
									</p>

									{/* UVA and UVB — Sun Care only */}
									{index === 0 && (
										<div className="mb-5 flex flex-wrap gap-2">
											<span className="inline-flex items-center rounded-full border border-[#C9DFF1] bg-[#EAF3FB] px-3 py-1.5 text-xs font-semibold text-[#0E3C6E]">
												UVA Filters
											</span>
											<span className="inline-flex items-center rounded-full border border-[#C9DFF1] bg-[#EAF3FB] px-3 py-1.5 text-xs font-semibold text-[#0E3C6E]">
												UVB Filters
											</span>
										</div>
									)}

									{/* CTA */}
									<Link
										href={category.href}
										className="group/button inline-flex min-h-[54px] w-fit max-w-full items-center justify-between gap-5 rounded-full bg-[#0E3C6E] py-1.5 pl-5 pr-2 text-[13px] font-semibold text-white shadow-[0_8px_20px_-10px_rgba(14,60,110,0.55)] transition-all duration-300 hover:bg-[#0365D0] sm:pl-6 sm:text-sm">
										<span>
											{index === 0
												? "Explore Sun Care"
												: index === 1
													? "Explore Hair Care"
													: "Explore Hair Colour"}
										</span>

										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover/button:rotate-45 group-hover/button:bg-white/15">
											<ArrowUpRight size={19} strokeWidth={1.7} />
										</span>
									</Link>
								</div>
							</motion.article>
						);
					})}
				</div>

				{/* Bottom note */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: reduceMotion ? 0.01 : 0.7,
						delay: 0.2,
					}}
					className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-12 sm:flex-row sm:gap-4">
					<span className="h-px w-8 bg-[#DFE6DE]" />

					<p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718078] sm:text-xs sm:tracking-[0.2em]">
						Ingredient knowledge. Application-led selection.
					</p>

					<span className="h-px w-8 bg-[#DFE6DE]" />
				</motion.div>
			</div>
		</section>
	);
}
