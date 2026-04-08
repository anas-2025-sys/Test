// const segments = [
//     { start:-180, end: -152, color:'#F75D5D', min:0, max:18.5 },
//     { start: -142, end: -114, color: "#ED824F", min:8.5, max: 24.9 },
//     { start: -104, end: -76, color: "#FFD03E", min: 25, max: 29.9 },
//     { start: -66, end: -39, color: "#0581FB", min: 30, max: 34.9 },
//     { start: -29, end: -1, color: "#0581FB", min: 35, max: 100 },
// ]

const segments = [
    { start: -180, end: -152, color: '#F75D5D', min: 0, max: 18.5 },    // Underweight
    { start: -142, end: -114, color: "#ED824F", min: 18.5, max: 24.9 }, // Normal
    { start: -104, end: -76, color: "#FFD03E", min: 25, max: 29.9 },    // Overweight
    { start: -66, end: -39, color: "#0581FB", min: 30, max: 34.9 },     // Obesity
    { start: -29, end: -1, color: "#00DC90", min: 35, max: 100 },       // Extremely obese
];

// console.log("segments --> ", segments)

const value = 12.6
// const value = 22.6
// const value = 24.6
// const value = 25.6
// const value = 32.6
// const value = 40.6
// const value = 80.6
// const value = 99.9


// const findValueSeg = segments.find((seg) => value >= seg.min && value <= seg.max )
const findValueSeg = segments.find((seg) =>{
    const filteredVal = value >= seg.min && value <= seg.max
    console.log(`${value} >= ${seg.min} && ${value} <= ${seg.max} ---> `, filteredVal)
    return filteredVal
})


console.log("findValueSeg ---> ", findValueSeg)

const thumbColor = findValueSeg ? findValueSeg.color : '#F75D5D';