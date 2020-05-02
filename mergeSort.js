var mergeSort = function (array) {
  if (array.length < 2) return array;

  let mid = Math.floor((0 + array.length - 1) / 2);
  let left = mergeSort(array.slice(0, mid + 1));
  let right = mergeSort(array.slice(mid + 1));

  let i = 0;
  let j = 0;
  let aux = [];
  while (i < left.length || j < right.length) {
    if (j === right.length || left[i] < right[j]) {
      aux.push(left[i]);
      i++;
    } else if (i === left.length || left[i] >= right[j]) {
      aux.push(right[j]);
      j++;
    }
  }
  return aux;
};
