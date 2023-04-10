// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers =
    function(drivers) {
        return drivers.slice(0, 2);
    }

// 0 is inclusive, 2 is exclusive
//  For slice, first value is inclusive, second is exclusive

// first test done

// returnLastTwoDrivers
const returnLastTwoDrivers =
    function(drivers) {
        return drivers.slice(2, 4);
    }

// 2 down, 11 to go

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//selectingDrivers works now



function createFareMultiplier(multiplier) {
    
   return function fareMultiplier(fare) {return fare*multiplier}
  
   //  return fare*multiplier will not pass test      
}

// createFareMultiplier and fareMultiplier both need return to work

const fareDoubler = createFareMultiplier(2); 

const fare = 10;

fareDoubler(fare);


// the const fareDoubler variable holds the action we want to do
// we need to give fare a value, ex. 10, for the test to pass

const fareTripler = createFareMultiplier(3);

fareTripler(10);

// just 2 more to pass
 


function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {

 return selectingDrivers(arrayOfDrivers);

// wants arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
// arrayOfDrivers also = drivers
// wants returnFirstTwoDrivers || returnLastTwoDrivers
    
}

//selectDifferentDrivers(drivers, returnFirstTwoDrivers);

//iInvokeThings(function () { return 4 + 5; });
