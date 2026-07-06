class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack:number[] = []

        for(let c of tokens){
            if("+-*/".includes(c)){
                const b = stack.pop()??0
                const a = stack.pop()??0
                let result:number = 0
                if(c === "+"){
                    result = a+b
                }
                 if(c === "-"){
                    result = a-b
                }
                
                if(c === "*"){
                    result = a*b
                }

                if(c === "/"){
                    result = Math.trunc(a/b)
                }

                stack.push(result)
            }else{
                stack.push(parseInt(c))
            }
        }

        return stack.pop() ?? 0
    }
}
