/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    for(let i = n; ; i++){
        let product = 1;
        let num = i;

        while(num>0){
            product *= num % 10;
            num = Math.floor(num / 10);
        }
        if (product % t === 0) return i;
    }
};