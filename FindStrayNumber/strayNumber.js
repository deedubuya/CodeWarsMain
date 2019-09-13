function stray(numbers) {
    let a = 0;
    for (let i = 0; i < numbers.length; i++) {
        a = numbers[i];
        var strayNumber = numbers.find(function (element) {
            if (element != a) {
                a = element;
                console.log(a);
            }
            //return element != a;
        });
        return strayNumber;
    }

}

stray([1, 1, 2]); //returns 2
stray([17, 17, 3, 17, 17, 17, 17]); //returns 3
stray([8, 1, 1, 1, 1, 1, 1, ]);