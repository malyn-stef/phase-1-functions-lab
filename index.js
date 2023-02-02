const hqLocation = 42;
function distanceFromHqInBlocks(pickup) {
  let distanceAway;
  if (pickup > hqLocation) {
    distanceAway = pickup - hqLocation;
  } else if (pickup < hqLocation) {
    distanceAway = hqLocation - pickup;
  } else if (pickup === hqLocation) {
    distanceAway = 0;
  } else {
    return "Not a valid location."
  }
  return distanceAway;
}

function distanceFromHqInFeet(distance) {
  let feet;
  const blocks = distanceFromHqInBlocks(distance)
  if (blocks === 0) {
    feet = 0;
  } else if (blocks > 0) {
    feet = blocks * 264;
  }
  return feet;
}

function distanceTravelledInFeet(start, stop) {
  let distanceTravelled;
  if (start > stop) {
    distanceTravelled = (start - stop) * 264;
  } else if (start < stop) {
    distanceTravelled = (stop - start) * 264;
  } else if (start === stop) {
    distanceTravelled = 0;
  }
  return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  let farePrice;
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    farePrice = 0;
  } else if (distance > 400 && distance <= 2000) {
    farePrice = (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    farePrice = 25;
  } else if (distance >= 2500) {
    farePrice = "cannot travel that far";
  }
  return farePrice;
}