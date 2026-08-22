/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "") return [];

    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };


    const ans = [];

    function solve(index, temp){
        if(index === digits.length){
            ans.push(temp);
            return;
        }

        const num = digits[index];

        for(let ch of map[num]){
            solve(index + 1, temp + ch);
        }
    }
    solve(0, "");
    return ans;
};