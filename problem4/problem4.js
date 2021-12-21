function mostAppearItem(items) {
  let uniques = [], appearance = [], merge = []; str = "";

  for (let item of items) {
      if (!uniques.includes(item)) {
          let n = items.filter(elements => elements == item).length;
          uniques.push(item);
          appearance.push(n);
          merge.push(item + "->" + n + "");
      }
  }
  appearance = appearance.sort();
  for (i = 0; i < appearance.length; i++) {
      for (j = 0; j < merge.length; j ++) {
          if (merge[j].includes(appearance[i]) && !str.includes(merge[j])) {
            str = str + merge[j] + " " + "";
          }
      }
  }
  let dict = Array.from(str);
  dict.pop();
  return dict.join("").toString();
}

module.exports = mostAppearItem;
