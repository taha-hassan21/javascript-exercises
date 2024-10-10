const fibonacci = function(num) {
    // if (+num<0) {
    //     return 'OOPS';
    // }
    +num<0?'OOPS':1;
    let first=0;
    let second=1;
    let ans;
    for (let i=0;i<+num;i++) {
        ans=first+second;
        first=second;
        second=ans;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
