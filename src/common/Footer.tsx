"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowUpRight,
	ArrowRight,
	Mail,
	Phone,
	MoveUpRight,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faInstagram,
	faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "About Us", href: "/about-us" },
	{ label: "Research & Development", href: "/research-development" },
	{ label: "Applications", href: "/applications" },
	{ label: "Contact", href: "/contact" },
];

const products = [
	{ label: "Sun Care Ingredients", href: "/products/sun-care" },
	{ label: "Hair Care Ingredients", href: "/products/hair-care" },
	{ label: "Hair Colour Ingredients", href: "/products/hair-dye" },
	{ label: "All Products", href: "/products" },
];

const contactDetails = [
	{
		label: "Email",
		value: "Contact our team",
		href: "/contact",
		icon: Mail,
	},
	{
		label: "Enquiries",
		value: "Product & sourcing enquiries",
		href: "/contact?type=product-enquiry",
		icon: Phone,
	},
];

const socialLinks = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/",
		icon: faLinkedinIn,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/",
		icon: faInstagram,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/",
		icon: faFacebookF,
	},
];

export default function Footer() {
	const reduceMotion = useReducedMotion();

	return (
		<footer className="relative isolate overflow-hidden bg-[#0B2F53] text-white">
			{/* Subtle background decoration */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full border border-white/[0.07] sm:h-96 sm:w-96"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-[#0365D0]/15 blur-3xl"
			/>

			<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
				{/* Main footer */}
				<div className="grid gap-9 py-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
					{/* Brand */}
					<motion.div
						initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
						className="sm:col-span-2 lg:col-span-4">
						<Link
							href="/"
							aria-label="Vrushaba Chemicals home"
							className="inline-flex rounded-md bg-white p-2 transition-opacity hover:opacity-90">
							<Image
								src="https://res.cloudinary.com/spkdq7z2/image/upload/v1791971168/Vrushaba_Logo_Final_-_PNG_1.png"
								alt="Vrushaba Chemicals"
								width={180}
								height={70}
								sizes="180px"
								className="h-auto w-[125px] object-contain sm:w-[145px]"
							/>
						</Link>

						<p className="mt-4 max-w-sm text-[13px] leading-6 text-white/65">
							Specialised chemical ingredients for personal-care applications,
							with a focus on product knowledge, formulation requirements, and
							lasting professional partnerships.
						</p>

						{/* Font Awesome social icons */}
						<div className="mt-5">
							<p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
								Connect with us
							</p>

							<div className="flex items-center gap-2">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										title={social.label}
										className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B8D9F3] hover:bg-white/10 hover:text-[#B8D9F3]">
										<FontAwesomeIcon icon={social.icon} className="text-sm" />
									</a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Navigation */}
					<motion.div
						initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: reduceMotion ? 0.01 : 0.5,
							delay: reduceMotion ? 0 : 0.05,
						}}
						className="lg:col-span-2">
						<h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8D9F3]">
							Explore
						</h3>

						<ul className="space-y-3">
							{navigation.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="group inline-flex items-center gap-1.5 text-[13px] text-white/65 transition-colors hover:text-white">
										{item.label}
										<ArrowUpRight
											size={12}
											className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
										/>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Products */}
					<motion.div
						initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: reduceMotion ? 0.01 : 0.5,
							delay: reduceMotion ? 0 : 0.1,
						}}
						className="lg:col-span-3">
						<h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8D9F3]">
							Our Portfolio
						</h3>

						<ul className="space-y-3">
							{products.map((product) => (
								<li key={product.href}>
									<Link
										href={product.href}
										className="group inline-flex items-center gap-1.5 text-[13px] text-white/65 transition-colors hover:text-white">
										{product.label}
										<ArrowUpRight
											size={12}
											className="shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
										/>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: reduceMotion ? 0.01 : 0.5,
							delay: reduceMotion ? 0 : 0.15,
						}}
						className="lg:col-span-3">
						<h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8D9F3]">
							Get in Touch
						</h3>

						<div className="space-y-4">
							{contactDetails.map((item) => {
								const Icon = item.icon;

								return (
									<Link
										key={item.label}
										href={item.href}
										className="group flex items-start gap-3">
										<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-[#B8D9F3] transition-colors group-hover:bg-white/10">
											<Icon size={15} strokeWidth={1.6} />
										</span>

										<span className="pt-0.5">
											<span className="block text-[11px] text-white/45">
												{item.label}
											</span>
											<span className="mt-1 block text-[13px] leading-5 text-white/80 transition-colors group-hover:text-white">
												{item.value}
											</span>
										</span>
									</Link>
								);
							})}
						</div>

						<Link
							href="/contact"
							className="group mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8D9F3] transition-colors hover:text-white">
							Contact our team
							<ArrowRight
								size={14}
								className="transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</motion.div>
				</div>

				{/* Compact bottom bar */}
				<div className="border-t border-white/15 py-5">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-[11px] leading-5 text-white/50">
							© {new Date().getFullYear()} Vrushaba Chemicals. All rights
							reserved.
						</p>

						<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
							<Link
								href="/privacy-policy"
								className="text-[11px] text-white/50 transition-colors hover:text-white">
								Privacy Policy
							</Link>

							<Link
								href="/terms-and-conditions"
								className="text-[11px] text-white/50 transition-colors hover:text-white">
								Terms &amp; Conditions
							</Link>

							<span className="hidden h-3 w-px bg-white/20 sm:block" />

							<a
								href="https://hsdev.in"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-1.5 text-[11px] text-white/55 transition-colors hover:text-white">
								<span>Developed by</span>
								<span className="font-bold tracking-wide text-white/85">
									HSDEV
								</span>
								<MoveUpRight
									size={12}
									className="text-[#B8D9F3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
