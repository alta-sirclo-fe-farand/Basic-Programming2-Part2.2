const findMinAndMax = require("./problem1");

test("Test 1", () => {
  expect(findMinAndMax([5, 7, 4, -2, -1, 8])).toEqual(
    "min: -2 index: 3 max: 8 index: 5"
  );
});
test("Test 2", () => {
  expect(findMinAndMax([2, -5, -4, 22, 7, 7])).toEqual(
    "min: -5 index: 1 max: 22 index: 3"
  );
});
test("Test 3", () => {
  expect(findMinAndMax([4, 3, 9, 4, -21, 7])).toEqual(
    "min: -21 index: 4 max: 9 index: 2"
  );
});
test("Test 4", () => {
  expect(findMinAndMax([-1, 5, 6, 4, 2, 18])).toEqual(
    "min: -1 index: 0 max: 18 index: 5"
  );
});
test("Test 5", () => {
  expect(findMinAndMax([-2, 5, -7, 4, 7, -20])).toEqual(
    "min: -20 index: 5 max: 7 index: 4"
  );
});
