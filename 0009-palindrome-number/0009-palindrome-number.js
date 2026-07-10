/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10);
    }

    // Return true if original equals reversed, otherwise false
    return original === reversed;
};