class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l=0,max_len=0
        // an emty set that store unique element to keep track of  repeating chareters
        let set = new Set<string>()
        for(let r=0;r<s.length;r++){
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
            set.add(s[r])
            max_len = Math.max(max_len,r-l+1)
        }
        return max_len
    }
}
