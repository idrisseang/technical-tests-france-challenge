export const sellers = [
  { id: 1, firstname: "Gabriel", lastname: "Henry" },
  { id: 2, firstname: "John", lastname: "Doe" },
  { id: 3, firstname: "Jane", lastname: "Chaney" },
];

export const products = [
  { id: 1, name: "Bananes", price: "3.5" },
  { id: 2, name: "Clementines", price: "6" },
];

export const orders = [
  { sellerId: 1, products: [{ id: 1, quantity: 3 }] },
  {
    sellerId: 2,
    products: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ],
  },
];
