class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack:string[] = []

        const closedToOpen:{
            ")":string,
            "}":string,
            "]":string
        } = {
            ")":"(",
            "}":"{",
            "]":"["
        }

        for(let c = 0; c<s.length; c++){
            if(closedToOpen[s[c]]){
                if(stack.length >0 && stack[stack.length -1] === closedToOpen[s[c]]){
                    stack.pop()
                }else{
                    return false
                }
            } else {
                stack.push(s[c])
            }
        }

        return stack.length === 0

}
  

    
}
