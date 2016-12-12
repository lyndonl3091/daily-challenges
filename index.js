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
