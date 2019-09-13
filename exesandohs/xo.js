/*jshint esversion:6 */

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */

function XO(str) {
    // var word = str.split('');
    // var o = str.search(/o/);
    // var oCounter = 0;
    // var xCounter = 0;

    // word.forEach(letter => {
    //     if(letter.toLowerCase() == 'o') {
    //         oCounter++;
    //     } else if(letter.toLowerCase() == 'x') {
    //         xCounter++;
    //     }
    // });
    // if(xCounter == oCounter || (xCounter == 0 && oCounter == 0)) {
    //     console.log('Is true');
    //     return true;
    // } else {
    //     console.log('Is false');
    //     return false;
    // }

      let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

XO('ooxXm');