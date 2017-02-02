var twoSum = function(nums, target) {
    let counter = 0;
    let result = [];


    for(let i=0; i<nums.length; i++) {
        if(counter === i) {
            continue;
        }
        if(nums[i] + nums[counter] === target) {
           result.push(i);
           result.push(counter);
           return result.sort((a, b) => a - b);
        } else {
            console.log('wrong')
            counter++;
        }
    }


};

// using memo
function verifyItems(origItems, origPrices, items, prices) {
	var items = items.reduce(function(memo,item,i) {
  		memo[item] = prices[i]
      return memo
  }, {})

  return origItems.reduce(function(count, origITem, i) {
  		return (items[origItem] && items[origItem] !== origPrices[i]) ?
      	count + 1 : count;
  }, 0)


}

// substring

function buildSubsequences(s) {

  let result = {}

  	function sub(s) {
    	//base case
      // !s.length

      	result[s] = 1

        for (let i = 0; i<s.length; i++) {
        		let newString = s.substr(0, 1) + s.substr(i+1)
            if(!result[newString] && newString.length) {
            	sub(newString)
            }
        }

    }
  sub(s)
  return Object.keys(result).sort();
}
