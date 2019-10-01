/*Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

*[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]* */


function tribonacci(signature, n) {
    //your code here
    let newArr = [];
    let total = 0;
    if (n >= 0 && n <= 3) {
        for (let i = 0; i < n; i++) {
            newArr.push(signature[i]);
        }
        //console.log(newArr);
    } else {
        newArr = [...signature];
        while (n >= 4) {

            for (let i = newArr.length - 3; i <= newArr.length - 1; i++) {
                total += newArr[i];
            }
            n--;
            newArr.push(total);
            total = 0;
        }
        //console.log(newArr);
    }

    console.log(newArr);
}

tribonacci([1, 1, 1], 10); //[1,1,1,3,5,9,17,31,57,105])
tribonacci([0, 0, 1], 10); //[0,0,1,1,2,4,7,13,24,44])
tribonacci([1, 1, 1], 1); //[1])
tribonacci([0.5, 0.5, 0.5], 30); //[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
tribonacci([300, 200, 100], 0); //[])