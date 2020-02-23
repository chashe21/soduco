// sudoku program setup variables


let rowSudokuArr = [];
let columnSudokuArr = [];
let squareSudokuArr = [];
let secondSquareSudokuArr = [];
let thirdSquareSudokuArr = [];
let page1 = document.getElementById('firstPageDiv');
let page2 = document.getElementById('secondPageDiv');
let page3 = document.getElementById('thirdPageDiv');
let logoutBtn = document.getElementsByClassName('logOutDiv');
let makeSudokuInput = document.createElement("input");
makeSudokuInput.setAttribute("type", "text", "class", "sudokuInputs", "maxlength", "1");



// ------log in button (p1) function--------------


function loginFunc(userName, password) {
    var userName = document.getElementById("usernameInput").value
    var password = document.getElementById("passwordInput").value
    if (userName == '' || password == '') {
        alert('Please Fill In password and Username!')
    } else if (userName == 'abcd' && password == '1234') {
        page1.style.display = "none";
        page2.style.display = "block";
        document.getElementById('userNameP').innerHTML = userName + '!'; //put the userName in the p3 header.
    } else {
        alert('Username or Password incorrect!');
    }

}


//function that process Sudoku games


function returnRandomMat() { //returns random matrix from 12 mats
    let mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8, mat9, mat10, mat11, mat12;
    let randomMatNum = Math.floor((Math.random() * 12) + 1);

    mat1 = [
        ['6', '5', '4', '1', '7', '2', '9', '8', '3'],
        ['9', '8', '7', '6', '4', '3', '2', '1', '5'],
        ['3', '2', '1', '5', '8', '9', '4', '6', '7'],
        ['8', '9', '6', '7', '1', '4', '5', '3', '2'],
        ['1', '4', '3', '2', '6', '5', '8', '7', '9'],
        ['2', '7', '5', '9', '3', '8', '1', '4', '6'],
        ['4', '3', '9', '8', '5', '6', '7', '2', '1'],
        ['7', '6', '2', '4', '9', '1', '3', '5', '8'],
        ['5', '1', '8', '3', '2', '7', '6', '9', '4'],
    ];

    mat2 = [
        ['1', '2', '7', '5', '6', '8', '3', '4', '9'],
        ['6', '5', '9', '4', '3', '2', '1', '7', '8'],
        ['4', '8', '3', '1', '7', '9', '2', '6', '5'],
        ['7', '9', '8', '6', '4', '1', '5', '3', '2'],
        ['2', '1', '6', '3', '8', '5', '7', '9', '4'],
        ['5', '3', '4', '9', '2', '7', '6', '8', '1'],
        ['8', '6', '2', '7', '5', '4', '9', '1', '3'],
        ['3', '4', '1', '2', '9', '6', '8', '5', '7'],
        ['9', '7', '5', '8', '1', '3', '4', '2', '6'],
    ];

    mat3 = [
        ['4', '8', '9', '2', '7', '5', '6', '3', '1'],
        ['3', '7', '5', '4', '6', '1', '9', '2', '8'],
        ['2', '6', '1', '9', '3', '8', '5', '7', '4'],
        ['1', '5', '2', '7', '9', '3', '4', '8', '6'],
        ['7', '9', '6', '5', '8', '4', '3', '1', '2'],
        ['8', '3', '4', '1', '2', '6', '7', '5', '9'],
        ['6', '1', '7', '8', '5', '9', '2', '4', '3'],
        ['5', '4', '3', '6', '1', '2', '8', '9', '7'],
        ['9', '2', '8', '3', '4', '7', '1', '6', '5'],
    ];

    mat4 = [
        ['8', '7', '5', '3', '2', '1', '9', '4', '6'],
        ['9', '6', '1', '4', '7', '8', '3', '2', '5'],
        ['4', '3', '2', '9', '6', '5', '8', '7', '1'],
        ['6', '8', '7', '2', '4', '9', '1', '5', '3'],
        ['5', '2', '9', '7', '1', '3', '6', '8', '4'],
        ['1', '4', '3', '5', '8', '6', '2', '9', '7'],
        ['3', '5', '8', '6', '9', '7', '4', '1', '2'],
        ['7', '1', '4', '8', '3', '2', '5', '6', '9'],
        ['2', '9', '6', '1', '5', '4', '7', '3', '8'],
    ];

    mat5 = [
        ['4', '8', '3', '6', '7', '9', '2', '5', '1'],
        ['2', '1', '9', '5', '8', '4', '6', '7', '3'],
        ['5', '6', '7', '2', '1', '3', '4', '8', '9'],
        ['1', '4', '8', '7', '5', '2', '9', '3', '6'],
        ['3', '7', '2', '8', '9', '6', '1', '4', '5'],
        ['9', '5', '6', '3', '4', '1', '7', '2', '8'],
        ['6', '3', '4', '1', '2', '8', '5', '9', '7'],
        ['8', '9', '5', '4', '6', '7', '3', '1', '2'],
        ['7', '2', '1', '9', '3', '5', '8', '6', '4'],
    ];

    mat6 = [
        ['3', '1', '5', '8', '6', '2', '4', '7', '9'],
        ['7', '6', '2', '3', '4', '9', '5', '8', '1'],
        ['8', '4', '9', '5', '7', '1', '2', '6', '3'],
        ['9', '2', '8', '6', '5', '7', '3', '1', '4'],
        ['6', '5', '4', '2', '1', '3', '7', '9', '8'],
        ['1', '7', '3', '9', '8', '4', '6', '2', '5'],
        ['4', '9', '6', '1', '2', '5', '8', '3', '7'],
        ['2', '3', '7', '4', '9', '8', '1', '5', '6'],
        ['5', '8', '1', '7', '3', '6', '9', '4', '2'],
    ];

    mat7 = [
        ['8', '5', '7', '4', '6', '2', '3', '1', '9'],
        ['9', '2', '1', '3', '5', '7', '8', '4', '6'],
        ['3', '4', '6', '1', '9', '8', '5', '2', '7'],
        ['6', '8', '5', '2', '4', '3', '7', '9', '1'],
        ['1', '7', '9', '5', '8', '6', '2', '3', '4'],
        ['4', '3', '2', '7', '1', '9', '6', '8', '5'],
        ['2', '9', '3', '6', '7', '4', '1', '5', '8'],
        ['7', '1', '4', '8', '2', '5', '9', '6', '3'],
        ['5', '6', '8', '9', '3', '1', '4', '7', '2'],
    ];

    mat8 = [
        ['6', '5', '8', '2', '9', '3', '4', '1', '7'],
        ['7', '4', '1', '5', '6', '8', '9', '2', '3'],
        ['9', '3', '2', '1', '7', '4', '5', '6', '8'],
        ['3', '8', '5', '9', '2', '1', '7', '4', '6'],
        ['1', '6', '7', '4', '8', '5', '2', '3', '9'],
        ['4', '2', '9', '7', '3', '6', '8', '5', '1'],
        ['2', '7', '4', '3', '1', '9', '6', '8', '5'],
        ['8', '9', '3', '6', '5', '2', '1', '7', '4'],
        ['5', '1', '6', '8', '4', '7', '3', '9', '2'],
    ];

    mat9 = [
        ['7', '6', '1', '9', '5', '8', '2', '3', '4'],
        ['4', '5', '3', '6', '1', '2', '9', '7', '8'],
        ['9', '2', '8', '3', '7', '4', '5', '6', '1'],
        ['5', '9', '2', '8', '6', '3', '1', '4', '7'],
        ['8', '7', '6', '5', '4', '1', '3', '2', '9'],
        ['3', '1', '4', '7', '2', '9', '6', '8', '5'],
        ['2', '8', '5', '4', '9', '6', '7', '1', '3'],
        ['1', '4', '7', '2', '3', '5', '8', '9', '6'],
        ['6', '3', '9', '1', '8', '7', '4', '5', '2'],
    ];

    mat10 = [
        ['8', '3', '4', '1', '5', '7', '2', '9', '6'],
        ['5', '2', '1', '8', '6', '9', '4', '7', '3'],
        ['6', '9', '7', '3', '2', '4', '1', '5', '8'],
        ['1', '6', '5', '2', '9', '3', '7', '8', '4'],
        ['7', '8', '3', '6', '4', '5', '9', '2', '1'],
        ['2', '4', '9', '7', '1', '8', '3', '6', '5'],
        ['4', '7', '8', '5', '3', '2', '6', '1', '9'],
        ['3', '1', '2', '9', '8', '6', '5', '4', '7'],
        ['9', '5', '6', '4', '7', '1', '8', '3', '2'],
    ];

    mat11 = [
        ['5', '8', '9', '4', '2', '1', '7', '3', '6'],
        ['4', '6', '2', '5', '7', '3', '8', '1', '9'],
        ['7', '3', '1', '8', '9', '6', '2', '5', '4'],
        ['8', '9', '3', '2', '4', '5', '6', '7', '1'],
        ['6', '1', '7', '3', '8', '9', '5', '4', '2'],
        ['2', '4', '5', '1', '6', '7', '9', '8', '3'],
        ['1', '2', '6', '7', '5', '4', '3', '9', '8'],
        ['9', '5', '4', '6', '3', '8', '1', '2', '7'],
        ['3', '7', '8', '9', '1', '2', '4', '6', '5'],
    ];

    mat12 = [
        ['3', '2', '7', '1', '5', '8', '9', '4', '6'],
        ['6', '1', '9', '4', '3', '7', '5', '8', '2'],
        ['5', '4', '8', '9', '6', '2', '7', '1', '3'],
        ['1', '8', '6', '5', '7', '4', '3', '2', '9'],
        ['4', '3', '2', '6', '8', '9', '1', '5', '7'],
        ['9', '7', '5', '3', '2', '1', '4', '6', '8'],
        ['7', '6', '4', '2', '1', '3', '8', '9', '5'],
        ['8', '5', '1', '7', '9', '6', '2', '3', '4'],
        ['2', '9', '3', '8', '4', '5', '6', '7', '1'],
    ];

    switch (randomMatNum) { //pick one mat randomly.
        case 1:
            return mat1
            break;

        case 2:
            return mat2
            break;

        case 3:
            return mat3
            break;

        case 4:
            return mat4
            break;

        case 5:
            return mat5
            break;

        case 6:
            return mat6
            break;

        case 7:
            return mat7
            break;

        case 8:
            return mat8
            break;

        case 9:
            return mat9
            break;

        case 10:
            return mat10
            break;

        case 11:
            return mat11
            break;

        default:
            return mat12
            break;
    }

}


function hideValues(mat, difficultyLevel) { // function that hide random values (3 difficulty levels) in matrix.
    // this func is working directly in the HTML!

    let numOfHiddenVals = 0;
    let tableP3 = document.getElementById("sudokuTable");


    if (difficultyLevel == 1) { //check level of difficulty and apply to the for loop.
        numOfHiddenVals = 60;
    } else if (difficultyLevel == 2) {
        numOfHiddenVals = 40;
    } else {
        numOfHiddenVals = 21;
    }

    for (let i = 0; i < numOfHiddenVals; i++) { // loop the number of hidden vals (by difficulty lvl).
        let randomNum1 = Math.floor((Math.random() * 9));
        let randomNum2 = Math.floor((Math.random() * 9));


        if (isNaN(tableP3.rows[randomNum1].cells[randomNum2].innerHTML)) { //check if the val is alredy hidden.
            tableP3.rows[randomNum1].cells[randomNum2].innerHTML = mat[randomNum1][randomNum2];
        } else { // repeat iteration if the value is hidden.
            i--;
        }
    }

    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";


}

//  function that checkes the Sudoku 

function insertSudoku() {
    let numOfRows = document.querySelectorAll('tr').length;
    let arr1 = [];
    let mat = [];
    let newMat = [];
    // let oldMat;
    newMat = document.querySelectorAll('.sudokuInputs');
    // oldMat = document.getElementById('sudokuTable');
    for (let i = 0; i < numOfRows; i++) {
        for (let j = 0, k = 0; j < numOfRows; j++) {
            let temp = document.getElementById('sudokuTable').rows[i].cells[j].innerText;
            if (temp != "") {
                arr1.push(temp);
                temp = 0;
            } else {
                let temp2 = newMat[k].value;
                arr1.push(temp2);
                k++
            }
        }
        mat.push(arr1);
        arr1 = [];

    }
    // if (oldMat.charAt[j] == " ") {
    //     mat.push(newMat[k]);
    //     k++;
    //     j += 2
    // } else {
    //     mat.push(oldMat[j]);
    //     j++;
    // }

    setRows(mat);
    setColumns(mat);
    setSquares(mat);
}

function checkSudoku(mat) {
    let counterArr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let row = 0; row < mat.length; row++) {
        if (!(mat[row] >= 0 && mat[row] <= 9)) {
            return `error at ${mat[row]}`;
        }
        counterArr[mat[row]]++;
    }
    for (let i = 0; i < counterArr.length; i++) {
        if (counterArr[i] != 1) {
            return 'error';
        }
    }
    console.log('keep going');
    counterArr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];

}

//functions that asigns the Sudoku lines, rows and squares to arrayes


function setRows(mat) {
    for (let row = 0, col = 0; row < mat.length; row++) {
        rowSudokuArr.push(mat[row][col]);
        rowSudokuArr.push(mat[row][col + 1]);
        rowSudokuArr.push(mat[row][col + 2]);
        rowSudokuArr.push(mat[row][col + 3]);
        rowSudokuArr.push(mat[row][col + 4]);
        rowSudokuArr.push(mat[row][col + 5]);
        rowSudokuArr.push(mat[row][col + 6]);
        rowSudokuArr.push(mat[row][col + 7]);
        rowSudokuArr.push(mat[row][col + 8]);
        checkSudoku(rowSudokuArr);
        rowSudokuArr = [];
    }
}

function setColumns(mat) {
    for (let row = 0, col = 0; col < mat.length; col++) {
        columnSudokuArr.push(mat[row][col]);
        columnSudokuArr.push(mat[row + 1][col]);
        columnSudokuArr.push(mat[row + 2][col]);
        columnSudokuArr.push(mat[row + 3][col]);
        columnSudokuArr.push(mat[row + 4][col]);
        columnSudokuArr.push(mat[row + 5][col]);
        columnSudokuArr.push(mat[row + 6][col]);
        columnSudokuArr.push(mat[row + 7][col]);
        columnSudokuArr.push(mat[row + 8][col]);
        checkSudoku(columnSudokuArr);
        columnSudokuArr = [];
    }
}

function setSquares(mat) {
    for (let row = 0, col = 0; row < mat.length; row += 3) {
        squareSudokuArr.push(mat[row][col]);
        squareSudokuArr.push(mat[row][col + 1]);
        squareSudokuArr.push(mat[row][col + 2]);
        squareSudokuArr.push(mat[row + 1][col]);
        squareSudokuArr.push(mat[row + 1][col + 1]);
        squareSudokuArr.push(mat[row + 1][col + 2]);
        squareSudokuArr.push(mat[row + 2][col]);
        squareSudokuArr.push(mat[row + 2][col + 1]);
        squareSudokuArr.push(mat[row + 2][col + 2]);
        checkSudoku(squareSudokuArr);
        squareSudokuArr = [];
    }
    for (let row = 0, col = 3; row < mat.length; row += 3) {
        secondSquareSudokuArr.push(mat[row][col]);
        secondSquareSudokuArr.push(mat[row][col + 1]);
        secondSquareSudokuArr.push(mat[row][col + 2]);
        secondSquareSudokuArr.push(mat[row + 1][col]);
        secondSquareSudokuArr.push(mat[row + 1][col + 1]);
        secondSquareSudokuArr.push(mat[row + 1][col + 2]);
        secondSquareSudokuArr.push(mat[row + 2][col]);
        secondSquareSudokuArr.push(mat[row + 2][col + 1]);
        secondSquareSudokuArr.push(mat[row + 2][col + 2]);
        checkSudoku(secondSquareSudokuArr);
        secondSquareSudokuArr = [];
    }
    for (let row = 0, col = 6; row < mat.length; row += 3) {
        thirdSquareSudokuArr.push(mat[row][col]);
        thirdSquareSudokuArr.push(mat[row][col + 1]);
        thirdSquareSudokuArr.push(mat[row][col + 2]);
        thirdSquareSudokuArr.push(mat[row + 1][col]);
        thirdSquareSudokuArr.push(mat[row + 1][col + 1]);
        thirdSquareSudokuArr.push(mat[row + 1][col + 2]);
        thirdSquareSudokuArr.push(mat[row + 2][col]);
        thirdSquareSudokuArr.push(mat[row + 2][col + 1]);
        thirdSquareSudokuArr.push(mat[row + 2][col + 2]);
        checkSudoku(thirdSquareSudokuArr);
        thirdSquareSudokuArr = [];
    }
}








//  function that clean the sudoku table

function cleanSudokuTable() {
    var table = document.getElementById("sudokuTable");
    for (let row = 0; row < table.length; row++) {
        for (let col = 0; col < table[row].length; col++) {

            table.rows[row].cells[col].innerHTML = makeSudokuInput;

            //the number of <td>/rows, and <th>/cols elements in the table.
        }

    }

}


//------logOut function (on logout btn click returns to p1)-------


function logOut() {

    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    document.getElementById('usernameInput').value = ""; //delete the username input if logout pused
    document.getElementById('passwordInput').value = ""; // delete the username input if logout pused
    document.getElementById('userNameP').innerHTML = ""; //delete the username from the p in P3 header
    cleanSudokuTable(); //remove all values from the sudiku table.



}


//  function that inserts numbers to the Sudoku game chart

// function placeSudokuVals(mat) {
//     for (let row = 0; row < mat.length; row++) {
//         for (let col = 0; col < mat[row].length; col++) {
//             let table = document.getElementById("sudokuTable");

//             table.rows[row].cells[col].innerHTML = mat[row][col];
//             //the number of <td>/rows, and <th>/cols elements in the table.
//         }

//     }

// }








// function that adds the user input to the setup board

function addValuesToCheck(x) {
    document.getElementById('gameChart').value += x;
}