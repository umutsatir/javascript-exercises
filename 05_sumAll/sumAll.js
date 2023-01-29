const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") return "ERROR";
    if (a > b){
        let swap;
        swap = a;
        a = b;
        b = swap;
    }
    for (a; a <= b; a++){
        sum += a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
