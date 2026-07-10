/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const valueMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let res = 0;
    const num = s.length;
    
    for (let i = 0; i < num; i++) {
        let s1 = valueMap[s[i]];
        
        if (i + 1 < num) {
            let s2 = valueMap[s[i + 1]];
            
            if (s1 >= s2) {
                res += s1;
            } 
            else {
                res += (s2 - s1);
                i++; 
            }
        } else {
            res += s1;
        }
    }
    
    return res;
};