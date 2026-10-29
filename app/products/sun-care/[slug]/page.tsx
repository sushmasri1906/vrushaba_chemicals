import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SunCareProductDetails from "@/src/products/Suncare/SunCareProductDetails";

import { getAllProductSlugs, getProductBySlug } from "@/app/data/sun-care/data";

type ProductPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export const dynamicParams = true;

export function generateStaticParams() {
	return getAllProductSlugs().map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) {
		return {
			title: "Product Not Found | Vrushaba Chemicals",
			description: "The requested product could not be found.",
			robots: {
				index: false,
				follow: false,
			},
		};
	}

	return {
		title: `${product.name} | Vrushaba Chemicals`,
		description: product.description,
		alternates: {
			canonical: `/products/sun-care/${product.slug}`,
		},
		openGraph: {
			title: `${product.name} | Vrushaba Chemicals`,
			description: product.description,
			type: "website",
		},
	};
}

export default async function SunCareProductPage({ params }: ProductPageProps) {
	const { slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	return <SunCareProductDetails product={product} />;
}
