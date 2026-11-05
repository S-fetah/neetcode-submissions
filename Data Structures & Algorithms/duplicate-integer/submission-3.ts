class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // constraints

        if (nums.length < 0 || nums.length > Math.pow(10,5)) return false

        const isAcceptable = (value: number) : boolean => {
            return value >= Math.pow(10,9) || value >= Math.pow(-10,9)
        }

        const duplicates : number[] = []
      
        for (const [i, e] of nums.entries()) {
        const found : number | undefined = duplicates.find(element => element === e)
            
       if (found !== undefined) break;
            duplicates[i] = e;
         

    }
       if (duplicates.length !== nums.length) return true;
      return false
}}

  
const solution = new Solution();

console.log(solution.hasDuplicate([2,2,1,1,3,1,2,3,1,4]));
