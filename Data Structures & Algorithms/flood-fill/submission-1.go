func floodFill(image [][]int, sr int, sc int, color int) [][]int {
    // dimensions
    rows := len(image)
    columns := len(image[0])

    // set original color
    originalColor := image[sr][sc]

    // check original color is same with requested color
    if(originalColor == color){
        return image
    }

    var dfs func(r int, c int)
    
    dfs = func(r int, c int){
      // out of bound check
      if r < 0 || c < 0 || r>= rows || c >= columns {
        return
      }

      // check pixel[r][c] region's color same ot different with original color
      // if different then return
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
