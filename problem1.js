// -------------Problem => 1---------------------
function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return 'Please Give a Positive number'
    } else {
        const singleTicketPrice = 120;
        const ticketPrice = singleTicketPrice * ticketSale;
        const watchManCost = 500;
        const EightStaffLunch = 8 * 50;
        const totalCost = watchManCost + EightStaffLunch;
        const totalAmount = ticketPrice - totalCost;
        return totalAmount;
    }
}



// -------------Problem => 2---------------------
function CheckName(name) {
    if (typeof name !== 'string' || !isNaN(parseFloat(name))) {
        return 'invalid'
    }
    else if (name.toLowerCase().substr(name.length - 1) === 'a' ||
        name.toLowerCase().substr(name.length - 1) === 'y' ||
        name.toLowerCase().substr(name.length - 1) === 'i' ||
        name.toLowerCase().substr(name.length - 1) === 'e' ||
        name.toLowerCase().substr(name.length - 1) === 'o' ||
        name.toLowerCase().substr(name.length - 1) === 'u' ||
        name.toLowerCase().substr(name.length - 1) === 'w') {
        return 'Good Name';
    }
    else {
        return 'Bad Name';
    }
}



// -------------Problem => 3---------------------
function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return 'please provide an array';
    }
    else {
        let returnArr = [];
        for (const item of array) {
            if (Number.isNaN(item)) {
                continue;
            }
            else if (typeof item === 'number') {
                returnArr.push(item);
            }
        }
        return returnArr;
    }
}



// -------------Problem => 4---------------------
function password(obj) {
    if (obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== 'number') {
        return 'invalid';
    }
    else if (!('siteName' in obj) || !('name' in obj)) {
        return 'invalid'
    }
    else {
        let siteName = obj.siteName;
        const capitalName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const userName = obj.name;
        const birthYear = obj.birthYear;
        const finalString = `${capitalName}#${userName}@${birthYear}`;
        return finalString;
    }
}




// -------------Problem => 5---------------------
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) !== true || typeof livingCost !== 'number') {
        return 'invalid input'
    }
    let sum = 0;
    for (let amount of arr) {
        if (amount >= 3000) {
            let taxAmount = (amount * 20) / 100;
            let withoutTaxAmount = amount - taxAmount;
            sum += withoutTaxAmount;
        }
        else {
            sum += amount;
        }
    }
    const totalAmount = sum - livingCost;
    if (totalAmount <= 0) {
        return 'earn more'
    }
    return totalAmount;
}

