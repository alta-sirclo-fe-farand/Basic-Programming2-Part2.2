const playingDomino = require("./problem3");

test("Test 1", () => {
  expect(
    playingDomino(
      [
        [6, 5],
        [3, 4],
        [2, 1],
        [3, 3],
      ],
      [4, 3]
    )
  ).toEqual([3, 4]);
});
test("Test 2", () => {
  expect(
    playingDomino(
      [
        [6, 5],
        [3, 3],
        [3, 4],
        [2, 1],
      ],
      [3, 6]
    )
  ).toEqual([6, 5]);
});
test("Test 3", () => {
  expect(
    playingDomino(
      [
        [6, 6],
        [2, 4],
        [3, 6],
      ],
      [5, 1]
    )
  ).toEqual([]);
});
