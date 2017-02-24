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
