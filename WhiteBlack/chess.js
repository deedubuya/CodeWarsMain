/*Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard

Examples
"a", 8  ==>  "white"
"b", 2  ==>  "black"
"f", 5  ==>  "white" */

function mineColor(line, number) {
    let xIsOdd = false;
    // insert code
    if ((line == 'a') || (line == 'c') || (line == 'e') || (line == 'g')) {
        xIsOdd = true;
    } else {
        xIsOdd = false;
    }

    if (xIsOdd == true && number % 2 == 0) {
        console.log("white");
    } else if (xIsOdd == false && number % 2 == 0) {
        console.log("black");
    } else if (xIsOdd == true && number % 2 > 0) {
        console.log("black");
    } else if (xIsOdd == false && number % 2 > 0) {
        console.log("white");
    }
    //console.log(arr);
}

mineColor("a", 8); // "white";
mineColor("b", 2); // "black";
mineColor("f", 5); // "black";