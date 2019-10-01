// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(word) {
    // Code here
    let arr = [];
    //let splitWord = word.split("");
    let letter = "";
    let newWord = "";
    let code = 0;
    // for (let c of word) {
    //     //console.log(c);
    //     newWord = newWord.concat(word[i].toUpperCase());
    //     // letter = c.toUpperCase();
    //     // if (c != word[i + 1]) {
    //     //     newWord = word.replace(word[i], letter);
    //     // } else {
    //     //     newWord = word.replace(word[i + 1], letter);
    //     // }
    //     // i++;
    //     i++;



    // }
    for (let i = 0; i < word.length; i++) {
        letter = "";
        code = word[i].charCodeAt(word[i]);
        letter = String.fromCharCode(code - 32);
        console.log(newWord.concat(letter, word));
        //newWord = word.replace(word[i], word[i].toUpperCase());
        console.log(letter);
    }
    console.log(arr);

}
wave("hello");
//result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
// Test.assertDeepEquals(wave("hello"), result, "Should return: '" + result + "'");

// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
// Test.assertDeepEquals(wave("codewars"), result, "Should return: '" + result + "'");

// result = [];
// Test.assertDeepEquals(wave(""), result, "Should return: '" + result + "'");

// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
// Test.assertDeepEquals(wave("two words"), result, "Should return: '" + result + "'");

// result = [" Gap ", " gAp ", " gaP "];
// Test.assertDeepEquals(wave(" gap "), result, "Should return: '" + result + "'");