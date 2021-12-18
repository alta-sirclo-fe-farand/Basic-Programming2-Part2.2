const maximumBuyProduct = require("./problem2");

test("Test 1", () => {
  expect(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])).toEqual(3);
});
test("Test 2", () => {
  expect(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])).toEqual(
    4
  );
});
test("Test 3", () => {
  expect(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])).toEqual(4);
});
test("Test 4", () => {
  expect(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])).toEqual(1);
});
test("Test 5", () => {
  expect(maximumBuyProduct(0, [10000, 30000])).toEqual(0);
});
