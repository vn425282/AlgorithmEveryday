/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     const numsLength = nums.length;
//     var checkMoney = (index) => {
//         if(index > numsLength - 1) {
//             return 0;
//         }
        
//         return Math.max(checkMoney(index + 1), checkMoney(index + 2) + nums[index]);
//     }
    
//     return checkMoney(0);
// };

var rob = function(nums) {
    var lengthNums = nums.length;
    var prev = 0;
    var next = 0;
    for (let i = 0; i < lengthNums; i++) {
        var maxVal = Math.max(next, prev + nums[i]);
        prev = next;
        next = maxVal;
    }
    
    return next;
};