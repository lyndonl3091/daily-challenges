//  check if string is palindrome

function isPalindrome(string) {
  return string.split('').reverse().join('');
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
