const mostAppearItem = require("./problem4");

test("Test 1", () => {
  expect(
    mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"])
  ).toEqual("golang->1 ruby->2 js->4");
});
test("Test 2", () => {
  expect(
    mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"])
  ).toEqual("C->1 D->2 B->3 A->4");
});
test("Test 3", () => {
  expect(mostAppearItem(["football", "basketball", "tenis"])).toEqual(
    "football->1 basketball->1 tenis->1"
  );
});
test("Test 4", () => {
  expect(
    mostAppearItem(["i", "d", "o", "n", "t", "k", "n", "o", "w", "w", "h", "y"])
  ).toEqual("i->1 d->1 t->1 k->1 h->1 y->1 o->2 n->2 w->2");
});
test("Test 5", () => {
  expect(
    mostAppearItem(["adidas", "nike", "puma", "adidas", "adidas", "diadora"])
  ).toEqual("nike->1 puma->1 diadora->1 adidas->3");
});
