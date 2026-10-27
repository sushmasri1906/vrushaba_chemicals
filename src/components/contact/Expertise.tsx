"use client";

import {
	ArrowDownRight,
	ArrowRight,
	Atom,
	BadgeCheck,
	FlaskConical,
	Handshake,
	Microscope,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

const expertiseItems = [
	{
		number: "01",
		title: "25 Years of Manufacturing Experience",
		description:
			"Building on years of industry experience to support evolving chemical and personal care ingredient requirements.",
		icon: FlaskConical,
		tag: "Experience & Excellence",
	},
	{
		number: "02",
		title: "Specialised Product Portfolio",
		description:
			"Explore ingredients for sun care, hair care, and other personal care applications, backed by our industry expertise.",
		icon: Atom,
		tag: "Personal Care Ingredients",
	},
	{
		number: "03",
		title: "Technical Understanding",
		description:
			"Discuss product specifications, CAS numbers, and formulation-related requirements with our team to identify suitable solutions.",
		icon: Microscope,
		tag: "Technical Support",
	},
	{
		number: "04",
		title: "Long-Term Business Relationships",
		description:
			"We value transparent communication, dependable support, and lasting partnerships built on trust and mutual growth.",
		icon: Handshake,
		tag: "Partnership & Trust",
	},
];

export default function Expertise() {
	return (
		<section
			id="expertise"
			className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
			{/* Background accents */}
			<div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#DCEAF5]/70 blur-3xl" />

			<div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#E6EFE7]/80 blur-3xl" />

			<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
				{/* Section heading */}
				<div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/10 bg-white/80 px-4 py-2">
							<Sparkles size={15} className="text-[#0365D0]" />

							<span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E3C6E]">
								Why Vrushaba Chemicals
							</span>
						</div>

						<h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
							Your Requirements.
							<span className="mt-2 block text-[#0365D0]">Our Expertise.</span>
						</h2>
					</div>

					<div className="lg:pb-2">
						<p className="max-w-xl text-base leading-8 text-[#303936]/80 sm:text-lg">
							Every requirement deserves the right attention. With 25 years of
							manufacturing experience, we bring industry knowledge, technical
							understanding, and a customer-focused approach to personal care
							ingredients.
						</p>

						<div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#0E3C6E]">
							<span className="h-px w-10 bg-[#0365D0]" />
							Built on experience. Focused on quality.
						</div>
					</div>
				</div>

				{/* Expertise cards */}
				<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
					{expertiseItems.map((item, index) => {
						const Icon = item.icon;

						return (
							<article
								key={item.number}
								className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.75rem] border border-[#0E3C6E]/10 bg-white/90 p-7 shadow-[0_8px_30px_-20px_rgba(14,60,110,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0365D0]/30 hover:shadow-[0_24px_55px_-25px_rgba(14,60,110,0.25)] sm:p-9">
								{/* Hover accent */}
								<div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] transition-transform duration-500 group-hover:scale-x-100" />

								{/* Decorative number */}
								<span className="pointer-events-none absolute -right-2 -top-7 select-none text-[125px] font-bold leading-none tracking-tighter text-[#0E3C6E]/[0.035] transition-colors duration-500 group-hover:text-[#0365D0]/[0.07]">
									{item.number}
								</span>

								<div className="relative flex items-start justify-between gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0365D0]/10 bg-[#DCEAF5]/60 text-[#0E3C6E] transition-all duration-300 group-hover:border-[#0365D0]/20 group-hover:bg-[#0E3C6E] group-hover:text-white">
										<Icon size={25} strokeWidth={1.6} />
									</div>

									<span className="pt-2 text-sm font-semibold tracking-widest text-[#0E3C6E]/35">
										{item.number}
									</span>
								</div>

								<div className="relative mt-7">
									<h3 className="max-w-sm text-xl font-semibold leading-snug text-[#0E3C6E] transition-colors duration-300 group-hover:text-[#0365D0] sm:text-2xl">
										{item.title}
									</h3>

									<p className="mt-4 max-w-lg text-sm leading-7 text-[#303936]/75 sm:text-base sm:leading-8">
										{item.description}
									</p>
								</div>

								<div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 pt-7">
									<span className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F2] px-3 py-2 text-xs font-semibold text-[#0E3C6E]/80">
										<span className="h-1.5 w-1.5 rounded-full bg-[#0365D0]" />
										{item.tag}
									</span>

									<div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0E3C6E]/10 text-[#0E3C6E] transition-all duration-300 group-hover:border-[#0E3C6E] group-hover:bg-[#0E3C6E] group-hover:text-white">
										<ArrowDownRight size={18} strokeWidth={1.7} />
									</div>
								</div>
							</article>
						);
					})}
				</div>

				{/* Bottom feature banner */}
				<div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-[#0E3C6E] p-7 text-white sm:p-9 lg:mt-10 lg:p-11">
					{/* Banner decoration */}
					<div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10" />

					<div className="pointer-events-none absolute -right-4 -top-20 h-64 w-64 rounded-full border border-white/10" />

					<div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#0365D0]/30 blur-3xl" />

					<div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
								<ShieldCheck size={16} />A Partner You Can Count On
							</div>

							<h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
								Let&apos;s Find the Right Solution for Your Requirements.
							</h3>

							<p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/85 sm:text-base">
								From product inquiries to technical discussions, connect with
								our team to explore how our experience can support your
								business.
							</p>
						</div>

						<a
							href="#contact"
							className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#0E3C6E] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#DCEAF5] lg:self-center">
							Discuss Your Requirements
							<ArrowRight
								size={18}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>

				{/* Trust indicators */}
				<div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#0E3C6E]/10 pt-8 sm:gap-x-12">
					<div className="flex items-center gap-2.5">
						<BadgeCheck size={19} className="text-[#0365D0]" />
						<span className="text-sm font-medium text-[#0E3C6E]">
							Industry Experience
						</span>
					</div>

					<div className="flex items-center gap-2.5">
						<FlaskConical size={19} className="text-[#0365D0]" />
						<span className="text-sm font-medium text-[#0E3C6E]">
							Specialised Ingredients
						</span>
					</div>

					<div className="flex items-center gap-2.5">
						<Handshake size={19} className="text-[#0365D0]" />
						<span className="text-sm font-medium text-[#0E3C6E]">
							Customer Partnerships
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
