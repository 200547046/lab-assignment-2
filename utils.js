// function 01
function printMessage(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName} to Code! :)`);
}

// function 02
function milesToKm(miles) {
    return miles * 1.60934;
}

// function 03
function squareNumber(number) {
    return number * number;
}

// function 04
function volumeOfSphere(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
}

module.exports = {
    printMessage,
    milesToKm,
    squareNumber,
    volumeOfSphere
};
