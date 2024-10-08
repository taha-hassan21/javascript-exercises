const palindromes = function (string) {
    const all= 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString=string
        .toLowerCase()
        .split('')
        .filter((character) => all.includes(character))
        .join('');
    
    const rev=cleanedString.split('').reverse().join('');

    return cleanedString===rev;
};

// Do not edit below this line
module.exports = palindromes;
