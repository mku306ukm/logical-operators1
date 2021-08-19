console.log('hi');

const hasDriversLicense = true;//A
const hasGoodVision = true; //B
 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 if (hasDriversLicense && hasGoodVision) {
     console.log('Umesh is able to drive');

 }else {
     console.log('Someone else should drive....');
}

const isTired = false //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision&& !isTired){
    console.log('Umesh is able to drive');
}else {
    console.log('Someone else should drive....');
}