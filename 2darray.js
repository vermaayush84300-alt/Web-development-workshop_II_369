// 2ddarray is multivariable or multi dimentional array that can store a matrix of data in rows or columns
// useful for games spreadsheet or reprenesenting data in tabular form of images

const matrix =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
