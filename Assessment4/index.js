//Longest Common prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    for(let i = 0; i< strs[0].length; i++){
        for(let j=1;j< strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return strs[0].slice(0,i);
            }
        }
    }
    return strs[0];
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dark", "dress", "disco"])); 

//Rotate Matrix by 90 degree
function rotate(matrix) {
    const n = matrix.length;
    
    //Transpose of a matrix
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix);
console.log(matrix); 

//Create a diamond patter
function printDiamond(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
    }
    for (let i = n - 2; i >= 0; i--) {
        result += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
    }
    console.log(result);
}
printDiamond(5);