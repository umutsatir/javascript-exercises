const reverseString = function(word) {
    if (word == "") return word;
    return Array.from(word).reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
