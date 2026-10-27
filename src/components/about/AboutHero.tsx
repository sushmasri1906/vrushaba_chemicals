"use client";

import Link from "next/link";
import {
	ArrowDown,
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	Atom,
	BadgeCheck,
	CheckCircle2,
	FlaskConical,
	Globe2,
	Handshake,
	Lightbulb,
	Microscope,
	MoveUpRight,
	ShieldCheck,
	Sparkles,
	Target,
} from "lucide-react";

const values = [
	{
		number: "01",
		title: "Quality",
		description:
			"Maintaining a strong commitment to the quality and consistency of the ingredients and solutions we deliver.",
		icon: ShieldCheck,
	},
	{
		number: "02",
		title: "Expertise",
		description:
			"Applying manufacturing experience and technical knowledge to address evolving formulation requirements.",
		icon: FlaskConical,
	},
	{
		number: "03",
		title: "Partnership",
		description:
			"Building dependable business relationships through collaboration, responsiveness, and customer understanding.",
		icon: Globe2,
	},
	{
		number: "04",
		title: "Innovation",
		description:
			"Embracing continuous improvement to support new ideas and evolving needs across the personal care industry.",
		icon: Lightbulb,
	},
];

const visionPoints = [
	"Advance ingredient solutions for evolving personal care needs.",
	"Encourage innovation in cosmetic and personal care formulations.",
	"Build lasting relationships with customers and industry partners.",
];

const missionPoints = [
	"Deliver quality-focused functional and active ingredients.",
	"Apply manufacturing expertise to support formulation needs.",
	"Build trust through consistency, service, and collaboration.",
];

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

export default function AboutUsPage() {
	return (
		<main className="mt-10 overflow-hidden bg-[#FAF8F2] text-[#303936]">
			{/* HERO SECTION */}
			<section className="relative isolate overflow-hidden">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-40 -top-44 -z-10 h-[440px] w-[440px] rounded-full border border-[#0E3C6E]/[0.07] sm:h-[680px] sm:w-[680px] lg:h-[850px] lg:w-[850px]"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-12 -top-20 -z-10 h-[320px] w-[320px] rounded-full border border-[#0365D0]/[0.08] sm:h-[500px] sm:w-[500px]"
				/>

				<div className="mx-auto max-w-[1500px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-14 lg:pb-24 lg:pt-20">
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16 xl:gap-24">
						<div className="relative z-10">
							<div className="mb-7 flex items-center gap-3">
								<span className="h-px w-10 bg-[#0365D0]" />
								<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0E3C6E] sm:text-xs">
									Discover Vrushaba Chemicals
								</p>
							</div>

							<h1 className="max-w-3xl font-serif text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.99] tracking-[-0.055em] text-[#0E3C6E]">
								25 Years of
								<span className="block">Chemistry.</span>
								<span className="mt-3 block text-[#0365D0]">A Future of</span>
								<span className="block text-[#0365D0]">Innovation.</span>
							</h1>

							<p className="mt-7 max-w-xl text-sm leading-8 text-[#53616B] sm:mt-8 sm:text-base sm:leading-9">
								Driving innovation. Delivering quality. Enabling better
								formulations. With 25 years of manufacturing experience, we
								support the evolving needs of the personal care industry through
								functional and active ingredient solutions.
							</p>

							<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
								<Link
									href="/products"
									className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#0E3C6E] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0365D0]">
									Explore Our Products
									<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
										<ArrowUpRight size={17} />
									</span>
								</Link>

								<Link
									href="/contact"
									className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#0E3C6E]/20 px-7 py-3 text-sm font-medium text-[#0E3C6E] transition-all duration-300 hover:border-[#0E3C6E] hover:bg-white">
									Connect With Us
									<ArrowRight size={16} />
								</Link>
							</div>

							<div className="mt-12 flex items-center gap-5 border-t border-[#0E3C6E]/10 pt-7 sm:mt-14">
								<div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border border-[#0E3C6E]/15 bg-white">
									<div className="text-center">
										<span className="block font-serif text-3xl font-medium leading-none text-[#0E3C6E]">
											25
										</span>
										<span className="mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0365D0]">
											Years
										</span>
									</div>
								</div>

								<div>
									<p className="text-sm font-semibold text-[#0E3C6E] sm:text-base">
										Experience That Matters
									</p>
									<p className="mt-1 max-w-sm text-sm leading-6 text-[#64716F]">
										A legacy of manufacturing experience, technical knowledge,
										and commitment to quality.
									</p>
								</div>
							</div>
						</div>

						{/* HERO IMAGE */}
						<div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
							<div className="relative aspect-[4/4.5] overflow-hidden rounded-[28px] bg-[#E6EFE7] sm:rounded-[36px]">
								<img
									src="https://res.cloudinary.com/spkdq7z2/image/upload/v1791972501/k3fx2pyQuONoAerZ5YVRMmoyzVHn_uii-N3M_1sCjO048TexpYttJJK06hDsb4B1ZhAP9baxzOVnN3c8-th9DLkMxZlU1v5BsrisrJT_azwZ67Ina_SR0kBbw2nIVcCo6AjccHygiNGqhEAlY4O4mX1Jt3mThy2hLzFZTUbuwobEMQXAx5WIxp_xZYXBCq2I.jpg"
									alt="Specialty chemical ingredients for personal care formulations"
									className="absolute inset-0 h-full w-full object-cover"
								/>

								<div className="absolute inset-3 rounded-[22px] border border-white/60 sm:inset-4 sm:rounded-[28px]" />

								<div className="absolute inset-0 bg-gradient-to-t from-[#0E3C6E]/80 via-[#0E3C6E]/5 to-transparent" />

								<div className="absolute bottom-8 left-6 right-6 text-white sm:bottom-10 sm:left-10 sm:right-10">
									<div className="mb-4 flex items-center gap-3">
										<span className="h-px w-8 bg-[#A8D0FF]" />
										<span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85">
											The Vrushaba Approach
										</span>
									</div>

									<p className="max-w-md font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]">
										The science behind better care.
									</p>

									<p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
										Specialty chemical solutions for evolving personal care
										formulations.
									</p>
								</div>
							</div>

							<div className="mt-9 flex items-center justify-between px-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#788792] sm:mt-7">
								<span>Science · Quality · Innovation</span>
								<span>01 / 04</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-[#0E3C6E]/10">
					<div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
						<span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#788792]">
							Our Story · Our Purpose · Our Future
						</span>

						<a
							href="#our-story"
							className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#0E3C6E] transition-colors hover:text-[#0365D0]">
							Discover More
							<ArrowDown size={14} />
						</a>
					</div>
				</div>
			</section>

			{/* COMPANY STORY */}
			<section
				id="our-story"
				className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-32">
				<div className="mx-auto grid max-w-[1350px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-14">
					<div>
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-9 bg-[#0365D0]" />
							<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0365D0]">
								Who We Are
							</span>
						</div>

						<h2 className="max-w-md font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-[3.7rem]">
							Experience built on chemistry.
						</h2>

						<p className="mt-6 max-w-sm text-sm leading-7 text-[#64716F]">
							Combining manufacturing experience with a focus on quality,
							technical knowledge, and customer needs.
						</p>

						<div className="mt-9 flex items-center gap-4">
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6EFE7] text-[#0E3C6E]">
								<FlaskConical size={25} strokeWidth={1.5} />
							</div>

							<div>
								<p className="text-sm font-semibold text-[#0E3C6E]">
									25 Years of Experience
								</p>
								<p className="mt-1 text-xs text-[#788792]">
									Specialty Chemicals & Personal Care
								</p>
							</div>
						</div>
					</div>

					<div className="lg:pt-2">
						<p className="text-base leading-8 text-[#53616B] sm:text-lg sm:leading-9">
							With 25 years of experience in chemical manufacturing, Vrushaba
							Chemicals is committed to delivering high-quality functional and
							active ingredients for the personal care industry.
						</p>

						<p className="mt-6 text-sm leading-8 text-[#64716F] sm:text-base sm:leading-9">
							We combine manufacturing expertise, technical knowledge, and a
							commitment to quality to support the evolving needs of cosmetic
							and personal care formulations. Our focus is on providing
							reliable, performance-driven chemical solutions that help
							manufacturers develop effective and innovative products.
						</p>

						<p className="mt-6 text-sm leading-8 text-[#64716F] sm:text-base sm:leading-9">
							From sun care to hair care and hair colour ingredients, we aim to
							be a dependable ingredient partner for manufacturers and
							formulators seeking solutions suited to their product development
							requirements.
						</p>

						<div className="mt-9 border-t border-[#0E3C6E]/10 pt-6">
							<Link
								href="/products"
								className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0E3C6E]">
								Discover Our Expertise
								<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0E3C6E]/20 transition-all duration-300 group-hover:border-[#0E3C6E] group-hover:bg-[#0E3C6E] group-hover:text-white">
									<ArrowRight size={16} />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* VISION & MISSION */}
			<section className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -left-44 top-20 -z-10 h-[450px] w-[450px] rounded-full border border-[#0E3C6E]/[0.06] sm:h-[650px] sm:w-[650px]"
				/>

				<div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-6 flex items-center justify-center gap-3">
							<span className="h-px w-9 bg-[#0365D0]" />
							<span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0365D0]">
								Our Purpose & Direction
							</span>
							<span className="h-px w-9 bg-[#0365D0]" />
						</div>

						<h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
							Guided by purpose.
							<span className="mt-2 block text-[#0365D0]">
								Focused on the future.
							</span>
						</h2>

						<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#64716F] sm:text-base sm:leading-8">
							Our vision and mission shape how we approach chemical
							manufacturing, develop ingredient solutions, and build lasting
							relationships with our customers.
						</p>
					</div>

					<div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
						{/* VISION */}
						<article className="group relative isolate flex min-h-[450px] flex-col overflow-hidden rounded-[28px] bg-[#0E3C6E] p-7 text-white sm:min-h-[490px] sm:rounded-[32px] sm:p-10 lg:p-12">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full border border-white/[0.10] transition-transform duration-700 group-hover:scale-110 sm:h-[440px] sm:w-[440px]"
							/>

							<div
								aria-hidden="true"
								className="pointer-events-none absolute -right-12 -top-12 -z-10 h-60 w-60 rounded-full border border-white/[0.10] sm:h-[340px] sm:w-[340px]"
							/>

							<div className="flex items-start justify-between">
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-[#B9D9FA]">
									<Target size={27} strokeWidth={1.5} />
								</div>

								<span className="font-mono text-xs tracking-[0.2em] text-white/50">
									01 / VISION
								</span>
							</div>

							<div className="mt-10">
								<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B9D9FA]">
									Our Vision
								</p>

								<h3 className="mt-4 max-w-lg font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl">
									Shaping the future of personal care chemistry.
								</h3>

								<p className="mt-6 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
									To be a trusted name in specialty chemicals and personal care
									ingredients, recognized for quality, technical expertise,
									continuous improvement, and meaningful customer partnerships.
								</p>
							</div>

							<div className="mt-auto pt-9">
								<div className="mb-5 h-px w-full bg-white/15" />

								{visionPoints.map((point) => (
									<div
										key={point}
										className="mb-3 flex items-start gap-3 last:mb-0">
										<CheckCircle2
											size={17}
											className="mt-1 shrink-0 text-[#A8D0FF]"
											strokeWidth={1.5}
										/>
										<p className="text-xs leading-6 text-white/75 sm:text-sm">
											{point}
										</p>
									</div>
								))}
							</div>

							<div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#0E3C6E] sm:bottom-10 sm:right-10">
								<MoveUpRight size={18} />
							</div>
						</article>

						{/* MISSION */}
						<article className="group relative isolate flex min-h-[450px] flex-col overflow-hidden rounded-[28px] border border-[#0E3C6E]/10 bg-white p-7 sm:min-h-[490px] sm:rounded-[32px] sm:p-10 lg:p-12">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full border border-[#0365D0]/10 transition-transform duration-700 group-hover:scale-110 sm:h-[440px] sm:w-[440px]"
							/>

							<div
								aria-hidden="true"
								className="pointer-events-none absolute -right-12 -top-12 -z-10 h-60 w-60 rounded-full border border-[#0E3C6E]/[0.06] sm:h-[340px] sm:w-[340px]"
							/>

							<div className="flex items-start justify-between">
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6EFE7] text-[#0E3C6E]">
									<Lightbulb size={27} strokeWidth={1.5} />
								</div>

								<span className="font-mono text-xs tracking-[0.2em] text-[#788792]">
									02 / MISSION
								</span>
							</div>

							<div className="mt-10">
								<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0365D0]">
									Our Mission
								</p>

								<h3 className="mt-4 max-w-lg font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#0E3C6E] sm:text-5xl">
									Delivering quality through chemistry.
								</h3>

								<p className="mt-6 max-w-lg text-sm leading-8 text-[#64716F] sm:text-base">
									To deliver reliable, quality-focused chemical ingredients by
									combining manufacturing experience, technical knowledge, and
									customer understanding to support the evolving needs of the
									personal care industry.
								</p>
							</div>

							<div className="mt-auto pt-9">
								<div className="mb-5 h-px w-full bg-[#0E3C6E]/10" />

								{missionPoints.map((point) => (
									<div
										key={point}
										className="mb-3 flex items-start gap-3 last:mb-0">
										<CheckCircle2
											size={17}
											className="mt-1 shrink-0 text-[#0365D0]"
											strokeWidth={1.5}
										/>
										<p className="text-xs leading-6 text-[#53616B] sm:text-sm">
											{point}
										</p>
									</div>
								))}
							</div>

							<div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#0E3C6E]/15 text-[#0E3C6E] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#0E3C6E] group-hover:text-white sm:bottom-10 sm:right-10">
								<MoveUpRight size={18} />
							</div>
						</article>
					</div>

					<div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#0E3C6E]/10 pt-7 sm:flex-row sm:items-center">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6EFE7] text-[#0E3C6E]">
								<Sparkles size={19} />
							</div>

							<p className="max-w-xl text-xs leading-6 text-[#64716F] sm:text-sm">
								One purpose. One commitment. Better possibilities through
								chemistry.
							</p>
						</div>

						<Link
							href="/contact"
							className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E3C6E] transition-colors hover:text-[#0365D0]">
							Build With Us
							<ArrowRight size={15} />
						</Link>
					</div>
				</div>
			</section>

			{/* YOUR REQUIREMENTS. OUR EXPERTISE. */}
			<section
				id="expertise"
				className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-32">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#DCEAF5]/70 blur-3xl"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#E6EFE7]/80 blur-3xl"
				/>

				<div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
					{/* SECTION HEADING */}
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
								<span className="mt-2 block text-[#0365D0]">
									Our Expertise.
								</span>
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

					{/* EXPERTISE CARDS */}
					<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
						{expertiseItems.map((item) => {
							const Icon = item.icon;

							return (
								<article
									key={item.number}
									className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.75rem] border border-[#0E3C6E]/10 bg-white/90 p-7 shadow-[0_8px_30px_-20px_rgba(14,60,110,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0365D0]/30 hover:shadow-[0_24px_55px_-25px_rgba(14,60,110,0.25)] sm:p-9">
									<div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] transition-transform duration-500 group-hover:scale-x-100" />

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

					{/* EXPERTISE CTA */}
					{/* <div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-[#0E3C6E] p-7 text-white sm:p-9 lg:mt-10 lg:p-11">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10"
						/>

						<div
							aria-hidden="true"
							className="pointer-events-none absolute -right-4 -top-20 h-64 w-64 rounded-full border border-white/10"
						/>

						<div
							aria-hidden="true"
							className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#0365D0]/30 blur-3xl"
						/>

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

							<Link
								href="/contact"
								className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#0E3C6E] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#DCEAF5] lg:self-center">
								Discuss Your Requirements
								<ArrowRight
									size={18}
									className="transition-transform duration-300 group-hover:translate-x-1"
								/>
							</Link>
						</div>
					</div> */}

					{/* TRUST INDICATORS */}
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

			{/* OUR VALUES */}
			<section className="relative isolate overflow-hidden bg-[#0E3C6E] py-20 text-white sm:py-24 lg:py-32">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.07] sm:h-[750px] sm:w-[750px]"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-16 -top-16 -z-10 h-[340px] w-[340px] rounded-full border border-white/[0.07] sm:h-[520px] sm:w-[520px]"
				/>

				<div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
					<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
						<div>
							<div className="mb-6 flex items-center gap-3">
								<span className="h-px w-9 bg-[#A8D0FF]" />
								<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B9D9FA]">
									What Defines Us
								</span>
							</div>

							<h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
								Principles that
								<span className="mt-2 block text-[#A8D0FF]">
									shape our work.
								</span>
							</h2>

							<p className="mt-7 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
								Our approach is grounded in quality, technical understanding,
								and meaningful customer relationships. These principles guide
								our commitment to the personal care ingredient industry.
							</p>

							<div className="mt-9 flex items-center gap-3 text-sm text-white/80">
								<CheckCircle2 size={19} className="text-[#A8D0FF]" />
								<span>Quality. Expertise. Partnership.</span>
							</div>
						</div>

						<div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
							{values.map((value) => {
								const Icon = value.icon;

								return (
									<div
										key={value.number}
										className="border-t border-white/15 py-7 sm:py-8">
										<div className="flex items-center justify-between">
											<span className="font-mono text-xs tracking-widest text-[#A8D0FF]">
												{value.number}
											</span>

											<Icon
												size={23}
												strokeWidth={1.5}
												className="text-[#A8D0FF]"
											/>
										</div>

										<h3 className="mt-7 font-serif text-2xl font-medium">
											{value.title}
										</h3>

										<p className="mt-3 text-sm leading-7 text-white/65">
											{value.description}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
				<div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] bg-[#E6EFE7] px-6 py-12 sm:rounded-[36px] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#0E3C6E]/10 sm:h-[500px] sm:w-[500px]"
					/>

					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#0E3C6E]/10 sm:h-[340px] sm:w-[340px]"
					/>

					<div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
						<div>
							<div className="mb-6 flex items-center gap-3">
								<span className="h-px w-9 bg-[#0365D0]" />
								<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0365D0]">
									Let&apos;s Build Together
								</span>
							</div>

							<h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
								Better formulations begin with the right partner.
							</h2>

							<p className="mt-6 max-w-xl text-sm leading-8 text-[#53616B] sm:text-base">
								Connect with Vrushaba Chemicals to explore ingredient solutions
								for your personal care and cosmetic formulations.
							</p>
						</div>

						<Link
							href="/contact"
							className="group inline-flex min-h-14 items-center justify-center gap-4 self-start rounded-full bg-[#0E3C6E] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0365D0] lg:self-center">
							Talk to Our Team
							<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
								<ArrowUpRight size={17} />
							</span>
						</Link>
					</div>

					<div className="relative z-10 mt-12 flex flex-col justify-between gap-3 border-t border-[#0E3C6E]/15 pt-5 sm:flex-row sm:items-center">
						<span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#53616B] sm:text-[10px]">
							Vrushaba Chemicals
						</span>

						<span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#53616B] sm:text-[10px]">
							25 Years of Chemistry · A Future of Innovation
						</span>
					</div>
				</div>
			</section>
		</main>
	);
}
