//Derive a union type from an object

type Point = { x: number; y: number }; // === “x” | “y”:
type P = keyof Point;

// K in keyof
const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 20,
};

type FruitCounts = typeof fruitCounts; //object
type SingleFruitCountsType = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

export const singleFruitCount: SingleFruitCountsType = {
  banana: 2,
  pear: 123,
  apple: 0,
};
