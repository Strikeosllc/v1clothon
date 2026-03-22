/*
  ================================================================
  FILE: data/products.js
  PURPOSE: All product data lives here — one place to edit
  ================================================================

  ✏️ TO ADD A PRODUCT:
     Copy any object below, paste it at the end of the array,
     change the values. That is all — the page updates itself.

  ✏️ TO REMOVE A PRODUCT:
     Delete the whole { } block for that product.

  ✏️ TO CHANGE PRICE:
     Edit the price string e.g. "$320" → "$280"

  FIELDS:
    id       → unique number, never duplicate
    name     → shown on product card
    price    → shown below product name
    img      → image URL or local path e.g. "/images/jacket.jpg"
    category → used for filtering later e.g. "women" "men" "accessories"
    badge    → text on hover button — wire to cart later
  ================================================================
*/

export const products = [
  {
    id: 1,
    name: "Noir Trench",
    price: "$320",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 2,
    name: "Ivory Wrap Dress",
    price: "$195",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 3,
    name: "Shadow Blazer",
    price: "$275",
    img: "https://images.unsplash.com/photo-1594938298603-f7468a9e3ea2?w=400&q=80",
    category: "men",
    badge: "Quick Add",
  },
  {
    id: 4,
    name: "Obsidian Trousers",
    price: "$160",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",
    category: "men",
    badge: "Quick Add",
  },
  {
    id: 5,
    name: "Velvet Slip",
    price: "$215",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 6,
    name: "Dusk Overcoat",
    price: "$390",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 7,
    name: "Linen Column",
    price: "$180",
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 8,
    name: "Matte Crop Top",
    price: "$95",
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  {
    id: 9,
    name: "Noir Wide Leg",
    price: "$210",
    img: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&q=80",
    category: "men",
    badge: "Quick Add",
  },
  {
    id: 10,
    name: "Smoke Maxi Skirt",
    price: "$175",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
    category: "women",
    badge: "Quick Add",
  },
  /* ✏️ ADD MORE PRODUCTS HERE — copy any block above and change values */
]
