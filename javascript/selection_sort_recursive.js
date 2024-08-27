
function selectionSortRecursive(arr) {
  // type your code here

  if (arr.length <= 1)
    return arr;

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  return [min, ...selectionSortRecursive(arr)];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
  console.log("Expected: [1]");
  console.log("=>", selectionSortRecursive([1]));

  console.log("");
  console.log("Expected: [1,2,3]");
  console.log("=>", selectionSortRecursive([3,1,2]));
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
