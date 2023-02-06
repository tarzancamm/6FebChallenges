const findAverage = (arr) => {
    return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length
}

console.log(findAverage([1, 2, 3, 4]))