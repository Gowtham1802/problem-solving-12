let name = "gowtham";
console.log(name);



// 1. Declare an array called fruits containing the names of three different fruits. Then, write a function printFruits that takes the fruits array as an argument and prints each fruit to the console.

 const fruits = ['orange', 'grapes', 'mango'];

  const outPutFruits = (fruits) => {
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  };

  outPutFruits(fruits);



// 2. Declare three variables: name (a string), age (a number), and isStudent (a boolean). Assign values to these variables and then print them to the console.

const name1 = 'Gowtham.T';
const age = 22;
const isStudent = true;
console.log(name1);
console.log(age);
console.log(isStudent);



  // 3. Write a function add that takes two numbers as arguments and returns their sum.


  const sum = (name01, name02) => {
    return console.log(`Sum = ${name01 + name02}`);
  };

  sum("Gowtham", "Thangaraj");
  sum(11, 22);



// 4. Write a function reverseString that takes a string as input and returns the string reversed.


// Not Using Reverse Method

  const strReverse = (str) => {
    console.log(`The Original String : ${str}`);
    const splitArr = str.split('');
    const reverseArr = [];
    for (let i = splitArr.length - 1; i >= 0; i--) {
      reverseArr.push(splitArr[i]);
    }
    console.log(`The Reverse String : ${reverseArr.join('')}`);
  };

  strReverse('Aakash');

  // Using Reverse Method

  const strReverse = (str) => {
    console.log(`The Original String : ${str}`);
    const splitArr = str.split('');
    const reverseArr = splitArr.reverse();
    const joinArr = reverseArr.join('');
    console.log(`The Reverse String : ${joinArr}`);
  }

  strReverse('Aakash');



