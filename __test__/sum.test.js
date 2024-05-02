import { sum } from "../src/components/sum";

test("This is a function to find sum of 2 numbers", () => {
  const result = sum(1, 2);

  // Assertion
  expect(result).toBe(3);
});
