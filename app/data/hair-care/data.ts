// app/data/hair-care/data.ts

export type ProductApplication = {
	name: string;
	description: string;
};

export type ProductDocument = {
	label: string;
	type: "TDS" | "SDS" | "COA" | "DOSSIER" | "REGULATORY";
	url?: string;
	requestable: boolean;
};

export type ProductAction = {
	label: string;
	intent: "sample" | "spec" | "question";
};

export type ProductSpecification = {
	label: string;
	value: string;
};

export type ChemicalProduct = {
	name: string;
	slug: string;
	code: string;
	category: "Hair Care Ingredient" | "Specialty Ingredient";

	cas: string;
	ec?: string;
	hsnCode?: string;

	inci: string;
	chemicalName: string;

	chemicalStructure: {
		image?: string;
		alt: string;
		source: string;
		status: "available" | "verification-required";
	};

	synonyms: string[];

	description: string;
	overview: string;
	function: string;

	molecularFormula?: string;
	molecularWeight?: string;
	physicalForm?: string;
	appearance?: string;
	solubility?: string;
	recommendedDosage?: string;

	applications: ProductApplication[];
	formulationNotes: string[];
	technicalSpecifications: ProductSpecification[];
	regulatoryNotes: string[];

	packaging: {
		packSize: string;
		moq: string;
		shelfLife: string;
		storage: string;
	};

	documents: ProductDocument[];
	actions: ProductAction[];
};

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
		label: "Technical Dossier",
		type: "DOSSIER",
		requestable: true,
	},
	{
		label: "Regulatory Information",
		type: "REGULATORY",
		requestable: true,
	},
];

const standardActions: ProductAction[] = [
	{
		label: "Request a Sample",
		intent: "sample",
	},
	{
		label: "Request Specifications",
		intent: "spec",
	},
	{
		label: "Ask a Specialist",
		intent: "question",
	},
];

const standardPackaging = {
	packSize: "Confirm with supplier",
	moq: "Confirm with supplier",
	shelfLife: "Confirm against supplier specification",
	storage: "Follow the current supplier TDS and SDS",
};

export const hairCareProducts: ChemicalProduct[] = [
	// ============================================================
	// 01. PIROCTONE OLAMINE
	// ============================================================
	{
		name: "VRUSHCARE PO",
		slug: "vrushcare-po",
		code: "PO",
		category: "Hair Care Ingredient",

		cas: "68890-66-4",
		ec: "272-574-2",
		hsnCode: "29339900",

		inci: "Piroctone Olamine",
		chemicalName: "Piroctone Olamine",

		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/68890-66-4/PNG",
			alt: "Chemical structure of Piroctone Olamine",
			source: "PubChem; verify against the supplier's current documentation",
			status: "verification-required",
		},

		synonyms: [
			"Piroctone Olamine",
			"PO",
			"Octopirox",
			"1-Hydroxy-4-methyl-6-(2,4,4-trimethylpentyl)pyridin-2(1H)-one, 2-aminoethanol salt",
		],

		description:
			"Piroctone Olamine is a hair and scalp active used in suitable anti-dandruff and personal-care formulations.",

		overview:
			"Piroctone Olamine is an ingredient used in hair shampoos, conditioners, scalp treatments, and other selected personal-care formulations. Its suitability depends on the finished product, formulation compatibility, and applicable market requirements.",

		function:
			"Hair and scalp active used in selected anti-dandruff formulations. The appropriate use level depends on whether the finished product is rinse-off or leave-on, the formulation system, and applicable market requirements.",

		molecularFormula: "C16H30N2O3",
		molecularWeight: "298.4 g/mol",

		physicalForm: "Powder",
		appearance:
			"Powder; specific colour and appearance should be confirmed against the supplied grade.",

		solubility: "10% ethanol in water; methanol",

		recommendedDosage:
			"Reference use levels are ≤1% for rinse-off products and ≤0.5% for leave-on products. Confirm the grade-specific recommendation and permitted use for the target market.",

		applications: [
			{
				name: "Hair Shampoos & Conditioners",
				description:
					"Piroctone Olamine for evaluation in suitable shampoo and conditioner formulations, subject to formulation compatibility and applicable product requirements.",
			},
			{
				name: "Anti-Dandruff Products",
				description:
					"Hair-care formulations developed to address dandruff-related concerns. Verify the permitted product category and applicable concentration limits for the destination market.",
			},
			{
				name: "Hair Growth & Scalp Treatments",
				description:
					"Selected scalp-care applications, subject to ingredient suitability, substantiated product claims, and applicable regulations.",
			},
			{
				name: "Hair Dyes & Colour Products",
				description:
					"Potential application; confirm compatibility and suitability for the specific colour formulation.",
			},
			{
				name: "After-Sun Care",
				description:
					"Potential application; confirm suitability for the intended finished product.",
			},
			{
				name: "Face Masks & Treatments",
				description:
					"Confirm the grade, intended function, and permitted use before formulation.",
			},
			{
				name: "Baby & Child Care Products",
				description:
					"Obtain a specific safety and regulatory assessment before considering use in baby or child-care products.",
			},
			{
				name: "Moisturisers & Lotions",
				description:
					"Selected personal-care formulations, subject to compatibility and product-category requirements.",
			},
			{
				name: "Eye Creams & Treatments",
				description:
					"Confirm specific suitability and safety before considering use near the eye area.",
			},
			{
				name: "Acne & Blemish Treatments",
				description:
					"Verify the intended product classification and applicable regulatory requirements.",
			},
			{
				name: "Body Lotions & Butters",
				description:
					"Selected body-care formulations, subject to formulation compatibility and intended-use requirements.",
			},
			{
				name: "Soaps & Body Washes",
				description:
					"Potential use in compatible wash-off formulations, subject to the product's technical requirements and applicable regulations.",
			},
		],

		formulationNotes: [
			"Reference solubility information includes 10% ethanol in water and methanol. Confirm the appropriate incorporation method for the actual grade.",
			"A reference pH range is 3–8. Confirm finished-formula compatibility and the supplier's latest technical guidance.",
			"Reference use levels are ≤1% for rinse-off products and ≤0.5% for leave-on products. Verify applicability to the intended finished product and destination market.",
			"Assess compatibility with surfactants, salts, preservatives, and other formulation ingredients.",
			"Evaluate finished-product stability and performance using appropriate formulation testing.",
			"Use current supplier-issued TDS, SDS, and COA documents when developing or manufacturing a formulation.",
		],

		technicalSpecifications: [
			{
				label: "INCI Name",
				value: "Piroctone Olamine",
			},
			{
				label: "Also Known As",
				value: "PO, Octopirox",
			},
			{
				label: "IUPAC Name",
				value:
					"1-hydroxy-4-methyl-6-(2,4,4-trimethylpentyl)pyridin-2(1H)-one, 2-aminoethanol salt",
			},
			{
				label: "CAS Number",
				value: "68890-66-4",
			},
			{
				label: "EC Number",
				value: "272-574-2",
			},
			{
				label: "HSN Code",
				value:
					"29339900 — confirm the correct classification for the supplied product",
			},
			{
				label: "Molecular Formula",
				value: "C16H30N2O3",
			},
			{
				label: "Molecular Weight",
				value: "298.4 g/mol",
			},
			{
				label: "Physical Form",
				value: "Powder",
			},
			{
				label: "Solubility",
				value: "10% ethanol in water; methanol",
			},
			{
				label: "Typical Dosage — Rinse-Off",
				value: "≤1%; verify applicable regulations",
			},
			{
				label: "Typical Dosage — Leave-On",
				value: "≤0.5%; verify applicable regulations",
			},
			{
				label: "Minimum pH",
				value: "3",
			},
			{
				label: "Maximum pH",
				value: "8",
			},
			{
				label: "Pack Size",
				value: "25 kg — reference value; confirm for the supplied grade",
			},
			{
				label: "Minimum Order Quantity",
				value: "300 kg — reference value; confirm with supplier",
			},
			{
				label: "Shelf Life",
				value: "2 years — reference value; confirm with supplier",
			},
			{
				label: "REACH Registration",
				value: "Confirm current registration status with the supplier",
			},
			{
				label: "REACH Regions",
				value: "Confirm applicable registration regions with the supplier",
			},
		],

		regulatoryNotes: [
			"Confirm the registration status and applicable regions for the supplied grade.",
			"Confirm the permitted ingredient use, finished-product category, and concentration requirements for the destination market.",
			"Reference rinse-off and leave-on dosage guidance is not a substitute for checking current applicable regulations.",
			"Obtain current TDS, SDS, COA, and relevant regulatory documentation for the actual VRUSHCARE PO grade.",
			"Confirm the supplied grade against the current technical data sheet and certificate of analysis before publishing or using these specifications.",
		],

		packaging: {
			packSize: "25 kg — reference value; confirm with supplier",
			moq: "300 kg — reference value; confirm with supplier",
			shelfLife: "2 years — reference value; confirm with supplier",
			storage:
				"Confirm storage conditions against the current supplier TDS and SDS.",
		},

		documents: standardDocuments,
		actions: standardActions,
	},

	// ============================================================
	// 02. BENZETHONIUM CHLORIDE
	// ============================================================
	{
		name: "VRUSHCARE BZC",
		slug: "vrushcare-bzc",
		code: "BZC",
		category: "Specialty Ingredient",

		cas: "121-54-0",
		ec: "264-151-6",
		hsnCode: "29239000",

		inci: "Benzethonium Chloride",
		chemicalName: "Benzethonium Chloride",

		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/121-54-0/PNG",
			alt: "Chemical structure of Benzethonium Chloride",
			source: "PubChem; confirm against supplier documentation",
			status: "verification-required",
		},

		synonyms: ["Benzethonium Chloride", "Hyamine"],

		description:
			"Benzethonium Chloride is a quaternary ammonium compound used in selected specialty applications. Its suitability for a particular hair-care or personal-care formulation must be established from the supplied grade's technical documentation and applicable regulations.",

		overview:
			"Benzethonium Chloride is a specialty chemical whose physical properties, recommended use levels, packaging, shelf life, and regulatory status depend on the supplied grade. Confirm these details using current supplier documentation.",

		function:
			"The function and suitability of Benzethonium Chloride must be confirmed for the exact application. Do not infer that a chemical is suitable for cosmetic use merely because it is available as a specialty chemical.",

		molecularFormula: "C27H42ClNO2",
		molecularWeight: "448.08 g/mol",

		physicalForm: "Confirm with supplier",
		appearance: "Confirm against the supplied specification",
		solubility: "Confirm using the supplied TDS",

		recommendedDosage:
			"A grade-specific recommended use level has not been confirmed. Obtain current supplier guidance and confirm regulatory suitability before any proposed formulation use.",

		applications: [
			{
				name: "Specialty Chemical Applications",
				description:
					"Evaluate only for applications supported by the supplied product's technical documentation.",
			},
			{
				name: "Formulation Development",
				description:
					"Requires assessment of the ingredient's intended function, compatibility, safety, and permitted use before incorporation.",
			},
			{
				name: "Personal-Care Suitability Review",
				description:
					"Any proposed personal-care application requires independent verification of ingredient suitability and applicable regulatory requirements.",
			},
		],

		formulationNotes: [
			"Confirm the exact product grade, purity, and intended technical function with the supplier.",
			"Obtain current supplier TDS, SDS, and COA documentation.",
			"Evaluate compatibility with the other ingredients in the proposed formulation.",
			"Do not assume compatibility with anionic surfactants or other charged ingredients.",
			"Confirm whether the intended cosmetic or personal-care use is permitted in the destination market.",
		],

		technicalSpecifications: [
			{
				label: "Chemical Name",
				value: "Benzethonium Chloride",
			},
			{
				label: "CAS Number",
				value: "121-54-0",
			},
			{
				label: "Molecular Formula",
				value: "C27H42ClNO2",
			},
			{
				label: "Molecular Weight",
				value: "448.08 g/mol",
			},
			{
				label: "Physical Form",
				value: "Confirm with supplier",
			},
			{
				label: "Appearance",
				value: "Confirm with supplier",
			},
			{
				label: "Purity / Assay",
				value: "Confirm against the current COA",
			},
			{
				label: "Solubility",
				value: "Confirm with supplier TDS",
			},
			{
				label: "Recommended Use Level",
				value: "Confirm with supplier for the exact grade",
			},
			{
				label: "Pack Size",
				value: "Confirm with supplier",
			},
			{
				label: "Minimum Order Quantity",
				value: "Confirm with supplier",
			},
			{
				label: "Shelf Life",
				value: "Confirm with supplier",
			},
		],

		regulatoryNotes: [
			"Confirm the supplied grade and its intended application using current supplier documentation.",
			"Confirm whether the ingredient is permitted for the exact intended product category and destination market.",
			"Do not infer cosmetic suitability from a chemical listing or an HSN classification.",
			"Obtain the current supplier TDS, SDS, COA, and regulatory documentation.",
		],

		packaging: { ...standardPackaging },

		documents: standardDocuments,
		actions: standardActions,
	},

	// ============================================================
	// 03. SILVER OXIDE
	// ============================================================
	{
		name: "VRUSHCARE DSMO",
		slug: "vrushcare-dsmo",
		code: "DSMO",
		category: "Specialty Ingredient",

		cas: "20667-12-3",
		ec: "200-664-3",
		hsnCode: "28432900",

		inci: "Silver Oxide",
		chemicalName: "Silver(I) Oxide",

		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/20667-12-3/PNG",
			alt: "Chemical structure representation of Silver(I) Oxide",
			source:
				"PubChem; verify the structure and identity against supplier documentation",
			status: "verification-required",
		},

		synonyms: [
			"Silver(I) Oxide",
			"Silver Oxide",
			"Disilver Oxide",
			"Argentous Oxide",
		],

		description:
			"Silver(I) Oxide is an inorganic silver compound. Its suitability for any personal-care or hair-care application must be established from the supplier's technical documentation and the applicable regulatory requirements.",

		overview:
			"Silver(I) Oxide is a specialty inorganic chemical. Its grade-specific physical properties, purity, recommended use, packaging, shelf life, and regulatory status should be confirmed using current supplier documentation.",

		function:
			"Silver(I) Oxide is an inorganic compound used in selected chemical applications. No specific hair-care function or cosmetic suitability is claimed here without supporting technical and regulatory evidence.",

		molecularFormula: "Ag2O",
		molecularWeight: "231.74 g/mol",

		physicalForm: "Confirm against supplier specification",
		appearance: "Confirm against supplier specification",
		solubility: "Confirm the grade-specific data with the supplier",

		recommendedDosage:
			"A grade-specific recommended use level has not been confirmed. Do not use in a cosmetic formulation without a documented suitability assessment and confirmation that the intended use is permitted.",

		applications: [
			{
				name: "Specialty Chemical Applications",
				description:
					"Confirm the product's intended industrial or specialty application with the supplier.",
			},
			{
				name: "Technical Evaluation",
				description:
					"Requires confirmation of chemical identity, grade, purity, compatibility, and safety documentation for the intended application.",
			},
			{
				name: "Personal-Care Suitability Review",
				description:
					"Any proposed hair-care or personal-care use requires an independent technical, safety, and regulatory assessment.",
			},
		],

		formulationNotes: [
			"Verify product identity, purity, and grade using the supplier's COA.",
			"Review the current SDS for handling, storage, incompatibilities, and disposal requirements.",
			"Do not assume suitability for shampoos, scalp treatments, or other cosmetic products without appropriate supporting evidence.",
			"Confirm compatibility and stability only for a defined, technically justified application.",
			"Obtain specialist regulatory advice before considering any cosmetic or personal-care use.",
		],

		technicalSpecifications: [
			{
				label: "Chemical Name",
				value: "Silver(I) Oxide",
			},
			{
				label: "CAS Number",
				value: "20667-12-3",
			},
			{
				label: "Molecular Formula",
				value: "Ag2O",
			},
			{
				label: "Molecular Weight",
				value: "231.74 g/mol",
			},
			{
				label: "Physical Form",
				value: "Confirm against supplier specification",
			},
			{
				label: "Appearance",
				value: "Confirm against supplier specification",
			},
			{
				label: "Purity / Assay",
				value: "Confirm against the current COA",
			},
			{
				label: "Solubility",
				value: "Confirm using supplier technical documentation",
			},
			{
				label: "Recommended Use Level",
				value: "Confirm with supplier for the exact grade",
			},
			{
				label: "Pack Size",
				value: "Confirm with supplier",
			},
			{
				label: "Minimum Order Quantity",
				value: "Confirm with supplier",
			},
			{
				label: "Shelf Life",
				value: "Confirm with supplier",
			},
		],

		regulatoryNotes: [
			"Confirm the supplied grade and its intended application using current supplier documentation.",
			"Do not represent Silver Oxide as an approved hair-care ingredient without documented evidence of permitted use.",
			"Confirm the relevant Indian and destination-market requirements before any proposed cosmetic application.",
			"Review the current supplier SDS for safety, handling, environmental, and disposal requirements.",
			"Obtain current supplier TDS, SDS, COA, and regulatory documentation.",
		],

		packaging: { ...standardPackaging },

		documents: standardDocuments,
		actions: standardActions,
	},

	// ============================================================
	// 04. ZINC PYRITHIONE
	// ============================================================
	{
		name: "VRUSHCARE ZINC-2-PYRIDINETHIONE-1-OXIDE (ZPTO)",
		slug: "vrushcare-zpto",
		code: "ZPTO",
		category: "Hair Care Ingredient",

		cas: "13463-41-7",
		ec: "236-671-3",
		hsnCode: "29333990",

		inci: "Zinc Pyrithione",
		chemicalName: "Zinc Pyrithione",

		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/13463-41-7/PNG",
			alt: "Chemical structure of Zinc Pyrithione",
			source: "PubChem; verify against the supplied grade documentation",
			status: "verification-required",
		},

		synonyms: [
			"Zinc Pyrithione",
			"Pyrithione Zinc",
			"ZPT",
			"ZPTO",
			"Bis(2-pyridinethiol 1-oxide)zinc",
		],

		description:
			"Zinc Pyrithione is associated with selected anti-dandruff hair-care applications. Reference specifications are available for a 50% Zinc Pyrithione dispersion. Its physical form, use level, packaging, and regulatory information must not be transferred to VRUSHCARE ZPTO unless the supplied grade is confirmed to be equivalent.",

		overview:
			"Reference specifications for a 50% Zinc Pyrithione dispersion include a liquid form, CAS number 13463-41-7, EC number 236-671-3, 25 kg pack size, 300 kg minimum order quantity, and two-year shelf life. Confirm these values for the actual supplied grade. Zinc Pyrithione has significant market-specific restrictions, including restrictions on cosmetic use in the EU. Verify current official requirements in every intended market before considering use.",

		function:
			"Zinc Pyrithione has been used in selected anti-dandruff hair-care products. The suitability of a particular grade and its permitted concentration depend on the finished-product category and current market-specific regulations.",

		molecularFormula: "C10H8N2O2S2Zn",
		molecularWeight: "317.7 g/mol",

		physicalForm:
			"Liquid — reference for a 50% dispersion; confirm the actual VRUSHCARE grade",

		appearance: "Confirm against the actual supplied product specification",

		solubility:
			"Reference solubility information lists ethanol, PEG 400, chloroform, dichloromethane, and benzene. This is not a recommendation to use every solvent in a cosmetic formulation. Follow the current SDS and formulation guidance.",

		recommendedDosage:
			"Reference use levels for a 50% dispersion are 0.6–4% for rinse-off products (equivalent to 0.3–2% Zinc Pyrithione) and ≤0.5% for leave-on products (equivalent to ≤0.25% Zinc Pyrithione). These are not universal recommendations. Confirm the actual grade, current legal requirements, and permitted product category before any proposed use. Zinc Pyrithione is restricted in some markets, including EU cosmetics.",

		applications: [
			{
				name: "Anti-Dandruff Products",
				description:
					"Potential application for suitable grades; check the current legal status for the specific product category and market.",
			},
			{
				name: "Hair Shampoos & Conditioners",
				description:
					"Potential application for suitable grades; this does not mean the ingredient is permitted in every shampoo or conditioner category or jurisdiction.",
			},
			{
				name: "Hair Growth & Scalp Treatments",
				description:
					"Potential application for suitable grades; verify that the intended use is permitted and supported by the supplied technical documentation.",
			},
		],

		formulationNotes: [
			"The reference use levels are for a 50% dispersion. Do not apply them to a different grade without confirming the active concentration.",
			"A reference pH range is 4–8. Confirm applicability to the actual supplied product.",
			"Zinc Pyrithione is restricted in some markets, including EU cosmetics. Verify current official rules in each destination market before considering formulation use.",
			"Confirm the physical form and compatibility of the actual VRUSHCARE ZPTO grade with the proposed formulation.",
			"Evaluate dispersion, stability, and compatibility using supplier-approved technical guidance.",
			"Obtain current supplier TDS, SDS, COA, and regulatory documentation before any proposed use.",
		],

		technicalSpecifications: [
			{
				label: "Reference Product Type",
				value: "Zinc Pyrithione 50% Dispersion",
			},
			{
				label: "Reference Composition",
				value: "50% Zinc Pyrithione dispersion",
			},
			{
				label: "INCI Name",
				value: "Zinc Pyrithione — reference grade is a 50% dispersion",
			},
			{
				label: "Chemical Name",
				value: "Zinc Pyrithione",
			},
			{
				label: "IUPAC Name",
				value: "Bis(2-pyridinethiol 1-oxide)zinc",
			},
			{
				label: "CAS Number",
				value: "13463-41-7",
			},
			{
				label: "EC Number",
				value: "236-671-3",
			},
			{
				label: "HSN Code",
				value:
					"29333990 — confirm the correct classification for the supplied product",
			},
			{
				label: "Molecular Formula",
				value: "C10H8N2O2S2Zn",
			},
			{
				label: "Molecular Weight",
				value: "317.7 g/mol",
			},
			{
				label: "Physical Form",
				value:
					"Liquid — reference for a 50% dispersion; confirm the actual grade",
			},
			{
				label: "Solubility",
				value:
					"Ethanol; PEG 400; chloroform; dichloromethane; benzene — reference information; confirm for the supplied grade",
			},
			{
				label: "Minimum pH",
				value: "4",
			},
			{
				label: "Maximum pH",
				value: "8",
			},
			{
				label: "Typical Dosage — Rinse-Off",
				value:
					"0.6–4% of a 50% dispersion, equivalent to 0.3–2% Zinc Pyrithione; verify current legal limits",
			},
			{
				label: "Typical Dosage — Leave-On",
				value:
					"≤0.5% of a 50% dispersion, equivalent to ≤0.25% Zinc Pyrithione; verify current legal limits",
			},
			{
				label: "EU Cosmetics Status",
				value:
					"Zinc Pyrithione is restricted in EU cosmetics; verify current official requirements",
			},
			{
				label: "Pack Size",
				value: "25 kg — reference value; confirm for the supplied grade",
			},
			{
				label: "Minimum Order Quantity",
				value: "300 kg — reference value; confirm for the supplied grade",
			},
			{
				label: "Shelf Life",
				value: "2 years — reference value; confirm for the supplied grade",
			},
			{
				label: "REACH Registration",
				value: "Confirm current registration status with the supplier",
			},
		],

		regulatoryNotes: [
			"Zinc Pyrithione is restricted in some markets, including EU cosmetics. Confirm current official requirements before any proposed use.",
			"Do not assume that a concentration or application permitted in one market is permitted in another.",
			"The reference dosage guidance relates to a 50% dispersion. Do not apply it to VRUSHCARE ZPTO until grade and active concentration are confirmed.",
			"Verify current Indian requirements and destination-market restrictions for the exact finished-product category.",
			"Obtain current TDS, SDS, COA, and applicable regulatory documentation for the actual supplied grade.",
		],

		packaging: {
			packSize: "25 kg — reference value; confirm for the supplied grade",
			moq: "300 kg — reference value; confirm for the supplied grade",
			shelfLife: "2 years — reference value; confirm for the supplied grade",
			storage:
				"Confirm the storage conditions for the actual supplied grade using the current supplier TDS and SDS.",
		},

		documents: standardDocuments,
		actions: standardActions,
	},
];

export default hairCareProducts;
