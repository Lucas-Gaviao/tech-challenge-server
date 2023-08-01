const { mongoose } = require("mongoose");

const Phone = require("../models/Phone.model");

const phones = [
  {
    id: 0,
    name: "iPhone 7",
    manufacturer: "Apple",
    description:
      "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
    color: "black",
    price: 769,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/IPhone_7_gy7kdq.png",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy S7",
    manufacturer: "Samsung",
    description:
      "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
    color: "grey",
    price: 209,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/Galaxy_S7_c0yak9.jpg",
    screen: "5,1 inch Quad-HD",
    processor: "Snapdragon 820",
    ram: 4,
  },
  {
    id: 2,
    name: "Honor 10",
    manufacturer: "Huawei",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "blue",
    price: 399,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/Honor_10_uitroa.jpg",
    screen: "5,84 inch Full-HD",
    processor: "Kirin 970",
    ram: 6,
  },
  {
    id: 3,
    name: "P10 Lite",
    manufacturer: "Huawei",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "white",
    price: 249,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/P10_Lite_ohplib.jpg",
    screen: "5,2 inch Full-HD",
    processor: "Kirin 658",
    ram: 4,
  },
  {
    id: 4,
    name: "Nokia 7.1",
    manufacturer: "Nokia",
    description:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/Nokia_7.1_n8aawa.jpg",
    color: "black",
    price: 275,
    imageFileName: "Nokia_7.1.jpg",
    screen: "5,84 inch Full-HD",
    processor: "Octa-core",
    ram: 4,
  },
  {
    id: 5,
    name: "Zen Phone 5",
    manufacturer: "Asus",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "black",
    price: 359,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/ZenPhone_5_gry6gn.jpg",
    screen: "6,2 inch Full-HD",
    processor: "Snapdragon 636",
    ram: 6,
  },
  {
    id: 6,
    name: "MI A2",
    manufacturer: "Xiaomi",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "black",
    price: 179,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/Xiaomi_MI_A2_bdwhzv.jpg",
    screen: "5,99 inch Full-HD",
    processor: "Snapdragon 660",
    ram: 6,
  },
  {
    id: 7,
    name: "Moto G6",
    manufacturer: "Motorola",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "black",
    price: 199,
    imageFileName:
      "https://res.cloudinary.com/dctxow0kh/image/upload/v1690562062/Moto_G6_jdg74o.png",
    screen: "5,7 inch Full-HD",
    processor: "Snapdragon 450",
    ram: 3,
  },
];

async function seedData() {
  try {
    const deletedProducts = await Phone.deleteMany({}); //DELETING THE PHONES;
    const createPhones = await Phone.insertMany(phones); //CREATING THE PHONES;
    console.log("we have deleted the phones...", phones.length);
    console.log("we have created the phones...", phones.length);
  } catch (e) {
    console.log(e, "error seeding data in our DB...");
  }
}

seedData();
