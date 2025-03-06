import category_pic from "./../assets/category_pic.webp";
import pic1_1 from "./../assets/pic1_1.webp";
import pic1_2 from "./../assets/pic1_2.webp";
import pic2_1 from "./../assets/pic2_1.webp";
import pic2_2 from "./../assets/pic2_2.webp";
import pic3_1 from "./../assets/pic3_1.webp";
import pic3_2 from "./../assets/pic3_2.webp";
import pic4_1 from "./../assets/pic4_1.webp";
import pic4_2 from "./../assets/pic4_2.webp";
import pic5_1 from "./../assets/pic5_1.webp";
import pic5_2 from "./../assets/pic5_2.webp";
import pic6_1 from "./../assets/pic6_1.webp";
import pic6_2 from "./../assets/pic6_2.webp";
import pic7_1 from "./../assets/pic7_1.webp";
import pic7_2 from "./../assets/pic7_2.webp";
import pic8_1 from "./../assets/pic8_1.webp";
import pic8_2 from "./../assets/pic8_2.webp";
import pic9_1 from "./../assets/pic9_1.webp";
import pic9_2 from "./../assets/pic9_2.webp";
import pic10_1 from "./../assets/pic10_1.webp";
import pic10_2 from "./../assets/pic10_2.webp";
import pic11_1 from "./../assets/pic11_1.webp";
import pic11_2 from "./../assets/pic11_2.webp";
import pic12_1 from "./../assets/pic12_1.webp";
import pic12_2 from "./../assets/pic12_2.webp";
import pic13_1 from "./../assets/pic13_1.webp";
import pic13_2 from "./../assets/pic13_2.webp";
import pic14_1 from "./../assets/pic14_1.webp";
import pic14_2 from "./../assets/pic14_2.webp";
import pic15_1 from "./../assets/pic15_1.webp";
import pic15_2 from "./../assets/pic15_2.webp";
import pic16_1 from "./../assets/pic16_1.webp";
import pic16_2 from "./../assets/pic16_2.webp";
import pic17_1 from "./../assets/pic17_1.webp";
import pic17_2 from "./../assets/pic17_2.webp";
import pic18_1 from "./../assets/pic18_1.webp";
import pic18_2 from "./../assets/pic18_2.webp";
import pic19_1 from "./../assets/pic19_1.webp";
import pic19_2 from "./../assets/pic19_2.webp";
import pic20_1 from "./../assets/pic20_1.webp";
import pic20_2 from "./../assets/pic20_2.webp";

const products = [
  // Dye
  {
    id: 1,
    title: "TexDye Pro",
    category: "Dye",
    image: pic1_1,
    gallery: [pic1_1, pic1_2],
    price: 30.99,
    originalPrice: 40.99,
    sale: "25%",
    ratings: 4.0,
    stock: 50,
    description: "High-quality dye for industrial and textile use.",
    sizes: ["Large"],
    stats: { viewers: 20, sold: 15 },
  },
  {
    id: 2,
    title: "Sulfur Dyes",
    category: "Dye",
    image: pic2_1,
    gallery: [pic2_1, pic2_2],
    price: 45.0,
    originalPrice: 45.0,
    sale: "25%",
    ratings: 5.0,
    stock: 40,
    description: "Highly concentrated sulfur dye for textile dyeing.",
    sizes: ["Medium"],
    stats: { viewers: 18, sold: 10 },
  },
  {
    id: 3,
    title: "Acid Dyes",
    category: "Dye",
    image: pic3_1,
    gallery: [pic3_1, pic3_2],
    price: 42.0,
    originalPrice: 50.0,
    sale: "16%",
    ratings: 4.2,
    stock: 85,
    description: "Vibrant acid dyes for wool and silk fabrics.",
    sizes: ["Medium"],
    stats: { viewers: 25, sold: 18 },
  },

  // Solvent
  {
    id: 4,
    title: "Ethyl Acetate",
    category: "Solvent",
    image: pic4_1,
    gallery: [pic4_1, pic4_2],
    price: 28,
    originalPrice: 28,
    sale: "17%",
    ratings: 4.6,
    stock: 90,
    description: "High-purity solvent for industrial applications.",
    sizes: ["Large"],
    stats: { viewers: 12, sold: 5 },
  },
  {
    id: 5,
    title: "Methyl Ethyl Ketone",
    category: "Solvent",
    image: pic5_2,
    gallery: [pic5_2, pic5_1],
    price: 35,
    originalPrice: 55,
    sale: "16%",
    ratings: 4.7,
    stock: 65,
    description: "Fast-evaporating solvent for coatings.",
    sizes: ["Medium"],
    stats: { viewers: 20, sold: 10 },
  },

  // Reagent
  {
    id: 6,
    title: "Ammonium Persulfate",
    category: "Reagent",
    image: pic6_1,
    gallery: [pic6_1, pic6_2],
    price: 30,
    originalPrice: 40,
    sale: "17%",
    ratings: 5,
    stock: 90,
    description: "Oxidizing reagent for textile processing.",
    sizes: ["Large"],
    stats: { viewers: 14, sold: 7 },
  },
  {
    id: 7,
    title: "Potassium Dichromate",
    category: "Reagent",
    image: pic7_1,
    gallery: [pic7_1, pic7_2],
    price: 32.99,
    originalPrice: 39.99,
    sale: "18%",
    ratings: 4.3,
    stock: 80,
    description: "High-strength reagent for dye fixation.",
    sizes: ["Medium"],
    stats: { viewers: 10, sold: 3 },
  },

  // Alkaline Agent
  {
    id: 8,
    title: "Caustic Soda",
    category: "Alkaline Agent",
    image: pic8_1,
    gallery: [pic8_1, pic8_2],
    price: 20.0,
    originalPrice: 20.0,
    sale: "22%",
    ratings: 3.8,
    stock: 80,
    description: "Industrial-grade caustic soda for chemical processing.",
    sizes: ["Large"],
    stats: { viewers: 30, sold: 12 },
  },
  {
    id: 9,
    title: "Sodium Carbonate",
    category: "Alkaline Agent",
    image: pic9_1,
    gallery: [pic9_1, pic9_2],
    price: 25.0,
    originalPrice: 25.0,
    sale: "20%",
    ratings: 4.1,
    stock: 70,
    description: "Essential alkaline agent for textile treatments.",
    sizes: ["Small"],
    stats: { viewers: 22, sold: 9 },
  },

  // Bleaching Agent
  {
    id: 10,
    title: "Hydrogen Peroxide",
    category: "Bleaching Agent",
    image: pic10_1,
    gallery: [pic10_1, pic10_2],
    price: 14.5,
    originalPrice: 18.5,
    sale: "22%",
    ratings: 4.2,
    stock: 85,
    description: "Multipurpose hydrogen peroxide for bleaching.",
    sizes: ["Medium", "Small"],
    stats: { viewers: 50, sold: 32 },
  },
  {
    id: 11,
    title: "Sodium Hypochlorite",
    category: "Bleaching Agent",
    image: pic11_1,
    gallery: [pic11_1, pic11_2],
    price: 12.0,
    originalPrice: 15.0,
    sale: "20%",
    ratings: 4.7,
    stock: 90,
    description: "Powerful bleaching agent for industrial applications.",
    sizes: ["Small", "Medium"],
    stats: { viewers: 40, sold: 25 },
  },

  // Finishing Agent
  {
    id: 12,
    title: "Silicone Emulsions",
    category: "Finishing Agent",
    image: pic12_1,
    gallery: [pic12_1, pic12_2],
    price: 55.0,
    originalPrice: 70.0,
    sale: "21%",
    ratings: 4.7,
    stock: 45,
    description: "Silicone-based finishing agent for soft textiles.",
    sizes: ["Large", "Medium"],
    stats: { viewers: 22, sold: 8 },
  },

  // Neutralizing Agent
  {
    id: 13,
    title: "Acetic Acid",
    category: "Neutralizing Agent",
    image: pic13_1,
    gallery: [pic13_1, pic13_2],
    price: 10.99,
    originalPrice: 13.99,
    sale: "21%",
    ratings: 4.0,
    stock: 70,
    description: "Acetic acid for pH control in industrial processes.",
    sizes: ["Large", "Medium"],
    stats: { viewers: 35, sold: 18 },
  },

  // Bio-polishing Agent
  {
    id: 14,
    title: "Enzymes",
    category: "Bio-polishing Agent",
    image: pic14_1,
    gallery: [pic14_1, pic14_2],
    price: 25.0,
    originalPrice: 30.0,
    sale: "17%",
    ratings: 4.8,
    stock: 55,
    description: "Enzyme-based bio-polishing agent for textile treatment.",
    sizes: ["Small"],
    stats: { viewers: 18, sold: 6 },
  },
  // Dye
  {
    id: 15,
    title: "Reactive Dyes",
    category: "Dye",
    image: pic15_1,
    gallery: [pic15_1, pic15_2],
    price: 50.99,
    originalPrice: 65.99,
    sale: "23%",
    ratings: 4.1,
    stock: 60,
    description: "Reactive dye for cotton, silk, and wool textiles.",
    sizes: ["Large"],
    stats: { viewers: 30, sold: 12 },
  },
  {
    id: 16,
    title: "Vat Dyes",
    category: "Dye",
    image: pic16_1,
    gallery: [pic16_1, pic16_2],
    price: 48.0,
    originalPrice: 55.0,
    sale: "13%",
    ratings: 4.4,
    stock: 75,
    description: "Highly durable vat dyes for professional use.",
    sizes: ["Medium"],
    stats: { viewers: 25, sold: 15 },
  },

  // Solvent
  {
    id: 17,
    title: "Toluene",
    category: "Solvent",
    image: pic17_1,
    gallery: [pic17_1, pic17_2],
    price: 22.99,
    originalPrice: 30.99,
    sale: "25%",
    ratings: 4.0,
    stock: 90,
    description: "Fast-drying solvent for coatings and printing.",
    sizes: ["Small"],
    stats: { viewers: 20, sold: 10 },
  },
  {
    id: 18,
    title: "Xylene",
    category: "Solvent",
    image: pic18_1,
    gallery: [pic18_1, pic18_2],
    price: 31.99,
    originalPrice: 38.99,
    sale: "18%",
    ratings: 4.3,
    stock: 65,
    description: "Versatile solvent for industrial and textile processes.",
    sizes: ["Medium"],
    stats: { viewers: 22, sold: 9 },
  },

  // Reagent
  {
    id: 19,
    title: "Sodium Persulfate",
    category: "Reagent",
    image: pic19_1,
    gallery: [pic19_1, pic19_2],
    price: 29.99,
    originalPrice: 37.99,
    sale: "21%",
    ratings: 4.1,
    stock: 75,
    description: "Powerful oxidizing reagent for industrial use.",
    sizes: ["Large"],
    stats: { viewers: 28, sold: 14 },
  },
  {
    id: 20,
    title: "Copper Sulfate",
    category: "Reagent",
    image: pic20_1,
    gallery: [pic20_1, pic20_2],
    price: 24.5,
    originalPrice: 29.99,
    sale: "18%",
    ratings: 4.5,
    stock: 85,
    description: "Essential reagent for textile dyeing and processing.",
    sizes: ["Medium"],
    stats: { viewers: 18, sold: 7 },
  },

  // // Alkaline Agent
  // {
  //   id: 21,
  //   title: "Potassium Hydroxide",
  //   category: "Alkaline Agent",
  //   image: category_pic,
  //   gallery: [category_pic, category_pic],
  //   price: 19.99,
  //   originalPrice: 25.99,
  //   sale: "23%",
  //   ratings: 4.2,
  //   stock: 70,
  //   description: "Alkaline agent for saponification and neutralization.",
  //   sizes: ["Small"],
  //   stats: { viewers: 14, sold: 6 },
  // },
  // {
  //   id: 22,
  //   title: "Magnesium Hydroxide",
  //   category: "Alkaline Agent",
  //   image: category_pic,
  //   gallery: [category_pic, category_pic],
  //   price: 17.5,
  //   originalPrice: 22.5,
  //   sale: "22%",
  //   ratings: 4.0,
  //   stock: 80,
  //   description: "Alkaline powder for pH balance and chemical reactions.",
  //   sizes: ["Medium"],
  //   stats: { viewers: 20, sold: 10 },
  // },

  // // Bleaching Agent
  // {
  //   id: 23,
  //   title: "Peracetic Acid",
  //   category: "Bleaching Agent",
  //   image: category_pic,
  //   gallery: [category_pic, category_pic],
  //   price: 16.99,
  //   originalPrice: 21.99,
  //   sale: "23%",
  //   ratings: 4.4,
  //   stock: 60,
  //   description: "Powerful bleaching agent for textile applications.",
  //   sizes: ["Large"],
  //   stats: { viewers: 32, sold: 14 },
  // },
  // {
  //   id: 24,
  //   title: "Chlorine Dioxide",
  //   category: "Bleaching Agent",
  //   image: category_pic,
  //   gallery: [category_pic, category_pic],
  //   price: 18.99,
  //   originalPrice: 24.99,
  //   sale: "24%",
  //   ratings: 4.6,
  //   stock: 50,
  //   description: "Eco-friendly bleaching alternative for textiles.",
  //   sizes: ["Medium"],
  //   stats: { viewers: 25, sold: 11 },
  // },

  // // Finishing Agent
  // {
  //   id: 25,
  //   title: "Softening Agent",
  //   category: "Finishing Agent",
  //   image: pic25_1,
  //   gallery: [pic25_1, pic25_2],
  //   price: 40.0,
  //   originalPrice: 48.0,
  //   sale: "17%",
  //   ratings: 4.7,
  //   stock: 55,
  //   description: "High-performance softening agent for textiles.",
  //   sizes: ["Medium"],
  //   stats: { viewers: 20, sold: 9 },
  // },
  // {
  //   id: 26,
  //   title: "Anti-pilling Agent",
  //   category: "Finishing Agent",
  //   image: pic26_1,
  //   gallery: [pic26_1, pic26_2],
  //   price: 35.99,
  //   originalPrice: 42.99,
  //   sale: "16%",
  //   ratings: 4.2,
  //   stock: 70,
  //   description: "Prevents pilling on fabrics and improves durability.",
  //   sizes: ["Small"],
  //   stats: { viewers: 18, sold: 7 },
  // },

  // // Neutralizing Agent
  // {
  //   id: 27,
  //   title: "Sodium Bicarbonate",
  //   category: "Neutralizing Agent",
  //   image: pic27_1,
  //   gallery: [pic27_1, pic27_2],
  //   price: 12.99,
  //   originalPrice: 17.99,
  //   sale: "28%",
  //   ratings: 4.1,
  //   stock: 75,
  //   description: "Common neutralizing agent for textile processes.",
  //   sizes: ["Large"],
  //   stats: { viewers: 28, sold: 12 },
  // },
  // {
  //   id: 28,
  //   title: "Citric Acid",
  //   category: "Neutralizing Agent",
  //   image: pic28_1,
  //   gallery: [pic28_1, pic28_2],
  //   price: 14.5,
  //   originalPrice: 19.5,
  //   sale: "26%",
  //   ratings: 4.3,
  //   stock: 85,
  //   description: "Natural acid for pH adjustment in textiles.",
  //   sizes: ["Medium"],
  //   stats: { viewers: 30, sold: 15 },
  // },

  // // Bio-polishing Agent
  // {
  //   id: 29,
  //   title: "Cellulase Enzymes",
  //   category: "Bio-polishing Agent",
  //   image: pic29_1,
  //   gallery: [pic29_1, pic29_2],
  //   price: 27.5,
  //   originalPrice: 35.0,
  //   sale: "21%",
  //   ratings: 4.6,
  //   stock: 65,
  //   description: "Enzyme solution for fabric polishing and smoothness.",
  //   sizes: ["Large"],
  //   stats: { viewers: 24, sold: 8 },
  // },
  // {
  //   id: 30,
  //   title: "Catalase Enzymes",
  //   category: "Bio-polishing Agent",
  //   image: pic30_1,
  //   gallery: [pic30_1, pic30_2],
  //   price: 30.0,
  //   originalPrice: 38.0,
  //   sale: "21%",
  //   ratings: 4.7,
  //   stock: 55,
  //   description: "Removes residual hydrogen peroxide in textile processing.",
  //   sizes: ["Medium"],
  //   stats: { viewers: 20, sold: 6 },
  // },
];

export default products;
