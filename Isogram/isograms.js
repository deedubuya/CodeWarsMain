/*jshint esversion: 6*/

function isIsogram(str) {
    var letters = str.split('');
    var a = '';
    var letterArray = [];
    
    letters.forEach(letter => {
        //console.log(letter);
        a = letter;
        if(letterArray.includes(a)) {
            console.log('A = letterArray[i]');
        }
        letterArray.push(a);
        //var pat = new RegExp(letter);
        //var patMatch = str.match(/[pat]/gi);
        // if(str.match(pat)) {
        //     console.log('Found a match');
        // }
        console.log(letter);
        //console.log(pat);
    });

    // for(var i = 0; i < str.length; i++) {
    //     letters[i] = letters[i].toLowerCase();
    //     a = letters[i];
        
    //     if(!letterArray.includes(a)) {
    //         console.log('Non-Duplicate');
    //     } else {
    //         console.log('Duplicate');
    //     }
    //     letterArray.push(a);
    //     console.log(a);
    // }
}

isIsogram('aba');