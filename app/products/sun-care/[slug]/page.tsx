import Link from "next/link";
import { notFound } from "next/navigation";
import {
	skinCareProducts,
	getSkinCareProductBySlug,
} from "@/app/data/skin-care/data";
import {
	ArrowDownRight,
	ArrowLeft,
	ArrowRight,
	Check,
	CheckCircle2,
	CircleHelp,
	FileCheck2,
	FileText,
	FlaskConical,
	Mail,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return skinCareProducts.map((product) => ({
		slug: product.slug,
	}));
}

export default async function ProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = getSkinCareProductBySlug(slug);

	if (!product) {
		notFound();
	}

	const relatedProducts = skinCareProducts
		.filter((item) => item.slug !== product.slug)
		.slice(0, 3);

	const email = "info@vrushabachemicals.com";

	const createEmailUrl = (subject: string, body = "") =>
		`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	const enquiryBody = `Hello Vrushaba Chemicals,

I would like more information about ${product.name}.

Trade name: ${product.tradeName || "Not specified"}
INCI: ${product.inci}
CAS: ${product.cas}
Product code: ${product.code}

Please share the available technical specifications, TDS, SDS, COA and regulatory documentation.

Thank you.`;

	const enquiryUrl = createEmailUrl(
		`Product enquiry: ${product.name}`,
		enquiryBody,
	);

	const requestSampleUrl = createEmailUrl(
		`Sample request: ${product.name}`,
		`Hello Vrushaba Chemicals,

I would like to request a sample of ${product.name} (${product.inci}), CAS ${product.cas}.

Please confirm availability, sample quantity and terms.

Thank you.`,
	);

	const requestDocumentsUrl = createEmailUrl(
		`Technical documentation: ${product.name}`,
		enquiryBody,
	);

	const technicalProperties: [string, string][] = [
		["Product code", product.code],
		["INCI name", product.inci],
		["Also known as", product.alsoKnownAs.join(", ") || "Not specified"],
		["CAS number", product.cas],
		["EC number", product.ecNumber],
		["HSN / tariff code", product.hsnCode],
		["Molecular formula", product.chemistry.molecularFormula],
		["Molecular weight", product.chemistry.molecularWeight],
		["Chemical type", product.chemistry.type],
		["UV band", product.chemistry.uvBand],
		["Peak absorption", product.chemistry.peakAbsorption],
		["UV absorption", product.chemistry.uvAbsorption],
		["Photostability", product.chemistry.photostability],
		["Physical form", product.chemistry.physicalForm],
		["Solubility", product.chemistry.solubility.join("; ")],
		["IUPAC name", product.chemistry.iupacName],
		["Recommended dosage", product.formulation.recommendedDosage],
	];

	const snapshot = [
		{
			label: "UV band",
			value: product.chemistry.uvBand,
			number: "01",
		},
		{
			label: "Peak absorption",
			value: product.chemistry.peakAbsorption,
			number: "02",
		},
		{
			label: "Molecular weight",
			value: product.chemistry.molecularWeight,
			number: "03",
		},
		{
			label: "Physical form",
			value: product.chemistry.physicalForm,
			number: "04",
		},
	];

	return (
		<main className="min-h-screen overflow-hidden bg-[#FAF8F2] text-[#303936] selection:bg-[#0E3C6E] selection:text-white">
			{/* Breadcrumb */}
			<div className="border-b border-[#0E3C6E]/10 bg-[#FAF8F2]">
				<div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 px-5 py-4 text-xs sm:px-8 lg:px-12">
					<Link
						href="/"
						className="text-[#718078] transition hover:text-[#0365D0]">
						Home
					</Link>

					<span className="text-[#A9B3AC]">/</span>

					<Link
						href="/products/skin-care"
						className="text-[#718078] transition hover:text-[#0365D0]">
						Skin Care
					</Link>

					<span className="text-[#A9B3AC]">/</span>

					<span className="font-semibold text-[#0E3C6E]">{product.name}</span>
				</div>
			</div>

			{/* Premium hero */}
			<section className="relative isolate overflow-hidden bg-[#E6EFE7]">
				<div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full border border-[#0E3C6E]/10" />
				<div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-[380px] w-[380px] rounded-full border border-[#0E3C6E]/10" />
				<div className="pointer-events-none absolute -bottom-48 left-[36%] -z-10 h-[420px] w-[420px] rounded-full bg-white/30 blur-3xl" />

				<div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
					<div>
						<Link
							href="/products/skin-care"
							className="group inline-flex items-center gap-2 text-sm font-medium text-[#0E3C6E] transition hover:text-[#0365D0]">
							<ArrowLeft
								size={16}
								className="transition group-hover:-translate-x-1"
							/>
							Back to Skin Care
						</Link>

						<div className="mt-8 flex flex-wrap items-center gap-2">
							<span className="inline-flex items-center gap-2 rounded-full bg-[#0E3C6E] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-xs">
								<Sparkles size={13} />
								{product.category.replaceAll("_", " ")} FILTER
							</span>

							<span className="rounded-full border border-[#0E3C6E]/15 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0E3C6E] sm:text-xs">
								REF. {product.code}
							</span>
						</div>

						<p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#567466] sm:text-xs">
							Vrushaba Chemicals · Ingredient portfolio
						</p>

						<div className="mt-5 flex items-center gap-3">
							<span className="h-px w-10 bg-[#0E3C6E]/35" />
							<span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#718078]">
								Ingredient technical brief
							</span>
						</div>

						<h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#0E3C6E] sm:text-5xl lg:text-6xl xl:text-[5.25rem]">
							{product.tradeName || product.name}
						</h1>

						<p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#303936] sm:text-xl">
							{product.inci}
						</p>

						{product.tradeName && (
							<p className="mt-2 text-sm text-[#68766E]">
								Chemical identity: {product.name}
							</p>
						)}

						<div className="mt-6 h-px w-20 bg-[#0E3C6E]/30" />

						<p className="mt-6 max-w-2xl text-sm leading-8 text-[#52615B] sm:text-base">
							{product.description}
						</p>

						{product.formulatorNotes && (
							<div className="mt-6 max-w-2xl border-l-2 border-[#0E3C6E]/30 pl-5">
								<p className="text-sm leading-7 text-[#52615B]">
									{product.formulatorNotes}
								</p>
							</div>
						)}

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<a
								href={requestSampleUrl}
								className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0E3C6E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(14,60,110,0.14)] transition hover:-translate-y-0.5 hover:bg-[#0365D0]">
								Request a sample
								<ArrowRight
									size={17}
									className="transition group-hover:translate-x-1"
								/>
							</a>

							<a
								href={requestDocumentsUrl}
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0E3C6E]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[#0E3C6E] transition hover:border-[#0E3C6E]/40 hover:bg-white">
								<FileText size={17} />
								Request technical documents
							</a>
						</div>

						<div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#65736C]">
							<div className="flex items-center gap-2">
								<CheckCircle2 size={15} className="text-[#557466]" />
								Technical information
							</div>

							<div className="flex items-center gap-2">
								<CheckCircle2 size={15} className="text-[#557466]" />
								Documentation enquiries
							</div>

							<div className="flex items-center gap-2">
								<CheckCircle2 size={15} className="text-[#557466]" />
								Formulation support
							</div>
						</div>
					</div>

					{/* Product presentation */}
					<div className="relative mx-auto w-full max-w-[600px]">
						<div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2rem] border-r border-t border-[#0E3C6E]/20 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

						<div className="relative rounded-[1.75rem] border border-white/90 bg-white/80 p-3 shadow-[0_35px_100px_rgba(14,60,110,0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
							<div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#FAF8F2] sm:min-h-[430px] sm:rounded-[1.5rem]">
								<div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(220,234,245,0.5),transparent_68%)]" />

								<img
									src={product.media.productImage}
									alt={product.media.imageAlt}
									className="relative z-10 max-h-[380px] min-h-[250px] w-full object-contain p-7 sm:max-h-[450px] sm:p-10"
								/>

								<div className="absolute bottom-4 left-4 rounded-full border border-[#0E3C6E]/10 bg-white/90 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#0E3C6E] sm:bottom-5 sm:left-5 sm:px-4">
									Ingredient profile
								</div>

								<div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#0E3C6E]/10 bg-white/80 text-[#0E3C6E] sm:right-5 sm:top-5 sm:h-12 sm:w-12">
									<FlaskConical size={21} strokeWidth={1.5} />
								</div>
							</div>

							<div className="grid grid-cols-2 gap-3 p-1 pt-4 sm:gap-4 sm:p-2 sm:pt-5">
								<div className="rounded-xl bg-[#E6EFE7]/75 p-4 sm:p-5">
									<p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#65736C] sm:text-[10px]">
										Product code
									</p>
									<p className="mt-2 break-words text-base font-semibold text-[#0E3C6E] sm:text-lg">
										{product.code}
									</p>
								</div>

								<div className="rounded-xl bg-[#DCEAF5]/65 p-4 sm:p-5">
									<p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#65736C] sm:text-[10px]">
										CAS number
									</p>
									<p className="mt-2 break-words text-base font-semibold text-[#0E3C6E] sm:text-lg">
										{product.cas}
									</p>
								</div>
							</div>
						</div>

						<div className="mt-4 flex items-center justify-between gap-4 px-1 text-[10px] uppercase tracking-[0.14em] text-[#65736C] sm:px-2 sm:text-xs">
							<span>Personal care ingredients</span>
							<span className="flex items-center gap-2 text-[#0E3C6E]">
								<span className="h-1.5 w-1.5 rounded-full bg-[#557466]" />
								Product reference
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Technical snapshot */}
			<section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
				<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
							At a glance
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
							Technical snapshot
						</h2>

						<p className="mt-3 max-w-xl text-sm leading-7 text-[#65736C]">
							Key characteristics for a quick overview of the ingredient.
						</p>
					</div>

					<div className="flex items-center gap-2 text-xs text-[#65736C]">
						<FlaskConical size={16} className="text-[#0E3C6E]" />
						Technical product profile
					</div>
				</div>

				<div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{snapshot.map((item) => (
						<div
							key={item.label}
							className="group relative overflow-hidden rounded-2xl border border-[#0E3C6E]/[0.08] bg-white p-6 shadow-[0_8px_30px_rgba(14,60,110,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#0E3C6E]/25 hover:shadow-[0_24px_60px_rgba(14,60,110,0.08)] sm:p-7">
							<div className="flex items-center justify-between">
								<span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736C]">
									{item.label}
								</span>

								<span className="text-xs font-medium text-[#A0ACA3]">
									{item.number}
								</span>
							</div>

							<p className="mt-8 break-words text-2xl font-semibold tracking-tight text-[#0E3C6E]">
								{item.value || "Not specified"}
							</p>

							<div className="mt-6 h-1 w-10 rounded-full bg-[#DCEAF5] transition-all duration-300 group-hover:w-16 group-hover:bg-[#0365D0]" />
						</div>
					))}
				</div>
			</section>

			{/* Molecular identity */}
			<section className="bg-white">
				<div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
							Molecular identity
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
							The science behind the ingredient
						</h2>

						<p className="mt-5 text-sm leading-8 text-[#65736C]">
							Explore the chemical identity and available structure reference
							for this ingredient. The information below follows the configured
							product data.
						</p>

						<div className="mt-8 space-y-3">
							<div className="flex items-start gap-4 rounded-2xl border border-[#0E3C6E]/10 bg-[#FAF8F2] p-5">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#0E3C6E]">
									<FlaskConical size={21} strokeWidth={1.5} />
								</div>

								<div className="min-w-0">
									<p className="text-xs font-medium text-[#65736C]">
										Molecular formula
									</p>
									<p className="mt-1 break-words text-lg font-semibold text-[#0E3C6E]">
										{product.chemistry.molecularFormula || "Not specified"}
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 rounded-2xl border border-[#0E3C6E]/10 bg-[#FAF8F2] p-5">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCEAF5] text-[#0E3C6E]">
									<Sparkles size={21} strokeWidth={1.5} />
								</div>

								<div className="min-w-0">
									<p className="text-xs font-medium text-[#65736C]">
										Molecular weight
									</p>
									<p className="mt-1 break-words text-lg font-semibold text-[#0E3C6E]">
										{product.chemistry.molecularWeight || "Not specified"}
									</p>
								</div>
							</div>
						</div>

						<div className="mt-6 flex items-start gap-3 rounded-xl bg-[#E6EFE7]/60 p-4">
							<ShieldCheck
								size={19}
								className="mt-0.5 shrink-0 text-[#0E3C6E]"
							/>
							<p className="text-xs leading-6 text-[#65736C]">
								For verified specifications and supporting technical documents,
								contact our team.
							</p>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-[1.75rem] border border-[#0E3C6E]/10 bg-[#FAF8F2] p-5 sm:rounded-[2rem] sm:p-8">
						<div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#DCEAF5]/60" />

						<div className="relative flex items-center justify-between gap-4">
							<div>
								<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736C]">
									Chemical reference
								</p>
								<h3 className="mt-2 text-lg font-semibold text-[#0E3C6E] sm:text-xl">
									2D molecular structure
								</h3>
							</div>

							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0E3C6E]/10 bg-white text-[#0E3C6E]">
								<FlaskConical size={20} strokeWidth={1.5} />
							</div>
						</div>

						<div className="relative mt-6 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-[#0E3C6E]/5 bg-white p-4 sm:min-h-[390px] sm:p-8">
							<img
								src={product.media.structureImage2D}
								alt={`${product.inci} 2D chemical structure`}
								className="max-h-[400px] w-full object-contain"
								loading="lazy"
							/>
						</div>

						<div className="relative mt-4 flex flex-wrap items-center justify-between gap-3">
							<p className="text-xs text-[#65736C]">
								Structure image reference
							</p>

							<a
								href={product.media.structureImage2D}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
								View original image
								<ArrowRight size={14} />
							</a>
						</div>

						{product.media.molecule3DStatus === "available" &&
							product.media.molecule3DModel && (
								<p className="relative mt-4 text-xs leading-6 text-[#65736C]">
									A molecular model is configured for this product. Connect it
									to a compatible viewer to enable interactive rotation.
								</p>
							)}
					</div>
				</div>
			</section>

			{/* What sets it apart */}
			<section className="relative overflow-hidden bg-[#E6EFE7]">
				<div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full border border-[#0E3C6E]/10" />

				<div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-28">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
							Ingredient profile
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
							What sets it apart
						</h2>

						<p className="mt-5 text-sm leading-8 text-[#52615B]">
							{product.formulatorNotes ||
								"Explore the configured technical characteristics and formulation information for this ingredient."}
						</p>

						<div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0E3C6E]/15 bg-white/70 px-4 py-3">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0E3C6E] text-white">
								<Sparkles size={16} />
							</div>

							<span className="text-xs font-semibold text-[#0E3C6E]">
								Technical characteristics
							</span>
						</div>
					</div>

					<div className="rounded-[1.5rem] border border-white bg-white p-6 shadow-[0_20px_70px_rgba(14,60,110,0.05)] sm:rounded-[2rem] sm:p-9">
						<div className="flex items-center justify-between gap-4 border-b border-[#0E3C6E]/10 pb-5">
							<div>
								<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736C]">
									Technical overview
								</p>
								<h3 className="mt-2 text-xl font-semibold text-[#0E3C6E]">
									Key characteristics
								</h3>
							</div>

							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6EFE7] text-[#0E3C6E]">
								<CheckCircle2 size={22} strokeWidth={1.5} />
							</div>
						</div>

						<ul className="mt-2 divide-y divide-[#0E3C6E]/10">
							{product.highlights.map((highlight, index) => (
								<li key={highlight} className="flex items-start gap-4 py-5">
									<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E6EFE7] text-[#0E3C6E]">
										<Check size={14} strokeWidth={2.5} />
									</span>

									<div className="min-w-0 flex-1">
										<p className="text-sm leading-7 text-[#52615B]">
											{highlight}
										</p>
									</div>

									<span className="pt-1 text-[10px] text-[#A0ACA3]">
										{String(index + 1).padStart(2, "0")}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Identity and properties */}
			<section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
							Product reference
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
							Identity &amp; character
						</h2>

						<p className="mt-3 max-w-2xl text-sm leading-7 text-[#65736C]">
							Reference information for technical evaluation, purchasing and
							formulation enquiries.
						</p>
					</div>

					<div className="flex items-center gap-2 text-xs text-[#65736C]">
						<FileCheck2 size={17} className="text-[#0E3C6E]" />
						Product specifications
					</div>
				</div>

				<div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#0E3C6E]/10 bg-white shadow-[0_18px_60px_rgba(14,60,110,0.04)] sm:rounded-[2rem]">
					<div className="grid grid-cols-1 gap-3 bg-[#0E3C6E] px-5 py-5 sm:grid-cols-[0.7fr_1.3fr] sm:px-8">
						<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
							Property
						</p>
						<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
							Specification
						</p>
					</div>

					{technicalProperties.map(([label, value], index) => (
						<div
							key={label}
							className={`grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8 sm:px-8 sm:py-5 ${
								index % 2 === 0 ? "bg-white" : "bg-[#FAF8F2]"
							}`}>
							<p className="text-xs font-semibold text-[#0E3C6E] sm:text-sm">
								{label}
							</p>

							<p className="break-words text-xs leading-7 text-[#65736C] sm:text-sm">
								{value || "Not specified"}
							</p>
						</div>
					))}
				</div>

				<div className="mt-5 flex items-start gap-3 rounded-xl border border-[#0E3C6E]/10 bg-[#DCEAF5]/45 p-4 sm:p-5">
					<CircleHelp size={18} className="mt-0.5 shrink-0 text-[#0E3C6E]" />
					<p className="text-xs leading-6 text-[#65736C]">
						For purchasing and formulation decisions, confirm the latest
						specifications with the supplier and review the relevant product
						documentation.
					</p>
				</div>
			</section>

			{/* Formulation */}
			<section className="bg-white">
				<div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-28">
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
							In formulation
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
							Formulation guidance
						</h2>

						<p className="mt-5 text-sm leading-8 text-[#65736C]">
							Review the configured recommended dosage and application
							information. Final usage should be validated against the product
							specification and applicable market requirements.
						</p>

						<div className="mt-8 rounded-[1.5rem] bg-[#E6EFE7] p-6 sm:rounded-[2rem] sm:p-8">
							<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#557466]">
								Recommended dosage
							</p>

							<p className="mt-4 break-words text-4xl font-semibold tracking-[-0.04em] text-[#0E3C6E] sm:text-5xl">
								{product.formulation.recommendedDosage || "Contact us"}
							</p>

							<div className="mt-5 h-px w-full bg-[#0E3C6E]/15" />

							<p className="mt-5 text-xs leading-7 text-[#65736C]">
								{product.formulation.dosageDisclaimer ||
									"Confirm the appropriate dosage with the supplier."}
							</p>
						</div>

						<a
							href={requestDocumentsUrl}
							className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
							Request formulation support
							<ArrowRight size={16} />
						</a>
					</div>

					<div className="rounded-[1.5rem] border border-[#0E3C6E]/[0.08] bg-[#FAF8F2] p-6 shadow-[0_24px_70px_rgba(14,60,110,0.045)] sm:rounded-[2rem] sm:p-9">
						<div className="flex items-center justify-between gap-4 border-b border-[#0E3C6E]/10 pb-5">
							<div>
								<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736C]">
									Intended use
								</p>

								<h3 className="mt-2 text-xl font-semibold text-[#0E3C6E]">
									Applications
								</h3>
							</div>

							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DCEAF5] text-[#0E3C6E]">
								<Sparkles size={21} strokeWidth={1.5} />
							</div>
						</div>

						<div className="divide-y divide-[#0E3C6E]/10">
							{product.formulation.applications.map((application, index) => (
								<div
									key={application.name}
									className="flex items-start gap-4 py-6">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0E3C6E]/10 bg-white text-xs font-semibold text-[#0E3C6E]">
										{String(index + 1).padStart(2, "0")}
									</span>

									<div className="min-w-0 flex-1">
										<h4 className="text-sm font-semibold text-[#0E3C6E]">
											{application.name}
										</h4>

										{application.description && (
											<p className="mt-2 text-xs leading-7 text-[#65736C]">
												{application.description}
											</p>
										)}
									</div>

									<ArrowDownRight
										size={17}
										className="mt-1 shrink-0 text-[#8B9A91]"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Related products */}
			{relatedProducts.length > 0 && (
				<section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
					<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#557466] sm:text-xs">
								Explore the portfolio
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0E3C6E] sm:text-4xl">
								Related ingredients
							</h2>

							<p className="mt-3 text-sm leading-7 text-[#65736C]">
								Explore more ingredients from our personal care portfolio.
							</p>
						</div>

						<Link
							href="/products/skin-care"
							className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E3C6E] transition hover:text-[#0365D0]">
							View all ingredients
							<ArrowRight size={16} />
						</Link>
					</div>

					<div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{relatedProducts.map((item, index) => (
							<Link
								key={item.slug}
								href={`/products/skin-care/${item.slug}`}
								className="group relative overflow-hidden rounded-2xl border border-[#0E3C6E]/[0.08] bg-white p-6 shadow-[0_8px_30px_rgba(14,60,110,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#0E3C6E]/20 hover:shadow-[0_24px_60px_rgba(14,60,110,0.09)] sm:p-7">
								<div className="flex items-center justify-between gap-3">
									<span className="rounded-full bg-[#E6EFE7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0E3C6E]">
										{item.code}
									</span>

									<span className="text-[10px] text-[#A0ACA3]">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								<h3 className="mt-6 text-xl font-semibold tracking-tight text-[#0E3C6E] transition group-hover:text-[#0365D0]">
									{item.tradeName || item.name}
								</h3>

								<p className="mt-2 text-sm leading-7 text-[#65736C]">
									{item.inci}
								</p>

								<div className="mt-5 flex flex-wrap gap-2">
									<span className="rounded-full border border-[#0E3C6E]/10 px-3 py-1.5 text-[10px] text-[#65736C]">
										CAS: {item.cas}
									</span>
								</div>

								<div className="mt-7 flex items-center justify-between border-t border-[#0E3C6E]/10 pt-5">
									<span className="text-xs font-semibold text-[#0E3C6E]">
										View ingredient
									</span>

									<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0E3C6E]/10 text-[#0E3C6E] transition group-hover:border-[#0E3C6E] group-hover:bg-[#0E3C6E] group-hover:text-white">
										<ArrowRight
											size={16}
											className="transition group-hover:translate-x-0.5"
										/>
									</span>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}

			{/* Final CTA */}
			<section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
				<div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.75rem] bg-[#0E3C6E] px-6 py-12 shadow-[0_30px_90px_rgba(14,60,110,0.16)] sm:rounded-[2.25rem] sm:px-10 sm:py-16 lg:px-16 lg:py-[4.5rem]">
					<div className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute -right-4 -top-20 h-64 w-64 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute bottom-0 right-[25%] h-40 w-40 rounded-full bg-[#0365D0]/30 blur-3xl" />

					<div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DCEAF5]">
								<Mail size={14} />
								Product enquiries
							</div>

							<h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
								Let&apos;s find the right ingredient for your formulation.
							</h2>

							<p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
								Connect with Vrushaba Chemicals for product availability,
								technical documents and ingredient enquiries.
							</p>
						</div>

						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<a
								href={enquiryUrl}
								className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E3C6E] transition hover:-translate-y-0.5 hover:bg-[#DCEAF5]">
								Contact our team
								<ArrowRight
									size={17}
									className="transition group-hover:translate-x-1"
								/>
							</a>

							<a
								href={requestSampleUrl}
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
								Request a sample
							</a>
						</div>
					</div>

					<div className="relative mt-10 border-t border-white/15 pt-5">
						<p className="text-[10px] leading-6 text-white/55 sm:text-xs">
							Technical details and product availability should be confirmed
							with the supplier. Regulatory requirements and permitted usage may
							vary by market.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
