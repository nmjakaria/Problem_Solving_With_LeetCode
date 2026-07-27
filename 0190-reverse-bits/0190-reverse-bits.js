/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let res = 0;
    for(let i = 0; i<32; i++){
        let bit = n & 1;
        res |= bit << (31-i);
        n >>>= 1;
    }
    return res >>> 0;
};