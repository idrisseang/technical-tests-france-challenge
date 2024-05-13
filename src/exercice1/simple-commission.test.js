import { getCommission } from "./simple-commission";
import { expect, test } from "vitest";

const group1 = [
  {
    name: "Jonh",
    id: 1,
    hasSold: true,
  },
  {
    name: "Jack",
    id: 2,
    hasSold: false,
  },
  {
    name: "Gill",
    id: 3,
    hasSold: true,
  },
  {
    name: "Tom",
    id: 4,
    hasSold: true,
  },
];

const group2 = [
  {
    name: "Jonh",
    id: 1,
    hasSold: false,
  },
  {
    name: "Jack",
    id: 2,
    hasSold: false,
  },
  {
    name: "Gill",
    id: 3,
    hasSold: false,
  },
  {
    name: "Tom",
    id: 4,
    hasSold: false,
  },
];

test("Group 1 with CA = 1000", () => {
  expect(getCommission(1000, group1)).toStrictEqual({
    commission_taux: 17.5,
    commission_amount: 175,
  });
});

test("Group 1 with CA = 1000", () => {
  expect(getCommission(500, group1)).toStrictEqual({
    commission_taux: 0,
    commission_amount: 0,
  });
});

test("Group 1 with CA = 2000", () => {
  expect(getCommission(2000, group2)).toStrictEqual({
    commission_taux: 20,
    commission_amount: 400,
  });
});
