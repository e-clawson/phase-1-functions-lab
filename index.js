function distanceFromHqInBlocks(number) {
    if (number <= 42) {
        return (42 - number); 
    }
    else if (number > 42) {
        return (number - 42);
    }
}
distanceFromHqInBlocks(43); 

function distanceFromHqInFeet(number) {
    return (distanceFromHqInBlocks(number) * 264);
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264; 
    }
    else if (start < destination) {
        return (destination - start) * 264; 
    }
}
distanceTravelledInFeet(43,48);

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (400 <= distanceTravelledInFeet(start, destination) && 2000 >= distanceTravelledInFeet(start, destination)) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    }
    else if (2000 <= distanceTravelledInFeet(start, destination) && 2500 >= distanceTravelledInFeet(start, destination)) {
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(43,44);
calculatesFarePrice(34,24);