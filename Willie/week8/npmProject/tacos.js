console.log('\nHow spicy would you like your tacos?');
var readlineSync = require('readline-sync'),
    heat = ['spicy', 'very spicy', 'so spicy, you wont be able to feel your face'],
    index = readlineSync.keyInSelect(heat, '');
console.log('\nOk, so you want your tacos to be ' + heat[index]);
    if(readlineSync.keyInYN('\nAre you sure about this? ')){
        console.log('\nOk, we will have your order right out.');
    }
    else{
        console.log('\nWhat\'s the matter? Can\'t handle the heat?');
    }