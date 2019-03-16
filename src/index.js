
module.exports = function solveSudoku(matrix) {
  // [5, 3, 4, 6, 7, 8, 9, 0, 0],
  // [6, 7, 2, 1, 9, 5, 3, 4, 8],
  // [1, 9, 8, 3, 4, 2, 5, 6, 7],
  // [8, 5, 9, 7, 6, 1, 4, 2, 3],
  // [4, 2, 6, 8, 5, 3, 7, 9, 1],
  // [7, 1, 3, 9, 2, 4, 8, 5, 6],
  // [9, 6, 1, 5, 3, 7, 2, 8, 4],
  // [2, 8, 7, 4, 1, 9, 6, 3, 5],
  // [3, 4, 5, 2, 8, 6, 1, 7, 9]
//https://en.wikipedia.org/wiki/Sudoku_solving_algorithms

SolveSudoku(matrix);
return matrix;

}
// Решение подбором BackTraking
function SolveSudoku(matrix)
{
  let row, column;

 if(!FindEmptyCell(matrix))
    return true;

  for(let num=1; num<=9; num++)
  {
    if(AvaliableNumber(matrix,row,column,num))
    {
      matrix[row][column] = num;

      if(SolveSudoku(matrix))
        return true;

      matrix[row][column] = 0;
    }
  }

  return false;

// Находим пустую ячейку
  function FindEmptyCell(matrix){

    for( row = 0; row<9; row++)
      for( column =0 ;column<9;column++)
        if(matrix[row][column] === 0)
          return true;
    return false;
  }
}


// Такая цифра уже есть в строке
function NotAvailableInRow(matrix,row, num)
{
for(let column = 0; column<9; column++)
  if(matrix[row][column] === num)
    return true;
return false;
}

// ...
function NotAvailableInColumn(matrix, column, num)
{
for(let row = 0; row<9; row++)
  if(matrix[row][column] === num)
    return true;
return false;
}

// ...
function NotAvailableInBox(matrix, boxStartRow, boxStartColumn, num)
{
for(let row = 0; row<3; row++)
  for(let column = 0; column<3; column++)
    if(matrix[row+boxStartRow][column+boxStartColumn] === num)
      return true;
return false;
}


function AvaliableNumber(matrix, row, column, num)
{
  return !NotAvailableInRow(matrix,row,num) && 
         !NotAvailableInColumn(matrix,column, num) && 
         !NotAvailableInBox(matrix, row-row%3, column-column%3, num);
}
