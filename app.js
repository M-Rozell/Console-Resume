let myName="Maggie Rozell"
const upper = myName.toUpperCase()
console.log("Name:", upper);
console.log('Career: Full Stack Developer / Graphic Designer');
console.log('Description: Former bar manager taking the plunge into Web Development');
console.log('My Interests:');
console.log('  * Painting');
console.log('  * Furniture Restoration');
console.log('  * Hiking');
console.log('  * Biking');
console.log('My Previous Experience:');
let gbName='Green Bus Brewing';
let gbTitle=' Taproom Manager';
let gbDescription=' Oversaw all operations.';
DisplayPosition(gbName,gbTitle,gbDescription);
let ccName='Cork and Crust';
let ccTitle=' MOD/Bar Manager';
let ccDescription=' Oversaw all bar and closing operations.';
DisplayPosition(ccName,ccTitle,ccDescription);
let ckName='Commerce Kitchen';
let ckTitle=' Bar Manager';
let ckDescription=' Oversaw all bar operations and cocktail program.';
DisplayPosition(ckName,ckTitle,ckDescription);



function DisplayPosition(companyName,jobTitle,description){
    console.log(" ", "* " + companyName + " -" + jobTitle + " -" + description);
};
