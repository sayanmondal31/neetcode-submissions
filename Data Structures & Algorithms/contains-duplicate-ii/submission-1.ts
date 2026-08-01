class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let window = new Set<number>();

        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (window.has(nums[r])) {
                return true;
            }
            
            window.add(nums[r]);

            if (r - l >= k) {
                window.delete(nums[l]);
                l++;
            }

        }

        return false;
    }
}
