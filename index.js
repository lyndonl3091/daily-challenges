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
