// 1. Reverse a string

// Input: "hello"
// Output: "olleh"


const valuableName = "hello"
const t = Array.from(valuableName)

console.log("t ---> ", t.reverse().toString());

console.log("valuableName V2 ---> ", valuableName.split("").reverse().join(""));
console.log("valuableName V1 ---> ", t.reverse().join(""));
console.log("valuableName array ---> ", t.reverse().join(",").replaceAll(",", ""));


let s = "hello"
let rev = ""

for(i = s.length - 1; i >= 0; i--){
    rev += s[i]
}

console.log("using loop --> ", rev);


// 1 ste
//  i = s.length - 1 (4) || 4 >= 0 (true) || i--(3)
// rev += s[i] || s[4] = 0 , rev = "0"

// 2 ste
//  i = s.length - 1 (3) || 3 >= 0 (true) || i--(2)
// rev += s[i] || s[3] = l , rev = "0l"

// 3 ste
//  i = s.length - 1 (2) || 2 >= 0 (true) || i--(1)
// rev += s[i] || s[2] = l , rev = "oll"

// 4 ste
//  i = s.length - 1 (1) || 1 >= 0 (true) || i--(0)
// rev += s[i] || s[1] = e , rev = "olle"

// 5 ste
//  i = s.length - 1 (0) || 0 >= 0 (true) || i--(-1)
// rev += s[i] || s[0] = h , rev = "olleh"

// 6 ste
//  i = s.length - 1 (-1) || -1 >= 0 (false) || i--(-1)
// rev += s[i] || s[0] = h , rev = "olleh"