// app/data/skin-care/data.ts

export type ProductApplication = {
	name: string;
	description?: string;
};

export type ProductDocument = {
	label: string;
	type: "TDS" | "SDS" | "COA" | "DOSSIER" | "REGULATORY";
	url?: string;
	requestable: boolean;
};

export type ProductAction = {
	label: string;
	intent: "sample" | "spec" | "question" | "quote";
};

export type ChemicalProduct = {
	name: string;
	tradeName?: string;
	slug: string;
	code: string;
	category: "UVA" | "UVB" | "BROAD_SPECTRUM";
	inci: string;
	alsoKnownAs: string[];
	cas: string;
	ecNumber: string;
	hsnCode: string;
	description: string;
	formulatorNotes: string;
	highlights: string[];
	chemistry: {
		molecularFormula: string;
		molecularWeight: string;
		iupacName: string;
		type: string;
		uvBand: string;
		peakAbsorption: string;
		uvAbsorption: string;
		photostability: string;
		physicalForm: string;
		solubility: string[];
	};
	formulation: {
		recommendedDosage: string;
		dosageDisclaimer: string;
		applications: ProductApplication[];
	};
	logistics: {
		packSize: string;
		pallet: string;
		minimumOrderQuantity: string;
		shelfLife: string;
		storageConditions: string;
	};
	regulatory: {
		reachRegistered: string;
		regions: string[];
		disclaimer: string;
	};
	media: {
		productImage: string;
		structureImage2D: string;
		molecule3DModel?: string;
		molecule3DStatus: "available" | "pending_verified_coordinates";
		imageAlt: string;
	};
	documents: ProductDocument[];
	actions: ProductAction[];
};

const verificationNote =
	"Confirm this information against the current supplier TDS/SDS and the rules of the target market before commercial use.";

const standardApplications: ProductApplication[] = [
	{
		name: "Sunscreens & SPF Products",
		description:
			"For evaluation in compatible sun-care formulations, subject to local regulations.",
	},
	{
		name: "Daily Skin Care",
		description:
			"For evaluation in skin-care products where UV-filter use is permitted.",
	},
	{
		name: "Foundations & BB Creams",
		description:
			"For evaluation in compatible complexion formulations, subject to applicable regulations.",
	},
];

const standardDocuments: ProductDocument[] = [
	{
		label: "Technical Data Sheet",
		type: "TDS",
		requestable: true,
	},
	{
		label: "Safety Data Sheet",
		type: "SDS",
		requestable: true,
	},
	{
		label: "Certificate of Analysis",
		type: "COA",
		requestable: true,
	},
	{
		label: "Product dossier",
		type: "DOSSIER",
		requestable: true,
	},
	{
		label: "Regulatory documentation",
		type: "REGULATORY",
		requestable: true,
	},
];

const standardActions: ProductAction[] = [
	{ label: "Request a sample", intent: "sample" },
	{ label: "Request spec sheet", intent: "spec" },
	{ label: "Ask a specialist", intent: "question" },
	{ label: "Request a quotation", intent: "quote" },
];

/**
 * Creates a product record when supplier-specific specifications
 * have not yet been provided.
 *
 * Replace verification placeholders with confirmed supplier data
 * before publishing them as definitive specifications.
 */
function makeProduct(input: {
	name: string;
	slug: string;
	code: string;
	category: ChemicalProduct["category"];
	inci: string;
	alsoKnownAs: string[];
	cas: string;
	ecNumber?: string;
	molecularFormula: string;
	molecularWeight: string;
	iupacName?: string;
	type: string;
	uvBand: string;
	peakAbsorption: string;
	description: string;
	physicalForm?: string;
	structureImage2D?: string;
}): ChemicalProduct {
	return {
		name: input.name,
		slug: input.slug,
		code: input.code,
		category: input.category,
		inci: input.inci,
		alsoKnownAs: input.alsoKnownAs,
		cas: input.cas,
		ecNumber: input.ecNumber ?? "Verify with supplier documentation",
		hsnCode: "Verify with customs/tax adviser",
		description: input.description,
		formulatorNotes: verificationNote,
		highlights: [
			`Chemical identity: ${input.inci}.`,
			`UV-filter classification: ${input.type}.`,
			`Reported peak absorption: ${input.peakAbsorption}; verify against supplier data.`,
			"Supplier-specific grade, purity, performance, and compatibility must be confirmed.",
		],
		chemistry: {
			molecularFormula: input.molecularFormula,
			molecularWeight: input.molecularWeight,
			iupacName:
				input.iupacName ??
				"Verify against an authoritative chemical identity record.",
			type: input.type,
			uvBand: input.uvBand,
			peakAbsorption: input.peakAbsorption,
			uvAbsorption:
				"Confirm absorption range and spectrum from the supplier's current technical documentation.",
			photostability:
				"Confirm photostability data from the supplier's current technical documentation.",
			physicalForm:
				input.physicalForm ?? "Confirm against the supplied grade's TDS/SDS.",
			solubility: [
				"Confirm solvent compatibility and solubility from the supplier's current technical documentation.",
			],
		},
		formulation: {
			recommendedDosage:
				"Confirm with supplier TDS and applicable local regulations",
			dosageDisclaimer:
				"No dosage is asserted here as a confirmed supplier recommendation. Permitted use levels vary by jurisdiction and product type.",
			applications: standardApplications,
		},
		logistics: {
			packSize: "Confirm with supplier",
			pallet: "Confirm with supplier",
			minimumOrderQuantity: "Confirm with supplier",
			shelfLife: "Confirm with current supplier documentation",
			storageConditions: "Follow the current supplier label and SDS/TDS.",
		},
		regulatory: {
			reachRegistered: "Not verified",
			regions: [],
			disclaimer:
				"Regulatory status and permitted concentrations must be checked for the target country, product type, and current legislation before sale or formulation.",
		},
		media: {
			productImage: `/images/products/${input.slug}.webp`,
			structureImage2D: input.structureImage2D ?? "",
			molecule3DStatus: "pending_verified_coordinates",
			imageAlt: `${input.inci} chemical structure and ${input.name} ingredient`,
		},
		documents: standardDocuments,
		actions: standardActions,
	};
}

export const skinCareProducts: ChemicalProduct[] = [
	// 1. Avobenzone
	makeProduct({
		name: "VRUSHCARE Avobenzone",
		slug: "vrushcare-avobenzone",
		code: "AVS",
		category: "UVA",
		inci: "Butyl Methoxydibenzoylmethane",
		alsoKnownAs: ["Avobenzone", "BMDBM", "Parsol 1789"],
		cas: "70356-09-1",
		ecNumber: "274-581-6",
		molecularFormula: "C20H22O3",
		molecularWeight: "310.39 g/mol",
		iupacName: "1-(4-tert-butylphenyl)-3-(4-methoxyphenyl)propane-1,3-dione",
		type: "Organic UVA filter",
		uvBand: "UVA",
		peakAbsorption: "Approximately 357 nm",
		description:
			"An oil-soluble organic UV filter used to absorb UVA radiation in sun-care formulations.",
		physicalForm: "Confirm against the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/51040/PNG",
	}),

	// 2. DHHB
	makeProduct({
		name: "VRUSHCARE DHHB",
		slug: "vrushcare-dhhb",
		code: "DHHB",
		category: "UVA",
		inci: "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
		alsoKnownAs: ["DHHB", "Uvinul A Plus"],
		cas: "302776-68-7",
		ecNumber: "443-860-6",
		molecularFormula: "C24H31NO4",
		molecularWeight: "397.51 g/mol",
		iupacName: "Hexyl 2-[4-(diethylamino)-2-hydroxybenzoyl]benzoate",
		type: "Organic UVA filter",
		uvBand: "UVA",
		peakAbsorption: "Approximately 354 nm",
		description:
			"An oil-soluble organic UV filter used for UVA absorption in sun-care formulations.",
		physicalForm: "Confirm against the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/10111431/PNG",
	}),

	// 3. BEMT
	makeProduct({
		name: "VRUSHCARE BEMT",
		slug: "vrushcare-bemt",
		code: "BEM-T",
		category: "BROAD_SPECTRUM",
		inci: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
		alsoKnownAs: ["BEMT", "Bemotrizinol", "Tinosorb S"],
		cas: "187393-00-6",
		ecNumber: "Not verified",
		molecularFormula: "C38H49N3O5",
		molecularWeight: "627.82 g/mol",
		iupacName:
			"5-(2-ethylhexoxy)-2-[4-[4-(2-ethylhexoxy)-2-hydroxyphenyl]-6-(4-methoxyphenyl)-1,3,5-triazin-2-yl]phenol",
		type: "Organic broad-spectrum UV filter",
		uvBand: "UVA and UVB",
		peakAbsorption: "Multiple absorption maxima; verify exact grade data",
		description:
			"An oil-soluble organic UV filter used for broad-spectrum UVA and UVB absorption in sun-care formulations.",
		physicalForm: "Confirm against the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/135487856/PNG",
	}),

	// 4. DHBT — original product information preserved
	{
		name: "VRUSHCARE DHBT",
		tradeName: "Sunbest-HEB",
		slug: "vrushcare-dhbt",
		code: "DHBT",
		category: "BROAD_SPECTRUM",
		inci: "Diethylhexyl Butamido Triazone",
		alsoKnownAs: ["DHBT", "Iscotrizinol"],
		cas: "154702-15-5",
		ecNumber: "421-450-8",
		hsnCode: "29336900",
		description:
			"A high-molecular-weight organic UV filter used in sun-care formulations. The supplied reference describes absorption primarily in the UV-B range, with additional UV-A II coverage.",
		formulatorNotes:
			"The reference specification describes a photostable UV filter with peak absorption around 310 nm. Confirm performance, compatibility, recommended concentration and regulatory suitability against the actual supplier documentation before use.",
		highlights: [
			"UV-B absorption with a reported peak at 310 nm.",
			"Reference-reported SPF of approximately 12.5 when used alone at 10%; this is not a guaranteed finished-product SPF.",
			"High molar extinction coefficient, as described in the supplied reference.",
			"Approximately 90% protection retained after 24 hours, as reported by the reference source.",
			"High molecular weight: 765.98 g/mol in the supplied product reference.",
		],
		chemistry: {
			molecularFormula: "C44H59N7O5",
			molecularWeight: "765.98 g/mol",
			iupacName:
				"bis(2-ethylhexyl) 4,4'-[(6-{[4-(tert-butylcarbamoyl)phenyl]amino}-1,3,5-triazine-2,4-diyl)diimino]dibenzoate",
			type: "UV-B / UV-A II filter",
			uvBand: "UV-B",
			peakAbsorption: "310 nm",
			uvAbsorption:
				"UV-B: 280–320 nm, peak at 310 nm. UV-A II: 320–340 nm, according to the supplied reference.",
			photostability:
				"Approximately 90% retained after 24 hours, as reported by the reference.",
			physicalForm: "Powder (off-white)",
			solubility: [
				"Oil",
				"Ethanol",
				"Chloroform",
				"Methanol",
				"Isopropyl alcohol",
				"Isopropyl myristate",
				"Propylene glycol",
				"Dimethicone",
				"C12-C15 alkyl benzoate",
			],
		},
		formulation: {
			recommendedDosage: "5–10%",
			dosageDisclaimer:
				"Reference-reported typical dosage. Actual permitted use levels depend on the market, applicable regulations, supplier guidance and formulation requirements.",
			applications: [
				{
					name: "Sunscreens & SPF Products",
					description:
						"UV-filter ingredient for sunscreen formulation development.",
				},
				{
					name: "Foundations & BB Creams",
					description:
						"For evaluation in compatible complexion product formulations.",
				},
				{
					name: "Lip Care",
					description:
						"For evaluation in lip balms and lipsticks, subject to applicable regulations.",
				},
			],
		},
		logistics: {
			packSize: "25 kg",
			pallet: "300 kg",
			minimumOrderQuantity: "300 kg",
			shelfLife: "2 years",
			storageConditions:
				"Confirm storage conditions and shelf life against the current supplier label and technical documentation.",
		},
		regulatory: {
			reachRegistered: "Reported as registered in the reference source",
			regions: [
				"European Union",
				"United Kingdom (DUIN registration reported)",
			],
			disclaimer:
				"Regulatory status and permitted use must be confirmed for the target country and intended application before sale or formulation.",
		},
		media: {
			productImage: "/images/products/vrushcare-dhbt.webp",
			structureImage2D:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9810816/PNG",
			molecule3DModel: undefined,
			molecule3DStatus: "pending_verified_coordinates",
			imageAlt:
				"Diethylhexyl Butamido Triazone chemical structure and VRUSHCARE DHBT ingredient",
		},
		documents: standardDocuments,
		actions: standardActions,
	},

	// 5. Ethylhexyl Triazone
	makeProduct({
		name: "VRUSHCARE Ethyl Hexyl Triazone",
		slug: "vrushcare-ethyl-hexyl-triazone",
		code: "EHT",
		category: "UVB",
		inci: "Ethylhexyl Triazone",
		alsoKnownAs: ["EHT", "Octyl Triazone", "Uvinul T 150"],
		cas: "88122-99-0",
		ecNumber: "402-070-1",
		molecularFormula: "C48H66N6O6",
		molecularWeight: "823.08 g/mol",
		iupacName:
			"2-ethylhexyl 4-[[4,6-bis[4-(2-ethylhexoxycarbonyl)anilino]-1,3,5-triazin-2-yl]amino]benzoate",
		type: "Organic UVB filter",
		uvBand: "UVB",
		peakAbsorption: "Approximately 314 nm",
		description:
			"An oil-soluble organic UVB filter used in sun-care formulations.",
		physicalForm: "Confirm against the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/159201/PNG",
	}),

	// 6. Octyl Methoxycinnamate
	makeProduct({
		name: "VRUSHCARE Octyl Methoxycinnamate",
		slug: "vrushcare-octyl-methoxycinnamate",
		code: "OMC",
		category: "UVB",
		inci: "Ethylhexyl Methoxycinnamate",
		alsoKnownAs: ["Octyl Methoxycinnamate", "OMC", "Octinoxate"],
		cas: "5466-77-3",
		ecNumber: "226-775-7",
		molecularFormula: "C18H26O3",
		molecularWeight: "290.40 g/mol",
		iupacName: "2-ethylhexyl (E)-3-(4-methoxyphenyl)prop-2-enoate",
		type: "Organic UVB filter",
		uvBand: "UVB",
		peakAbsorption: "Approximately 310 nm",
		description:
			"An oil-soluble organic UVB filter used in certain sunscreen and personal-care formulations, subject to local rules.",
		physicalForm: "Usually a liquid; confirm the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/5355130/PNG",
	}),

	// 7. Octocrylene
	makeProduct({
		name: "VRUSHCARE Octocrylene",
		slug: "vrushcare-octocrylene",
		code: "OC",
		category: "UVB",
		inci: "Octocrylene",
		alsoKnownAs: ["Octocrylene", "2-Ethylhexyl 2-cyano-3,3-diphenylacrylate"],
		cas: "6197-30-4",
		ecNumber: "228-250-8",
		molecularFormula: "C24H27NO2",
		molecularWeight: "361.48 g/mol",
		iupacName: "2-ethylhexyl 2-cyano-3,3-diphenylprop-2-enoate",
		type: "Organic UVB filter",
		uvBand: "UVB; can support UVA-filter photostability in combinations",
		peakAbsorption: "Approximately 303 nm",
		description:
			"An oil-soluble UV filter used in sun-care products and sometimes to support photostability of other UV filters.",
		physicalForm:
			"Yellowish viscous liquid; confirm the supplied grade's TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/22571/PNG",
	}),

	// 8. Octyl Salicylate
	makeProduct({
		name: "VRUSHCARE Octyl Salicylate",
		slug: "vrushcare-octyl-salicylate",
		code: "OS",
		category: "UVB",
		inci: "Ethylhexyl Salicylate",
		alsoKnownAs: ["Octyl Salicylate", "Octisalate", "2-Ethylhexyl Salicylate"],
		cas: "118-60-5",
		ecNumber: "204-263-4",
		molecularFormula: "C15H22O3",
		molecularWeight: "250.33 g/mol",
		iupacName: "2-ethylhexyl 2-hydroxybenzoate",
		type: "Organic UVB filter",
		uvBand: "UVB",
		peakAbsorption: "Approximately 306 nm",
		description:
			"An oil-soluble UVB filter used in some sunscreen formulations and often combined with other UV filters.",
		physicalForm: "Usually a liquid; confirm the supplied grade's TDS/SDS.",
		structureImage2D: "",
	}),

	// 9. PABA
	makeProduct({
		name: "VRUSHCARE PABA",
		slug: "vrushcare-paba",
		code: "PABA",
		category: "UVB",
		inci: "PABA",
		alsoKnownAs: ["PABA", "Para-aminobenzoic acid", "4-Aminobenzoic acid"],
		// Verify the product identity: the earlier catalogue CAS does not match
		// the commonly referenced CAS for 4-aminobenzoic acid.
		cas: "Verify product identity: catalogue lists 21245-02-3",
		ecNumber: "Verify product identity",
		molecularFormula: "C7H7NO2 (only if identity is 4-aminobenzoic acid)",
		molecularWeight: "137.14 g/mol (only if identity is 4-aminobenzoic acid)",
		iupacName: "4-aminobenzoic acid (verify actual supplied product identity)",
		type: "Legacy organic UVB filter; regulatory use varies significantly by market",
		uvBand: "UVB",
		peakAbsorption:
			"Approximately 283 nm for 4-aminobenzoic acid; verify actual identity",
		description:
			"PABA is a legacy UVB-absorbing ingredient. Confirm the exact material identity and target-market regulatory status before considering use.",
		physicalForm: "Confirm exact identity and supplied grade against TDS/SDS.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/978/PNG",
	}),
];

export const getSkinCareProductBySlug = (slug: string) =>
	skinCareProducts.find((product) => product.slug === slug);

export const getSkinCareProductsByCategory = (
	category: ChemicalProduct["category"],
) => skinCareProducts.filter((product) => product.category === category);
