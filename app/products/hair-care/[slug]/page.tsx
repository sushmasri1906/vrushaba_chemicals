import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hairCareProducts } from "@/app/data/hair-care/data";
import HairCareProductDetails from "@/src/products/Haircare/HairCareProducts";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return hairCareProducts.map((product) => ({
		slug: product.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;

	const product = hairCareProducts.find((item) => item.slug === slug);

	if (!product) {
		return {
			title: "Product Not Found | Vrushaba Chemicals",
		};
	}

	return {
		title: `${product.name} | Vrushaba Chemicals`,
		description: product.description,
		openGraph: {
			title: `${product.name} | Vrushaba Chemicals`,
			description: product.description,
		},
	};
}

export default async function HairCareProductPage({ params }: PageProps) {
	const { slug } = await params;

	const product = hairCareProducts.find((item) => item.slug === slug);

	if (!product) {
		notFound();
	}

	return <HairCareProductDetails product={product} />;
}
