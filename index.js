// Code your solution in this file!
function calculateVertical(block1, block2) {
  return block1 > block2 ? (block1 - block2) * 264 : (block2 - block1) * 264;
}

function distanceFromHqInBlocks(block) {
  return block > 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return calculateVertical(block1, block2);
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
