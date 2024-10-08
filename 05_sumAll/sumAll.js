const sumAll = function(num1, num2) {
    if (typeof num1!='number' || typeof num2!='number') {
        return "ERROR";
    }
    let round1=Math.floor(num1);
    let round2=Math.floor(num2);
    if (num1%round1!=0 || num2%round2!=0) {
        return "ERROR";
    }
    if (num1<0 || num2<0) {
        return "ERROR";
    }
    let min;
    let max;
    if (num1>num2) {
        max=num1;
        min=num2;
    }
    else {
        max=num2;
        min=num1;
    }
    let sum=0;
    for (let i=min;i<=max;i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
