function outerFunction(){
    const sec = Math.trunc(Math.random() * 100)
    // console.log("log form the outer function");
    return function innerFunction(){
        console.log(`from the inner function the value of sec is ${sec} `);
    }
}

const accessTheInnerValue = outerFunction()
accessTheInnerValue();