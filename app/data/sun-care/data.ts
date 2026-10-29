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
	hsnCode?: string;
	category: "UVA Filter" | "UVB Filter" | "Specialty Ingredient";
	cas: string;
	ec?: string;
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
	uvBand?: string;
	peakAbsorption?: string;
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
	shelfLife: "Confirm with supplier",
	storage: "Store according to the supplied TDS and SDS",
};

export const products: ChemicalProduct[] = [
	// ============================================================
	// UVA FILTERS
	// ============================================================
	{
		name: "VRUSHCARE Avobenzone",
		slug: "vrushcare-avobenzone",
		code: "AVS",
		hsnCode: "29143990",
		category: "UVA Filter",
		cas: "70356-09-1",
		ec: "274-581-6",
		inci: "Butyl Methoxydibenzoylmethane",
		chemicalName: "Butyl Methoxydibenzoylmethane",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/70356-09-1/PNG",
			alt: "2D chemical structure of Butyl Methoxydibenzoylmethane",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Avobenzone", "BMDM", "BMDBM", "AVB"],
		description:
			"Organic UVA filter used in sunscreen and sun care formulations.",
		overview:
			"Avobenzone is an oil-soluble organic UV filter that absorbs UVA radiation. It is used in sunscreen formulations to support protection against long-wave UVA exposure.",
		function:
			"Absorbs UVA radiation, with peak absorption typically reported around 357–360 nm. Photostability and compatibility must be evaluated in the finished formulation.",
		molecularFormula: "C20H22O3",
		molecularWeight: "310.39 g/mol",
		physicalForm: "Crystalline powder",
		appearance:
			"Typically white to pale-yellow powder; confirm grade specification",
		solubility:
			"Very low water solubility; soluble in selected organic solvents and suitable oil-phase systems.",
		uvBand: "UVA",
		peakAbsorption: "Approximately 357–360 nm",
		recommendedDosage:
			"Reference range: 2–5%; permitted levels depend on the target market. Verify current regulations before use.",
		applications: [
			{
				name: "Sunscreens and SPF Products",
				description:
					"Used as a UVA filter in appropriately formulated sunscreen products.",
			},
			{
				name: "Foundations and BB Creams",
				description:
					"Can be incorporated into suitable complexion products formulated with UV protection.",
			},
			{
				name: "Lip Care",
				description:
					"Potential application in lip care products where permitted and technically suitable.",
			},
		],
		formulationNotes: [
			"Consider photostability during formulation development.",
			"Evaluate compatibility with other UV filters and stabilizing ingredients.",
			"Assess solubility in the selected oil phase and solvent system.",
			"Verify permitted concentration and product-category restrictions for the destination market.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "70356-09-1" },
			{ label: "EC Number", value: "274-581-6" },
			{ label: "Molecular Formula", value: "C20H22O3" },
			{ label: "Molecular Weight", value: "310.39 g/mol" },
			{ label: "UV Band", value: "UVA" },
			{ label: "Peak Absorption", value: "Approximately 357–360 nm" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
			{
				label: "Melting Point",
				value: "Confirm against supplier specification",
			},
		],
		regulatoryNotes: [
			"UV-filter authorization and maximum permitted concentrations vary by market.",
			"Verify the applicable sunscreen and cosmetics regulations before commercialization.",
			"Obtain the current supplier SDS, TDS, COA, and regulatory documentation.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE DHHB",
		slug: "vrushcare-dhhb",
		code: "DHHB",
		hsnCode: "29147090",
		category: "UVA Filter",
		cas: "302776-68-7",
		inci: "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
		chemicalName: "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/302776-68-7/PNG",
			alt: "2D chemical structure of Diethylamino Hydroxybenzoyl Hexyl Benzoate",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["DHHB", "UVA filter DHHB"],
		description:
			"UVA filter ingredient for eligible sunscreen and sun care formulations.",
		overview:
			"DHHB is an oil-soluble organic UVA filter used in sunscreen formulations requiring UVA protection. Its use depends on the applicable regulations and the performance of the finished product.",
		function:
			"Absorbs UVA radiation. Formulation performance, compatibility, and photostability should be established through suitable testing.",
		molecularFormula: "C24H31NO4",
		molecularWeight: "397.51 g/mol",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility:
			"Oil-phase solubility; confirm grade-specific formulation guidance",
		uvBand: "UVA",
		peakAbsorption: "Confirm using the supplier's technical documentation",
		recommendedDosage:
			"Use only within the concentration permitted in the target market and according to supplier guidance.",
		applications: [
			{
				name: "Sunscreens",
				description: "Used as a UVA filter in eligible sunscreen formulations.",
			},
			{
				name: "Daily Sun Care",
				description:
					"Potential use in daily-use products formulated for UVA protection.",
			},
			{
				name: "Facial Care with UV Protection",
				description:
					"Suitable for evaluation in compatible facial sunscreen formulations.",
			},
		],
		formulationNotes: [
			"Evaluate solubility in the selected formulation system.",
			"Check compatibility with other UV filters and formulation ingredients.",
			"Conduct stability and finished-product efficacy testing.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "302776-68-7" },
			{ label: "INCI", value: "Diethylamino Hydroxybenzoyl Hexyl Benzoate" },
			{ label: "Molecular Formula", value: "C24H31NO4" },
			{ label: "Molecular Weight", value: "397.51 g/mol" },
			{ label: "UV Band", value: "UVA" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
			{ label: "Appearance", value: "Confirm with supplier" },
		],
		regulatoryNotes: [
			"Confirm permitted use, concentration limits, and product-category restrictions in the destination market.",
			"Request current supplier regulatory documentation.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE BEMT",
		slug: "vrushcare-bemt",
		code: "BEMT",
		hsnCode: "29336990",
		category: "UVA Filter",
		cas: "187393-00-6",
		inci: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
		chemicalName: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/187393-00-6/PNG",
			alt: "2D chemical structure of Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["BEMT", "Bemotrizinol"],
		description:
			"Broad-spectrum organic UV filter for suitable sun care formulations.",
		overview:
			"BEMT is an organic UV filter used to provide broad-spectrum UV absorption in sunscreen formulations. It absorbs both UVA and UVB radiation.",
		function:
			"Provides broad-spectrum UV absorption. Its contribution to finished-product protection depends on the complete formulation and appropriate efficacy testing.",
		molecularFormula: "C38H49N3O5",
		molecularWeight: "627.83 g/mol",
		physicalForm: "Typically supplied as a solid; confirm the actual grade",
		appearance: "Confirm with supplier",
		solubility:
			"Low water solubility; formulation requires a compatible delivery system.",
		uvBand: "UVA and UVB",
		peakAbsorption:
			"Multiple absorption bands; confirm spectral data from supplier",
		recommendedDosage:
			"Follow the supplier's recommendations and the applicable market-specific limits.",
		applications: [
			{
				name: "Broad-Spectrum Sunscreens",
				description:
					"Used in formulations designed to provide UVA and UVB protection.",
			},
			{
				name: "SPF Products",
				description:
					"Can contribute to the UV-filter system in appropriately tested sunscreen products.",
			},
			{
				name: "Daily Sun Care",
				description:
					"Potential use in daily-use sun care products where permitted.",
			},
		],
		formulationNotes: [
			"Check the supplied grade's physical form and solubility before formulation.",
			"Assess compatibility with the other UV filters in the formulation.",
			"Verify dispersion, stability, and finished-product performance.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "187393-00-6" },
			{
				label: "INCI",
				value: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
			},
			{ label: "Molecular Formula", value: "C38H49N3O5" },
			{ label: "Molecular Weight", value: "627.83 g/mol" },
			{ label: "UV Band", value: "UVA and UVB" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
			{ label: "Physical Form", value: "Confirm with supplier" },
		],
		regulatoryNotes: [
			"Verify market authorization and permitted concentration.",
			"Confirm the current ingredient listing and restrictions for the intended product category.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE Benzophenone-3",
		slug: "vrushcare-benzophenone-3",
		code: "BP3",
		hsnCode: "29145090",
		category: "UVA Filter",
		cas: "131-57-7",
		inci: "Benzophenone-3",
		chemicalName: "Oxybenzone",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/131-57-7/PNG",
			alt: "2D chemical structure of Oxybenzone",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Oxybenzone", "Benzophenone-3", "BP-3"],
		description:
			"Organic UV filter used in certain sunscreen and sun care formulations.",
		overview:
			"Benzophenone-3, commonly known as oxybenzone, is an organic UV filter used in certain cosmetic and sunscreen applications. Its use is subject to market-specific restrictions.",
		function:
			"Absorbs UV radiation, including portions of the UVA and UVB regions.",
		molecularFormula: "C14H12O3",
		molecularWeight: "228.24 g/mol",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility: "Confirm grade-specific solubility and formulation guidance",
		uvBand: "UVA and UVB",
		peakAbsorption: "Confirm against supplier spectral data",
		recommendedDosage:
			"Must comply with the permitted concentration and use conditions in the destination market.",
		applications: [
			{
				name: "Sunscreens",
				description: "Used in eligible sunscreen formulations where permitted.",
			},
			{
				name: "Sun Care Cosmetics",
				description:
					"Potential use in selected UV-protection cosmetic products.",
			},
		],
		formulationNotes: [
			"Check the current regulatory status before selecting this ingredient.",
			"Evaluate solubility, compatibility, and stability in the finished formulation.",
			"Assess the complete UV-filter system through appropriate efficacy testing.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "131-57-7" },
			{ label: "Molecular Formula", value: "C14H12O3" },
			{ label: "Molecular Weight", value: "228.24 g/mol" },
			{ label: "UV Band", value: "UVA and UVB regions" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
			{ label: "Appearance", value: "Confirm with supplier" },
		],
		regulatoryNotes: [
			"Restrictions differ significantly between jurisdictions.",
			"Confirm current limits, warnings, and permitted product categories before marketing or formulation.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	// ============================================================
	// UVB FILTERS
	// ============================================================
	{
		name: "VRUSHCARE Ethylhexyl Triazone",
		slug: "vrushcare-ethyl-hexyl-triazone",
		code: "EHT",
		hsnCode: "29336990",
		category: "UVB Filter",
		cas: "88122-99-0",
		inci: "Ethylhexyl Triazone",
		chemicalName: "Ethylhexyl Triazone",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/88122-99-0/PNG",
			alt: "2D chemical structure of Ethylhexyl Triazone",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["EHT", "Octyl Triazone"],
		description:
			"Oil-compatible organic UVB filter used in sunscreen formulations.",
		overview:
			"Ethylhexyl Triazone is an organic UVB filter used in sunscreen products. It is valued for its UVB absorption characteristics and can form part of a broader UV-filter system.",
		function:
			"Absorbs UVB radiation and contributes to protection against UVB exposure in a properly formulated and tested product.",
		molecularFormula: "C48H66N6O6",
		molecularWeight: "823.07 g/mol",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility: "Low water solubility; check the supplier's oil-phase guidance",
		uvBand: "UVB",
		peakAbsorption: "Approximately 314 nm; verify with supplier spectral data",
		recommendedDosage:
			"Follow the supplier's technical recommendations and applicable regulatory limits.",
		applications: [
			{
				name: "High-SPF Sunscreens",
				description:
					"Used as part of a UVB-filter system in appropriately tested sunscreen formulations.",
			},
			{
				name: "Sun Care Creams and Lotions",
				description: "Can be evaluated in compatible cream and lotion systems.",
			},
			{
				name: "Daily Sun Protection",
				description:
					"Potential use in daily sun care products where permitted.",
			},
		],
		formulationNotes: [
			"Confirm solubility and incorporation requirements with the supplier.",
			"Check compatibility with other UV filters and emulsion components.",
			"Validate stability and finished-product SPF performance.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "88122-99-0" },
			{ label: "Molecular Formula", value: "C48H66N6O6" },
			{ label: "Molecular Weight", value: "823.07 g/mol" },
			{ label: "UV Band", value: "UVB" },
			{ label: "Peak Absorption", value: "Approximately 314 nm" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Verify authorization and concentration limits in the target market.",
			"Confirm the supplier's current regulatory dossier before commercial use.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE Octyl Methoxycinnamate",
		slug: "vrushcare-octyl-methoxycinnamate",
		code: "OMC",
		hsnCode: "29183090",
		category: "UVB Filter",
		cas: "5466-77-3",
		inci: "Ethylhexyl Methoxycinnamate",
		chemicalName: "Ethylhexyl Methoxycinnamate",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/5466-77-3/PNG",
			alt: "2D chemical structure of Ethylhexyl Methoxycinnamate",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Octinoxate", "OMC", "Octyl Methoxycinnamate"],
		description:
			"Oil-soluble organic UVB filter used in certain sun care formulations.",
		overview:
			"Ethylhexyl Methoxycinnamate, also known as octinoxate, is an organic UVB filter. Its use depends on the regulations applicable to the intended market and product category.",
		function:
			"Absorbs UVB radiation and can contribute to the UV-filter system of a properly formulated sunscreen.",
		molecularFormula: "C18H26O3",
		molecularWeight: "290.40 g/mol",
		physicalForm: "Typically an oily liquid; confirm the supplied grade",
		appearance: "Confirm against supplier specification",
		solubility:
			"Oil-soluble; confirm compatibility with the formulation system",
		uvBand: "UVB",
		peakAbsorption: "Approximately 310 nm",
		recommendedDosage:
			"Use only within the concentration limits permitted in the destination market.",
		applications: [
			{
				name: "Sunscreens",
				description: "Used as a UVB filter in eligible sunscreen formulations.",
			},
			{
				name: "SPF Moisturizers",
				description:
					"Can be considered for compatible moisturizers formulated with UV protection.",
			},
			{
				name: "Sun Care Lotions",
				description: "Potential use in suitable emulsion systems.",
			},
		],
		formulationNotes: [
			"Check market-specific restrictions before selecting the ingredient.",
			"Evaluate compatibility with the oil phase and other UV filters.",
			"Conduct appropriate finished-product SPF and stability testing.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "5466-77-3" },
			{ label: "Molecular Formula", value: "C18H26O3" },
			{ label: "Molecular Weight", value: "290.40 g/mol" },
			{ label: "UV Band", value: "UVB" },
			{ label: "Peak Absorption", value: "Approximately 310 nm" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Regulatory acceptance and permitted concentrations vary by jurisdiction.",
			"Check local environmental and product-category requirements where applicable.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE Etone Amine",
		slug: "vrushcare-etone-amine",
		code: "EHAB",
		hsnCode: "29224990",
		category: "UVB Filter",
		cas: "26218-04-2",
		inci: "Confirm with supplier",
		chemicalName: "Confirm exact chemical identity with supplier",
		chemicalStructure: {
			alt: "Chemical structure pending identity verification for VRUSHCARE Etone Amine",
			source: "Supplier TDS / SDS / COA required",
			status: "verification-required",
		},
		synonyms: ["EHAB"],
		description:
			"Product listed for UVB-filter applications; exact chemical identity requires supplier verification.",
		overview:
			"This product is listed in the catalogue as a UVB filter. Its chemical name, INCI identity, mechanism, physical properties, and permitted applications must be confirmed against the supplier's original documentation before publication.",
		function:
			"Confirm the UV-filter function and spectral characteristics from the verified technical data sheet.",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm with supplier",
		solubility: "Confirm with supplier",
		uvBand: "Listed as UVB; verify chemical identity",
		peakAbsorption: "Confirm with supplier",
		recommendedDosage:
			"Do not publish a dosage until the exact chemical identity and regulatory status are verified.",
		applications: [
			{
				name: "Sun Care",
				description:
					"Potential application to be confirmed through the verified supplier documentation.",
			},
		],
		formulationNotes: [
			"Verify the product name, CAS number, INCI name, and chemical structure.",
			"Obtain the original TDS, SDS, and COA.",
			"Do not make formulation or safety claims until identity is confirmed.",
		],
		technicalSpecifications: [
			{ label: "Listed CAS Number", value: "26218-04-2" },
			{ label: "Product Code", value: "EHAB" },
			{ label: "Chemical Identity", value: "Requires supplier verification" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Confirm the exact ingredient identity before assessing regulatory status.",
			"Do not market as an approved UV filter without appropriate documentation.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE Octocrylene",
		slug: "vrushcare-octocrylene",
		code: "OC",
		hsnCode: "29163990",
		category: "UVB Filter",
		cas: "6197-30-4",
		inci: "Octocrylene",
		chemicalName: "Octocrylene",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/6197-30-4/PNG",
			alt: "2D chemical structure of Octocrylene",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Octocrylene", "OCR"],
		description:
			"Organic UV filter used in suitable sunscreen and sun care formulations.",
		overview:
			"Octocrylene is an oil-soluble organic UV filter used in sunscreen products. It primarily absorbs UVB and short-wave UVA radiation and may also contribute to the photostability of certain other UV filters, depending on the formulation.",
		function:
			"Provides UV absorption and can contribute to a formulation's UV-filter system. Actual performance depends on the complete formulation.",
		molecularFormula: "C24H27NO2",
		molecularWeight: "361.48 g/mol",
		physicalForm: "Typically an oily liquid; confirm the supplied grade",
		appearance: "Confirm against supplier specification",
		solubility:
			"Oil-soluble; confirm compatibility with the formulation system",
		uvBand: "Primarily UVB and short-wave UVA",
		peakAbsorption: "Approximately 303 nm",
		recommendedDosage:
			"Follow the supplier's recommendations and the current permitted concentration in the destination market.",
		applications: [
			{
				name: "Sunscreens",
				description:
					"Used in suitable sunscreen formulations as part of a UV-filter system.",
			},
			{
				name: "Sun Care Lotions",
				description:
					"Can be evaluated in compatible emulsion-based sun care products.",
			},
			{
				name: "UV Filter Combinations",
				description:
					"May be combined with other permitted filters following compatibility and stability assessment.",
			},
		],
		formulationNotes: [
			"Assess compatibility with the oil phase and other UV filters.",
			"Review the current regulatory position for the target market.",
			"Test the complete formulation for stability and UV protection performance.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "6197-30-4" },
			{ label: "Molecular Formula", value: "C24H27NO2" },
			{ label: "Molecular Weight", value: "361.48 g/mol" },
			{ label: "UV Band", value: "Primarily UVB and short-wave UVA" },
			{ label: "Peak Absorption", value: "Approximately 303 nm" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Verify the permitted concentration and applicable product restrictions.",
			"Confirm current safety and regulatory documentation for the target market.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE Octyl Salicylate",
		slug: "vrushcare-octyl-salicylate",
		code: "OS",
		hsnCode: "29420090",
		category: "UVB Filter",
		cas: "118-60-5",
		inci: "Ethylhexyl Salicylate",
		chemicalName: "2-Ethylhexyl Salicylate",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/118-60-5/PNG",
			alt: "2D chemical structure of 2-Ethylhexyl Salicylate",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Octisalate", "Octyl Salicylate"],
		description:
			"Oil-soluble UVB filter used in suitable sun care formulations.",
		overview:
			"Ethylhexyl Salicylate, commonly known as octisalate, is an oil-soluble organic UV filter used primarily for UVB absorption.",
		function:
			"Contributes to UVB absorption in a properly formulated sunscreen product.",
		molecularFormula: "C15H22O3",
		molecularWeight: "250.33 g/mol",
		physicalForm: "Typically an oily liquid; confirm the supplied grade",
		appearance: "Confirm against supplier specification",
		solubility: "Oil-soluble; confirm grade-specific compatibility",
		uvBand: "UVB",
		peakAbsorption: "Approximately 306 nm",
		recommendedDosage:
			"Follow supplier recommendations and applicable regulatory limits.",
		applications: [
			{
				name: "Sunscreens",
				description: "Used as a UVB filter in eligible sunscreen products.",
			},
			{
				name: "SPF Moisturizers",
				description:
					"Potential use in moisturizers formulated with UV protection.",
			},
			{
				name: "Sun Care Lotions",
				description:
					"Can be evaluated in compatible oil-in-water or other suitable formulation systems.",
			},
		],
		formulationNotes: [
			"Evaluate oil-phase compatibility and emulsifier requirements.",
			"Check interactions with other UV filters and formulation ingredients.",
			"Confirm permitted concentrations in the target market.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "118-60-5" },
			{ label: "Molecular Formula", value: "C15H22O3" },
			{ label: "Molecular Weight", value: "250.33 g/mol" },
			{ label: "UV Band", value: "UVB" },
			{ label: "Peak Absorption", value: "Approximately 306 nm" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Verify current authorization and maximum permitted concentration.",
			"Confirm applicable restrictions for the intended product category.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE PABA",
		slug: "vrushcare-paba",
		code: "PABA",
		hsnCode: "29224990",
		category: "UVB Filter",
		cas: "150-13-0",
		inci: "PABA",
		chemicalName: "4-Aminobenzoic Acid",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/150-13-0/PNG",
			alt: "2D chemical structure of 4-Aminobenzoic Acid",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Para-Aminobenzoic Acid", "PABA"],
		description:
			"UV-absorbing chemical requiring careful assessment of its intended cosmetic application and regulatory status.",
		overview:
			"PABA is an aromatic organic compound historically used in certain sunscreen products. Its current cosmetic suitability and permitted use must be verified for the target market.",
		function:
			"Absorbs UV radiation, particularly in the UVB region. Current application suitability must be assessed before formulation.",
		molecularFormula: "C7H7NO2",
		molecularWeight: "137.14 g/mol",
		physicalForm: "Typically a crystalline solid; confirm supplier grade",
		appearance: "Confirm against supplier specification",
		solubility:
			"Solubility depends on the solvent and pH; confirm with supplier",
		uvBand: "Primarily UVB",
		peakAbsorption: "Confirm spectral data with supplier",
		recommendedDosage:
			"No general dosage recommendation; verify whether the ingredient is permitted for the intended use and market.",
		applications: [
			{
				name: "UV-Related Research",
				description:
					"Potential use in suitable laboratory or research applications.",
			},
			{
				name: "Cosmetic Formulation Assessment",
				description:
					"Any proposed cosmetic application requires prior regulatory and technical verification.",
			},
		],
		formulationNotes: [
			"Confirm solubility and pH-dependent behavior.",
			"Evaluate skin compatibility and formulation suitability.",
			"Do not recommend a cosmetic use level without verified regulatory guidance.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "150-13-0" },
			{ label: "Molecular Formula", value: "C7H7NO2" },
			{ label: "Molecular Weight", value: "137.14 g/mol" },
			{ label: "Chemical Class", value: "Aromatic aminocarboxylic acid" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Do not assume historical use means current authorization.",
			"Check current ingredient restrictions and the relevant product category before marketing.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	// ============================================================
	// SPECIALTY INGREDIENTS
	// ============================================================
	{
		name: "VRUSHCARE Chlorphenesin",
		slug: "vrushcare-chlorphenesin",
		code: "CPN",
		hsnCode: "29094900",
		category: "Specialty Ingredient",
		cas: "104-29-0",
		inci: "Chlorphenesin",
		chemicalName: "3-(4-Chlorophenoxy)-1,2-propanediol",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/104-29-0/PNG",
			alt: "2D chemical structure of 3-(4-Chlorophenoxy)-1,2-propanediol",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["Chlorphenesin", "CPN"],
		description:
			"Preservative ingredient used in eligible cosmetic formulations.",
		overview:
			"Chlorphenesin is a cosmetic ingredient used for preservative purposes in certain formulations. Its use level and effectiveness depend on the formulation, product type, and applicable regulatory requirements.",
		function:
			"Used as a preservative ingredient to help control microbial growth when supported by a suitable preservation system.",
		molecularFormula: "C9H11ClO3",
		molecularWeight: "202.63 g/mol",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility: "Confirm with supplier TDS",
		recommendedDosage:
			"Follow current market-specific cosmetic restrictions and supplier formulation guidance.",
		applications: [
			{
				name: "Skincare",
				description:
					"Potential use in eligible creams, lotions, and other skincare products.",
			},
			{
				name: "Personal Care",
				description: "Can be evaluated in suitable personal care formulations.",
			},
			{
				name: "Cosmetic Preservation Systems",
				description:
					"May form part of a preservation strategy, subject to compatibility and efficacy testing.",
			},
		],
		formulationNotes: [
			"Check compatibility with the complete formulation.",
			"Conduct appropriate preservative efficacy testing on the finished product.",
			"Verify permitted use levels and restrictions for the destination market.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "104-29-0" },
			{ label: "Molecular Formula", value: "C9H11ClO3" },
			{ label: "Molecular Weight", value: "202.63 g/mol" },
			{ label: "Function", value: "Cosmetic preservative ingredient" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Confirm the current permitted concentration and product-category restrictions.",
			"Review applicable cosmetic ingredient regulations before commercial use.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE 5-Nitrobenzimidazole",
		slug: "vrushcare-5-nitrobenzimidazole",
		code: "NBI",
		hsnCode: "29339990",
		category: "Specialty Ingredient",
		cas: "94-52-0",
		inci: "Not established; verify intended application",
		chemicalName: "5-Nitrobenzimidazole",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/94-52-0/PNG",
			alt: "2D chemical structure of 5-Nitrobenzimidazole",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["5-Nitrobenzimidazole", "NBI"],
		description:
			"Specialty chemical for verified industrial or laboratory applications.",
		overview:
			"5-Nitrobenzimidazole is listed as a specialty chemical. Its intended application, suitability for cosmetic use, and technical properties should be established from supplier documentation.",
		function:
			"Application-specific chemical functionality must be confirmed against the supplier's technical documentation.",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm with supplier",
		solubility: "Confirm with supplier",
		recommendedDosage:
			"Not applicable until the intended use and technical suitability are established.",
		applications: [
			{
				name: "Specialty Chemical Applications",
				description:
					"Potential application depends on verified chemical identity, grade, and intended use.",
			},
			{
				name: "Laboratory Use",
				description:
					"Use only according to supplier documentation and appropriate laboratory safety procedures.",
			},
		],
		formulationNotes: [
			"Verify the identity, grade, and intended application.",
			"Obtain and review the supplier SDS before handling.",
			"Do not describe the product as a cosmetic active without evidence of suitability and authorization.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "94-52-0" },
			{ label: "Chemical Name", value: "5-Nitrobenzimidazole" },
			{ label: "Molecular Formula", value: "Confirm with supplier" },
			{ label: "Molecular Weight", value: "Confirm with supplier" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Verify whether the proposed application is permitted in the destination market.",
			"Do not imply cosmetic approval without supporting documentation.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE 4-n-Butylresorcinol",
		slug: "vrushcare-4-n-butyl-resorcinol",
		code: "4NBR",
		hsnCode: "29072100",

		category: "Specialty Ingredient",
		cas: "18979-61-8",
		inci: "4-Butylresorcinol",
		chemicalName: "4-n-Butylresorcinol",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/18979-61-8/PNG",
			alt: "2D chemical structure of 4-n-Butylresorcinol",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["4-n-Butylresorcinol", "4-Butylresorcinol"],
		description:
			"Specialty cosmetic active investigated for pigmentation-care applications.",
		overview:
			"4-n-Butylresorcinol is a resorcinol derivative used in certain cosmetic formulations targeting the appearance of uneven skin tone. Its use requires suitable formulation, safety assessment, and regulatory review.",
		function:
			"Used as a skin-care active in formulations targeting the appearance of pigmentation and uneven skin tone. Finished-product claims must be supported by appropriate evidence.",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility: "Confirm with supplier TDS",
		recommendedDosage:
			"Follow supplier guidance and applicable market-specific restrictions; do not assume a universal use level.",
		applications: [
			{
				name: "Pigmentation-Care Products",
				description:
					"Potential use in formulations targeting the appearance of uneven skin tone.",
			},
			{
				name: "Facial Serums",
				description:
					"Can be evaluated in compatible serum formulations following safety and stability assessment.",
			},
			{
				name: "Targeted Skincare",
				description:
					"Potential application in targeted skincare products where permitted.",
			},
		],
		formulationNotes: [
			"Confirm the ingredient identity and purity from supplier documentation.",
			"Evaluate solubility, stability, and compatibility in the intended formulation.",
			"Support efficacy and cosmetic claims with appropriate evidence.",
			"Assess finished-product safety and permitted use levels.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "18979-61-8" },
			{ label: "Chemical Name", value: "4-n-Butylresorcinol" },
			{
				label: "INCI",
				value: "Confirm the supplier's official ingredient declaration",
			},
			{ label: "Molecular Formula", value: "Confirm with supplier" },
			{ label: "Molecular Weight", value: "Confirm with supplier" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Confirm the intended cosmetic use and applicable ingredient restrictions.",
			"Review safety data and relevant market-specific requirements before commercialization.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE 3,5-Di-tert-butyl-4-hydroxybenzyl Alcohol",
		slug: "vrushcare-3-5-di-tert-butyl-4-hydroxy-benzyl-alcohol",
		code: "DTBHBA",
		hsnCode: "29072990",

		category: "Specialty Ingredient",
		cas: "88-26-6",
		inci: "Not established; verify intended application",
		chemicalName: "3,5-Di-tert-butyl-4-hydroxybenzyl Alcohol",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/88-26-6/PNG",
			alt: "2D chemical structure of 3,5-Di-tert-butyl-4-hydroxybenzyl Alcohol",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["DTBHBA"],
		description:
			"Specialty chemical listed for antioxidant-related or industrial applications; verify exact functionality.",
		overview:
			"This product is listed as a specialty chemical. Its antioxidant activity, intended application, and suitability for cosmetic formulations must be confirmed from the original supplier documentation.",
		function:
			"Confirm the chemical's intended function and performance from the supplier's technical dossier.",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm with supplier",
		solubility: "Confirm with supplier",
		recommendedDosage:
			"Not established; determine only after confirming the application and supplier guidance.",
		applications: [
			{
				name: "Specialty Chemical Applications",
				description:
					"Potential use depends on verified identity and documented technical functionality.",
			},
			{
				name: "Industrial Formulations",
				description:
					"Consider only where supported by supplier documentation and application-specific assessment.",
			},
		],
		formulationNotes: [
			"Confirm the chemical identity, molecular properties, and intended use.",
			"Obtain the current TDS, SDS, and COA.",
			"Verify compatibility and effectiveness for the proposed application.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "88-26-6" },
			{
				label: "Chemical Name",
				value: "3,5-Di-tert-butyl-4-hydroxybenzyl Alcohol",
			},
			{ label: "Molecular Formula", value: "Confirm with supplier" },
			{ label: "Molecular Weight", value: "Confirm with supplier" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Confirm the permitted intended application before marketing.",
			"Do not make cosmetic safety or antioxidant performance claims without supporting evidence.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},

	{
		name: "VRUSHCARE 6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine 3-oxide",
		slug: "vrushcare-6-1-pyrrolidinyl-2-4-pyrimidine-diamine-3-oxide",
		code: "PDPO",
		hsnCode: "29335400",

		category: "Specialty Ingredient",
		cas: "55921-65-8",
		inci: "Confirm with supplier",
		chemicalName: "6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine 3-oxide",
		chemicalStructure: {
			image:
				"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/55921-65-8/PNG",
			alt: "2D chemical structure of 6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine 3-oxide",
			source: "PubChem PUG REST (CAS lookup)",
			status: "available",
		},
		synonyms: ["PDPO"],
		description:
			"Specialty active listed for hair-care applications; verify identity, intended use, and regulatory status.",
		overview:
			"This product is listed for hair-care applications targeting hair growth or hair loss. The exact chemical identity, INCI designation, evidence supporting its intended use, and permitted cosmetic applications should be confirmed before publication.",
		function:
			"Intended hair-care function requires confirmation from supplier technical documentation and appropriate evidence.",
		physicalForm: "Confirm with supplier",
		appearance: "Confirm against supplier specification",
		solubility: "Confirm with supplier",
		recommendedDosage:
			"Confirm the recommended concentration and permitted application with the supplier and relevant regulatory authority.",
		applications: [
			{
				name: "Hair-Care Formulations",
				description:
					"Potential application in hair-care products, subject to verification of ingredient identity and suitability.",
			},
			{
				name: "Scalp-Care Products",
				description:
					"Any proposed scalp-care use requires technical, safety, and regulatory review.",
			},
		],
		formulationNotes: [
			"Verify the chemical identity, INCI name, and intended function.",
			"Request supporting technical data and evidence for proposed claims.",
			"Assess compatibility, stability, and safety in the finished formulation.",
			"Confirm whether the intended claims are permitted for a cosmetic product in the destination market.",
		],
		technicalSpecifications: [
			{ label: "CAS Number", value: "55921-65-8" },
			{
				label: "Chemical Name",
				value: "6-(1-Pyrrolidinyl)-2,4-pyrimidinediamine 3-oxide",
			},
			{ label: "INCI", value: "Confirm with supplier" },
			{ label: "Molecular Formula", value: "Confirm with supplier" },
			{ label: "Molecular Weight", value: "Confirm with supplier" },
			{ label: "Purity / Assay", value: "Confirm with supplier COA" },
		],
		regulatoryNotes: [
			"Verify the identity and regulatory status of the exact substance.",
			"Confirm whether the intended use and proposed claims are permitted in the target market.",
			"Obtain current technical and safety documentation before commercial use.",
		],
		packaging: { ...standardPackaging },
		documents: standardDocuments,
		actions: standardActions,
	},
];

export const getProductBySlug = (slug: string): ChemicalProduct | undefined => {
	return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (
	category: ChemicalProduct["category"],
): ChemicalProduct[] => {
	return products.filter((product) => product.category === category);
};

export const getAllProductSlugs = (): string[] => {
	return products.map((product) => product.slug);
};
