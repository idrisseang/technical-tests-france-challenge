export const sellers = [
  { id: 1, firstname: "Joris", lastname: "Grilleres" },
  { id: 2, firstname: "John", lastname: "Doe" },
  { id: 3, firstname: "Jane", lastname: "Doris" },
];

export const products = [
  { id: 1, name: "Bananes", price: "3.25" },
  { id: 2, name: "Clementines", price: "6" },
];

export const orders = [
  { sellerId: 1, products: [{ id: 1, quantity: 4 }] },
  {
    sellerId: 2,
    products: [
      { id: 1, quantity: 4 },
      { id: 2, quantity: 2 },
    ],
  },
];
