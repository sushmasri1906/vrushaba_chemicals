import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	Beaker,
	BookOpen,
	CheckCircle2,
	ClipboardList,
	FlaskConical,
} from "lucide-react";

import type { ChemicalProduct } from "@/app/data/sun-care/data";

type SunCareProductDetailsProps = {
	product: ChemicalProduct;
};

const sectionClass =
	"rounded-3xl border border-[#0E3C6E]/10 bg-white p-6 shadow-sm sm:p-8";

const headingClass = "font-serif text-2xl text-[#0E3C6E] sm:text-3xl";

export default function SunCareProductDetails({
	product,
}: SunCareProductDetailsProps) {
	const categoryHref = "/products/sun-care";

	return (
		<main className="min-h-screen bg-[#FAF8F2] text-[#303936]">
			{/* HERO */}
			<section className="relative overflow-hidden bg-[#DCEAF5]">
				<div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/40 blur-3xl" />
				<div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#E6EFE7]/80 blur-3xl" />

				<div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
					{/* BREADCRUMB */}
					<nav
						aria-label="Breadcrumb"
						className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#536B7A]">
						<Link href="/" className="transition hover:text-[#0365D0]">
							Home
						</Link>

						<span>/</span>

						<Link href="/products" className="transition hover:text-[#0365D0]">
							Products
						</Link>

						<span>/</span>

						<Link
							href={categoryHref}
							className="transition hover:text-[#0365D0]">
							Sun Care
						</Link>

						<span>/</span>

						<span className="font-medium text-[#0E3C6E]">{product.name}</span>
					</nav>

					<div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">
						{/* PRODUCT INTRODUCTION */}
						<div>
							<div className="mb-6 flex flex-wrap items-center gap-3">
								<span className="rounded-full border border-[#0E3C6E]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0E3C6E]">
									{product.category}
								</span>

								<span className="rounded-full bg-[#0E3C6E] px-4 py-2 text-xs font-semibold text-white">
									Product Code: {product.code}
								</span>
							</div>

							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#56728A]">
								Vrushaba Chemicals · Product Profile
							</p>

							<h1 className="max-w-3xl font-serif text-4xl leading-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
								{product.name}
							</h1>

							<p className="mt-6 max-w-2xl text-base leading-8 text-[#354D5D] sm:text-lg">
								{product.description}
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								<a
									href="#product-enquiry"
									className="inline-flex items-center gap-2 rounded-full bg-[#0E3C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0365D0]">
									Enquire About This Product
									<ArrowRight size={17} />
								</a>

								<Link
									href={categoryHref}
									className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[#0E3C6E] transition hover:bg-white">
									<ArrowLeft size={17} />
									All Sun Care Products
								</Link>
							</div>
						</div>

						{/* PRODUCT SUMMARY CARD */}
						<div className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(14,60,110,0.08)] backdrop-blur">
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E3C6E] text-white">
								<FlaskConical size={27} />
							</div>

							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#678096]">
								Product Identification
							</p>

							<h2 className="mt-3 font-serif text-2xl text-[#0E3C6E]">
								Technical Overview
							</h2>

							<div className="mt-6 space-y-5">
								<InfoRow label="Product Code" value={product.code} />

								<InfoRow label="CAS Number" value={product.cas} />

								<InfoRow label="INCI Name" value={product.inci} />

								{product.ec && <InfoRow label="EC Number" value={product.ec} />}

								{product.hsnCode && (
									<InfoRow label="HSN Code" value={product.hsnCode} />
								)}

								<InfoRow label="Category" value={product.category} />

								{product.uvBand && (
									<InfoRow label="UV Band" value={product.uvBand} />
								)}
							</div>

							<p className="mt-6 border-t border-[#0E3C6E]/10 pt-4 text-xs leading-6 text-[#66716D]">
								For commercial classification, verify the HSN code against the
								applicable Indian customs and GST tariff.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* MAIN PRODUCT CONTENT */}
			<section className="mx-auto max-w-7xl space-y-8 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
				{/* OVERVIEW AND FUNCTION */}
				<div className="grid gap-8 lg:grid-cols-2">
					{/* PRODUCT OVERVIEW */}
					<section className={sectionClass}>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
							<BookOpen size={23} />
						</div>

						<h2 className={headingClass}>Product Overview</h2>

						<p className="mt-5 text-sm leading-8 text-[#56615E] sm:text-base">
							{product.overview}
						</p>

						{product.synonyms.length > 0 && (
							<div className="mt-7 border-t border-[#0E3C6E]/10 pt-5">
								<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
									Also Known As
								</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{product.synonyms.map((synonym) => (
										<span
											key={synonym}
											className="rounded-full bg-[#F1F5F2] px-3 py-2 text-xs text-[#354D5D]">
											{synonym}
										</span>
									))}
								</div>
							</div>
						)}
					</section>

					{/* FUNCTION AND PROPERTIES */}
					<section className={sectionClass}>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#0E3C6E]">
							<Beaker size={23} />
						</div>

						<h2 className={headingClass}>Function &amp; Properties</h2>

						<p className="mt-5 text-sm leading-8 text-[#56615E] sm:text-base">
							{product.function}
						</p>

						<div className="mt-7 grid gap-4 sm:grid-cols-2">
							{product.uvBand && (
								<PropertyCard label="UV Band" value={product.uvBand} />
							)}

							{product.peakAbsorption && (
								<PropertyCard
									label="Peak Absorption"
									value={product.peakAbsorption}
								/>
							)}

							{product.physicalForm && (
								<PropertyCard
									label="Physical Form"
									value={product.physicalForm}
								/>
							)}

							{product.appearance && (
								<PropertyCard label="Appearance" value={product.appearance} />
							)}
						</div>
					</section>
				</div>

				{/* CHEMICAL STRUCTURE */}
				<section className={sectionClass}>
					<div className="mb-7 flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
							<FlaskConical size={23} />
						</div>

						<div>
							<h2 className={headingClass}>Chemical Structure</h2>

							<p className="mt-2 text-sm leading-7 text-[#66716D]">
								Two-dimensional chemical structure and molecular identification.
							</p>
						</div>
					</div>

					<div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
						{/* STRUCTURE IMAGE */}
						<div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-[#0E3C6E]/10 bg-white p-6 sm:min-h-[340px]">
							{product.chemicalStructure?.image ? (
								<img
									src={product.chemicalStructure.image}
									alt={product.chemicalStructure.alt}
									className="max-h-[300px] w-full object-contain sm:max-h-[340px]"
									loading="lazy"
								/>
							) : (
								<div className="max-w-sm text-center">
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCEAF5] text-[#0E3C6E]">
										<FlaskConical size={30} />
									</div>

									<h3 className="font-serif text-xl text-[#0E3C6E]">
										Structure Not Available
									</h3>

									<p className="mt-3 text-sm leading-7 text-[#66716D]">
										The chemical structure will be displayed once the identity
										and structure have been verified.
									</p>
								</div>
							)}
						</div>

						{/* STRUCTURE DETAILS */}
						<div className="space-y-5">
							<div>
								<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
									Chemical Name
								</p>

								<p className="mt-2 break-words text-base font-semibold leading-7 text-[#0E3C6E]">
									{product.chemicalName || product.inci}
								</p>
							</div>

							<div className="border-t border-[#0E3C6E]/10 pt-5">
								<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
									CAS Number
								</p>

								<p className="mt-2 text-sm font-medium text-[#354D5D]">
									{product.cas}
								</p>
							</div>

							{product.molecularFormula && (
								<div className="border-t border-[#0E3C6E]/10 pt-5">
									<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
										Molecular Formula
									</p>

									<p className="mt-2 text-sm font-medium text-[#354D5D]">
										{product.molecularFormula}
									</p>
								</div>
							)}

							{product.molecularWeight && (
								<div className="border-t border-[#0E3C6E]/10 pt-5">
									<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
										Molecular Weight
									</p>

									<p className="mt-2 text-sm font-medium text-[#354D5D]">
										{product.molecularWeight}
									</p>
								</div>
							)}

							{product.chemicalStructure?.status ===
								"verification-required" && (
								<div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
									<p className="text-sm font-semibold text-amber-900">
										Verification Required
									</p>

									<p className="mt-2 text-sm leading-6 text-amber-800">
										Confirm the exact chemical identity with the supplier before
										publishing a structure image.
									</p>
								</div>
							)}

							{product.chemicalStructure?.source && (
								<p className="text-xs leading-6 text-[#66716D]">
									Structure source: {product.chemicalStructure.source}
								</p>
							)}
						</div>
					</div>
				</section>

				{/* TECHNICAL SPECIFICATIONS */}
				<section className={sectionClass}>
					<div className="mb-7 flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
							<ClipboardList size={23} />
						</div>

						<div>
							<h2 className={headingClass}>Technical Specifications</h2>

							<p className="mt-2 text-sm text-[#66716D]">
								Product identification and technical information.
							</p>
						</div>
					</div>

					<div className="overflow-hidden rounded-2xl border border-[#0E3C6E]/10">
						{/* BASIC IDENTIFICATION */}
						<SpecificationRow
							label="Product Name"
							value={product.name}
							index={0}
						/>

						<SpecificationRow
							label="Product Code"
							value={product.code}
							index={1}
						/>

						<SpecificationRow
							label="CAS Number"
							value={product.cas}
							index={2}
						/>

						<SpecificationRow
							label="INCI Name"
							value={product.inci}
							index={3}
						/>

						{product.ec && (
							<SpecificationRow
								label="EC Number"
								value={product.ec}
								index={4}
							/>
						)}

						{product.hsnCode && (
							<SpecificationRow
								label="HSN Code"
								value={product.hsnCode}
								index={5}
							/>
						)}

						{product.chemicalName && (
							<SpecificationRow
								label="Chemical Name"
								value={product.chemicalName}
								index={6}
							/>
						)}

						{product.molecularFormula && (
							<SpecificationRow
								label="Molecular Formula"
								value={product.molecularFormula}
								index={7}
							/>
						)}

						{product.molecularWeight && (
							<SpecificationRow
								label="Molecular Weight"
								value={product.molecularWeight}
								index={8}
							/>
						)}

						{product.uvBand && (
							<SpecificationRow
								label="UV Band"
								value={product.uvBand}
								index={9}
							/>
						)}

						{/* PRODUCT-SPECIFIC SPECIFICATIONS */}
						{product.technicalSpecifications.map((specification, index) => (
							<SpecificationRow
								key={`${specification.label}-${index}`}
								label={specification.label}
								value={specification.value}
								index={index + 10}
							/>
						))}
					</div>

					{product.solubility && (
						<div className="mt-6 rounded-2xl bg-[#DCEAF5]/50 p-5">
							<p className="text-xs font-semibold uppercase tracking-wider text-[#0E3C6E]">
								Solubility
							</p>

							<p className="mt-2 text-sm leading-7 text-[#56615E]">
								{product.solubility}
							</p>
						</div>
					)}

					{product.hsnCode && (
						<div className="mt-6 rounded-2xl border border-[#0E3C6E]/10 bg-[#E6EFE7]/50 p-5">
							<p className="text-xs font-semibold uppercase tracking-wider text-[#0E3C6E]">
								HSN Classification
							</p>

							<p className="mt-2 text-sm leading-7 text-[#56615E]">
								HSN Code:{" "}
								<span className="font-semibold text-[#0E3C6E]">
									{product.hsnCode}
								</span>
							</p>

							<p className="mt-2 text-xs leading-6 text-[#66716D]">
								Confirm the applicable tariff classification and GST treatment
								before using this code on invoices or tax documents.
							</p>
						</div>
					)}
				</section>

				{/* APPLICATIONS */}
				<section className={sectionClass}>
					<div className="mb-7">
						<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#678096]">
							Where It Can Be Used
						</p>

						<h2 className={headingClass}>Applications</h2>

						<p className="mt-3 max-w-2xl text-sm leading-7 text-[#66716D]">
							Explore the application areas listed for this ingredient. Final
							suitability depends on technical documentation, formulation
							testing, and applicable regulations.
						</p>
					</div>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{product.applications.map((application, index) => (
							<article
								key={`${application.name}-${index}`}
								className="rounded-2xl border border-[#0E3C6E]/10 bg-[#FAF8F2] p-6 transition hover:border-[#0365D0]/30 hover:shadow-md">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
									<CheckCircle2 size={21} />
								</div>

								<h3 className="font-serif text-xl text-[#0E3C6E]">
									{application.name}
								</h3>

								<p className="mt-3 text-sm leading-7 text-[#66716D]">
									{application.description}
								</p>
							</article>
						))}
					</div>

					{product.recommendedDosage && (
						<div className="mt-6 rounded-2xl border border-[#0E3C6E]/10 bg-[#E6EFE7]/60 p-5">
							<p className="text-xs font-semibold uppercase tracking-wider text-[#0E3C6E]">
								Recommended Dosage Guidance
							</p>

							<p className="mt-2 text-sm leading-7 text-[#56615E]">
								{product.recommendedDosage}
							</p>
						</div>
					)}
				</section>

				{/* FORMULATION CONSIDERATIONS */}
				<section className={sectionClass}>
					<div className="mb-7 flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#0E3C6E]">
							<FlaskConical size={23} />
						</div>

						<div>
							<h2 className={headingClass}>Formulation Considerations</h2>

							<p className="mt-2 text-sm text-[#66716D]">
								Points to review during formulation development.
							</p>
						</div>
					</div>

					<ul className="space-y-4">
						{product.formulationNotes.map((note, index) => (
							<li key={`${note}-${index}`} className="flex items-start gap-3">
								<CheckCircle2
									size={19}
									className="mt-1 shrink-0 text-[#0365D0]"
								/>

								<span className="text-sm leading-7 text-[#56615E]">{note}</span>
							</li>
						))}
					</ul>
				</section>
			</section>

			{/* PRODUCT ENQUIRY CTA */}
			<section
				id="product-enquiry"
				className="scroll-mt-24 bg-[#0E3C6E] text-white">
				<div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12">
					<div className="max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BBD8EE]">
							Product Enquiry
						</p>

						<h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
							Interested in {product.name}?
						</h2>

						<p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
							Contact our team for availability, technical specifications,
							samples, documentation, and quotation requests.
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						{product.actions.map((action, index) => (
							<Link
								key={`${action.intent}-${index}`}
								href={createEnquiryHref(product, action.label)}
								className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0E3C6E] transition hover:bg-[#DCEAF5]">
								{action.label}
								<ArrowUpRight size={17} />
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* BACK TO CATALOGUE */}
			<div className="bg-white">
				<div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
					<Link
						href={categoryHref}
						className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
						<ArrowLeft size={17} />
						Return to Sun Care Catalogue
					</Link>
				</div>
			</div>
		</main>
	);
}

/* ============================================================
   REUSABLE INFORMATION COMPONENTS
============================================================ */

function InfoRow({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex flex-col gap-1 border-b border-[#0E3C6E]/10 pb-4 last:border-0 last:pb-0">
			<span className="text-xs uppercase tracking-wider text-[#678096]">
				{label}
			</span>

			<span className="break-words text-sm font-medium leading-6 text-[#354D5D]">
				{value}
			</span>
		</div>
	);
}

function PropertyCard({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-2xl border border-[#0E3C6E]/10 bg-[#FAF8F2] p-4">
			<p className="text-xs font-semibold uppercase tracking-wider text-[#678096]">
				{label}
			</p>

			<p className="mt-2 break-words text-sm font-medium leading-6 text-[#354D5D]">
				{value}
			</p>
		</div>
	);
}

function SpecificationRow({
	label,
	value,
	index,
}: {
	label: string;
	value: string;
	index: number;
}) {
	return (
		<div
			className={`grid gap-2 px-5 py-4 sm:grid-cols-2 sm:gap-8 ${
				index % 2 === 0 ? "bg-[#F6F8F5]" : "bg-white"
			}`}>
			<p className="text-sm font-semibold text-[#354D5D]">{label}</p>

			<p className="break-words text-sm leading-6 text-[#56615E]">{value}</p>
		</div>
	);
}

function createEnquiryHref(product: ChemicalProduct, request: string) {
	const params = new URLSearchParams({
		product: product.name,
		code: product.code,
		cas: product.cas,
		request,
	});

	return `/contact?${params.toString()}`;
}
