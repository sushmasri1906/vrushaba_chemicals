import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sun, ShieldCheck } from "lucide-react";

const bannerImage =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1792498082/3187173c-17a7-4813-bcd5-c7e349f24863.png";

const products = [
	{
		code: "VRUSHCARE EHT",
		name: "Ethylhexyl Triazone",
		cas: "88122-99-0",
		formula: "C₄₈H₆₆N₆O₆",
		weight: "823.09 g/mol",
		cid: "159201",
		type: "UVB",
		inci: "Ethylhexyl Triazone",
		iupac:
			"2-Ethylhexyl 4-[[4,6-bis[4-(2-ethylhexoxycarbonyl)anilino]-1,3,5-triazin-2-yl]amino]benzoate",
		description:
			"An organic UV filter used to absorb UVB radiation in sun-care formulations.",
	},
	{
		code: "VRUSHCARE DHBT",
		name: "Diethylhexyl Butamido Triazone",
		cas: "154702-15-5",
		formula: "C₄₄H₅₉N₇O₅",
		weight: "766.00 g/mol",
		cid: "9810816",
		type: "UVB",
		inci: "Diethylhexyl Butamido Triazone",
		iupac:
			"A triazine-based organic UV filter; consult the linked chemical record for the full systematic name.",
		description:
			"A high-performance organic UV filter used primarily for UVB protection.",
	},
	{
		code: "VRUSHCARE AVS",
		name: "Avobenzone",
		cas: "70356-09-1",
		formula: "C₂₀H₂₂O₃",
		weight: "310.39 g/mol",
		cid: "51040",
		type: "UVA",
		inci: "Butyl Methoxydibenzoylmethane",
		iupac: "1-(4-tert-Butylphenyl)-3-(4-methoxyphenyl)propane-1,3-dione",
		description:
			"An organic filter used to absorb UVA radiation in sunscreen formulations.",
	},
	{
		code: "VRUSHCARE BEMT",
		name: "Bemotrizinol",
		cas: "187393-00-6",
		formula: "C₃₈H₄₉N₃O₅",
		weight: "627.80 g/mol",
		cid: "135487856",
		type: "UVA / UVB",
		inci: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
		iupac:
			"2,2′-[6-(4-Methoxyphenyl)-1,3,5-triazine-2,4-diyl]bis{5-[(2-ethylhexyl)oxy]phenol}",
		description:
			"A broad-spectrum organic UV filter used to absorb UVA and UVB radiation.",
	},
	{
		code: "VRUSHCARE OC",
		name: "Octocrylene",
		cas: "6197-30-4",
		formula: "C₂₄H₂₇NO₂",
		weight: "361.49 g/mol",
		cid: "22571",
		type: "UVB",
		inci: "Octocrylene",
		iupac: "2-Ethylhexyl 2-cyano-3,3-diphenylprop-2-enoate",
		description:
			"An organic UVB filter used in sun-care products and certain formulations with other UV filters.",
	},
	{
		code: "VRUSHCARE OMC",
		name: "Octyl Methoxycinnamate",
		cas: "5466-77-3",
		formula: "C₁₈H₂₆O₃",
		weight: "290.40 g/mol",
		cid: "5355130",
		type: "UVB",
		inci: "Ethylhexyl Methoxycinnamate",
		iupac: "2-Ethylhexyl (E)-3-(4-methoxyphenyl)prop-2-enoate",
		description: "An organic UVB absorber also commonly known as octinoxate.",
	},
	{
		code: "VRUSHCARE OS",
		name: "Octyl Salicylate",
		cas: "118-60-7",
		formula: "C₁₅H₂₂O₃",
		weight: "250.34 g/mol",
		cid: "5356",
		type: "UVB",
		inci: "Ethylhexyl Salicylate",
		iupac: "2-Ethylhexyl 2-hydroxybenzoate",
		description:
			"An oil-soluble UVB filter used in sunscreen and sun-care formulations.",
	},
];

const groups = [
	{
		id: "uva",
		title: "UVA Filters",
		subtitle: "UVA · 320–400 nm",
		description:
			"Explore ingredients used for UVA absorption in sun-care formulations.",
		products: products.filter((product) => product.type.includes("UVA")),
		accent: "border-blue-200",
		heading: "text-[#0E3C6E]",
		pill: "bg-blue-50 text-blue-800",
	},
	{
		id: "uvb",
		title: "UVB Filters",
		subtitle: "UVB · 280–320 nm",
		description:
			"Explore ingredients used for UVB absorption in sun-care formulations.",
		products: products.filter((product) => product.type.includes("UVB")),
		accent: "border-amber-200",
		heading: "text-[#855400]",
		pill: "bg-amber-50 text-amber-800",
	},
	{
		id: "broad-spectrum",
		title: "Broad-Spectrum Filters",
		subtitle: "UVA + UVB",
		description:
			"Ingredients identified for absorption across UVA and UVB ranges.",
		products: products.filter(
			(product) => product.type.includes("UVA") && product.type.includes("UVB"),
		),
		accent: "border-violet-200",
		heading: "text-violet-900",
		pill: "bg-violet-50 text-violet-800",
	},
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
	const structureUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${product.cid}/PNG?image_size=500x500`;

	return (
		<article className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/[0.07]">
			<div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4F9FE] to-white p-6">
				<span className="absolute left-5 top-5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E3C6E]">
					2D Chemical Structure
				</span>

				<img
					src={structureUrl}
					alt={`2D chemical structure of ${product.name}`}
					loading="lazy"
					className="mt-6 h-[210px] w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
				/>

				<a
					href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.cid}`}
					target="_blank"
					rel="noreferrer"
					className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-[#0365D0] shadow-sm transition hover:bg-[#0E3C6E] hover:text-white">
					Open structure <ArrowUpRight size={14} />
				</a>
			</div>

			<div className="p-6 sm:p-7">
				<div className="flex flex-wrap items-center gap-2">
					<span className="rounded-md bg-[#EAF3FB] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0E3C6E]">
						{product.code}
					</span>
					<span className="rounded-md bg-slate-100 px-3 py-1.5 text-[10px] font-semibold text-slate-600">
						{product.type} Filter
					</span>
				</div>

				<h3 className="mt-4 text-xl font-bold leading-snug text-[#0E3C6E]">
					{product.name}
				</h3>

				<p className="mt-1 text-sm text-slate-500">INCI: {product.inci}</p>

				<p className="mt-4 text-sm leading-7 text-slate-600">
					{product.description}
				</p>

				<div className="mt-5 grid grid-cols-2 gap-3">
					<div className="rounded-xl bg-[#F5F8FB] p-3">
						<p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
							CAS Number
						</p>
						<p className="mt-1 break-words text-sm font-semibold text-[#0E3C6E]">
							{product.cas}
						</p>
					</div>

					<div className="rounded-xl bg-[#F5F8FB] p-3">
						<p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
							Molecular Weight
						</p>
						<p className="mt-1 text-sm font-semibold text-[#0E3C6E]">
							{product.weight}
						</p>
					</div>
				</div>

				<div className="mt-3 rounded-xl border border-slate-100 p-3">
					<p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
						Molecular Formula
					</p>
					<p className="mt-1 text-sm font-semibold tracking-wide text-[#0E3C6E]">
						{product.formula}
					</p>
				</div>

				<details className="mt-4 group/details">
					<summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-[#0E3C6E] transition hover:bg-blue-50">
						Chemical information
						<ArrowUpRight size={16} />
					</summary>

					<div className="mt-3 space-y-3 rounded-xl border border-slate-100 p-4">
						<div>
							<p className="text-xs font-bold text-slate-500">IUPAC Name</p>
							<p className="mt-1 break-words text-sm leading-6 text-slate-700">
								{product.iupac}
							</p>
						</div>

						<div>
							<p className="text-xs font-bold text-slate-500">
								PubChem Compound ID
							</p>
							<p className="mt-1 text-sm text-slate-700">{product.cid}</p>
						</div>

						<a
							href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.cid}`}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 text-sm font-bold text-[#0365D0] hover:text-[#0E3C6E]">
							View full chemical record <ArrowUpRight size={15} />
						</a>
					</div>
				</details>
			</div>
		</article>
	);
}

export default function SunCare() {
	return (
		<main className="min-h-screen bg-[#FAF8F2] text-[#15324B]">
			{/* Premium Banner */}
			<section className="relative isolate overflow-hidden bg-[#EAF3FB]">
				<img
					src={bannerImage}
					alt="Vrushaba Chemicals sun-care ingredient science banner"
					className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
				/>

				<div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/25" />

				<div className="mx-auto flex min-h-[370px] max-w-7xl items-center px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[460px] lg:px-12">
					<div className="max-w-2xl">
						<Link
							href="/"
							className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/15 bg-white/90 px-4 py-2 text-sm font-semibold text-[#0E3C6E] shadow-sm transition hover:bg-[#0E3C6E] hover:text-white">
							<ArrowLeft size={16} /> Home
						</Link>

						<p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#0365D0]">
							Vrushaba Chemicals · Personal Care
						</p>

						<h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
							Sun Care
							<span className="block text-[#0365D0]">UV Filter Portfolio</span>
						</h1>

						<p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
							Explore our range of UV filter ingredients with chemical
							structures, molecular information and reference records for
							technical evaluation.
						</p>

						<div className="mt-7 flex flex-wrap gap-3">
							<a
								href="#uva"
								className="inline-flex items-center gap-2 rounded-xl bg-[#0E3C6E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0365D0]">
								<Sun size={17} /> UVA Filters
							</a>
							<a
								href="#uvb"
								className="inline-flex items-center gap-2 rounded-xl border border-[#0E3C6E]/20 bg-white/90 px-5 py-3 text-sm font-bold text-[#0E3C6E] transition hover:bg-blue-50">
								<ShieldCheck size={17} /> UVB Filters
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio introduction */}
			<section className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-12">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0365D0]">
					Ingredient Library
				</p>
				<h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E3C6E] sm:text-4xl">
					Explore Chemical Structures
				</h2>
				<p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
					Each product card includes a 2D chemical structure and key
					identifiers. Expand the chemical information panel to review the
					systematic name and open the external compound record.
				</p>
			</section>

			{/* UVA / UVB Sections */}
			{groups.map((group) => (
				<section
					id={group.id}
					key={group.id}
					className="mx-auto max-w-7xl scroll-mt-8 px-5 py-8 sm:px-8 lg:px-12">
					<div
						className={`rounded-3xl border ${group.accent} bg-white p-6 sm:p-8`}>
						<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
							<div>
								<span
									className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${group.pill}`}>
									{group.subtitle}
								</span>
								<h2
									className={`mt-4 text-2xl font-bold sm:text-3xl ${group.heading}`}>
									{group.title}
								</h2>
								<p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
									{group.description}
								</p>
							</div>

							<span className="w-fit rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
								{group.products.length} listed
							</span>
						</div>

						<div className="mt-7 grid gap-6 lg:grid-cols-2">
							{group.products.map((product) => (
								<ProductCard
									key={product.code + product.cas}
									product={product}
								/>
							))}
						</div>

						{group.products.length === 0 && (
							<p className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
								No separately classified products are listed in this category.
							</p>
						)}
					</div>
				</section>
			))}

			{/* Contact CTA */}
			<section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
				<div className="mx-auto max-w-7xl rounded-3xl bg-[#0E3C6E] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
								Vrushaba Chemicals
							</p>
							<h2 className="mt-3 text-2xl font-bold sm:text-3xl">
								Need technical product details?
							</h2>
							<p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
								Contact our team for product specifications, availability and
								technical documentation.
							</p>
						</div>

						<Link
							href="/contact"
							className="inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0E3C6E] transition hover:bg-blue-50">
							Contact Us <ArrowUpRight size={18} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
