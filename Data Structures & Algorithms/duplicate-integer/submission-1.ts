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

       const cleaned : number[] =[...new Set<number>(nums)] 

      console.log(cleaned)
      console.log(cleaned.length)
      console.log(nums.length)
      
       if (cleaned.length !== nums.length) return true;
      return false
    }
}