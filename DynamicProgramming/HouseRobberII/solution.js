/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 2) return nums[0] || 0;
    let lengthNums = nums.length;
    let pos1 = 0;
    let pos2 = 0;
    let maxTotal = 0;
    
    let pos3 = 0;
    let pos4 = 0;
    let maxTotal2 = 0;

    for(let i = 1; i < lengthNums; i++) {
        maxTotal = Math.max(pos1, pos2 + nums[i]);
        pos2 = pos1;
        pos1 = maxTotal;
    }
    
    for(let i = 0; i < lengthNums - 1; i++) {
        maxTotal2 = Math.max(pos3, pos4 + nums[i]);
        pos4 = pos3;
        pos3 = maxTotal2;
    }
    
    
    return Math.max(maxTotal, maxTotal2);
};
