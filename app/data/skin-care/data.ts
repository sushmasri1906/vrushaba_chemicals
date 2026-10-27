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

export type ProductCategory = "UVA" | "UVB" | "BROAD_SPECTRUM" | "OTHER";

export type ChemicalProduct = {
	name: string;
	tradeName?: string;
	slug: string;
	code: string;
	category: ProductCategory;
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

const applications: ProductApplication[] = [
	{
		name: "Sunscreens & SPF Products",
		description:
			"Evaluate for suitable sun-care formulations where the ingredient and its intended use are appropriate.",
	},
	{
		name: "Foundations & BB Creams",
		description:
			"Evaluate in compatible complexion and personal-care formulations.",
	},
	{
		name: "Skin Care Formulations",
		description:
			"Evaluate according to the ingredient's function, compatibility, and applicable regulations.",
	},
];

const documents: ProductDocument[] = [
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

const actions: ProductAction[] = [
	{ label: "Request a sample", intent: "sample" },
	{ label: "Request spec sheet", intent: "spec" },
	{ label: "Ask a specialist", intent: "question" },
	{ label: "Request a quotation", intent: "quote" },
];

const defaultDisclaimer =
	"Confirm chemical identity, product specifications, and regulatory suitability with the supplier before use.";

type ProductInput = {
	name: string;
	slug: string;
	code: string;
	category: ProductCategory;
	inci: string;
	alsoKnownAs: string[];
	cas: string;
	ecNumber?: string;
	hsnCode?: string;
	molecularFormula: string;
	molecularWeight: string;
	iupacName?: string;
	type: string;
	uvBand: string;
	peakAbsorption: string;
	description: string;
	formulatorNotes?: string;
	uvAbsorption?: string;
	photostability?: string;
	physicalForm?: string;
	solubility?: string[];
	recommendedDosage?: string;
	structureImage2D?: string;
};

function makeProduct(input: ProductInput): ChemicalProduct {
	return {
		name: input.name,
		slug: input.slug,
		code: input.code,
		category: input.category,
		inci: input.inci,
		alsoKnownAs: input.alsoKnownAs,
		cas: input.cas,
		ecNumber: input.ecNumber ?? "Confirm with supplier",
		hsnCode: input.hsnCode ?? "Confirm with customs broker",
		description: input.description,
		formulatorNotes: input.formulatorNotes ?? defaultDisclaimer,

		highlights: [
			`Chemical identity: ${input.inci}.`,
			`Classification: ${input.type}.`,
			`UV classification: ${input.uvBand}.`,
			`Peak absorption: ${input.peakAbsorption}.`,
		],

		chemistry: {
			molecularFormula: input.molecularFormula,
			molecularWeight: input.molecularWeight,
			iupacName: input.iupacName ?? "Confirm with supplier documentation.",
			type: input.type,
			uvBand: input.uvBand,
			peakAbsorption: input.peakAbsorption,
			uvAbsorption:
				input.uvAbsorption ??
				"Confirm absorption spectrum using supplier technical documentation.",
			photostability:
				input.photostability ?? "Confirm with supplier documentation.",
			physicalForm: input.physicalForm ?? "Confirm with supplier.",
			solubility: input.solubility ?? ["Confirm with supplier documentation."],
		},

		formulation: {
			recommendedDosage:
				input.recommendedDosage ?? "Confirm with supplier documentation.",
			dosageDisclaimer:
				"Use only at concentrations permitted for the ingredient, product type, and target market. Confirm the applicable regulations and supplier recommendations.",
			applications,
		},

		logistics: {
			packSize: "Confirm with supplier",
			pallet: "Confirm with supplier",
			minimumOrderQuantity: "Confirm with supplier",
			shelfLife: "Confirm with supplier",
			storageConditions: "Follow current supplier documentation.",
		},

		regulatory: {
			reachRegistered: "Confirm with supplier",
			regions: [],
			disclaimer:
				"Confirm current regulatory status, permitted use, and applicable restrictions for the intended market.",
		},

		media: {
			productImage: `/images/products/${input.slug}.webp`,
			structureImage2D: input.structureImage2D ?? "",
			molecule3DStatus: "pending_verified_coordinates",
			imageAlt: `${input.inci} chemical structure and ${input.name}`,
		},

		documents,
		actions,
	};
}

export const skinCareProducts: ChemicalProduct[] = [
	// 1. Ethylhexyl Triazone — UVB
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
		uvAbsorption: "UVB; verify the absorption spectrum with supplier data.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble organic UVB filter used in sun-care formulations.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/159201/PNG",
	}),

	// 2. Etone Amine — 2-ethylhexyl 4-aminobenzoate
	makeProduct({
		name: "VRUSHCARE Etone Amine",
		slug: "vrushcare-etone-amine",
		code: "ETONE-AMINE",
		category: "UVB",
		inci: "2-Ethylhexyl 4-Aminobenzoate",
		alsoKnownAs: [
			"Etone Amine",
			"2-Ethylhexyl p-Aminobenzoate",
			"P-Aminobenzoic Acid 2-Ethylhexyl Ester",
		],
		cas: "26218-04-2",
		ecNumber: "420-170-3",
		molecularFormula: "C15H23NO2",
		molecularWeight: "249.35 g/mol",
		iupacName: "2-ethylhexyl 4-aminobenzoate",
		type: "Organic UV-absorbing ingredient; verify intended classification",
		uvBand: "Verify absorption spectrum and intended classification",
		peakAbsorption: "Confirm with supplier documentation",
		uvAbsorption: "Confirm with supplier documentation.",
		physicalForm: "Supplier-reported powder; confirm supplied grade.",
		description:
			"Etone Amine is identified as 2-ethylhexyl 4-aminobenzoate. Confirm its identity, intended application, and current regulatory suitability before including it in a sunscreen formulation.",
		formulatorNotes:
			"Chemical identity is associated with CAS 26218-04-2. Confirm product specifications and permitted use with the supplier.",
	}),

	// 3. Diethylhexyl Butamido Triazone — DHBT
	makeProduct({
		name: "VRUSHCARE DHBT",
		slug: "vrushcare-dhbt",
		code: "DHBT",
		category: "BROAD_SPECTRUM",
		inci: "Diethylhexyl Butamido Triazone",
		alsoKnownAs: ["DHBT", "Iscotrizinol", "Sunbest-HEB"],
		cas: "154702-15-5",
		ecNumber: "421-450-8",
		hsnCode: "29336900 - verify classification",
		molecularFormula: "C44H59N7O5",
		molecularWeight: "765.98 g/mol",
		iupacName:
			"bis(2-ethylhexyl) 4,4'-[(6-{[4-(tert-butylcarbamoyl)phenyl]amino}-1,3,5-triazine-2,4-diyl)diimino]dibenzoate",
		type: "Organic UV filter",
		uvBand: "Primarily UVB; confirm full spectrum with supplier",
		peakAbsorption: "Approximately 310 nm",
		uvAbsorption:
			"Supplier documentation should confirm the absorption range and contribution outside the UVB range.",
		photostability: "Confirm with supplier test data.",
		physicalForm: "Off-white powder; confirm supplied grade.",
		solubility: ["Confirm with supplier documentation."],
		recommendedDosage:
			"Confirm permitted concentration with supplier and target-market regulations.",
		description:
			"An organic UV filter used in sun-care formulations. Confirm the full absorption spectrum and formulation guidance against the current supplier technical data sheet.",
		formulatorNotes:
			"Confirm absorption spectrum, photostability data, permitted concentration, and formulation compatibility with the supplier.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9810816/PNG",
	}),

	// 4. Chlorphenesin — other skincare ingredient
	makeProduct({
		name: "VRUSHCARE Chlorphenesin",
		slug: "vrushcare-chlorphenesin",
		code: "CHLORPHENESIN",
		category: "OTHER",
		inci: "Chlorphenesin",
		alsoKnownAs: ["Chlorphenesin", "3-(4-Chlorophenoxy)-1,2-propanediol"],
		cas: "104-29-0",
		ecNumber: "203-192-6",
		molecularFormula: "C9H11ClO3",
		molecularWeight: "202.63 g/mol",
		iupacName: "3-(4-chlorophenoxy)propane-1,2-diol",
		type: "Cosmetic ingredient; commonly used as a preservative",
		uvBand: "Not classified as a primary UVA or UVB filter",
		peakAbsorption: "Not applicable as a primary UV filter",
		uvAbsorption: "Not supplied as a primary sunscreen UV filter.",
		physicalForm: "Confirm with supplier.",
		description:
			"Chlorphenesin is a cosmetic ingredient commonly used for preservative purposes. It is not a primary UVA or UVB sunscreen filter.",
		formulatorNotes:
			"Confirm permitted use, concentration, compatibility, and market-specific cosmetic requirements.",
	}),

	// 5. Octyl Methoxycinnamate — UVB
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
		uvAbsorption: "UVB; confirm full absorption data with supplier.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble organic UVB filter used in certain sunscreen formulations.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/5355130/PNG",
	}),

	// 6. Octocrylene — UVB
	makeProduct({
		name: "VRUSHCARE Octocrylene",
		slug: "vrushcare-octocrylene",
		code: "OC",
		category: "UVB",
		inci: "Octocrylene",
		alsoKnownAs: ["Octocrylene", "2-Ethylhexyl 2-Cyano-3,3-Diphenylacrylate"],
		cas: "6197-30-4",
		ecNumber: "228-250-8",
		molecularFormula: "C24H27NO2",
		molecularWeight: "361.48 g/mol",
		iupacName: "2-ethylhexyl 2-cyano-3,3-diphenylprop-2-enoate",
		type: "Organic UVB filter",
		uvBand: "UVB",
		peakAbsorption: "Approximately 303 nm",
		uvAbsorption: "UVB; confirm full absorption data with supplier.",
		physicalForm: "Yellowish viscous liquid; confirm supplied grade.",
		description:
			"An oil-soluble UV filter used in sun-care products and sometimes to support the photostability of other UV filters.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/22571/PNG",
	}),

	// 7. 5-Nitrobenzimidazole — other chemical
	makeProduct({
		name: "VRUSHCARE 5-Nitrobenzimidazole",
		slug: "vrushcare-5-nitrobenzimidazole",
		code: "NBI",
		category: "OTHER",
		inci: "5-Nitrobenzimidazole",
		alsoKnownAs: ["NBI", "5-Nitro-1H-benzimidazole"],
		cas: "94-52-0",
		ecNumber: "202-341-2",
		molecularFormula: "C7H5N3O2",
		molecularWeight: "163.13 g/mol",
		iupacName: "5-nitro-1H-benzimidazole",
		type: "Organic chemical; not established here as a sunscreen UV filter",
		uvBand: "Not classified as a primary UVA or UVB filter",
		peakAbsorption: "Confirm through validated spectral data",
		uvAbsorption: "No sunscreen UV-filter classification assigned.",
		physicalForm: "Confirm with supplier.",
		description:
			"An organic chemical listed in the supplied product catalogue. Its intended cosmetic use and suitability for sun-care products must be verified with the supplier.",
		formulatorNotes:
			"Do not describe this material as a sunscreen UV filter without supporting product documentation and regulatory review.",
	}),

	// 8. 4-N-Butylresorcinol — skin-care active
	makeProduct({
		name: "VRUSHCARE 4-N-Butylresorcinol",
		slug: "vrushcare-4-n-butylresorcinol",
		code: "4NBR",
		category: "OTHER",
		inci: "4-Butylresorcinol",
		alsoKnownAs: ["4-N-Butylresorcinol", "4-Butylbenzene-1,3-diol", "Rucinol"],
		cas: "18979-61-8",
		ecNumber: "606-191-2",
		molecularFormula: "C10H14O2",
		molecularWeight: "166.22 g/mol",
		iupacName: "4-butylbenzene-1,3-diol",
		type: "Skin-care active; not a primary sunscreen UV filter",
		uvBand: "Not classified as a primary UVA or UVB filter",
		peakAbsorption: "Not applicable as a primary UV filter",
		uvAbsorption: "Not supplied as a primary sunscreen UV filter.",
		physicalForm: "Confirm with supplier.",
		description:
			"4-Butylresorcinol is a skin-care ingredient associated with skin-tone and pigmentation-focused formulations. It is not a primary UVA or UVB sunscreen filter.",
		formulatorNotes:
			"Confirm cosmetic-grade specifications, permitted use, and market-specific requirements before formulation.",
	}),

	// 9. Octyl Salicylate — UVB
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
		uvAbsorption: "UVB; confirm full absorption data with supplier.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble UVB filter used in some sunscreen formulations.",
	}),

	// 10. Benzophenone-3 — UV filter
	makeProduct({
		name: "VRUSHCARE Benzophenone-3",
		slug: "vrushcare-benzophenone-3",
		code: "BEN-T",
		category: "UVB",
		inci: "Benzophenone-3",
		alsoKnownAs: ["Oxybenzone", "2-Hydroxy-4-Methoxybenzophenone", "BEN-T"],
		cas: "131-57-7",
		ecNumber: "205-031-5",
		molecularFormula: "C14H12O3",
		molecularWeight: "228.24 g/mol",
		iupacName: "(2-hydroxy-4-methoxyphenyl)-phenylmethanone",
		type: "Organic UV filter",
		uvBand:
			"UV absorption; confirm precise UVA/UVB classification for the product",
		peakAbsorption: "Confirm spectrum and peak values with supplier",
		uvAbsorption: "Confirm full UVA/UVB absorption spectrum with supplier.",
		physicalForm: "Confirm with supplier.",
		description:
			"Benzophenone-3, also known as oxybenzone, is an organic UV-absorbing ingredient. Confirm its permitted use and concentration in the target market.",
		formulatorNotes:
			"Regulatory restrictions for this ingredient vary by market. Verify current requirements before formulation or sale.",
	}),

	// 11. Ethylhexyl Dimethyl PABA — UVB
	makeProduct({
		name: "VRUSHCARE Ethylhexyl Dimethyl PABA",
		slug: "vrushcare-ethylhexyl-dimethyl-paba",
		code: "PABA",
		category: "UVB",
		inci: "Ethylhexyl Dimethyl PABA",
		alsoKnownAs: [
			"2-Ethylhexyl 4-(Dimethylamino)benzoate",
			"Ethylhexyl Dimethylaminobenzoate",
			"Padimate O",
			"PABA ester",
		],
		cas: "21245-02-3",
		ecNumber: "244-289-3",
		molecularFormula: "C17H25NO2",
		molecularWeight: "277.40 g/mol",
		iupacName: "2-ethylhexyl 4-(dimethylamino)benzoate",
		type: "Organic UVB-absorbing ingredient; verify current permitted use",
		uvBand: "UVB",
		peakAbsorption: "Confirm exact value with supplier documentation",
		uvAbsorption: "Confirm spectrum with supplier documentation.",
		physicalForm: "Confirm with supplier.",
		description:
			"Ethylhexyl Dimethyl PABA is an organic UV-absorbing ingredient identified by CAS 21245-02-3. It is chemically different from 4-aminobenzoic acid (PABA).",
		formulatorNotes:
			"Use the correct chemical identity and verify current market-specific regulatory status before describing or using this material as a sunscreen filter.",
	}),

	// 12. Avobenzone — UVA
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
		uvAbsorption: "UVA; confirm full absorption data with supplier.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble organic UV filter used to absorb UVA radiation in sun-care formulations.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/51040/PNG",
	}),

	// 13. DTBHBA — other chemical
	makeProduct({
		name: "VRUSHCARE DTBHBA",
		slug: "vrushcare-dtbhba",
		code: "DTBHBA",
		category: "OTHER",
		inci: "3,5-Di-tert-butyl-4-hydroxybenzyl alcohol",
		alsoKnownAs: ["DTBHBA", "3,5-Di-tert-butyl-4-hydroxybenzyl alcohol"],
		cas: "Confirm with supplier",
		molecularFormula: "Confirm with supplier",
		molecularWeight: "Confirm with supplier",
		iupacName: "Confirm with supplier documentation",
		type: "Other chemical; sunscreen UV-filter function not established",
		uvBand: "Not classified as a primary UVA or UVB filter",
		peakAbsorption: "Not applicable as a primary UV filter",
		uvAbsorption: "Confirm with supplier documentation.",
		physicalForm: "Confirm with supplier.",
		description:
			"A chemical listed in the supplied sun-care product catalogue. Confirm the exact chemical identity, CAS number, and intended cosmetic application before publishing detailed specifications.",
		formulatorNotes:
			"The CAS number should be obtained from the supplier's technical data sheet or certificate of analysis before this product is published.",
	}),

	// 14. PDPO — other chemical
	makeProduct({
		name: "VRUSHCARE PDPO",
		slug: "vrushcare-pdpo",
		code: "PDPO",
		category: "OTHER",
		inci: "Pyrrolidinyl Diaminopyrimidine Oxide",
		alsoKnownAs: [
			"PDPO",
			"6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine-3-oxide",
			"Pyrrolidinyl Diaminopyrimidine Oxide",
		],
		cas: "55921-65-8",
		molecularFormula: "Confirm with supplier",
		molecularWeight: "Confirm with supplier",
		iupacName: "Confirm with supplier documentation",
		type: "Other chemical; sunscreen UV-filter function not established",
		uvBand: "Not classified as a primary UVA or UVB filter",
		peakAbsorption: "Not applicable as a primary UV filter",
		uvAbsorption: "Confirm with supplier documentation.",
		physicalForm: "Confirm with supplier.",
		description:
			"A chemical listed in the supplied product catalogue. Confirm its intended application, cosmetic-grade identity, and supplier specifications before assigning a skincare function.",
		formulatorNotes:
			"Do not publish unverified efficacy, UV-filter, or regulatory claims for this ingredient.",
	}),

	// Additional existing catalogue product — DHHB
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
		uvAbsorption: "UVA; confirm full absorption data with supplier.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble organic UV filter used for UVA absorption in sun-care formulations.",
		structureImage2D:
			"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/10111431/PNG",
	}),

	// Additional existing catalogue product — BEMT
	makeProduct({
		name: "VRUSHCARE BEMT",
		slug: "vrushcare-bemt",
		code: "BEM-T",
		category: "BROAD_SPECTRUM",
		inci: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
		alsoKnownAs: ["BEMT", "Bemotrizinol", "Tinosorb S"],
		cas: "187393-00-6",
		molecularFormula: "C38H49N3O5",
		molecularWeight: "627.82 g/mol",
		iupacName:
			"5-(2-ethylhexoxy)-2-[4-[4-(2-ethylhexoxy)-2-hydroxyphenyl]-6-(4-methoxyphenyl)-1,3,5-triazin-2-yl]phenol",
		type: "Organic broad-spectrum UV filter",
		uvBand: "UVA and UVB",
		peakAbsorption:
			"Multiple absorption maxima; confirm exact values with supplier",
		uvAbsorption: "Broad-spectrum UVA/UVB absorption; confirm supplier data.",
		physicalForm: "Confirm with supplier.",
		description:
			"An oil-soluble organic UV filter used for broad-spectrum UVA and UVB absorption in sun-care formulations.",
	}),
];

export const getSkinCareProductBySlug = (slug: string) =>
	skinCareProducts.find((product) => product.slug === slug);

export const getSkinCareProductsByCategory = (
	category: ChemicalProduct["category"],
) => skinCareProducts.filter((product) => product.category === category);
