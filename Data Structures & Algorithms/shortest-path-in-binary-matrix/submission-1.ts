class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid: number[][]): number {
        // set dimension
    const rows = grid.length;
    const cols = grid[0].length;

    if (grid[0][0] !== 0 || grid[rows - 1][cols - 1] !== 0) {
      return -1;
    }

    let visit = new Set();
    let queue: number[][] = [];

    let position = 0 * cols + 0;

    queue.push([0, 0]);
    visit.add(position);

    const directions = [
      [1, 0], // down
      [-1, 0], //up
      [0, 1], // right
      [0, -1], // left
      [1, 1], // dig b right
      [1, -1], // dig b left
      [-1, -1], //dig up left
      [-1, 1], // dig up right
    ];
    let pathLength = 1;

    while (queue.length > 0) {
      let queueLength = queue.length;

      for (let i = 0; i < queueLength; i++) {
        // pop
        const rc = queue.shift();

        let r = rc![0];
        let c = rc![1];

        // final dest
        if (r === rows - 1 && c === cols - 1) {
          return pathLength;
        }

        for (const [dr, dc] of directions) {
          position = (r + dr) * cols + (c + dc);
          // boundaries
          if (
            r + dr < 0 ||
            c + dc < 0 ||
            r + dr >= rows ||
            c + dc >= cols ||
            grid[r + dr][c + dc] === 1 ||
            grid[rows - 1][cols - 1] === 1 ||
            grid[0][0] != 0 ||
            visit.has(position)
          ) {
            continue;
          }

          visit.add(position);

          queue.push([r + dr, c + dc]);
        }
      }
      pathLength++;
    }
    return -1;
    }
}