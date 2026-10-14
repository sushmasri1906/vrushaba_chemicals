// "use client";

// import { useCallback, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// const slides = [
// 	{
// 		eyebrow: "FUNCTIONAL & ACTIVE INGREDIENTS",
// 		title: "The Science Behind",
// 		accent: "Better Care.",
// 		description:
// 			"Specialised ingredients for sun care, hair care and hair colour applications.",
// 		image:
// 			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972501/k3fx2pyQuONoAerZ5YVRMmoyzVHn_uii-N3M_1sCjO048TexpYttJJK06hDsb4B1ZhAP9baxzOVnN3c8-th9DLkMxZlU1v5BsrisrJT_azwZ67Ina_SR0kBbw2nIVcCo6AjccHygiNGqhEAlY4O4mX1Jt3mThy2hLzFZTUbuwobEMQXAx5WIxp_xZYXBCq2I.jpg",
// 		alt: "Sun care formulation ingredients",
// 		number: "01",
// 		category: "SUN CARE",
// 	},
// 	{
// 		eyebrow: "INNOVATION IN HAIR CARE",
// 		title: "Chemistry That",
// 		accent: "Transforms.",
// 		description:
// 			"Specialised ingredients for the next generation of hair care formulations.",
// 		image:
// 			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972307/a2a376a1-b357-4b41-9793-58508bb0d4b9.png",
// 		alt: "Hair care formulation ingredients",
// 		number: "02",
// 		category: "HAIR CARE",
// 	},
// 	{
// 		eyebrow: "ADVANCED HAIR COLOUR",
// 		title: "Colour Meets",
// 		accent: "Chemistry.",
// 		description:
// 			"Discover ingredients for innovative hair colour and dye applications.",
// 		image:
// 			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972307/72251397-1dd0-4a04-ab55-58cfd4b1bc3f.png",
// 		alt: "Hair colour chemistry ingredients",
// 		number: "03",
// 		category: "HAIR COLOUR",
// 	},
// ];

// const highlights = [
// 	"Personal Care Ingredients",
// 	"Product-Focused Expertise",
// 	"B2B Partnerships",
// ];

// export default function HeroCarousel() {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const [paused, setPaused] = useState(false);

// 	const nextSlide = useCallback(() => {
// 		setActiveIndex((index) => (index + 1) % slides.length);
// 	}, []);

// 	const previousSlide = useCallback(() => {
// 		setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
// 	}, []);

// 	useEffect(() => {
// 		if (paused) return;

// 		const timer = window.setInterval(nextSlide, 6000);

// 		return () => window.clearInterval(timer);
// 	}, [paused, nextSlide]);

// 	const slide = slides[activeIndex];

// 	return (
// 		<section
// 			aria-label="Vrushaba Chemicals hero carousel"
// 			onMouseEnter={() => setPaused(true)}
// 			onMouseLeave={() => setPaused(false)}
// 			className="relative isolate overflow-hidden bg-[#FAF8F2] text-[#24333E]">
// 			{/* Decorative background shapes */}
// 			<div
// 				aria-hidden="true"
// 				className="pointer-events-none absolute right-[-10%] top-[-15%] -z-0 h-[420px] w-[420px] rounded-full border border-[#0E3C6E]/[0.06] sm:h-[600px] sm:w-[600px] lg:h-[760px] lg:w-[760px]"
// 			/>

// 			<div
// 				aria-hidden="true"
// 				className="pointer-events-none absolute right-[4%] top-[8%] -z-0 h-[320px] w-[320px] rounded-full border border-[#0365D0]/[0.08] sm:h-[460px] sm:w-[460px] lg:h-[600px] lg:w-[600px]"
// 			/>

// 			{/* Hero content: 75vh on desktop */}
// 			<div className="relative mx-auto flex min-h-[75svh] max-w-[1600px] flex-col justify-center px-5 pb-28 pt-12 sm:px-8 sm:pb-32 sm:pt-16 lg:px-12 lg:py-12 xl:px-16">
// 				<div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-12">
// 					{/* Left: Text content */}
// 					<div
// 						key={slide.number}
// 						className="relative z-10 animate-[heroReveal_700ms_ease-out_both]">
// 						<div className="mb-6 flex items-center gap-3 sm:mb-8">
// 							<span className="h-px w-9 bg-[#0365D0] sm:w-12" />

// 							<p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0E3C6E] sm:text-[11px] sm:tracking-[0.24em]">
// 								{slide.eyebrow}
// 							</p>
// 						</div>

// 						<h1 className="max-w-2xl font-serif text-[clamp(2.7rem,5.2vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#0E3C6E]">
// 							{slide.title}
// 							<span className="mt-1 block text-[#0365D0]">{slide.accent}</span>
// 						</h1>

// 						<p className="mt-5 max-w-lg text-sm leading-7 text-[#53616B] sm:mt-7 sm:text-base sm:leading-8">
// 							{slide.description}
// 						</p>

// 						{/* CTA buttons */}
// 						<div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
// 							<Link
// 								href="/products"
// 								className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#0E3C6E] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#0E3C6E]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0365D0] sm:min-h-14 sm:px-7">
// 								Explore Our Products
// 								<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
// 									<ArrowUpRight size={15} />
// 								</span>
// 							</Link>

// 							<Link
// 								href="/about-us"
// 								className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0E3C6E]/20 px-6 py-3 text-sm font-medium text-[#0E3C6E] transition-all duration-300 hover:border-[#0E3C6E] hover:bg-white sm:min-h-14 sm:px-7">
// 								Discover Our Story
// 								<ArrowRight
// 									size={16}
// 									className="transition-transform duration-300 group-hover:translate-x-1"
// 								/>
// 							</Link>
// 						</div>

// 						{/* Supporting highlights */}
// 						<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#0E3C6E]/10 pt-5 sm:mt-10 sm:gap-x-6">
// 							{highlights.map((highlight) => (
// 								<span
// 									key={highlight}
// 									className="flex items-center gap-2 text-[10px] font-medium text-[#53616B] sm:text-[11px]">
// 									<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0365D0]" />
// 									{highlight}
// 								</span>
// 							))}
// 						</div>
// 					</div>

// 					{/* Right: Actual image, not a background */}
// 					<div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
// 						<div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-[#E9F0F5] sm:rounded-[36px] lg:aspect-[0.94/1] xl:aspect-[1.05/1]">
// 							{/* Image frame decoration */}
// 							<div
// 								aria-hidden="true"
// 								className="absolute inset-3 z-10 rounded-[22px] border border-white/50 sm:inset-4 sm:rounded-[28px]"
// 							/>

// 							{slides.map((item, index) => (
// 								<div
// 									key={item.number}
// 									aria-hidden={index !== activeIndex}
// 									className={`absolute inset-0 transition-all duration-700 ease-in-out ${
// 										index === activeIndex
// 											? "scale-100 opacity-100"
// 											: "scale-[1.04] opacity-0"
// 									}`}>
// 									<Image
// 										src={item.image}
// 										alt={item.alt}
// 										fill
// 										priority={index === 0}
// 										sizes="(max-width: 1023px) 100vw, 52vw"
// 										className="object-contain p-5 sm:p-8 lg:p-6 xl:p-10"
// 									/>
// 								</div>
// 							))}

// 							{/* Image category label */}
// 							<div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-3 shadow-lg shadow-[#0E3C6E]/5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:px-5">
// 								<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6EFF8] text-[#0E3C6E]">
// 									<ArrowUpRight size={18} />
// 								</span>

// 								<div>
// 									<p className="text-[9px] tracking-[0.16em] text-[#788792]">
// 										EXPLORE OUR EXPERTISE
// 									</p>

// 									<p className="mt-0.5 text-xs font-semibold tracking-wide text-[#0E3C6E]">
// 										{slide.category}
// 									</p>
// 								</div>
// 							</div>

// 							{/* Slide number */}
// 							<div className="absolute right-6 top-6 z-20 rounded-full border border-white/70 bg-white/80 px-3 py-2 font-mono text-[11px] text-[#0E3C6E] backdrop-blur-md sm:right-8 sm:top-8">
// 								{slide.number} / 03
// 							</div>
// 						</div>

// 						{/* Image-side decorative caption */}
// 						<div className="mt-4 flex items-center justify-between px-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#788792] sm:mt-5">
// 							<span>Science · Quality · Innovation</span>
// 							<span>VRUSHABA CHEMICALS</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom carousel controls */}
// 			<div className="absolute bottom-0 left-0 right-0 border-t border-[#0E3C6E]/10 bg-[#FAF8F2]/90 backdrop-blur-md">
// 				<div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-12 xl:px-16">
// 					<div className="flex items-center gap-3 sm:gap-4">
// 						{slides.map((item, index) => (
// 							<button
// 								key={item.number}
// 								type="button"
// 								aria-label={`Show ${item.category} slide`}
// 								aria-pressed={index === activeIndex}
// 								onClick={() => setActiveIndex(index)}
// 								className="flex h-8 items-center">
// 								<span
// 									className={`block h-[3px] rounded-full transition-all duration-300 ${
// 										index === activeIndex
// 											? "w-10 bg-[#0E3C6E] sm:w-14"
// 											: "w-5 bg-[#0E3C6E]/20 hover:bg-[#0365D0]/60 sm:w-7"
// 									}`}
// 								/>
// 							</button>
// 						))}

// 						<span className="ml-1 font-mono text-[10px] tracking-widest text-[#53616B]">
// 							{slide.number} / 03
// 						</span>
// 					</div>

// 					<div className="flex items-center gap-2">
// 						<button
// 							type="button"
// 							aria-label="Previous slide"
// 							onClick={previousSlide}
// 							className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0E3C6E]/15 text-[#0E3C6E] transition-colors hover:bg-[#0E3C6E] hover:text-white sm:h-10 sm:w-10">
// 							<ArrowLeft size={16} />
// 						</button>

// 						<button
// 							type="button"
// 							aria-label="Next slide"
// 							onClick={nextSlide}
// 							className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0E3C6E]/15 text-[#0E3C6E] transition-colors hover:bg-[#0E3C6E] hover:text-white sm:h-10 sm:w-10">
// 							<ArrowRight size={16} />
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			<style jsx>{`
// 				@keyframes heroReveal {
// 					from {
// 						opacity: 0;
// 						transform: translateY(14px);
// 					}
// 					to {
// 						opacity: 1;
// 						transform: translateY(0);
// 					}
// 				}

// 				@media (prefers-reduced-motion: reduce) {
// 					section *,
// 					section *::before,
// 					section *::after {
// 						animation-duration: 0.01ms !important;
// 						transition-duration: 0.01ms !important;
// 					}
// 				}
// 			`}</style>
// 		</section>
// 	);
// }

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const slides = [
	{
		eyebrow: "FUNCTIONAL & ACTIVE INGREDIENTS",
		title: "The Science Behind",
		accent: "Better Care.",
		description:
			"Specialised ingredients for sun care, hair care and hair colour applications.",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972501/k3fx2pyQuONoAerZ5YVRMmoyzVHn_uii-N3M_1sCjO048TexpYttJJK06hDsb4B1ZhAP9baxzOVnN3c8-th9DLkMxZlU1v5BsrisrJT_azwZ67Ina_SR0kBbw2nIVcCo6AjccHygiNGqhEAlY4O4mX1Jt3mThy2hLzFZTUbuwobEMQXAx5WIxp_xZYXBCq2I.jpg",
		category: "PERSONAL CARE",
	},
	{
		eyebrow: "INNOVATION IN HAIR CARE",
		title: "Chemistry That",
		accent: "Transforms.",
		description:
			"Specialised ingredients for the next generation of hair care formulations.",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972307/a2a376a1-b357-4b41-9793-58508bb0d4b9.png",
		category: "HAIR CARE",
	},
	{
		eyebrow: "ADVANCED HAIR COLOUR",
		title: "Colour Meets",
		accent: "Chemistry.",
		description:
			"Discover ingredients for innovative hair colour and dye applications.",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972307/72251397-1dd0-4a04-ab55-58cfd4b1bc3f.png",
		category: "HAIR COLOUR",
	},
	{
		eyebrow: "BEAUTY SCIENCE & RESEARCH",
		title: "Driven by",
		accent: "Discovery.",
		description:
			"Science-led thinking for evolving personal care formulations.",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972307/e5a7c960-fdb4-497b-a805-24b8bd3bbb1b.png",
		category: "RESEARCH & DEVELOPMENT",
	},
	{
		eyebrow: "SUN CARE INNOVATION",
		title: "Protection Through",
		accent: "Precision.",
		description:
			"Explore ingredients for modern sun care and skincare formulations.",
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972320/1dfa0700-f59a-4b00-a938-051bca8c1080.png",
		category: "SUN CARE",
	},
	{
		eyebrow: "PERSONAL CARE INNOVATION",
		title: "Possibilities in",
		accent: "Every Formula.",
		description:
			"Discover specialised ingredients for evolving personal care applications.",
		// Replace with your sixth image URL when available.
		image:
			"https://res.cloudinary.com/spkdq7z2/image/upload/v1791972501/k3fx2pyQuONoAerZ5YVRMmoyzVHn_uii-N3M_1sCjO048TexpYttJJK06hDsb4B1ZhAP9baxzOVnN3c8-th9DLkMxZlU1v5BsrisrJT_azwZ67Ina_SR0kBbw2nIVcCo6AjccHygiNGqhEAlY4O4mX1Jt3mThy2hLzFZTUbuwobEMQXAx5WIxp_xZYXBCq2I.jpg",
		category: "FORMULATION",
	},
];

const highlights = [
	"Personal Care Ingredients",
	"Product-Focused Expertise",
	"B2B Partnerships",
];

const AUTOPLAY_DELAY = 6000;

export default function HeroCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const touchStart = useRef<{ x: number; y: number } | null>(null);

	const nextSlide = useCallback(() => {
		setActiveIndex((index) => (index + 1) % slides.length);
	}, []);

	const previousSlide = useCallback(() => {
		setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
	}, []);

	// Automatically advance every six seconds.
	// Changing slides resets the autoplay timer.
	useEffect(() => {
		const timer = window.setTimeout(nextSlide, AUTOPLAY_DELAY);
		return () => window.clearTimeout(timer);
	}, [activeIndex, nextSlide]);

	// Keyboard navigation.
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") nextSlide();
			if (event.key === "ArrowLeft") previousSlide();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [nextSlide, previousSlide]);

	const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
		touchStart.current = {
			x: event.touches[0].clientX,
			y: event.touches[0].clientY,
		};
	};

	const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
		if (!touchStart.current) return;

		const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
		const deltaY = event.changedTouches[0].clientY - touchStart.current.y;

		if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX < 0) nextSlide();
			else previousSlide();
		}

		touchStart.current = null;
	};

	const slide = slides[activeIndex];

	return (
		<section
			aria-label="Vrushaba Chemicals hero carousel"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#071C32] text-white">
			{/* Background images */}
			{slides.map((item, index) => (
				<div
					key={item.category}
					aria-hidden="true"
					className={`absolute inset-0 -z-30 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
						index === activeIndex ? "opacity-100" : "opacity-0"
					}`}
					style={{ backgroundImage: `url("${item.image}")` }}
				/>
			))}

			{/* Overlays for text readability */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[#06172B]/35"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-black/40 to-transparent"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-gradient-to-t from-[#06172B]/90 via-[#06172B]/35 to-transparent"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#0365D0]/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
			/>

			{/* Centered hero content */}
			<div className="mx-auto flex w-full max-w-[1600px] flex-1 items-center justify-center px-5 pb-36 pt-28 sm:px-8 sm:pb-36 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40">
				<div
					key={activeIndex}
					className="w-full max-w-4xl animate-[heroReveal_700ms_ease-out_both]">
					{/* Eyebrow: slightly lower, above the heading */}
					<div className="mb-5 flex items-center gap-3 pt-2 sm:mb-7 sm:gap-4 sm:pt-3">
						<span className="h-px w-8 shrink-0 bg-[#A8D0FF] sm:w-12" />
						<p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D6E8FF] sm:text-[11px] sm:tracking-[0.28em]">
							{slide.eyebrow}
						</p>
					</div>

					{/* Heading */}
					<h1 className="max-w-4xl font-serif text-[clamp(2.55rem,6.5vw,6.5rem)] font-medium leading-[1.03] tracking-[-0.045em] text-white">
						{slide.title}
						<span className="mt-1 block text-[#A8D0FF] sm:mt-2">
							{slide.accent}
						</span>
					</h1>

					{/* Description */}
					<p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
						{slide.description}
					</p>

					{/* Calls to action */}
					<div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
						<Link
							href="/products"
							className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E3C6E] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DCEBFF] sm:min-h-14 sm:px-7">
							Explore Our Products
							<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0E3C6E] text-white transition-transform duration-300 group-hover:translate-x-1">
								<ArrowUpRight size={15} />
							</span>
						</Link>

						<Link
							href="/about-us"
							className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/45 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:min-h-14 sm:px-7">
							Discover Our Story
							<ArrowRight
								size={16}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom highlights and carousel controls */}
			<div className="relative mt-auto bg-gradient-to-t from-[#06172B]/50 to-transparent">
				<div className="mx-auto max-w-[1600px] px-5 pb-5 pt-3 sm:px-8 sm:pb-6 lg:px-16 lg:pb-7">
					<div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-4 sm:gap-x-7 sm:pt-5">
						{highlights.map((highlight) => (
							<span
								key={highlight}
								className="flex items-center gap-2 text-[9px] font-medium tracking-wide text-white/90 sm:text-[10px] sm:tracking-wider">
								<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8D0FF]" />
								{highlight}
							</span>
						))}
					</div>

					<div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
						{/* Clickable indicators */}
						<div className="flex min-w-0 flex-wrap items-center gap-x-1 sm:gap-x-2">
							{slides.map((item, index) => (
								<button
									key={item.category}
									type="button"
									aria-label={`Show slide ${index + 1}: ${item.category}`}
									aria-pressed={index === activeIndex}
									onClick={() => setActiveIndex(index)}
									className="flex h-8 items-center justify-center p-1.5">
									<span
										className={`h-[3px] rounded-full transition-all duration-300 ${
											index === activeIndex
												? "w-7 bg-white sm:w-11"
												: "w-2.5 bg-white/40 hover:bg-white/80 sm:w-5"
										}`}
									/>
								</button>
							))}

							<span className="ml-1 whitespace-nowrap font-mono text-[9px] tracking-widest text-white/85 sm:text-[10px]">
								{String(activeIndex + 1).padStart(2, "0")}
								<span className="mx-1 text-white/40">/</span>
								{String(slides.length).padStart(2, "0")}
							</span>
						</div>

						{/* Previous and next */}
						<div className="flex shrink-0 items-center gap-2">
							<button
								type="button"
								onClick={previousSlide}
								aria-label="Previous slide"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white hover:text-[#0E3C6E] sm:h-10 sm:w-10">
								<ArrowLeft size={16} />
							</button>

							<button
								type="button"
								onClick={nextSlide}
								aria-label="Next slide"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white hover:text-[#0E3C6E] sm:h-10 sm:w-10">
								<ArrowRight size={16} />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Autoplay progress bar */}
			<div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
				<div
					key={activeIndex}
					className="h-full origin-left animate-[carouselProgress_6s_linear_forwards] bg-[#78B5FF]"
				/>
			</div>

			<style jsx>{`
				@keyframes heroReveal {
					from {
						opacity: 0;
						transform: translateY(16px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes carouselProgress {
					from {
						transform: scaleX(0);
					}
					to {
						transform: scaleX(1);
					}
				}

				@media (max-height: 700px) and (min-width: 768px) {
					section > div:nth-of-type(5) {
						padding-top: 9rem;
						padding-bottom: 7rem;
					}
				}

				@media (prefers-reduced-motion: reduce) {
					section *,
					section *::before,
					section *::after {
						animation-duration: 0.01ms !important;
						transition-duration: 0.01ms !important;
					}
				}
			`}</style>
		</section>
	);
}
