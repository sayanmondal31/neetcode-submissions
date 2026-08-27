class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        // set dimensions
        let rows = grid.length
        let columns = grid[0].length
        let queue: number[][] = []
        let visit = new Set()
        let islandCount = 0

    
        let position:number;

        const neighbours = [
            [1,0], // down
            [-1,0], // up
            [0,1], // right
            [0,-1] // left
        ]

        visit.add(position)
        for(let r = 0; r< rows; r++){
            for(let c = 0; c<columns; c++){
                position = r * columns + c
                if(grid[r][c] === "1" && !visit.has(position)){
                    bfs(r,c)
                    islandCount++
                }
            }
        }

        function bfs(r:number, c:number){
            position = r * columns + c
            visit.add(position)
            queue.push([r,c])

            while(queue.length > 0){
              let  queueLength = queue.length
        

            const rc = queue.shift()    // pop 
            let r = rc![0], c = rc![1]

            for(const [dr,dc] of neighbours){
                position = (r + dr) * columns + (c + dc)
                // check the bounds
                if(
                    r+dr < 0 || 
                    c+dc < 0 || 
                    r+dr >= rows || 
                    c+dc >= columns || 
                    visit.has(position) || 
                    grid[r+dr][c+dc] === "0" 
                    ){
                    continue
                }

                visit.add(position)
                queue.push([r+dr, c+dc])
            }

            }
        }

    return islandCount
    }
}
