function accum(s) {
    // your code
    var newS = s.split('');
    var a = "";
    var b = "";
    console.log(newS);
    for (var i = 0; i < newS.length; i++) {
        a = newS[i].charAt(0).toUpperCase() + newS[i].charAt(0).toLowerCase().repeat(i) + '-';
        b = b + a;
    }
    b = b.slice(0, b.length - 1);
    console.log(b);

}
accum("abcd");
accum("RqaEzty");
accum("cwAt");
accum("HbideVbxncC");


/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */