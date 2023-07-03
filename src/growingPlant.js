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
    return 1;
}

module.exports = growingPlant;
