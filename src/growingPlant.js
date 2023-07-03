function growingPlant(upSpeed, downSpeed,desiredHeight) {
  if(
    typeof upSpeed != 'number' || 
    typeof downSpeed != 'number' ||  
    typeof desiredHeight != 'number' ||
    upSpeed < 1 ||
    downSpeed < 1 ||
    desiredHeight < 1
    ){
      throw new Error('not valid input');
    }

    let days = 1;
    let realPlantHeight = 0;
    while (realPlantHeight < desiredHeight){
      realPlantHeight += upSpeed;
      if(realPlantHeight < desiredHeight){
        realPlantHeight -= downSpeed;
        days++;
      }
      continue;
    }

    return days;
}

module.exports = growingPlant;
