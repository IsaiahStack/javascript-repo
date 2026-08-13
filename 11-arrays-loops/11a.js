
/*
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function lastValue() {
  last = nums[nums.length - 1];
  console.log(last)
}

lastValue()

function getLastvalue(array) {
  const num = array.length -1;
  console.log(num)
  return array[num]
}

console.log(getLastvalue(nums));


function getLastvalue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex]

}

console.log(getLastvalue(nums));

const list = ['fridge', 'stove', 'bed', 'sink'];

console.log(list);

function swap(array) {

  //const lastIndex = array.length - 1;

  const lastValue = array[3];
  const firstValue = array[0]

  array[0] = lastValue
  array[3] = firstValue;

  return array;
}

console.log(swap(list));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
};

for (let i = 5; i >= 0; i--) {
  console.log(i);
};

let index = 0;

while (index < 10) {
  index += 2;
  console.log(index)
};

let five = 5;

while (five > 0) {
  five = five - 1;
  console.log(five);
};


const inc = [1, 2, 3];
const org = [];

console.log(inc);

for (i = 0; i < inc.length; i++) {
  org.push(inc[i] + 1);
}

console.log(org);

const inv = [1, 2, 3];

function addOne(array) {
  
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}

console.log(addOne(inv));

const bro = [1, 2, 3];

const sis = [4, 5, 6];

const dad = [];

const num = 3;

function addByNum(array) {

  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + num;
  }
  return array;
}

//console.log(addByNum(bro));

function addTwoArray(array1, array2) {

  for (let i = 0; i < array1.length && array2.length; i++) {
    dad[i] = array1[i] + array2[i];
  }
  return dad;
}

console.log(addTwoArray(bro, sis));

const randomArray = [-2, -1, 0, 1, 2, 3];

let num = 0;

function countPositive(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      num++;
    } 
  }

  return num;

}

const result = countPositive(randomArray);

console.log(`There are ${result} numbers in the array greater than 0`);
const cosas = [1, -3, 5];

function minMax(nums) {

  const result = {

  }

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] < min) {
      min = nums[i];
    };

    if (nums[i] > max) {
      max = nums[i];
    };

  };

  return {max, min};

}

const result = minMax(cosas);

console.log(result);

console.log(minMax(cosas));

function minMax(nums) {

  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {

    const value = nums[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.max === null || value > result.max) {
      result.max = value;
    }

  };

  return result

}

console.log(minMax([1, -3, 5]));

console.log(minMax([]));
console.log(minMax([7]));


function countWords(words) {

  const result = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;

  }  

}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'raisin']));

let words = ['hello', 'bye', 'search', 'morning', 'night'];

let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);*/

/*
function findIndex(array, word) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }

  return -1;

}

console.log(findIndex['green', 'red', 'blue', 'red'], 'red'); */

// I need to create a function that takes in 1 array and a string
// I need to check if the word passed to the funcion is in the array and return the index of the string if i find it in the array and return -1 if it's not in the array 

/*function removeEgg(foods) {

  let result = [];
  let eggCount = 0;
  let reversedFoods = foods.slice().reverse();

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggCount < 2) {
        eggCount++;
        continue;
    } else {
      result.push(reversedFoods[i]);
    }
  }

  return result.reverse();

}

const foods = ['egg','apple','egg','egg','ham'];

console.log(removeEgg(foods));
console.log(foods);

// I need to loop through an array to find a string, if i find egg i need continue
// if its not egg i need to save the item in a new array with the items i want to keep
// I need to remove only the first two eggs and store the last one

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz!!!!!!!!!!');
  } else if (i % 3 === 0) {
    console.log('Fizz!!!!!');
  } else if (i % 5 === 0) {
    console.log('Buzz!!!!!');
  } else {
    console.log(i);
  }
}*/

//const word = array[i];


function findIndex(array, word) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }

  return -1;

}


function unique(array) {

  const result = [];

  for (let i = 0; i < array.length; i++) {

    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word);

    }
  }

  return result;

}

console.log(unique(['green', 'red', 'blue', 'red']))
