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
