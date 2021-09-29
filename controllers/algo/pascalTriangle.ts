/**
 * Generate first numRows of Pascal's triangle
 * @param numRows 
 * @returns 
 */
export const pascalTriangle = (numRows: number): number[][] => {
    const triangles: number[][] = Array(numRows);
    
    for (let i = 0; i < numRows; i++) {
        triangles[i] = Array(i + 1);
        triangles[i][0] = triangles[i][i] = 1;
        
        for (let k = 1; k < i; k++) {
            triangles[i][k] = triangles[i - 1][k - 1] + triangles[i - 1][k];
        }
    }
    
    return triangles;
};