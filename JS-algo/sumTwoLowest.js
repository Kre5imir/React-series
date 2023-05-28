const numbers = [40, 100, 1, 5, 25, 10];

function sumTwo(numbers){
    let total = 0
    numbers.sort(function(a, b){return a - b});
    for (i in numbers) {
        total = numbers[0] + numbers[1]
    }
    return total
}

console.log(sumTwo(numbers))