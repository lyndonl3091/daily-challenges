//  check if string is palindrome

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// # of occurences of a character in a string

function checkOccurence(x, string) {

  let counter = 0;

  for(let i=0; i<string.length; i++) {
    if(string[i] === x) {
      counter++;
    }
  }

  return counter;
}

//  given an array of #s from 1-100, find one of the duplicate

function findDupes(numArr) {
  let obj = {};

  for(let i=0; i<numArr.length; i++) {
    if(!obj[numArr[i]]) {
      obj[numArr[i]] = 1;
    }
    else {
      return numArr[i];
    }
  }
}


function findDupes(numArr) {
  let dupes = [];
  let obj = {};

  for(let i=0; i<numArr.length; i++) {
    if(!obj[numArr[i]]) {
      obj[numArr[i]] = 1;
    }
    else {
      dupes.push(numArr[i]);
    }
  }

  return dupes;
}

// given a number, translate it to a string given the following rules (1 = a, 2 = b, 3 = c, ...)

// 12258 = abbeh, abeh, abyh, lbeh, lyh


// check if a  number is a prime number

function isPrime(num) {

  for(let i=2; i<num; i++) {
    if(num, % i === 0) {
      return false;
    }
  }
}

// recursive factorial

function fact(num) {
  if (num <= 0) {
    return 1;
  }

  else {
    return num + factorial(num - 1);
  }
}

// find the item that appears the most in the list

function getMostAppeared(arr) {
  let obj = {}

  // use ref
  // iterate through array and save to ref # of times each item appears
  
}
