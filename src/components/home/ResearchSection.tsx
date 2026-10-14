import Link from "next/link";
import { ArrowUpRight, FlaskConical, Microscope, Atom } from "lucide-react";

export default function ResearchSection() {
	return (
		<section className="relative overflow-hidden bg-[#FAF8F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
			<div className="mx-auto max-w-[1500px]">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Image composition */}
					<div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
						<div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[40px] border-l border-t border-[#A8BFA8]" />

						<div className="absolute -bottom-8 -right-6 h-48 w-48 rounded-full bg-[#DCEAF5]/70 blur-3xl" />

						<div className="relative overflow-hidden rounded-[28px] bg-[#E6EFE7] p-2.5 sm:p-3">
							<img
								src="https://res.cloudinary.com/spkdq7z2/image/upload/v1791975781/e46b363a-a20b-4143-ac34-6f49781dadb0.png"
								alt="Scientific glassware and ingredients representing personal care chemistry"
								className="h-[360px] w-full rounded-[21px] object-cover sm:h-[470px] lg:h-[530px]"
								loading="lazy"
							/>

							<div className="absolute inset-x-2.5 bottom-2.5 rounded-b-[21px] bg-gradient-to-t from-[#172B29]/65 to-transparent p-5 pt-20 sm:inset-x-3 sm:bottom-3 sm:p-7 sm:pt-24">
								<span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/80">
									Personal Care Chemistry
								</span>
								<p className="mt-2 max-w-sm font-serif text-2xl leading-snug text-white sm:text-3xl">
									Understanding ingredients. Exploring possibilities.
								</p>
							</div>
						</div>

						{/* Floating scientific detail */}
						<div className="absolute -right-2 top-8 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_12px_40px_-20px_rgba(14,60,110,0.25)] sm:-right-6 sm:top-12 sm:p-4">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6EFE7] text-[#315B4C]">
								<FlaskConical size={22} strokeWidth={1.5} />
							</div>
							<div>
								<p className="font-serif text-base text-[#0E3C6E]">
									Ingredient science
								</p>
								<p className="mt-1 text-[10px] text-[#303936]/60">
									Knowledge · Application · Chemistry
								</p>
							</div>
						</div>

						{/* Decorative corner */}
						<div className="absolute -bottom-5 -left-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8E4D9] bg-[#FAF8F2] text-[#315B4C] sm:-bottom-6 sm:-left-5 sm:h-16 sm:w-16">
							<Atom size={27} strokeWidth={1.3} />
						</div>
					</div>

					{/* Content */}
					<div className="relative pt-4 lg:pt-0">
						<div className="flex items-center gap-3">
							<span className="h-px w-10 bg-[#729681]" />
							<span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#547761] sm:text-xs">
								Research & Development
							</span>
						</div>

						<h2 className="mt-7 font-serif text-[clamp(2.7rem,4.4vw,4.7rem)] leading-[1.08] tracking-[-0.045em] text-[#0E3C6E]">
							Where science
							<br />
							meets <span className="italic text-[#729681]">possibility.</span>
						</h2>

						<p className="mt-7 max-w-xl text-base font-medium leading-7 text-[#303936] sm:text-lg">
							Every formulation begins with understanding the ingredients behind
							it.
						</p>

						<p className="mt-4 max-w-xl text-sm leading-8 text-[#303936]/70 sm:text-base sm:leading-8">
							At Vrushaba Chemicals, our product-focused approach centres on
							specialised ingredients and their roles in personal-care
							applications. We recognise the importance of chemical identity,
							technical specifications, and application requirements when
							evaluating ingredients for formulation development.
						</p>

						<p className="mt-4 max-w-xl text-sm leading-7 text-[#303936]/65">
							We welcome product and technical enquiries from businesses seeking
							further information about our portfolio.
						</p>

						{/* Supporting details */}
						<div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
							<div className="rounded-2xl border border-[#E4E8DE] bg-white/70 p-4 sm:p-5">
								<Microscope
									size={22}
									strokeWidth={1.4}
									className="text-[#547761]"
								/>
								<h3 className="mt-4 font-serif text-lg text-[#0E3C6E]">
									Ingredient knowledge
								</h3>
								<p className="mt-2 text-xs leading-5 text-[#303936]/65 sm:text-sm">
									Chemical identity and product specifications.
								</p>
							</div>

							<div className="rounded-2xl border border-[#DCE6EE] bg-[#DCEAF5]/55 p-4 sm:p-5">
								<FlaskConical
									size={22}
									strokeWidth={1.4}
									className="text-[#0E3C6E]"
								/>
								<h3 className="mt-4 font-serif text-lg text-[#0E3C6E]">
									Application focus
								</h3>
								<p className="mt-2 text-xs leading-5 text-[#303936]/65 sm:text-sm">
									Ingredients aligned with formulation requirements.
								</p>
							</div>
						</div>

						{/* CTA */}
						<div className="mt-9 flex flex-wrap items-center gap-5">
							<Link
								href="/research-development"
								className="group inline-flex min-h-14 items-center gap-5 rounded-full bg-[#0E3C6E] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#174F82] hover:shadow-lg sm:px-7">
								Explore Our R&D Approach
								<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
									<ArrowUpRight size={17} />
								</span>
							</Link>

							<Link
								href="/contact"
								className="text-sm font-medium text-[#0E3C6E] underline decoration-[#B9CCBD] underline-offset-4 transition-colors hover:text-[#547761]">
								Technical Enquiries
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
