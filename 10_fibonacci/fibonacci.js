const fibonacci = function(a) {
    a = parseInt(a);
    if (a <= 0) return "OOPS";
    if (a == 2 || a == 1) return 1;
    let list = [1, 1];
    for (let i = 0; i < a - 2; i++){
        list[i + 2] = list[i] + list[i + 1];
    }
    return list[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
