/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.*/
function order(words) {
    var tempWord = '';
    var splitWord = words.split(' ');

    for(var i = 0; i < splitWord.length; i++) {

        tempWord = tempWord + splitWord.filter(word => word.includes(i+1)) + " ";
    }
    tempWord = tempWord.trimEnd();
    console.log(tempWord);
}

order("is2 Thi1s T4est 3a");