class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
          // set dimension
    let rows = grid.length;
    let cols = grid[0].length;

    let visit = new Set();
    let position;

    let maxArea = 0;
    let landCount = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        position = r * cols + c;
        if (grid[r][c] === 1 && !visit.has(position)) {
          bfs(r, c);
          maxArea = Math.max(maxArea, landCount);
          landCount = 0;
        }
      }
    }

    function bfs(r: number, c: number) {
      let queue: number[][] = [[r, c]];
      position = r * cols + c;
      visit.add(position);
      landCount++;

      // directions
      let direct = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      while (queue.length > 0) {
        let queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
          let rc = queue.shift();

          let r = rc![0];
          let c = rc![1];

          for (const [dr, dc] of direct) {
            let nr = r + dr;
            let nc = c + dc;
            position = nr * cols + nc;

            // boundaries
            if (
              nr < 0 ||
              nc < 0 ||
              nr >= rows ||
              nc >= cols ||
              grid[nr][nc] === 0 ||
              visit.has(position)
            ) {
              continue;
            }

            queue.push([nr, nc]);
            visit.add(position);
            landCount++;
          }
        }
      }
    }

    return maxArea;
    }
}
