"use client";

import { useState, type FormEvent } from "react";
import {
	ArrowRight,
	CheckCircle2,
	Clock3,
	Globe2,
	Mail,
	MapPin,
	Phone,
	Send,
} from "lucide-react";

const contactDetails = [
	{
		icon: Phone,
		label: "Call Us",
		value: "+91 93927 49234",
		href: "tel:+919392749234",
		description: "Speak directly with our team",
	},
	{
		icon: Mail,
		label: "Email Us",
		value: "santoshkumar.a@vrushabachemicals.com",
		href: "mailto:santoshkumar.a@vrushabachemicals.com",
		description: "Send us your product inquiries",
	},
	{
		icon: Globe2,
		label: "Visit Our Website",
		value: "www.vrushabachemicals.com",
		href: "https://www.vrushabachemicals.com",
		description: "Discover our products and solutions",
	},
	{
		icon: MapPin,
		label: "Our Location",
		value: "Telangana, India",
		href: "https://maps.google.com/?q=Telangana,India",
		description: "Serving personal care manufacturers",
	},
];

export default function ContactSection() {
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(Object.fromEntries(formData.entries())),
			});

			if (!response.ok) {
				throw new Error("Unable to submit your inquiry.");
			}

			setSubmitted(true);
			form.reset();
		} catch {
			alert(
				"We couldn't submit your inquiry. Please try again or email santoshkumar.a@vrushabachemicals.com.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-28">
			{/* Background decoration */}
			<div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DCEAF5]/60 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#E6EFE7]/80 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
				{/* Section heading */}
				<div className="mx-auto mb-14 max-w-3xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-[#0E3C6E]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0E3C6E]">
						<span className="h-2 w-2 rounded-full bg-[#0365D0]" />
						Get In Touch
					</span>

					<h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0E3C6E] sm:text-5xl lg:text-6xl">
						Let&apos;s Start a
						<span className="mt-2 block text-[#0365D0]">Conversation.</span>
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#303936] sm:text-lg">
						Whether you need product information, technical assistance, or a
						reliable chemical manufacturing partner, our team is ready to
						understand your requirements and help you find the right solution.
					</p>
				</div>

				{/* Main contact card */}
				<div className="grid overflow-hidden rounded-[2rem] border border-[#0E3C6E]/10 bg-white shadow-[0_25px_80px_-30px_rgba(14,60,110,0.22)] lg:grid-cols-[0.9fr_1.1fr]">
					{/* Left contact panel */}
					<div className="relative overflow-hidden bg-[#0E3C6E] p-7 text-white sm:p-10 lg:p-12">
						{/* Decorative circles */}
						<div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
						<div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
						<div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#0365D0]/30 blur-2xl" />

						<div className="relative">
							<p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
								Contact Information
							</p>

							<h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
								We&apos;re Here
								<br />
								to Help.
							</h3>

							<p className="mt-5 max-w-sm text-sm leading-7 text-blue-100 sm:text-base">
								Have a question about our ingredients or manufacturing
								capabilities? Get in touch with us. We look forward to
								discussing your requirements.
							</p>

							{/* Contact details */}
							<div className="mt-10 space-y-7">
								{contactDetails.map((item) => {
									const Icon = item.icon;

									return (
										<a
											key={item.label}
											href={item.href}
											target={
												item.label === "Visit Our Website" ||
												item.label === "Our Location"
													? "_blank"
													: undefined
											}
											rel={
												item.label === "Visit Our Website" ||
												item.label === "Our Location"
													? "noreferrer"
													: undefined
											}
											className="group flex items-start gap-4">
											<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 transition-colors group-hover:bg-white/20">
												<Icon size={21} strokeWidth={1.7} />
											</span>

											<span className="min-w-0 pt-0.5">
												<span className="block text-sm font-medium text-blue-200">
													{item.label}
												</span>

												<span className="mt-1 block break-words text-sm font-semibold text-white transition-colors group-hover:text-blue-200 sm:text-base">
													{item.value}
												</span>

												<span className="mt-1 block text-xs leading-5 text-blue-100/75">
													{item.description}
												</span>
											</span>
										</a>
									);
								})}
							</div>

							{/* Experience badge */}
							<div className="mt-12 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5">
								<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0E3C6E]">
									<span className="text-xl font-bold">25+</span>
								</div>

								<div>
									<p className="font-semibold text-white">
										Years of Experience
									</p>
									<p className="mt-1 text-sm leading-6 text-blue-100">
										Supporting the personal care ingredients industry.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right inquiry form */}
					<div className="p-7 sm:p-10 lg:p-12">
						{submitted ? (
							<div
								role="status"
								className="flex min-h-[500px] flex-col items-center justify-center text-center">
								<CheckCircle2
									size={64}
									strokeWidth={1.4}
									className="text-emerald-600"
								/>

								<h3 className="mt-6 text-2xl font-semibold text-[#0E3C6E]">
									Thank You for Reaching Out!
								</h3>

								<p className="mt-3 max-w-sm leading-7 text-[#303936]">
									Your inquiry has been submitted successfully. Our team will
									get back to you as soon as possible.
								</p>

								<button
									type="button"
									onClick={() => setSubmitted(false)}
									className="mt-8 rounded-xl bg-[#0E3C6E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0365D0]">
									Send Another Inquiry
								</button>
							</div>
						) : (
							<>
								<div className="mb-8">
									<h3 className="text-2xl font-semibold text-[#0E3C6E] sm:text-3xl">
										Send Us an Inquiry
									</h3>

									<p className="mt-3 text-sm leading-7 text-[#303936]">
										Tell us a little about your requirements, and our team will
										get in touch with you.
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-5">
									{/* Name and company */}
									<div className="grid gap-5 sm:grid-cols-2">
										<div>
											<label
												htmlFor="name"
												className="mb-2 block text-sm font-semibold text-[#303936]">
												Full Name <span className="text-red-500">*</span>
											</label>

											<input
												id="name"
												name="name"
												type="text"
												autoComplete="name"
												placeholder="Your full name"
												required
												maxLength={100}
												className="w-full rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 text-sm text-[#303936] outline-none transition-all placeholder:text-gray-400 focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
											/>
										</div>

										<div>
											<label
												htmlFor="company"
												className="mb-2 block text-sm font-semibold text-[#303936]">
												Company Name
											</label>

											<input
												id="company"
												name="company"
												type="text"
												autoComplete="organization"
												placeholder="Your company"
												maxLength={150}
												className="w-full rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 text-sm text-[#303936] outline-none transition-all placeholder:text-gray-400 focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
											/>
										</div>
									</div>

									{/* Email and phone */}
									<div className="grid gap-5 sm:grid-cols-2">
										<div>
											<label
												htmlFor="email"
												className="mb-2 block text-sm font-semibold text-[#303936]">
												Email Address <span className="text-red-500">*</span>
											</label>

											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												placeholder="you@company.com"
												required
												maxLength={254}
												className="w-full rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 text-sm text-[#303936] outline-none transition-all placeholder:text-gray-400 focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
											/>
										</div>

										<div>
											<label
												htmlFor="phone"
												className="mb-2 block text-sm font-semibold text-[#303936]">
												Phone Number
											</label>

											<input
												id="phone"
												name="phone"
												type="tel"
												autoComplete="tel"
												placeholder="+91 XXXXX XXXXX"
												maxLength={20}
												className="w-full rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 text-sm text-[#303936] outline-none transition-all placeholder:text-gray-400 focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
											/>
										</div>
									</div>

									{/* Product interest */}
									<div>
										<label
											htmlFor="interest"
											className="mb-2 block text-sm font-semibold text-[#303936]">
											Area of Interest <span className="text-red-500">*</span>
										</label>

										<div className="relative">
											<select
												id="interest"
												name="interest"
												required
												defaultValue=""
												className="w-full appearance-none rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 pr-10 text-sm text-[#303936] outline-none transition-all focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10">
												<option value="" disabled>
													Select your area of interest
												</option>
												<option value="Sun Care">Sun Care Ingredients</option>
												<option value="Hair Care">Hair Care Ingredients</option>
												<option value="Hair Dyes">Hair Dye Ingredients</option>
												<option value="R&D">Research & Development</option>
												<option value="Manufacturing">
													Chemical Manufacturing
												</option>
												<option value="Other">Other Requirements</option>
											</select>

											<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0E3C6E]">
												<ArrowRight size={16} className="rotate-90" />
											</span>
										</div>
									</div>

									{/* Message */}
									<div>
										<label
											htmlFor="message"
											className="mb-2 block text-sm font-semibold text-[#303936]">
											Your Requirements <span className="text-red-500">*</span>
										</label>

										<textarea
											id="message"
											name="message"
											rows={4}
											placeholder="Tell us about the products, ingredients, or technical assistance you need..."
											required
											minLength={10}
											maxLength={3000}
											className="w-full resize-y rounded-xl border border-[#0E3C6E]/15 bg-[#FAF8F2]/60 px-4 py-3.5 text-sm leading-6 text-[#303936] outline-none transition-all placeholder:text-gray-400 focus:border-[#0365D0] focus:bg-white focus:ring-4 focus:ring-[#0365D0]/10"
										/>
									</div>

									{/* Submit */}
									<button
										type="submit"
										disabled={isSubmitting}
										className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0E3C6E] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3C6E]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0365D0] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60">
										{isSubmitting ? (
											<>
												<span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
												Sending Your Inquiry...
											</>
										) : (
											<>
												<Send size={17} />
												Submit Inquiry
												<ArrowRight
													size={17}
													className="transition-transform group-hover:translate-x-1"
												/>
											</>
										)}
									</button>

									<p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-gray-500">
										<Clock3
											size={15}
											className="mt-0.5 shrink-0 text-[#0365D0]"
										/>
										We appreciate your interest and look forward to connecting
										with you.
									</p>
								</form>
							</>
						)}
					</div>
				</div>

				{/* Bottom trust statement */}
				<div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
					<span className="h-px w-10 bg-[#0E3C6E]/20" />
					<p className="text-sm font-medium text-[#0E3C6E]">
						Your trusted partner in personal care ingredients for 25 years.
					</p>
					<span className="h-px w-10 bg-[#0E3C6E]/20" />
				</div>
			</div>
		</section>
	);
}
