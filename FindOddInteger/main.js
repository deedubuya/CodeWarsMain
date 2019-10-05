/*Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times */

function findOdd(A) {
    //happy coding

    // let returnedNum = 0;
    // let counter = 0;

    // A.sort();
    // A.forEach(numA => {
    //     A.forEach(numB => {
    //         if (numA == numB) {
    //             counter++;
    //         }
    //     });
    //     if (counter % 2 != 0) {
    //         returnedNum = numA;
    //     }
    //     counter = 0;
    // });
    // console.log(returnedNum);
    //return A.findIndex(20);
    console.log(A.find((item, index) => A.filter(el => el == item).length % 2)); //Not my solution
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); //5
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); //-1
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); //5
findOdd([10]); //10
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); //10
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); //1