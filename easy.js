function camelCaser (str) {
	let words = str.split(' ');

  let camelWords = words.map((word, i) => {
  	if (i ===0) {
 			///first word
     	return word.toLowerCase();
    } else {
    //title case the word
    	let chars = word.splt('');
      let newChars = chars.map((char,i) => {
      	if (i === 0) {
        	return char.toUpperCase();
        }
        else {
        	return char.toLowerCase();
        }
      });
    	return newChars.join('');
    }
});
	return camelWords.join('');

}


// shuffle function

function shuffle(arr) {
	var shuffled = [];

  while(arr.length) {
  	var index = Math.floor(Math.random() * arr.length);

    var removedArr = arr.splice(index, 1); //splice will always return an array

		shuffled = shuffled.concat(removedArr);

  }

  return shuffled;
}
