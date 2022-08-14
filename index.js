// Code your solution in this file!

// returnFirstTwoDrivers() Function
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

// returnLastTwoDrivers() Function
const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() Function
function createFareMultiplier(number) {
    // return function(fare) {
    //     return fare * number;
    // }; OR
    return fare => fare * number;
};

// fareDoubler() Function
//pass 2 as the value to number parameter coz we're doubling fare
const fareMultiplier = createFareMultiplier(2); 
function fareDoubler(fare) {
    return fareMultiplier(fare);
};

// fareTripler() Function
// pass 3 as the argument to createFareMultiplier function
const multiplyFare = createFareMultiplier(3);
function fareTripler(fare) {
    return multiplyFare(fare);
};

// selectDifferentDrivers() Function
const selectDifferentDrivers = (drivers, returnDrivers) => {
    return returnDrivers(drivers);
};