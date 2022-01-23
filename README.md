##Jawaban Test


const twoSums = (nums, target) => {
    for(let j = 0; j < nums.length; j++) {
        for(let k = j + 1; k < nums.length; k++) {
            if(nums[j] + nums[k] == target) {
                return [j,k]
            }
        }
    }
};
