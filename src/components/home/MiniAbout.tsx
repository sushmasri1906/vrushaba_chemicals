"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FlaskConical, Microscope, Sparkles } from "lucide-react";

const highlights = [
	{
		number: "01",
		title: "25 Years of Experience",
		description:
			"Decades of industry knowledge in chemical manufacturing and personal care applications.",
		icon: FlaskConical,
		background: "#DCEAF5",
	},
	{
		number: "02",
		title: "Manufacturing Expertise",
		description:
			"Product-focused expertise supporting quality, consistency, and evolving formulation requirements.",
		icon: Microscope,
		background: "#E6EFE7",
	},
	{
		number: "03",
		title: "Long-Term Partnerships",
		description:
			"Building lasting business relationships through dependable service and customer-focused solutions.",
		icon: Sparkles,
		background: "#EBCFD0",
	},
];

export default function MiniAbout() {
	const reduceMotion = useReducedMotion();

	const reveal = {
		hidden: {
			opacity: 0,
			y: reduceMotion ? 0 : 28,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: reduceMotion ? 0.01 : 0.75,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
			{/* Decorative background accents */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 -top-24 -z-10 h-80 w-80 rounded-full bg-[#DCEAF5]/70 blur-3xl sm:h-[500px] sm:w-[500px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-[#E6EFE7]/90 blur-3xl"
			/>

			<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
				{/* Section eyebrow */}
				<motion.div
					variants={reveal}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25 }}
					className="mb-10 flex items-center gap-3 sm:mb-14">
					<span className="h-px w-9 bg-[#0365D0] sm:w-12" />

					<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0365D0] sm:text-xs sm:tracking-[0.26em]">
						25 Years of Chemical Manufacturing Expertise
					</p>
				</motion.div>

				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
					{/* Main company introduction */}
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="lg:col-span-7">
						<h2 className="max-w-3xl font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#0E3C6E]">
							25 Years of
							<span className="mt-2 block text-[#0365D0]">
								Chemical Expertise.
							</span>
						</h2>

						<div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-[#34443E] sm:mt-9 sm:text-base sm:leading-8">
							<p>
								With 25 years of industry experience, Vrushaba Chemicals is
								focused on chemical manufacturing and specialised solutions for
								personal care applications. Our expertise spans ingredients and
								formulations for sun care, hair care, and hair colour
								applications.
							</p>

							<p>
								We recognise the importance of product quality, consistency, and
								application-specific requirements. Our approach combines
								manufacturing experience with a practical understanding of the
								needs of businesses working across the personal care industry.
							</p>

							<p>
								Over the years, our focus has remained on delivering dependable
								chemical solutions, understanding customer requirements, and
								building lasting professional relationships. We continue to
								value quality, experience, and long-term collaboration in
								everything we do.
							</p>
						</div>

						{/* About CTA */}
						<motion.div
							whileHover={reduceMotion ? undefined : { x: 5 }}
							transition={{ duration: 0.25 }}
							className="mt-8 sm:mt-10">
							<Link
								href="/about-us"
								className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-[#0E3C6E] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(14,60,110,0.45)] transition-colors duration-300 hover:bg-[#0365D0] sm:min-h-14 sm:pl-7">
								Discover Our Manufacturing Expertise
								<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white/25">
									<ArrowUpRight size={18} />
								</span>
							</Link>
						</motion.div>
					</motion.div>

					{/* Supporting feature card */}
					<motion.div
						initial={{
							opacity: 0,
							x: reduceMotion ? 0 : 30,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: reduceMotion ? 0.01 : 0.8,
							delay: reduceMotion ? 0 : 0.12,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative lg:col-span-5">
						<div className="relative overflow-hidden rounded-[28px] border border-[#DFE6DE] bg-white/80 p-5 shadow-[0_25px_80px_-45px_rgba(14,60,110,0.28)] backdrop-blur-sm sm:p-8 lg:p-7 xl:p-9">
							{/* Card header */}
							<div className="mb-5 flex items-center justify-between gap-4 border-b border-[#DFE6DE] pb-5">
								<div>
									<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718078]">
										Our expertise
									</p>

									<h3 className="mt-2 font-serif text-2xl leading-tight text-[#0E3C6E] sm:text-3xl">
										Experience built on quality.
									</h3>
								</div>

								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DCEAF5] text-[#0E3C6E]">
									<FlaskConical size={23} strokeWidth={1.5} />
								</div>
							</div>

							{/* Feature list */}
							<div className="divide-y divide-[#DFE6DE]">
								{highlights.map((item, index) => {
									const Icon = item.icon;

									return (
										<motion.div
											key={item.number}
											initial={{
												opacity: 0,
												y: reduceMotion ? 0 : 15,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{ once: true, amount: 0.3 }}
											transition={{
												duration: reduceMotion ? 0.01 : 0.5,
												delay: reduceMotion ? 0 : index * 0.12,
											}}
											whileHover={reduceMotion ? undefined : { x: 4 }}
											className="group flex items-start gap-4 py-5 first:pt-4 last:pb-2">
											<div
												style={{
													backgroundColor: item.background,
												}}
												className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#0E3C6E] transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm">
												<Icon size={20} strokeWidth={1.6} />
											</div>

											<div className="min-w-0 flex-1">
												<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
													<span className="font-mono text-[10px] tracking-wider text-[#718078]">
														{item.number}
													</span>

													<h4 className="text-sm font-semibold text-[#0E3C6E] sm:text-base">
														{item.title}
													</h4>
												</div>

												<p className="mt-1.5 text-xs leading-6 text-[#34443E]/80 sm:text-sm">
													{item.description}
												</p>
											</div>

											<ArrowUpRight
												size={16}
												className="mt-1 shrink-0 text-[#718078] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0365D0]"
											/>
										</motion.div>
									);
								})}
							</div>

							{/* Refined bottom accent */}
							<div className="mt-5 flex items-center gap-3 border-t border-[#DFE6DE] pt-5">
								<span className="h-1 w-10 rounded-full bg-[#0365D0]" />
								<span className="h-px flex-1 bg-[#DFE6DE]" />
								<span className="h-1 w-5 rounded-full bg-[#EBCFD0]" />
							</div>
						</div>

						{/* Decorative outline */}
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-[28px] border border-[#0E3C6E]/15 sm:-bottom-4 sm:-right-4"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
