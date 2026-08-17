/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -2147483648 && divisor === -1)
    {
        return dividend = 2147483647;
    }
    const negative = (dividend<0) !== (divisor<0);
    let n = Math.abs(dividend);
    let d = Math.abs(divisor);
    let result = 0;

    while (n>=d){
        let value = d;
        let count = 1;

        while(n>= value+value){
            value += value;
            count += count;
        }
        n -= value;
        result += count;
    }
    return negative? - result : result;
    
};