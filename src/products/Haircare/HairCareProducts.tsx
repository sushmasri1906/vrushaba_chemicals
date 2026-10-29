"use client";

import Link from "next/link";
import {
	ArrowLeft,
	ArrowDownRight,
	ArrowUpRight,
	Atom,
	BadgeCheck,
	Beaker,
	Check,
	ChevronRight,
	CircleHelp,
	ClipboardList,
	Download,
	FileCheck2,
	FlaskConical,
	Leaf,
	Package,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

import type { ChemicalProduct } from "@/app/data/hair-care/data";

type HairCareProductDetailsProps = {
	product: ChemicalProduct;
};

const theme = {
	primary: "#0E3C6E",
	blue: "#0365D0",
	ivory: "#FAF8F2",
	sage: "#E6EFE7",
	powder: "#DCEAF5",
	charcoal: "#303936",
	muted: "#64748B",
};

const heroBackground =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1792673928/6623babd-f1ff-422a-bad6-5dff083787cc.png";

function enquiryUrl(productName: string, intent: string) {
	return `/contact?product=${encodeURIComponent(productName)}&intent=${encodeURIComponent(intent)}`;
}

function displayValue(value?: string) {
	if (!value || !value.trim()) return "Available on request";
	return value;
}

function SectionHeading({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description?: string;
}) {
	return (
		<div className="max-w-2xl">
			<div className="mb-4 flex items-center gap-3">
				<span className="h-px w-8 bg-[#0365D0]" />
				<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0365D0]">
					{eyebrow}
				</p>
			</div>

			<h2 className="font-serif text-3xl leading-tight tracking-tight text-[#0E3C6E] sm:text-4xl lg:text-5xl">
				{title}
			</h2>

			{description && (
				<p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
					{description}
				</p>
			)}
		</div>
	);
}

function InfoCard({
	label,
	value,
	highlight = false,
}: {
	label: string;
	value?: string;
	highlight?: boolean;
}) {
	return (
		<div
			className={`min-w-0 rounded-2xl border p-4 sm:p-5 ${
				highlight
					? "border-[#0365D0]/10 bg-[#DCEAF5]/55"
					: "border-[#0E3C6E]/[0.07] bg-white"
			}`}>
			<p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[10px]">
				{label}
			</p>

			<p className="mt-2 break-words text-sm font-semibold leading-6 text-[#0E3C6E]">
				{displayValue(value)}
			</p>
		</div>
	);
}

export default function HairCareProductDetails({
	product,
}: HairCareProductDetailsProps) {
	const categoryLabel =
		product.category === "Hair Care Ingredient"
			? "Hair Care Ingredient"
			: "Specialty Ingredient";

	return (
		<main
			className="min-h-screen overflow-hidden text-[#303936]"
			style={{ backgroundColor: theme.ivory }}>
			{/* =====================================================
			    PREMIUM PRODUCT HERO
			===================================================== */}
			<section className="relative isolate overflow-hidden">
				<div
					className="absolute inset-0 -z-20 bg-cover bg-center"
					style={{ backgroundImage: `url("${heroBackground}")` }}
				/>

				<div className="absolute inset-0 -z-10 bg-[#FAF8F2]/95" />

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-40 top-16 -z-10 h-[420px] w-[420px] rounded-full border border-[#0E3C6E]/10 sm:h-[650px] sm:w-[650px]"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-16 top-36 -z-10 h-[300px] w-[300px] rounded-full border border-[#0365D0]/10 sm:h-[460px] sm:w-[460px]"
				/>

				<div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28">
					{/* Breadcrumbs */}
					<nav
						aria-label="Breadcrumb"
						className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-500">
						<Link href="/" className="transition hover:text-[#0365D0]">
							Home
						</Link>

						<ChevronRight size={13} />

						<Link href="/products" className="transition hover:text-[#0365D0]">
							Products
						</Link>

						<ChevronRight size={13} />

						<Link
							href="/products/hair-care"
							className="transition hover:text-[#0365D0]">
							Hair Care
						</Link>

						<ChevronRight size={13} />

						<span className="font-medium text-[#0E3C6E]">{product.name}</span>
					</nav>

					<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
						{/* Product information */}
						<div className="max-w-3xl">
							<Link
								href="/products/hair-care"
								className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/10 bg-white/80 px-4 py-2.5 text-xs font-medium text-[#0E3C6E] transition hover:border-[#0365D0]/40 hover:bg-white">
								<ArrowLeft size={14} />
								Back to Hair Care
							</Link>

							<div className="mb-6 flex flex-wrap items-center gap-3">
								<span className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/10 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0E3C6E]">
									<span className="h-1.5 w-1.5 rounded-full bg-[#0365D0]" />
									Vrushaba Chemicals
								</span>

								<span className="rounded-full bg-[#E6EFE7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#315F49]">
									{categoryLabel}
								</span>
							</div>

							<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0365D0]">
								Product code · {product.code}
							</p>

							<h1 className="max-w-3xl break-words font-serif text-4xl leading-[1.1] tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-7xl">
								{product.name}
							</h1>

							<p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
								{product.chemicalName}
							</p>

							<p className="mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
								{product.description}
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									href={enquiryUrl(product.name, "question")}
									className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0E3C6E] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3C6E]/10 transition hover:-translate-y-0.5 hover:bg-[#0365D0]">
									Enquire About This Chemical
									<ArrowUpRight
										size={17}
										className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Link>

								<Link
									href={enquiryUrl(product.name, "spec")}
									className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0E3C6E]/15 bg-white/80 px-6 py-4 text-sm font-semibold text-[#0E3C6E] transition hover:border-[#0365D0]/40 hover:bg-white">
									<FileCheck2 size={16} />
									Request Specifications
								</Link>
							</div>

							{/* Trust indicators */}
							<div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-[#0E3C6E]/10 pt-6">
								<div className="flex items-center gap-2 text-xs text-slate-600">
									<ShieldCheck size={17} className="text-[#0365D0]" />
									Technical Information
								</div>

								<div className="flex items-center gap-2 text-xs text-slate-600">
									<FileCheck2 size={17} className="text-[#0365D0]" />
									Document Requests
								</div>

								<div className="flex items-center gap-2 text-xs text-slate-600">
									<FlaskConical size={17} className="text-[#0365D0]" />
									Application Assessment
								</div>
							</div>
						</div>

						{/* Premium chemical identity card */}
						<div className="relative mx-auto w-full max-w-lg lg:ml-auto">
							<div className="absolute -inset-3 rounded-[2rem] border border-[#0E3C6E]/10" />

							<div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-[0_25px_90px_rgba(14,60,110,0.10)] backdrop-blur-xl sm:p-9">
								<div
									aria-hidden="true"
									className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#DCEAF5]/80 blur-3xl"
								/>

								<div className="relative">
									<div className="flex items-start justify-between gap-4">
										<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCEAF5] text-[#0E3C6E]">
											<Atom size={28} strokeWidth={1.4} />
										</div>

										<span className="rounded-full border border-[#0E3C6E]/10 bg-[#FAF8F2] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#0E3C6E]">
											Chemical Profile
										</span>
									</div>

									<p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0365D0]">
										Ingredient Identification
									</p>

									<h2 className="mt-3 break-words font-serif text-3xl leading-tight text-[#0E3C6E] sm:text-4xl">
										{product.chemicalName}
									</h2>

									<p className="mt-4 text-sm leading-7 text-slate-500">
										Refer to the current supplier documentation to verify
										chemical identity, grade, specifications, and intended
										application.
									</p>

									<div className="mt-8 space-y-3">
										<div className="flex items-start justify-between gap-4 rounded-xl bg-[#FAF8F2] p-4">
											<span className="text-xs text-slate-500">CAS Number</span>

											<span className="break-all text-right font-mono text-sm font-semibold text-[#0E3C6E]">
												{product.cas}
											</span>
										</div>

										<div className="flex items-start justify-between gap-4 rounded-xl bg-[#DCEAF5]/55 p-4">
											<span className="text-xs text-slate-500">
												INCI / Ingredient
											</span>

											<span className="max-w-[60%] break-words text-right text-sm font-semibold text-[#0E3C6E]">
												{displayValue(product.inci)}
											</span>
										</div>

										<div className="flex items-start justify-between gap-4 rounded-xl bg-[#FAF8F2] p-4">
											<span className="text-xs text-slate-500">EC Number</span>

											<span className="text-right text-sm font-semibold text-[#0E3C6E]">
												{displayValue(product.ec)}
											</span>
										</div>
									</div>

									<div className="mt-6 flex items-start gap-3 border-t border-slate-100 pt-5">
										<BadgeCheck
											size={18}
											className="mt-0.5 shrink-0 text-[#0365D0]"
										/>

										<p className="text-xs leading-6 text-slate-500">
											For verified product specifications, request the current
											Technical Data Sheet and Certificate of Analysis.
										</p>
									</div>
								</div>
							</div>

							<div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-[#0E3C6E]/10 sm:flex">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#315F49]">
									<FlaskConical size={19} />
								</div>

								<div>
									<p className="text-xs font-semibold text-[#0E3C6E]">
										Product-specific information
									</p>
									<p className="mt-1 text-[10px] text-slate-500">
										Technical review available on request
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    QUICK TECHNICAL OVERVIEW
			===================================================== */}
			<section className="border-y border-[#0E3C6E]/5 bg-white">
				<div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
					<div className="mb-6 flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
							<ClipboardList size={19} />
						</div>

						<div>
							<h2 className="text-sm font-semibold text-[#0E3C6E]">
								Technical Snapshot
							</h2>
							<p className="mt-1 text-xs text-slate-500">
								Key product identification and available technical data
							</p>
						</div>
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
						<InfoCard label="Product Code" value={product.code} />
						<InfoCard label="CAS Number" value={product.cas} highlight />
						<InfoCard
							label="Molecular Formula"
							value={product.molecularFormula}
						/>
						<InfoCard
							label="Molecular Weight"
							value={product.molecularWeight}
							highlight
						/>
					</div>
				</div>
			</section>

			{/* =====================================================
			    PRODUCT OVERVIEW
			===================================================== */}
			<section className="py-16 sm:py-24">
				<div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
					<div>
						<SectionHeading
							eyebrow="01 · Product Overview"
							title="Understand the ingredient."
							description="Product-specific information to help your technical team assess the ingredient for its intended application."
						/>

						<div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#0E3C6E]/10 bg-white p-5">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#315F49]">
								<Leaf size={20} />
							</div>

							<div>
								<h3 className="text-sm font-semibold text-[#0E3C6E]">
									Ingredient Identity
								</h3>
								<p className="mt-2 text-xs leading-6 text-slate-500">
									{product.chemicalName}. Confirm the exact grade, identity, and
									intended function using current supplier documentation.
								</p>
							</div>
						</div>
					</div>

					<div className="space-y-5">
						<div className="rounded-[1.5rem] border border-[#0E3C6E]/[0.07] bg-white p-6 shadow-[0_10px_40px_rgba(14,60,110,0.035)] sm:p-8">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
									<Atom size={19} />
								</div>
								<h3 className="text-base font-semibold text-[#0E3C6E]">
									About This Product
								</h3>
							</div>

							<p className="mt-5 text-sm leading-8 text-slate-600">
								{product.overview}
							</p>
						</div>

						<div className="rounded-[1.5rem] border border-[#0E3C6E]/[0.07] bg-white p-6 shadow-[0_10px_40px_rgba(14,60,110,0.035)] sm:p-8">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#315F49]">
									<Beaker size={19} />
								</div>
								<h3 className="text-base font-semibold text-[#0E3C6E]">
									Functional Information
								</h3>
							</div>

							<p className="mt-5 text-sm leading-8 text-slate-600">
								{product.function}
							</p>
						</div>

						{product.synonyms.length > 0 && (
							<div className="rounded-[1.5rem] border border-[#0E3C6E]/[0.07] bg-white p-6 sm:p-8">
								<h3 className="text-sm font-semibold text-[#0E3C6E]">
									Also Known As
								</h3>

								<div className="mt-4 flex flex-wrap gap-2">
									{product.synonyms.map((synonym) => (
										<span
											key={synonym}
											className="rounded-full bg-[#FAF8F2] px-4 py-2 text-xs text-slate-600">
											{synonym}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* =====================================================
			    CHEMICAL INFORMATION
			===================================================== */}
			<section className="border-y border-[#0E3C6E]/5 bg-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
						<div>
							<SectionHeading
								eyebrow="02 · Chemical Profile"
								title="The details behind the chemistry."
								description="Review the available chemical identifiers and physical information for this specific ingredient."
							/>

							<div className="mt-8 rounded-2xl bg-[#0E3C6E] p-6 text-white sm:p-8">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#DCEAF5]">
									<Atom size={23} />
								</div>

								<h3 className="mt-6 font-serif text-2xl">Chemical reference</h3>

								<p className="mt-3 text-sm leading-7 text-white/65">
									Use the CAS number and supplier-issued technical documents to
									confirm that the chemical identity corresponds to the grade
									being supplied.
								</p>

								<Link
									href={enquiryUrl(product.name, "spec")}
									className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#DCEAF5]">
									Request verified data
									<ArrowUpRight size={16} />
								</Link>
							</div>
						</div>

						<div>
							<div className="grid gap-3 sm:grid-cols-2">
								<InfoCard
									label="Chemical Name"
									value={product.chemicalName}
									highlight
								/>
								<InfoCard label="INCI / Ingredient" value={product.inci} />
								<InfoCard label="CAS Number" value={product.cas} />
								<InfoCard label="EC Number" value={product.ec} highlight />
								<InfoCard
									label="Molecular Formula"
									value={product.molecularFormula}
								/>
								<InfoCard
									label="Molecular Weight"
									value={product.molecularWeight}
									highlight
								/>
								<InfoCard label="Physical Form" value={product.physicalForm} />
								<InfoCard
									label="Appearance"
									value={product.appearance}
									highlight
								/>
								<InfoCard label="Solubility" value={product.solubility} />
								<InfoCard
									label="Recommended Dosage"
									value={product.recommendedDosage}
									highlight
								/>
								<InfoCard label="HSN Code" value={product.hsnCode} />
							</div>

							{/* {product.hsnNote && (
								<div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
									<CircleHelp
										size={18}
										className="mt-0.5 shrink-0 text-amber-700"
									/>
									<div>
										<h3 className="text-sm font-semibold text-amber-900">
											HSN Classification Note
										</h3>
										<p className="mt-2 text-xs leading-6 text-amber-800">
											{product.hsnNote}
										</p>
									</div>
								</div>
							)} */}

							{product.chemicalStructure.image && (
								<div className="mt-6 overflow-hidden rounded-2xl border border-[#0E3C6E]/10 bg-[#FAF8F2] p-6 sm:p-8">
									<div className="flex items-center justify-between gap-4">
										<div>
											<h3 className="text-sm font-semibold text-[#0E3C6E]">
												Chemical Structure
											</h3>
											<p className="mt-1 text-xs leading-5 text-slate-500">
												{product.chemicalStructure.alt}
											</p>
										</div>

										<Atom size={21} className="shrink-0 text-[#0365D0]" />
									</div>

									<div className="mt-5 flex min-h-48 items-center justify-center rounded-xl border border-[#0E3C6E]/5 bg-white p-4">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={product.chemicalStructure.image}
											alt={product.chemicalStructure.alt}
											className="max-h-64 max-w-full object-contain"
											loading="lazy"
										/>
									</div>

									{/* <p className="mt-3 text-[10px] leading-5 text-slate-400">
										Source: {product.chemicalStructure.source}. Verify the
										structure against authoritative supplier documentation
										before relying on it.
									</p> */}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    APPLICATIONS
			===================================================== */}
			<section className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<SectionHeading
						eyebrow="03 · Applications"
						title="Explore potential applications."
						description="Application suitability depends on the chemical grade, formulation system, technical evidence, and requirements of the intended market."
					/>

					<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
						{product.applications.map((application, index) => (
							<article
								key={application.name}
								className="group rounded-[1.5rem] border border-[#0E3C6E]/[0.08] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0365D0]/25 hover:shadow-[0_20px_50px_rgba(14,60,110,0.08)] sm:p-7">
								<div className="flex items-start justify-between gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCEAF5] text-[#0E3C6E] transition group-hover:bg-[#0E3C6E] group-hover:text-white">
										<FlaskConical size={21} />
									</div>

									<span className="font-serif text-3xl text-[#0E3C6E]/10">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								<h3 className="mt-7 text-base font-semibold leading-6 text-[#0E3C6E]">
									{application.name}
								</h3>

								<p className="mt-3 text-sm leading-7 text-slate-500">
									{application.description}
								</p>

								<div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-medium text-[#0365D0]">
									<Check size={15} />
									Application-specific assessment
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* =====================================================
			    FORMULATION GUIDANCE
			===================================================== */}
			<section className="border-y border-[#0E3C6E]/5 bg-white py-16 sm:py-24">
				<div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
					<div>
						<SectionHeading
							eyebrow="04 · Formulation Guidance"
							title="Make informed formulation decisions."
							description="Use product-specific technical documentation and appropriate testing to evaluate the ingredient for your application."
						/>

						<div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#E6EFE7] p-5">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#315F49]">
								<ShieldCheck size={21} />
							</div>

							<div>
								<h3 className="text-sm font-semibold text-[#315F49]">
									Technical review
								</h3>
								<p className="mt-1 text-xs leading-5 text-[#315F49]/80">
									Confirm suitability before production or commercial use.
								</p>
							</div>
						</div>

						<Link
							href={enquiryUrl(product.name, "question")}
							className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
							Ask about this ingredient
							<ArrowUpRight size={16} />
						</Link>
					</div>

					<div className="rounded-[1.5rem] border border-[#0E3C6E]/[0.08] bg-[#FAF8F2] p-6 sm:p-8">
						<h3 className="text-base font-semibold text-[#0E3C6E]">
							Formulation considerations
						</h3>

						<div className="mt-6 space-y-4">
							{product.formulationNotes.map((note, index) => (
								<div key={note} className="flex gap-4">
									<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0E3C6E] text-white">
										<span className="text-[10px] font-semibold">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>

									<p className="pt-0.5 text-sm leading-7 text-slate-600">
										{note}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    TECHNICAL SPECIFICATIONS
			===================================================== */}
			{/* <section className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<SectionHeading
						eyebrow="05 · Technical Data"
						title="Technical specifications."
						description="Review available product specifications. Values marked for confirmation should be verified against the latest supplier-issued documentation."
					/>

					<div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#0E3C6E]/10 bg-white shadow-[0_12px_45px_rgba(14,60,110,0.04)]">
						<div className="grid grid-cols-[0.8fr_1.2fr] gap-4 bg-[#0E3C6E] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
							<span>Parameter</span>
							<span>Available information</span>
						</div>

						{product.technicalSpecifications.map((specification, index) => (
							<div
								key={specification.label}
								className={`grid grid-cols-[0.8fr_1.2fr] gap-4 px-5 py-5 sm:px-8 ${
									index % 2 === 0 ? "bg-white" : "bg-[#FAF8F2]/70"
								} border-b border-slate-100 last:border-0`}>
								<span className="text-xs leading-6 text-slate-500 sm:text-sm">
									{specification.label}
								</span>

								<span className="break-words text-xs font-medium leading-6 text-[#0E3C6E] sm:text-sm">
									{specification.value}
								</span>
							</div>
						))}
					</div>

					<div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#0E3C6E]/10 bg-white p-5">
						<CircleHelp size={18} className="mt-0.5 shrink-0 text-[#0365D0]" />

						<p className="text-xs leading-6 text-slate-500">
							The displayed specifications are for product reference. Always
							confirm the exact grade, test methods, acceptance limits, and
							current values with the supplier before use.
						</p>
					</div>
				</div>
			</section> */}

			{/* =====================================================
			    PACKAGING AND STORAGE
			===================================================== */}
			{/* <section className="border-y border-[#0E3C6E]/5 bg-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
						<div>
							<SectionHeading
								eyebrow="06 · Supply Information"
								title="Packaging and storage."
								description="Confirm commercial availability and handling requirements for the specific grade being requested."
							/>

							<div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#DCEAF5]/60 p-5">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0E3C6E]">
									<Package size={22} />
								</div>
								<div>
									<h3 className="text-sm font-semibold text-[#0E3C6E]">
										Supply details
									</h3>
									<p className="mt-1 text-xs leading-5 text-slate-500">
										Ask our team to confirm current availability and packaging.
									</p>
								</div>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<InfoCard
								label="Available Pack Size"
								value={product.packaging.packSize}
								highlight
							/>
							<InfoCard
								label="Minimum Order Quantity"
								value={product.packaging.moq}
							/>
							<InfoCard
								label="Shelf Life"
								value={product.packaging.shelfLife}
							/>
							<InfoCard
								label="Storage Requirements"
								value={product.packaging.storage}
								highlight
							/>
						</div>
					</div>
				</div>
			</section> */}

			{/* =====================================================
			    DOCUMENTATION
			===================================================== */}
			{/* <section className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
						<div>
							<SectionHeading
								eyebrow="07 · Documentation"
								title="The information your team needs."
								description="Request the supporting documentation required for technical evaluation, quality review, and procurement."
							/>

							<div className="mt-8 rounded-2xl bg-[#0E3C6E] p-6 text-white">
								<FileCheck2 size={25} className="text-[#DCEAF5]" />

								<h3 className="mt-5 font-serif text-2xl">Need a document?</h3>

								<p className="mt-3 text-sm leading-7 text-white/65">
									Contact our team to request available product-specific
									documents and confirm the latest revision.
								</p>

								<Link
									href={enquiryUrl(product.name, "spec")}
									className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#0E3C6E] transition hover:bg-[#DCEAF5]">
									Request Documents
									<ArrowUpRight size={15} />
								</Link>
							</div>
						</div>

						<div className="space-y-3">
							{product.documents.map((document) => (
								<div
									key={document.label}
									className="flex items-center justify-between gap-4 rounded-2xl border border-[#0E3C6E]/[0.08] bg-white p-4 transition hover:border-[#0365D0]/25 sm:p-5">
									<div className="flex min-w-0 items-center gap-4">
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
											<FileCheck2 size={19} />
										</div>

										<div className="min-w-0">
											<h3 className="break-words text-sm font-semibold text-[#0E3C6E]">
												{document.label}
											</h3>

											<p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
												{document.type}
											</p>
										</div>
									</div>

									{document.url ? (
										<a
											href={document.url}
											target="_blank"
											rel="noreferrer"
											aria-label={`Download ${document.label}`}
											className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0E3C6E] text-white transition hover:bg-[#0365D0]">
											<Download size={17} />
										</a>
									) : document.requestable ? (
										<Link
											href={enquiryUrl(product.name, "spec")}
											aria-label={`Request ${document.label}`}
											className="shrink-0 rounded-full border border-[#0E3C6E]/15 px-4 py-2.5 text-[10px] font-semibold text-[#0E3C6E] transition hover:border-[#0365D0]/40 hover:bg-[#DCEAF5]/40">
											Request
										</Link>
									) : (
										<span className="text-[10px] text-slate-400">
											Unavailable
										</span>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section> */}

			{/* =====================================================
			    REGULATORY INFORMATION
			===================================================== */}
			{/* <section className="border-y border-[#0E3C6E]/5 bg-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
					<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
						<div>
							<SectionHeading
								eyebrow="08 · Responsible Use"
								title="Regulatory considerations."
								description="Requirements depend on the substance, grade, finished-product category, intended use, and destination market."
							/>
						</div>

						<div className="rounded-[1.5rem] border border-[#0E3C6E]/10 bg-[#DCEAF5]/35 p-6 sm:p-8">
							<div className="flex items-center gap-3">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0365D0]">
									<ShieldCheck size={21} />
								</div>

								<h3 className="text-base font-semibold text-[#0E3C6E]">
									Important product considerations
								</h3>
							</div>

							<ul className="mt-6 space-y-4">
								{product.regulatoryNotes.map((note) => (
									<li key={note} className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0365D0]" />
										<span className="text-sm leading-7 text-slate-600">
											{note}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-7 border-t border-[#0E3C6E]/10 pt-5">
								<p className="text-xs leading-6 text-slate-500">
									Regulatory information should be confirmed against current
									official requirements and the applicable supplier documents
									before making claims or using the ingredient commercially.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* =====================================================
			    PREMIUM ENQUIRY CTA
			===================================================== */}
			<section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
				<div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0E3C6E]">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/[0.09]"
					/>

					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-8 -top-12 h-72 w-72 rounded-full border border-white/[0.09]"
					/>

					<div
						aria-hidden="true"
						className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0365D0]/30 blur-3xl"
					/>

					<div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
						<div className="max-w-2xl">
							<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
								<Sparkles size={14} className="text-[#DCEAF5]" />
								<span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#DCEAF5]">
									Discuss Your Requirements
								</span>
							</div>

							<h2 className="break-words font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
								Interested in
								<br className="hidden sm:block" /> {product.name}?
							</h2>

							<p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
								Contact Vrushaba Chemicals for product availability, technical
								documentation, samples, and a quotation for your requirements.
							</p>

							<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
								<div className="flex items-center gap-2 text-xs text-white/75">
									<BadgeCheck size={15} className="text-[#DCEAF5]" />
									Product-specific enquiry
								</div>

								<div className="flex items-center gap-2 text-xs text-white/75">
									<BadgeCheck size={15} className="text-[#DCEAF5]" />
									Technical documents
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Link
								href={enquiryUrl(product.name, "sample")}
								className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3C6E] transition hover:bg-[#DCEAF5]">
								Request a Sample
								<ArrowUpRight size={17} />
							</Link>

							<Link
								href={enquiryUrl(product.name, "question")}
								className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10">
								Contact Our Team
								<ArrowDownRight size={17} />
							</Link>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-4">
					<Link
						href="/products/hair-care"
						className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
						<ArrowLeft size={15} />
						Return to Hair Care Catalogue
					</Link>

					<p className="text-[10px] leading-5 text-slate-400">
						Vrushaba Chemicals · Product information
					</p>
				</div>
			</section>
		</main>
	);
}
