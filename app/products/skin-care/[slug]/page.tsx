import Link from "next/link";
import { notFound } from "next/navigation";
import {
	skinCareProducts,
	getSkinCareProductBySlug,
} from "@/app/data/skin-care/data";
import {
	ArrowLeft,
	ArrowRight,
	CheckCircle2,
	Download,
	FileText,
	FlaskConical,
	Mail,
	Package,
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
		.filter(
			(item) =>
				item.slug !== product.slug && item.category === product.category,
		)
		.slice(0, 3);

	const email = "info@vrushabachemicals.com";

	const createEmailUrl = (subject: string, body = "") =>
		`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	const enquiryBody = `Hello Vrushaba Chemicals,

I would like more information about ${product.name}.

INCI: ${product.inci}
CAS: ${product.cas}
Product code: ${product.code}

Please share the available technical specifications and documentation.

Thank you.`;

	const enquiryUrl = createEmailUrl(
		`Product enquiry: ${product.name}`,
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
		["Type", product.chemistry.type],
		["UV band", product.chemistry.uvBand],
		["Peak absorption", product.chemistry.peakAbsorption],
		["UV absorption", product.chemistry.uvAbsorption],
		["Photostability", product.chemistry.photostability],
		["Physical form", product.chemistry.physicalForm],
		["Solubility", product.chemistry.solubility.join("; ")],
		["IUPAC name", product.chemistry.iupacName],
		["Recommended dosage", product.formulation.recommendedDosage],
	];

	return (
		<main className="min-h-screen bg-[#FAF8F2] text-[#303936]">
			{/* Breadcrumb */}
			<div className="border-b border-[#0e3c6e]/10">
				<div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
					<div className="flex flex-wrap items-center gap-2 text-sm">
						<Link
							href="/"
							className="text-[#65736c] transition hover:text-[#0365d0]">
							Home
						</Link>
						<span className="text-[#a5afa8]">/</span>
						<Link
							href="/products/skin-care"
							className="text-[#65736c] transition hover:text-[#0365d0]">
							Skin Care
						</Link>
						<span className="text-[#a5afa8]">/</span>
						<span className="font-medium text-[#0e3c6e]">{product.name}</span>
					</div>
				</div>
			</div>

			{/* Product hero */}
			<section className="relative overflow-hidden bg-[#E6EFE7]">
				<div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#0e3c6e]/10" />
				<div className="pointer-events-none absolute -right-5 -top-5 h-44 w-44 rounded-full border border-[#0e3c6e]/10" />

				<div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-24">
					<div>
						<Link
							href="/products/skin-care"
							className="inline-flex items-center gap-2 text-sm font-medium text-[#0e3c6e] transition hover:text-[#0365d0]">
							<ArrowLeft size={16} />
							Back to Skin Care
						</Link>

						<div className="mt-8 flex flex-wrap gap-2">
							<span className="rounded-full bg-[#0e3c6e] px-4 py-2 text-xs font-semibold text-white">
								{product.category.replace("_", " ")} FILTER
							</span>
							<span className="rounded-full border border-[#0e3c6e]/15 bg-white/70 px-4 py-2 text-xs font-semibold text-[#0e3c6e]">
								Code: {product.code}
							</span>
						</div>

						<p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#557466]">
							Vrushaba Chemicals
						</p>

						<h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#0e3c6e] sm:text-5xl lg:text-6xl">
							{product.name}
						</h1>

						{product.tradeName && (
							<p className="mt-3 text-base font-medium text-[#65736c]">
								Reference trade name: {product.tradeName}
							</p>
						)}

						<p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#65736c]">
							INCI name
						</p>
						<p className="mt-2 text-lg font-medium text-[#303936]">
							{product.inci}
						</p>

						<p className="mt-5 max-w-2xl text-base leading-8 text-[#52615b] sm:text-lg">
							{product.description}
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href={createEmailUrl(
									`Sample request: ${product.name}`,
									`Hello Vrushaba Chemicals,\n\nI would like to request a sample of ${product.name} (${product.inci}), CAS ${product.cas}.\n\nPlease let me know availability and sample terms.\n\nThank you.`,
								)}
								className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e3c6e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0365d0]">
								Request a sample
								<ArrowRight size={17} />
							</a>

							<a
								href={createEmailUrl(
									`Technical documents: ${product.name}`,
									enquiryBody,
								)}
								className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0e3c6e]/20 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0e3c6e] transition hover:bg-white">
								<FileText size={17} />
								Request spec sheet
							</a>
						</div>

						<div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
							{product.actions
								.filter(
									(action) =>
										action.intent === "question" || action.intent === "quote",
								)
								.map((action) => (
									<a
										key={action.intent}
										href={createEmailUrl(
											`${action.label}: ${product.name}`,
											enquiryBody,
										)}
										className="text-sm font-semibold text-[#0e3c6e] underline decoration-[#0e3c6e]/30 underline-offset-4 hover:text-[#0365d0]">
										{action.label}
									</a>
								))}
						</div>
					</div>

					{/* Product image and identity */}
					<div className="overflow-hidden rounded-[2rem] border border-white bg-white/80 p-5 shadow-sm sm:p-7">
						<div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-white sm:min-h-[340px]">
							<img
								src={product.media.productImage}
								alt={product.media.imageAlt}
								className="h-full max-h-[380px] min-h-[260px] w-full object-contain p-4"
							/>
						</div>

						<div className="mt-5 grid grid-cols-2 gap-3">
							<div className="rounded-xl bg-[#FAF8F2] p-4">
								<p className="text-xs font-semibold uppercase tracking-wider text-[#65736c]">
									Product code
								</p>
								<p className="mt-2 font-semibold text-[#0e3c6e]">
									{product.code}
								</p>
							</div>
							<div className="rounded-xl bg-[#FAF8F2] p-4">
								<p className="text-xs font-semibold uppercase tracking-wider text-[#65736c]">
									CAS number
								</p>
								<p className="mt-2 font-semibold text-[#0e3c6e]">
									{product.cas}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical snapshot */}
			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
				<div className="max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
						At a glance
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
						Technical snapshot
					</h2>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{[
						["UV band", product.chemistry.uvBand],
						["Peak absorption", product.chemistry.peakAbsorption],
						["Molecular weight", product.chemistry.molecularWeight],
						["Physical form", product.chemistry.physicalForm],
					].map(([label, value]) => (
						<div
							key={label}
							className="rounded-2xl border border-[#0e3c6e]/10 bg-white p-5">
							<p className="text-xs font-semibold uppercase tracking-wider text-[#65736c]">
								{label}
							</p>
							<p className="mt-2 break-words text-lg font-semibold text-[#0e3c6e]">
								{value}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* 3D structure / 2D structure */}
			<section className="bg-white">
				<div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-20">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
							Molecular identity
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
							The chemical structure
						</h2>
						<p className="mt-4 leading-8 text-[#65736c]">
							Review the published 2D structure for this ingredient. An
							interactive 3D model requires a verified molecular coordinate file
							and a compatible viewer.
						</p>

						<div className="mt-6 rounded-2xl border border-[#0e3c6e]/10 bg-[#FAF8F2] p-5">
							<div className="flex items-start gap-3">
								<FlaskConical
									size={22}
									className="mt-0.5 shrink-0 text-[#0e3c6e]"
								/>
								<div>
									<p className="font-semibold text-[#0e3c6e]">
										Molecular formula
									</p>
									<p className="mt-1 text-sm text-[#65736c]">
										{product.chemistry.molecularFormula}
									</p>
									<p className="mt-4 font-semibold text-[#0e3c6e]">
										Molecular weight
									</p>
									<p className="mt-1 text-sm text-[#65736c]">
										{product.chemistry.molecularWeight}
									</p>
								</div>
							</div>
						</div>

						<p className="mt-5 text-sm leading-6 text-[#65736c]">
							{product.media.molecule3DStatus === "available" &&
							product.media.molecule3DModel
								? "A molecular model file is configured for this product. Connect it to your chosen 3D viewer to enable rotation and interaction."
								: "Interactive 3D coordinates are not configured yet. The chemical structure image is shown as a reference instead."}
						</p>
					</div>

					<div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-[#0e3c6e]/10 bg-[#FAF8F2] p-5 sm:min-h-[400px]">
						<img
							src={product.media.structureImage2D}
							alt={`${product.inci} 2D chemical structure`}
							className="max-h-[440px] w-full object-contain"
						/>
					</div>
				</div>
			</section>

			{/* What sets it apart */}
			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-2">
					<div>
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6EFE7] text-[#0e3c6e]">
							<Sparkles size={23} />
						</div>
						<h2 className="mt-5 text-3xl font-semibold text-[#0e3c6e]">
							What sets it apart
						</h2>
						<p className="mt-4 leading-8 text-[#65736c]">
							{product.formulatorNotes}
						</p>
					</div>

					<div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
						<h3 className="text-xl font-semibold text-[#0e3c6e]">
							Formulator notes
						</h3>
						<ul className="mt-6 space-y-4">
							{product.highlights.map((highlight) => (
								<li key={highlight} className="flex items-start gap-3">
									<CheckCircle2
										size={19}
										className="mt-1 shrink-0 text-[#557466]"
									/>
									<span className="text-sm leading-7 text-[#52615b]">
										{highlight}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Identity and properties */}
			<section className="bg-white">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
						Product reference
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
						Identity & character
					</h2>

					<div className="mt-8 overflow-hidden rounded-2xl border border-[#0e3c6e]/10">
						{technicalProperties.map(([label, value], index) => (
							<div
								key={label}
								className={`grid gap-2 px-5 py-4 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8 sm:px-7 ${
									index % 2 === 0 ? "bg-[#FAF8F2]" : "bg-white"
								}`}>
								<p className="text-sm font-semibold text-[#0e3c6e]">{label}</p>
								<p className="break-words text-sm leading-7 text-[#65736c]">
									{value}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Formulation */}
			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
							In formulation
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
							Recommended dosage
						</h2>
						<div className="mt-6 inline-flex rounded-2xl bg-[#E6EFE7] px-6 py-4">
							<span className="text-3xl font-semibold text-[#0e3c6e]">
								{product.formulation.recommendedDosage}
							</span>
						</div>
						<p className="mt-5 text-sm leading-7 text-[#65736c]">
							{product.formulation.dosageDisclaimer}
						</p>
					</div>

					<div className="rounded-3xl bg-white p-7 sm:p-9">
						<h3 className="text-xl font-semibold text-[#0e3c6e]">
							Applications
						</h3>
						<div className="mt-6 space-y-5">
							{product.formulation.applications.map((application) => (
								<div
									key={application.name}
									className="border-b border-[#0e3c6e]/10 pb-5 last:border-0 last:pb-0">
									<h4 className="font-semibold text-[#0e3c6e]">
										{application.name}
									</h4>
									{application.description && (
										<p className="mt-2 text-sm leading-7 text-[#65736c]">
											{application.description}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Packaging and logistics */}
			<section className="bg-[#DCEAF5]/55">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
						Supply information
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
						Packaging & logistics
					</h2>

					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{[
							["Pack size", product.logistics.packSize],
							["Pallet", product.logistics.pallet],
							["Minimum order", product.logistics.minimumOrderQuantity],
							["Shelf life", product.logistics.shelfLife],
						].map(([label, value]) => (
							<div
								key={label}
								className="rounded-2xl border border-white bg-white p-5">
								<Package size={22} className="text-[#0e3c6e]" />
								<p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#65736c]">
									{label}
								</p>
								<p className="mt-2 text-xl font-semibold text-[#0e3c6e]">
									{value}
								</p>
							</div>
						))}
					</div>

					<div className="mt-5 rounded-2xl border border-white bg-white p-5">
						<p className="text-sm font-semibold text-[#0e3c6e]">
							Storage conditions
						</p>
						<p className="mt-2 text-sm leading-7 text-[#65736c]">
							{product.logistics.storageConditions}
						</p>
					</div>
				</div>
			</section>

			{/* Regulatory information */}
			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
				<div className="rounded-3xl border border-[#0e3c6e]/10 bg-white p-7 sm:p-9">
					<div className="flex items-start gap-4">
						<ShieldCheck size={28} className="mt-1 shrink-0 text-[#0e3c6e]" />
						<div>
							<h2 className="text-2xl font-semibold text-[#0e3c6e]">
								Regulatory information
							</h2>
							<p className="mt-4 leading-7 text-[#52615b]">
								{product.regulatory.reachRegistered}
							</p>

							{product.regulatory.regions.length > 0 && (
								<ul className="mt-4 space-y-2">
									{product.regulatory.regions.map((region) => (
										<li
											key={region}
											className="flex items-start gap-2 text-sm text-[#65736c]">
											<CheckCircle2
												size={16}
												className="mt-0.5 shrink-0 text-[#557466]"
											/>
											{region}
										</li>
									))}
								</ul>
							)}

							<p className="mt-5 text-sm leading-7 text-[#65736c]">
								{product.regulatory.disclaimer}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Technical documents */}
			<section className="bg-white">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
					<div className="max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
							Technical support
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e] sm:text-4xl">
							Technical documents
						</h2>
						<p className="mt-4 leading-7 text-[#65736c]">
							Request available product documentation from our team. Documents
							are supplied subject to availability and grade verification.
						</p>
					</div>

					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{product.documents.map((document) => (
							<div
								key={document.type}
								className="rounded-2xl border border-[#0e3c6e]/10 bg-[#FAF8F2] p-5">
								<FileText size={24} className="text-[#0e3c6e]" />
								<h3 className="mt-4 font-semibold text-[#0e3c6e]">
									{document.label}
								</h3>

								{document.url ? (
									<a
										href={document.url}
										target="_blank"
										rel="noreferrer"
										className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0e3c6e] hover:text-[#0365d0]">
										Open document <Download size={16} />
									</a>
								) : document.requestable ? (
									<a
										href={createEmailUrl(
											`${document.label} request: ${product.name}`,
											`Hello Vrushaba Chemicals,\n\nPlease share the available ${document.label} for ${product.name}, CAS ${product.cas}.\n\nThank you.`,
										)}
										className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0e3c6e] hover:text-[#0365d0]">
										Request document <ArrowRight size={16} />
									</a>
								) : (
									<p className="mt-4 text-sm text-[#65736c]">
										Contact us for availability.
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Related products */}
			{relatedProducts.length > 0 && (
				<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
					<div className="flex flex-wrap items-end justify-between gap-4">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#557466]">
								Explore the range
							</p>
							<h2 className="mt-3 text-3xl font-semibold text-[#0e3c6e]">
								Related products
							</h2>
						</div>

						<Link
							href="/products/skin-care"
							className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e3c6e] hover:text-[#0365d0]">
							View all products <ArrowRight size={16} />
						</Link>
					</div>

					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{relatedProducts.map((item) => (
							<Link
								key={item.slug}
								href={`/products/skin-care/${item.slug}`}
								className="group rounded-2xl border border-[#0e3c6e]/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#0e3c6e]/30 hover:shadow-md">
								<span className="text-xs font-semibold uppercase tracking-wider text-[#557466]">
									{item.code}
								</span>
								<h3 className="mt-3 text-lg font-semibold text-[#0e3c6e]">
									{item.name}
								</h3>
								<p className="mt-2 text-sm leading-6 text-[#65736c]">
									{item.inci}
								</p>
								<p className="mt-3 text-xs text-[#65736c]">CAS: {item.cas}</p>
								<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0e3c6e]">
									View product
									<ArrowRight
										size={16}
										className="transition group-hover:translate-x-1"
									/>
								</span>
							</Link>
						))}
					</div>
				</section>
			)}

			{/* Final CTA */}
			<section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
				<div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#0e3c6e] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
					<div className="max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DCEAF5]">
							Need more information?
						</p>
						<h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
							Let&apos;s discuss your formulation.
						</h2>
						<p className="mt-4 leading-7 text-white/75">
							Contact our team for product availability, technical documentation
							and formulation support.
						</p>
					</div>

					<a
						href={enquiryUrl}
						className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0e3c6e] transition hover:bg-[#DCEAF5]">
						<Mail size={17} />
						Contact our team
					</a>
				</div>
			</section>
		</main>
	);
}
