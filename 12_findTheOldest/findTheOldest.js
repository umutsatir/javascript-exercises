const findTheOldest = function(list) {
    let ages = list.sort((last, next) => {
        if (!last.yearOfDeath) {
            return (new Date().getFullYear() - last.yearOfBirth > next.yearOfDeath - next.yearOfBirth) ? -1 : 1;
        } 
        else if (!next.yearOfDeath) {
            return (last.yearOfDeath - last.yearOfBirth > new Date().getFullYear() - next.yearOfBirth) ? -1 : 1;
        }
        else {
            return (last.yearOfDeath - last.yearOfBirth > next.yearOfDeath - next.yearOfBirth) ? -1 : 1;
        }
    }, []);
    return ages[0];
}

// Do not edit below this line
module.exports = findTheOldest;