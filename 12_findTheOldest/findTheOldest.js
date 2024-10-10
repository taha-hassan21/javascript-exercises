const findTheOldest = function(array) {
    const ordered=array.sort((a,b)=>{
        const lastPerson=(a.yearOfDeath || new Date().getFullYear())-a.yearOfBirth;
        const nextPerson=(b.yearOfDeath || new Date().getFullYear())-b.yearOfBirth;
        return lastPerson>nextPerson?-1:1;
    })

    return ordered[0];
};


// Do not edit below this line
module.exports = findTheOldest;
