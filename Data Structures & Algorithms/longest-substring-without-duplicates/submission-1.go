func lengthOfLongestSubstring(s string) int {
    l:=0
    max_len:=0
    set := make(map[byte]bool)
    for r:=0; r < len(s); r++ {
        for set[s[r]] {
            delete(set,s[l])
            l++
        }

        set[s[r]] = true
        length:=r-l+1
        if(max_len<length){
            max_len=length
        }
    }
    return max_len

}
