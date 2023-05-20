const productData = [
    {
        id: 1,
        name: "Waistcoat",
        description: "Enhance your outfit with our handmade waistcoat, a perfect blend of style, comfort, and sophistication.",
        images: ["waistcoat_1_1.PNG", "waistcoat_1_2.PNG", "waistcoat_1_3.PNG"],
        price: 25.99
    },
    {
        id: 2,
        name: "Sweater",
        description: "Stay cozy and stylish with our handmade sweater, crafted from the finest materials for ultimate comfort.",
        images: ['sweater_4_1.PNG', 'sweater_4_2.PNG', 'sweater_4_3.PNG', 'sweater_4_4.PNG'],
        price: 32.99
    },
    {
        id: 3,
        name: "Bag",
        description: "Carry your essentials in style with our meticulously crafted handmade bag, combining functionality and beauty.",
        images: ["bag_1.PNG"],
        price: 22.99
    },
    {
        id: 4,
        name: "Top",
        description: "Make a fashion statement with our handmade top, featuring a variety of colors to suit your personal style.",
        images: ["top_1_blue.PNG", "top_1_grey.PNG", "top_1_orange.PNG", "top_1_white.PNG", "top_1_whitetop_1_black.PNG"],
        price: 23.99
    },
    {
        id: 5,
        name: "Hat and Scarf Set",
        description: "Complete your look with our beautifully handcrafted hat and scarf set, showcasing exquisite details and exceptional quality.",
        images: ["hat_scarf_1_beige.PNG", "hat_scarf_1_black.PNG"],
        price: 29.99
    },
    {
        id: 6,
        name: "Hat, Scarf, and Gloves Set",
        description: "Stay stylish and warm with our handmade hat, scarf, and gloves set, a perfect accessory for any season.",
        images: ["hat_scarf_2_1.PNG", "hat_scarf_2_2.PNG"],
        price: 35.99
    },
    {
        id: 7,
        name: "Hat, Scarf, and Gloves Set",
        description: "Elevate your style with our meticulously handcrafted hat, scarf, and gloves set, offering both fashion and functionality.",
        images: ["hat_scarf_3_1.PNG", "hat_scarf_3_2.PNG"],
        price: 27.99
    },
    {
        id: 8,
        name: "Longsleeve",
        description: "Experience ultimate comfort and style with our handmade longsleeve, designed to make a lasting impression.",
        images: ["longsleeve_1_1.PNG", "longsleeve_1_2.PNG", "longsleeve_1_3.PNG"],
        price: 33.99
    },
    {
        id: 9,
        name: "Hat and Scarf Set",
        description: "Add a touch of luxury to your outfit with our handmade hat and scarf set, meticulously crafted for exceptional quality.",
        images: ["hat_scarf_4_1.PNG", "hat_scarf_4_2.PNG"],
        price: 21.99
    },
    {
        id: 10,
        name: "Sweater",
        description: "Indulge in the cozy warmth and timeless elegance of our handmade sweater, a must-have for any wardrobe.",
        images: ["sweater_2_1.PNG", "sweater_2_2.PNG"],
        price: 26.99
    },
    {
        id: 11,
        name: "Sweater",
        description: "Stay chic and comfortable with our handmade sweater, meticulously crafted for style and durability.",
        images: ["sweater_3_1.PNG", "sweater_3_2.PNG"],
        price: 19.99
    },
    {
        id: 12,
        name: "Cape",
        description: "Wrap yourself in elegance with our handmade cape, a perfect blend of sophistication and comfort.",
        images: ["cape_1_1.PNG", "cape_1_2.PNG"],
        price: 24.99
    },
    {
        id: 13,
        name: "Sweater",
        description: "Stay warm in style with our exquisitely handmade sweater, featuring intricate details and superior craftsmanship.",
        images: ["Sweater_1_1.PNG", "Sweater_1_2.PNG"],
        price: 12.99
    },
    {
        id: 14,
        name: "Muffs",
        description: "Embrace winter elegance with our handmade muffs, designed to keep you cozy and fashionable.",
        images: ["muffs_1_1.PNG", "muffs_1_2.PNG"],
        price: 17.99
    }
]


function prepareLocalStorage() {
// Check if LocalStorage needs initialization
    if (!localStorage.getItem('products')) {
        // Store the product data in LocalStorage
        localStorage.setItem('products', JSON.stringify(productData));
    }
}

// function removeItemFromLocalStorage(itemName) {
//     localStorage.removeItem(itemName);
// }

// removeItemFromLocalStorage('products');
// Call the function to prepare the localStorage
prepareLocalStorage();
