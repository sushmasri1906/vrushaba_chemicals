import FeaturedIngredients from "@/src/components/home/FeaturedIngredients";
import HeroCarousel from "@/src/components/home/HeroCarousel";
import MiniAbout from "@/src/components/home/MiniAbout";
import PartnershipSection from "@/src/components/home/PartnershipSection";
import ProductCategories from "@/src/components/home/ProductCategories";
import ResearchSection from "@/src/components/home/ResearchSection";
import React from "react";

const page = () => {
	return (
		<>
			<HeroCarousel />
			<MiniAbout />
			<ProductCategories />
			<ResearchSection />
			<FeaturedIngredients />
			<PartnershipSection />
		</>
	);
};

export default page;
