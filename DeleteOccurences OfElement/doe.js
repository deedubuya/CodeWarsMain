/*jshint esversion: 6 */
function deleteNth(arr, n) {
    var a = 0;
    var num = 0;
    var tempArray = [];
    for(let i = 0; i < arr.length; i++) {
        a = arr[i];
        if(tempArray.includes(a)) {
            for(let j = 0; j < tempArray.length; j++) {
                if(tempArray[j] == a) {
                    num++;
                }
            }
        }
        if(num < n) {
            tempArray.push(a);
        }
        num = 0;
    }
    return tempArray;
}

//deleteNth([20,37,20,37,20,37,20],1);
deleteNth([20,37,20,21],1); //should return [20,37,21]
deleteNth([1,1,1,1],2); // return [1,1]
deleteNth([1,1,3,3,7,2,2,2,2], 3); //return [1,1,3,3,7,2,2,2]
deleteNth([20,37,20,21], 1); //return [20,37,21]