class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        // set dimensions
        const rows = image.length
        const columns = image[0].length

        // original color
        const originalColor = image[sr][sc]

        // check original color and requested color same 
        if(originalColor === color){
            return image
        }

        function dfs(r:number,c:number){
            // out of bound check
            if(
                r < 0 || 
                c < 0 || 
                r >= rows ||
                c >= columns    
            ){
                return
            }

            // check pixel position[r][c] color same of diffrent
            if(image[r][c] != originalColor){
                return
            }

            // fill
            image[r][c] = color

            dfs(r+1,c) // down
            dfs(r-1,c) // up
            dfs(r,c+1) // right
            dfs(r,c-1) // left
        }

        dfs(sr,sc)
        return image

    }
}
