/*
 * Write a program which will find all such numbers which are divisible
 * by 7 but are not a multiple of 5, between 2000 and 3200 (both included).
 * The numbers obtained should be printed in a comma-separated sequence
 * on a single line.
 */
function divisor() {
  const arr = [];
  for (i = 2000; i <= 3200; i++) {
    if (i % 7 == 0 && i % 5 != 0) {
      arr.push(i);
    }
  }
  return arr;
}

/*
 * Write a program which can compute the factorial of a given numbers.
 * The results should be printed in a comma-separated sequence on a single line.
 */

function factorial(number) {
  let factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
}

/*
 * With a given integral number n, write a program to generate
 * an object that contains (i, i*i) such that is an integral number
 * between 1 and n (both included). and then the program should print
 * the dictionary
 */

function integral(number) {
  let prod;
  const arr = [];
  for (i = 1; i <= number; i++) {
    prod = i * i;
    console.log(` ${i}: ${prod}`);
  }
}

/*
 *
 *
 */

function minMax(arr) {
  const res = [];
  res.push(Math.min.apply(this, arr));
  res.push(Math.max.apply(this, arr));
  return res;
}

/*
 *
 *
 */

function nest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false;
}

/*
 *Create a function that accepts a Date object and returns true
 * if it's Christmas Eve (December 24th) and false otherwise.
 * Keep in mind JavaScript's Date month is 0 based, meaning
 * December is the 11th month while January is 0.
 */

function christmas(year, month, day) {
  if (month === 12 && day === 24 && year > 0) {
    return true;
  }
  return false;
}
document.body.style.backgroundColor = "aqua";
/*
 * Create a function that removes the first n elements of an array.
 * The function accepts an array as it's first parameter and n the number
 * of elements to remove from the array. The function should return an array
 * of the remaining elements. if n is greater than the length of the array,
 * return null. N should always be greater than zero.
 * eg removeN([2,5,6,6,7,1], 4): [7,1]
 */

function remove(arr, n) {
  let i = 0;
  while (arr[i]) {
    i++;
  }

  if (n > i) {
    return null;
  } else {
    let index = n;
    const newArr = [];
    let newArrIndex = 0;
    let value = arr[index];

    while (value != undefined) {
      newArr[newArrIndex] = value;
      index++;
      value = arr[index];
      newArrIndex++;
    }
    console.log(newArr);
  }
}

/*
 * Create a function that adds a provided array of elements at it's start
 * such that the last element in the second array is the first in our
 * new array. The first parameter of the array is the base array you are
 * to insert elements to the start. The second parameter is the array of
 * elements you are going to insert at the start of the first parameter.
 * The array should return a new array of the joined two arrays.
 * eg. addToStart([1,2], [3,4]): [4,3,1,2],
 * addToStart(['f', 3, 5], ['f', 6,'g']): ['g', 6, 'f', 'f', 3, 5]
 */

function addArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  while ((arr1[i], arr2[j])) {
    i++;
    j++;
  }
  let index1 = i;
  let index2 = j;
  let newArrIndex = 1;
  const newArr = [arr2[index2]];
  let value = arr2[index2 - 1];

  if (index2 > 0) {
    newArr[newArrIndex] = value;
    index2--;
    console.log(newArr);
    // return false;
  }
}

/*
 * Create a function that inserts a set of elements at the middle of an array.
 * The first parameter is the base array. The second parameter is the array of
 * elements to be added at the middle. if the base array length is not an even
 * number then, the middle number of the array should be placed at the center of
 * the new elements to be added. If the array of elements is not even as well,
 * then the middle number of the base array should be placed after the middle
 * number of the elements array.
 * eg.
 * [1,2], [3,4] = [1,3,4,2]
 * [1,2,3], [4,5,6,7] = [1,4,5,2,6,7,3]
 * [1,2,3], [4,5,6] = [1,4,5,2,6,3]
 * [1,2,3,4], [5,6,7] = [1,2,5,6,7,3,4
 */

function insert(arr1, arr2) {
  let len1 = 0;
  let len2 = 0;
  let newArr = [];
  let arr3 = [];
  arr3 = [...arr1];

  //get length of array one
  while (arr1[len1]) {
    len1++;
  }

  //get length of array two
  while (arr2[len2]) {
    len2++;
  }

  //check if array one is even or odd
  if (len1 % 2 === 0) {
    let indexAdd = len1 / 2;
    //if even
    //add array two to array one
    let j = len2;
    while (j > 0) {
      newArr = arr1;
      newArr[indexAdd] = arr2[len2 - j];
      indexAdd++;
      j--;
    }

    //add remaining part of arr1 to new array
    let len3 = indexAdd;
    let index1 = len1 / 2;

    while (index1 < len1) {
      newArr[len3] = arr3[index1];
      index1++;
      len3++;
    }
  } else {
    //if odd
    //get the new index to add
    let indexAdd = len1 / 2 - 0.5;

    let arr4 = [];
    arr4 = [...arr2];
    let arr5 = []

    //check arr2 if even or odd
    if (len2 % 2 == 0) {
      //if even add arr1 middle element at middle of arr2
      if (len1 > 0) {
        arr5 = arr2;
        arr5[indexAdd] = arr1[indexAdd];
        indexAdd++;
      }

      //add remaining part of arr2 to new array
      let len4 = indexAdd;
      let index2 = len2 / 2;

      while (index2 < len2) {
        arr5[len4] = arr4[index2];
        index2++;
        len4++;
      }

      //get length of array 5
      let len5 = 0;
      while (arr5[len5]) {
        len5++;
      }

      let newIndexAdd = len1 / 2 - 0.5;
      let j = len5;

      while (j > 0) {
        newArr = arr1;
        newArr[newIndexAdd] = arr5[len5 - j];
        newIndexAdd++;
        j--;
      }

      let len3 = newIndexAdd;
      let index1 = len1 / 2 + 0.5;

      while (index1 < len1) {
        newArr[len3] = arr3[index1];
        index1++;
        len3++;
      }
    }else{

      let insertIndex = len2 / 2 + .5;
      let toIndex = len1 / 2 - .5;

      arr5 = arr2;
      arr5[insertIndex] = arr1[toIndex];
      
      //add remaining part of arr2 to new array
      let len4 = insertIndex + 1;
      let index2 = len2 / 2;
      
      while (insertIndex < len2) {
        arr5[len4] = arr4[insertIndex];
        insertIndex++;
        len4++;
      }

      //get length of array 5
      let len5 = 0;
      while (arr5[len5]) {
        len5++;
      }

      let newIndexAdd = len1 / 2 - 0.5;
      let j = len5;
      newArr = arr1;
      while(j > 0){
        newArr[newIndexAdd] = arr5[len5 - j];
        newIndexAdd ++;
        j--;
      }
      
      let len3 = newIndexAdd;
      let index1 = len1 / 2 + 0.5;

      while (index1 < len1) {
        newArr[len3] = arr3[index1];
        index1++;
        len3++;
      }
    }
  }

  console.log(newArr);
}
