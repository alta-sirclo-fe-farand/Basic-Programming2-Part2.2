function findMinAndMax(arr) {
  let min = Math.min(...arr), max = Math.max(...arr);
  let imin = arr.indexOf(min), imax = arr.indexOf(max);

  return (`min: ${min} index: ${imin} max: ${max} index: ${imax}`);
}

module.exports = findMinAndMax;
