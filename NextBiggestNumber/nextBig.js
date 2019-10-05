// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    //your code here
    let num = n.toString().split("");
    let counterN = n + 100;
    let counter = n;
    for (counter; counter < counterN; counter++) {
        console.log(counter);
    }
    console.log(counter);
}

// nextBigger(12); //21)
// nextBigger(513); //531)
nextBigger(2017); //2071
// nextBigger(414); //441
// nextBigger(144); //414