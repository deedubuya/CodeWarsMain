/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
    //return text;
    text = text.toUpperCase();
    let pat = /[A-Z]/;
    let newStr = "";
    let i = 0;
    let num = 0;
    for (let c of text) {
        //console.log(text.charCodeAt(i));
        num = text.charCodeAt(i);
        if (num - 64 > 0 && num - 64 <= 26) {
            newStr += (num - 64) + " ";
        }

        i++;
    }
    console.log(newStr.trim());
}

alphabetPosition("The sunset sets at twelve o' clock."); //Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)