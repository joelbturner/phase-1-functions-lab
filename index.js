function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
        return someValue - 42;
    }
    else 
    return 42 - someValue;
}

function distanceFromHqInFeet(someValue){
   
   return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination) *264;
    }
    else {
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination){
    const money = distanceTravelledInFeet(start, destination);
    if (money > 2500){
        return 'cannot travel that far'
    }
    else if (money <= 2499 && money >= 2000) {
        return 25;
    }
    else if(money > 400 && money <= 2000) {
        return ((money - 400) * 0.02)
    }
    else if(money <= 400){
        return 0
    }
}

// 2 cents per foot
// 264 feet
