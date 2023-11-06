// Question 1
// ----------------------
function cubeNumber(num) {
    if (typeof num === 'number') {
        return num * num * num;
    } else {
        return 'please type a number';
    }
}
const result = cubeNumber(4);
console.log(result);

// question 2
// -------------------------
function matchFinder(string1, string2) {
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}
const result2 = matchFinder('peter', 'pen');
console.log(result2);

// question 3
// --------------------------
function sortMaker(arr) {
    if (arr.lenght == 2) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] < 0) {
                return 'invalid input';
            } else {
                for (let i = 0; i < arr.length - index-1; i++) {
                    if (arr[i] < arr[i + 1]) {
                        const temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                    }
                    if (arr[i] === arr[i + 1]) {
                        return 'equal';
                    }
                    
                }
            }
        }
        return arr;
    } else {
        return 'must be two elements';
    }
}
const result3 = sortMaker([2, 3]);
console.log(result3);

// question 4
// -------------------------
function findAddress(obj) {
    
}
const result4 = findAddress();
console.log(result4);

// question 5
// ------------------------------
function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return 'tui fokir';
    } else {
        let sum = 0;
        for (let index = 0; index < changeArray.length; index++) {
            sum = sum + changeArray[index];
        }
        if (sum >= totalDue) {
            return true;
        } else {
            return false;
        }
    }
}
const result5 = canPay([1,2,5],10);
console.log(result5);