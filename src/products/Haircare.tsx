import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

const bannerImage =
	"https://res.cloudinary.com/spkdq7z2/image/upload/v1792498082/3187173c-17a7-4813-bcd5-c7e349f24863.png";

const products = [
	{
		code: "VRUSHCARE PO",
		name: "Piroctone Olamine",
		cas: "68890-66-4",
		formula: "C₁₆H₃₀N₂O₃",
		cid: "50258",
		description:
			"A specialty personal-care ingredient used in selected hair-care formulations.",
		category: "Hair & Scalp Care",
	},
	{
		code: "VRUSHCARE BZC",
		name: "Benzethonium Chloride",
		cas: "121-54-0",
		formula: "C₂₇H₄₂ClNO₂",
		cid: "8478",
		description:
			"A quaternary ammonium compound used in selected personal-care and hygiene formulations.",
		category: "Functional Ingredient",
	},
	{
		code: "VRUSHCARE DSMO",
		name: "Silver(I) Oxide",
		cas: "20667-12-3",
		formula: "Ag₂O",
		cid: "9794626",
		description:
			"An inorganic silver compound. Confirm its identity and intended application against your product documentation.",
		category: "Inorganic Compound",
	},
	{
		code: "VRUSHCARE ZPTO",
		name: "Zinc Pyrithione",
		cas: "13463-41-7",
		formula: "C₁₀H₈N₂O₂S₂Zn",
		cid: "26041",
		description:
			"A zinc coordination compound associated with certain hair and scalp-care applications, subject to applicable regulations.",
		category: "Hair & Scalp Care",
	},
];

export default function HairCare() {
	return (
		<main className="min-h-screen bg-[#FAF8F2] text-[#15324B]">
			{/* Top Banner - Original Image, No Navbar */}
			<section className="relative isolate overflow-hidden bg-[#EAF3FB]">
				<img
					src={bannerImage}
					alt="Hair care science and cosmetic ingredient research"
					className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
				/>

				{/* Light overlay keeps the banner text readable */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/65 to-white/10" />

				<div className="mx-auto grid min-h-[360px] max-w-7xl items-center px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[440px] lg:px-12">
					<div className="max-w-2xl">
						<Link
							href="/"
							className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/20 bg-white/85 px-4 py-2 text-sm font-semibold text-[#0E3C6E] shadow-sm backdrop-blur-sm transition hover:bg-[#0E3C6E] hover:text-white">
							<ArrowLeft size={16} />
							Home
						</Link>

						<p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#0365D0]">
							Vrushaba Chemicals · Personal Care Ingredients
						</p>

						<h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
							Hair Care
							<span className="block text-[#0365D0]">Ingredients</span>
						</h1>

						<p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
							Explore our hair-care ingredient portfolio, including product
							information, CAS numbers and chemical structure references for
							research and formulation evaluation.
						</p>

						<a
							href="#products"
							className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#0E3C6E] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0E3C6E]/15 transition hover:bg-[#0365D0]">
							Explore Our Products
							<ArrowUpRight size={18} />
						</a>
					</div>
				</div>
			</section>

			{/* Products */}
			<section
				id="products"
				className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
				<div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0365D0]">
							Our Portfolio
						</p>

						<h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E3C6E] sm:text-4xl">
							Hair Care Products
						</h2>

						<p className="mt-3 max-w-2xl leading-7 text-slate-600">
							Explore our listed ingredients, chemical structure references and
							key product information.
						</p>
					</div>

					<span className="w-fit rounded-full border border-[#D7E3EC] bg-white px-4 py-2 text-sm font-medium text-slate-600">
						{products.length} Products
					</span>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{products.map((product, index) => (
						<article
							key={product.code}
							className="group overflow-hidden rounded-3xl border border-[#DFE6EB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#A8C9E5] hover:shadow-xl hover:shadow-[#0E3C6E]/[0.07]">
							<div className="grid sm:grid-cols-[0.9fr_1.1fr]">
								{/* Chemical Structure */}
								<div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#F3F8FC] p-5">
									<span className="absolute left-4 top-4 rounded-full border border-[#D8E6F1] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E3C6E]">
										Chemical Structure
									</span>

									<img
										src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${product.cid}/PNG?image_size=300x300`}
										alt={`Reference chemical structure for ${product.name}`}
										loading="lazy"
										className="mt-5 h-48 w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
									/>

									<a
										href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.cid}`}
										target="_blank"
										rel="noreferrer"
										className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-[#0365D0] shadow-sm transition hover:bg-[#0E3C6E] hover:text-white">
										View Reference
										<ArrowUpRight size={13} />
									</a>
								</div>

								{/* Product Details */}
								<div className="flex flex-col p-6 sm:p-7">
									<div className="flex items-start justify-between gap-3">
										<span className="rounded-md bg-[#EAF3FB] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E3C6E]">
											Product {String(index + 1).padStart(2, "0")}
										</span>

										<CheckCircle2
											size={19}
											className="shrink-0 text-[#0365D0]"
										/>
									</div>

									<h3 className="mt-5 text-xl font-bold leading-snug text-[#0E3C6E]">
										{product.code}
									</h3>

									<p className="mt-1 text-sm font-medium text-slate-600">
										{product.name}
									</p>

									<p className="mt-4 text-sm leading-6 text-slate-500">
										{product.description}
									</p>

									<div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
										<div className="flex items-start justify-between gap-3 text-sm">
											<span className="text-slate-500">CAS Number</span>
											<span className="text-right font-semibold text-[#0E3C6E]">
												{product.cas}
											</span>
										</div>

										<div className="flex items-start justify-between gap-3 text-sm">
											<span className="text-slate-500">Molecular Formula</span>
											<span className="text-right font-semibold text-[#0E3C6E]">
												{product.formula}
											</span>
										</div>

										<div className="flex items-start justify-between gap-3 text-sm">
											<span className="text-slate-500">Category</span>
											<span className="text-right font-medium text-slate-700">
												{product.category}
											</span>
										</div>
									</div>

									<a
										href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.cid}`}
										target="_blank"
										rel="noreferrer"
										className="mt-6 inline-flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-[#0365D0] transition hover:text-[#0E3C6E]">
										Chemical Reference
										<ArrowUpRight
											size={17}
											className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										/>
									</a>
								</div>
							</div>
						</article>
					))}
				</div>

				<p className="mt-8 text-xs leading-6 text-slate-500">
					Chemical structures and identifiers are provided for reference. Verify
					exact chemical identity, grade, specifications and intended
					application against your technical documentation.
				</p>
			</section>

			{/* Contact CTA */}
			<section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
				<div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0E3C6E] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
								Vrushaba Chemicals
							</p>

							<h2 className="mt-3 text-2xl font-bold sm:text-3xl">
								Looking for product information?
							</h2>

							<p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
								Contact our team for product specifications, availability and
								technical documentation.
							</p>
						</div>

						<Link
							href="/contact"
							className="inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0E3C6E] transition hover:bg-blue-50">
							Contact Us
							<ArrowUpRight size={18} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
