// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.


const pairZeros = (arr) => {
    let finalArr = arr
    let index

    for (let i = 0; i < finalArr.length-1; i++) {
        if (finalArr[i] === 0) {
            index = finalArr.indexOf(0, i+1)
            if (index >= 0) {
                finalArr.splice(index, 1)
            }
        }
    }

    return finalArr
}


// console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]))
console.log(pairZeros([0, 0, 7, 0, 2, 9]))