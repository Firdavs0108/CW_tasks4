

function divisibleBy(numbers, divisor) {
   let key =  numbers.filter(n => n % divisor === 0)
   console.log(key);
    }
    divisibleBy([2,3,4,5,6],2)
    // console.log( divisibleBy([2,3,4,5,6],2) );