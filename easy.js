// what is functional programming

// classes 

// isomorphism?

// clssical vs prototypal inheritance

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


// capitalize 3rd

function capitalizeEveryThird(str) {
	var words = str.split(' ');

  for(var i = 0; i <words.length; i++) {
  	if( i % 3 === 2) {
    	words[i] = words[i].toUpperCase();
    }
    else {
    	words[i] = words[i].toLowerCase();
    }
  }
  return words.join(' ');
}

function capitalizeEveryThird(str) {
	var words = str.split(' ');

  for(var i = 2; i <words.length; i += 3) {
  	words[i] = words[i].toUpperCase();
  }
  return words.join(' ');
}

function capitalizeEveryThird(str) {
	var words = str.toLowerCase().split(' ');

  var newWords = words.map(function(word, i) {
  		if(i%3 === 2) {
      	return word.toUpperCase();
      }
      else {
      	return word;
      }
  });


  return words.join(' ');
}

var arr = [1,2,3,4,5,24326];

var largest = arr.reduce(function(x,y){
       return (x > y) ? x : y;
});

var wordSelector = function(string) {
 var words = string.split(" ");
  console.log(words);

function findMaxFreq(word){
  	// find number of times the most frequent letter appears
   var bins = {};
    for (var i = 0; i < word.length; i++) {
        bins[word[i]] = (bins[word[i]] || 0) + 1;
    };
    var max = 0;
    for (var c in bins) {
        max = Math.max(max, bins[c]);
    };
    return max;

  };
