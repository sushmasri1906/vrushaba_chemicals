"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	Check,
	FlaskConical,
	MessageCircle,
	MoveUpRight,
} from "lucide-react";

const benefits = [
	"Ingredient sourcing enquiries",
	"Application and product information",
	"Business and distribution enquiries",
];

export default function PartnershipSection() {
	const reduceMotion = useReducedMotion();

	const reveal = {
		hidden: {
			opacity: 0,
			y: reduceMotion ? 0 : 24,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: reduceMotion ? 0.01 : 0.7,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section
			id="partnership"
			className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
			{/* Background details */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-36 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#DCEAF5]/50 blur-3xl sm:h-[550px] sm:w-[550px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[350px] w-[350px] rounded-full bg-[#E6EFE7]/80 blur-3xl"
			/>

			<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
				{/* Top section label */}
				<motion.div
					variants={reveal}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mb-12 flex items-center justify-between gap-5 border-b border-[#DFE6DE] pb-5 sm:mb-16 lg:mb-20">
					<div className="flex items-center gap-3">
						<span className="h-2 w-2 rounded-full bg-[#0365D0]" />
						<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0E3C6E] sm:text-xs sm:tracking-[0.28em]">
							Built Around Your Requirements
						</p>
					</div>

					<span className="hidden font-mono text-[10px] tracking-[0.18em] text-[#718078] sm:block">
						VRUSHABA CHEMICALS / 01
					</span>
				</motion.div>

				{/* Main split layout */}
				<div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-20">
					{/* Left: Editorial content */}
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="lg:col-span-7">
						<p className="mb-5 text-xs font-medium tracking-wide text-[#718078]">
							A PARTNERSHIP THAT STARTS WITH UNDERSTANDING
						</p>

						<h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[#0E3C6E]">
							Every Great
							<br />
							Formulation Starts
							<br />
							<span className="relative inline-block text-[#0365D0]">
								With a Conversation.
								<span
									aria-hidden="true"
									className="absolute -bottom-2 left-0 h-[3px] w-[42%] rounded-full bg-[#EBCFD0] sm:-bottom-3"
								/>
							</span>
						</h2>

						<p className="mt-8 max-w-xl text-sm leading-7 text-[#52635C] sm:mt-10 sm:text-base sm:leading-8">
							Looking for a specific chemical ingredient or exploring sourcing
							options for your next product? Our team welcomes enquiries from
							manufacturers, formulators, distributors, and personal-care
							businesses.
						</p>

						<p className="mt-4 max-w-xl text-sm leading-7 text-[#718078] sm:text-base sm:leading-8">
							Tell us what you need, and let us start a conversation about your
							requirements.
						</p>

						{/* Primary action */}
						<div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
							<Link
								href="/contact?type=product-enquiry"
								className="group inline-flex min-h-[56px] items-center gap-5 rounded-full bg-[#0E3C6E] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_12px_30px_-16px_rgba(14,60,110,0.6)] transition-all duration-300 hover:bg-[#0365D0] sm:pl-7">
								Send a Product Enquiry
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
									<ArrowUpRight size={19} strokeWidth={1.7} />
								</span>
							</Link>

							<Link
								href="/contact"
								className="group inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#0E3C6E] transition-colors hover:text-[#0365D0]">
								Contact Our Team
								<ArrowRight
									size={16}
									className="transition-transform duration-300 group-hover:translate-x-1"
								/>
							</Link>
						</div>
					</motion.div>

					{/* Right: Distinctive partnership panel */}
					<motion.div
						initial={{
							opacity: 0,
							x: reduceMotion ? 0 : 28,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: reduceMotion ? 0.01 : 0.8,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative lg:col-span-5">
						<div className="relative overflow-hidden rounded-[28px] border border-[#DFE6DE] bg-white/85 p-6 shadow-[0_24px_70px_-42px_rgba(14,60,110,0.28)] backdrop-blur-sm sm:rounded-[32px] sm:p-9 lg:p-8 xl:p-10">
							{/* Panel top row */}
							<div className="flex items-center justify-between gap-4">
								<div>
									<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718078]">
										Let&apos;s connect
									</p>
									<p className="mt-2 font-serif text-2xl text-[#0E3C6E] sm:text-3xl">
										Your needs, understood.
									</p>
								</div>

								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6EFE7] text-[#0E3C6E]">
									<MessageCircle size={23} strokeWidth={1.5} />
								</div>
							</div>

							{/* Graphic area */}
							<div className="relative my-7 flex min-h-[210px] items-center justify-center overflow-hidden rounded-[22px] bg-[#EAF2F8] sm:my-9 sm:min-h-[250px]">
								<div
									aria-hidden="true"
									className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#0E3C6E]/10 sm:h-64 sm:w-64"
								/>

								<div
									aria-hidden="true"
									className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full border border-[#0E3C6E]/10 sm:h-64 sm:w-64"
								/>

								{/* Molecular-style illustration */}
								<svg
									viewBox="0 0 320 220"
									role="img"
									aria-label="Abstract scientific molecular illustration"
									className="relative z-10 w-[88%] max-w-[320px]"
									fill="none">
									<g stroke="#0E3C6E" strokeOpacity=".35" strokeWidth="1.4">
										<path d="M86 78 145 48 208 82 211 145 151 177 94 143 86 78Z" />
										<path d="M145 48 151 177" strokeDasharray="4 5" />
										<path d="M86 78 211 145" strokeDasharray="4 5" />
										<path d="M208 82 94 143" strokeDasharray="4 5" />
										<path d="M208 82 257 48" />
										<path d="M94 143 49 170" />
										<path d="M145 48 136 20" />
									</g>

									<circle cx="86" cy="78" r="15" fill="#FFFFFF" />
									<circle cx="86" cy="78" r="9" fill="#B8D9F3" />

									<circle cx="145" cy="48" r="19" fill="#0E3C6E" />
									<circle cx="145" cy="48" r="8" fill="#DCEAF5" />

									<circle cx="208" cy="82" r="16" fill="#EBCFD0" />
									<circle cx="208" cy="82" r="7" fill="#FFFFFF" />

									<circle cx="211" cy="145" r="18" fill="#FFFFFF" />
									<circle cx="211" cy="145" r="10" fill="#A9C8B2" />

									<circle cx="151" cy="177" r="13" fill="#0365D0" />
									<circle cx="94" cy="143" r="12" fill="#FFFFFF" />
									<circle cx="94" cy="143" r="6" fill="#B8D9F3" />

									<circle cx="257" cy="48" r="9" fill="#EBCFD0" />
									<circle cx="49" cy="170" r="8" fill="#A9C8B2" />
									<circle cx="136" cy="20" r="7" fill="#FFFFFF" />
								</svg>

								<div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 backdrop-blur-md">
									<FlaskConical
										size={14}
										className="text-[#0E3C6E]"
										strokeWidth={1.6}
									/>
									<span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0E3C6E]">
										Chemistry meets care
									</span>
								</div>

								<span className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-[#0E3C6E]/50">
									VC / LAB
								</span>
							</div>

							{/* Enquiry types */}
							<div className="space-y-4">
								<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718078]">
									How we can help
								</p>

								{benefits.map((benefit, index) => (
									<motion.div
										key={benefit}
										initial={{
											opacity: 0,
											x: reduceMotion ? 0 : 12,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										viewport={{ once: true }}
										transition={{
											duration: reduceMotion ? 0.01 : 0.4,
											delay: reduceMotion ? 0 : index * 0.08,
										}}
										className="flex items-start gap-3">
										<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E6EFE7] text-[#0E3C6E]">
											<Check size={12} strokeWidth={2.3} />
										</span>

										<p className="text-sm leading-6 text-[#34443E]">
											{benefit}
										</p>
									</motion.div>
								))}
							</div>

							{/* Bottom action */}
							<div className="mt-7 border-t border-[#DFE6DE] pt-6 sm:mt-8">
								<Link
									href="/contact"
									className="group flex items-center justify-between gap-4">
									<span>
										<span className="block text-sm font-semibold text-[#0E3C6E]">
											Start a conversation
										</span>
										<span className="mt-1 block text-xs leading-5 text-[#718078]">
											Tell us about your requirements.
										</span>
									</span>

									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFE6DE] text-[#0E3C6E] transition-all duration-300 group-hover:border-[#0E3C6E] group-hover:bg-[#0E3C6E] group-hover:text-white">
										<MoveUpRight size={18} strokeWidth={1.6} />
									</span>
								</Link>
							</div>
						</div>

						{/* Offset decorative frame */}
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-[28px] border border-[#A9C8B2]/70 sm:-bottom-4 sm:-right-4"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
