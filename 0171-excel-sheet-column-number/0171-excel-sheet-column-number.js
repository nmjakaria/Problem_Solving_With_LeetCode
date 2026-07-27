/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    for ( let char of columnTitle)
    {
        res = res*26 + char.charCodeAt(0) - 64;
    }
    return res;
};