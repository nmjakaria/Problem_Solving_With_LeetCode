/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let max1 = -1;
    let max2 = -1;
    while (n) {
        let last = n % 10;
        if (last > max1) {
            max2 = max1
            max1 = last;
        } else if (last > max2) {
            max2 = last;
        }
        n = Math.floor(n / 10);
    }
    return max1 * max2;
};