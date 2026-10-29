"use client";

import {
	MapPin,
	ArrowUpRight,
	Navigation,
	Building2,
	MapPinned,
} from "lucide-react";

const address =
	"Survey No. 843/A, Medchal Industrial Estate, Medchal-Malkajgiri District, Telangana, India 501401";

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
	address,
)}&z=15&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
	address,
)}`;

export default function GoogleMap() {
	return (
		<section className="relative overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-28">
			{/* Decorative background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E6EFE7]/70 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#DCEAF5]/70 blur-3xl"
			/>

			<div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
				{/* Section heading */}
				<div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
					<div className="max-w-2xl">
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/10 bg-white/80 px-4 py-2">
							<span className="h-2 w-2 rounded-full bg-[#0365D0]" />
							<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E3C6E]">
								Our Location
							</span>
						</div>

						<h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0E3C6E] sm:text-4xl lg:text-5xl">
							Let&apos;s connect
							<br />
							<span className="text-[#0365D0]">in person.</span>
						</h2>

						<p className="mt-5 max-w-xl text-base leading-7 text-[#303936]/75 sm:text-lg sm:leading-8">
							Visit Vrushaba Chemicals at our facility in Medchal Industrial
							Estate, Telangana. We look forward to connecting with you.
						</p>
					</div>

					<a
						href={directionsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#0E3C6E] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3C6E]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0365D0] hover:shadow-xl">
						<Navigation className="h-4 w-4" />
						Get Directions
						<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</div>

				{/* Main location layout */}
				<div className="grid overflow-hidden rounded-[28px] border border-[#0E3C6E]/10 bg-white shadow-[0_24px_80px_rgba(14,60,110,0.09)] lg:grid-cols-[0.78fr_1.22fr]">
					{/* Left information panel */}
					<div className="relative flex flex-col justify-between overflow-hidden bg-[#0E3C6E] p-7 text-white sm:p-10 lg:p-11">
						{/* Decorative graphic */}
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.08]"
						/>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/[0.08]"
						/>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#0365D0]/30 blur-2xl"
						/>

						<div className="relative">
							<div className="mb-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
								<Building2
									className="h-7 w-7 text-[#DCEAF5]"
									strokeWidth={1.5}
								/>
							</div>

							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DCEAF5]">
								Vrushaba Chemicals
							</p>

							<h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
								Your trusted
								<br />
								chemical partner.
							</h3>

							<p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
								Connect with our team for product enquiries, technical
								information, and business collaborations.
							</p>
						</div>

						<div className="relative mt-12 space-y-7">
							<div className="flex gap-4">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
									<MapPin className="h-5 w-5 text-[#DCEAF5]" />
								</div>

								<div>
									<p className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
										Our Address
									</p>

									<address className="mt-2 text-sm not-italic leading-7 text-white/90">
										Survey No. 843/A,
										<br />
										Medchal Industrial Estate,
										<br />
										Medchal-Malkajgiri District,
										<br />
										Telangana, India – 501401
									</address>
								</div>
							</div>

							<div className="h-px bg-white/15" />

							<div className="flex gap-4">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
									<MapPinned className="h-5 w-5 text-[#DCEAF5]" />
								</div>

								<div>
									<p className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
										Location
									</p>
									<p className="mt-2 text-sm leading-6 text-white/90">
										Medchal Industrial Estate
									</p>
									<p className="mt-1 text-sm text-white/60">Telangana, India</p>
								</div>
							</div>
						</div>

						<a
							href={directionsUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="relative mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.07] px-5 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.13]">
							Open in Google Maps
							<ArrowUpRight className="h-4 w-4" />
						</a>
					</div>

					{/* Right map panel */}
					<div className="flex min-w-0 flex-col bg-white p-3 sm:p-4 lg:p-5">
						<div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[20px] bg-[#E6EFE7] sm:min-h-[480px] lg:min-h-[620px]">
							<iframe
								title="Vrushaba Chemicals location in Medchal Industrial Estate"
								src={mapEmbedUrl}
								width="100%"
								height="100%"
								style={{
									border: 0,
									position: "absolute",
									inset: 0,
								}}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
								className="h-full w-full"
							/>

							{/* Map location label */}
							<div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
								<div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg shadow-[#0E3C6E]/10 backdrop-blur-md sm:p-5">
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6EFE7]">
										<MapPin className="h-5 w-5 text-[#0E3C6E]" />
									</div>

									<div className="min-w-0 flex-1">
										<p className="truncate text-sm font-semibold text-[#0E3C6E]">
											Vrushaba Chemicals
										</p>
										<p className="mt-1 text-xs leading-5 text-[#303936]/65 sm:text-sm">
											Medchal Industrial Estate, Telangana 501401
										</p>
									</div>

									<a
										href={directionsUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Get directions to Vrushaba Chemicals"
										className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0E3C6E] text-white transition hover:bg-[#0365D0]">
										<ArrowUpRight className="h-5 w-5" />
									</a>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2 px-2 pb-1 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-3">
							<p className="text-xs leading-5 text-[#303936]/60">
								Visit us at our Medchal facility.
							</p>

							<a
								href={directionsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[#0365D0] transition hover:text-[#0E3C6E]">
								Plan your visit
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
