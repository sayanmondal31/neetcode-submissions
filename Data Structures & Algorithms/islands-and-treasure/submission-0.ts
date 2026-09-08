class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
    const rows = grid.length;
    const cols = grid[0].length;

 
    const queue: number[][] = [];

    const direct: number[][] = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 0) { // start from 0 (treasure)
          queue.push([r, c]);
        }
      }
    }

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      for (const [dr, dc] of direct) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr < 0 || // boundaries
          nc < 0 || // boundaries
          nr >= rows || // boundaries
          nc >= cols || // boundaries
          grid[nr][nc] !== 2147483647 // check if it is not landcell (2147483647)
       
        ) {
          continue;
        }

        queue.push([nr, nc]);
        grid[nr][nc] = grid[r][c] + 1; 
      }
    }

    
    }
}
