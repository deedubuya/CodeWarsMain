/*jshint esversion: 6*/

function isIsogram(str) {

    let letters = str.toLowerCase().split('');
    let result = true;
    letters.findIndex((letter, i) => {
        if (letters.lastIndexOf(letters[i]) > i) {
            result = false;
        }
    }, 0);

    console.log(result);

}

isIsogram('aba');
isIsogram("Dermatoglyphics"); // == true
isIsogram("aba"); // == false
isIsogram("moOse"); // == false // -- ignore case