const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
function mergedArray(arr1, arr2) {
  const superArr = arr1.concat(arr2).sort((a, b) => a - b);

  console.log(superArr);
}

mergedArray(array1, array2);

const mergedArray2 = (arr1, arr2) => {
  let superArr = arr1 > arr2 ? [arr1, arr2] : [arr2, arr1];
  let superior = superArr[1];
  let inferior = superArr[0];

  for (let i = 0; i < inferior.length; i++) {
    superior.push(inferior[i]);
  }

  let answer = superior.sort((a, b) => a - b);

  console.log(answer);
};

mergedArray2(array1, array2);
