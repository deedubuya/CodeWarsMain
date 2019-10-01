function stray(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) == numbers.lastIndexOf(numbers[i])) {
            result = numbers[i];
        }
    }
    console.log(result);


}

// stray([1, 1, 2]); //returns 2
// stray([17, 17, 3, 17, 17, 17, 17]); //returns 3
// stray([8, 1, 1, 1, 1, 1, 1, 1]);
stray([1, 1, 1, 1, 1, 1, 0]);
stray([0, 0, 0, 7, 0, 0, 0]);
stray([-21, -21, -21, -21, -6, -21, -21]);