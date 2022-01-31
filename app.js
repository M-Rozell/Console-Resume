let myName = "Maggie Rozell"
//console.log("Name:" + myName.toUpperCase())
const upper = myName.toUpperCase()
console.log("Name:", upper);
console.log('Career: Full Stack Developer / Graphic Designer');
console.log('Description: Former bar manager taking the plunge into Web Development');
console.log(" ");
console.log('My Interests:');
const interests = ['Painting', 'Hiking', 'Biking', 'Furniture Restoration'];
for (let i = 0; i < interests.length; i++) {
    console.log(' *' + interests[i]);
}
console.log(" ");
//console.log('  * Painting');
//console.log('  * Furniture Restoration');
//console.log('  * Hiking');
//console.log('  * Biking');
console.log('My Previous Experience:');
//make previous work experience and array of objects.
//use a for loop
DisplayPosition('Green Bus Brewing', ' Taproom Manager', ' Oversaw all operations.');
DisplayPosition('Cork and Crust', ' MOD/Bar Manager', ' Oversaw all bar and closing operations.');
DisplayPosition('Commerce Kitchen', ' Bar Manager', ' Oversaw all bar operations and cocktail program.');
console.log(' ');
console.log('My Skillz:');
displaySkill(' Small Engine Repair', true);
displaySkill(' HTML');
displaySkill(' CSS');
displaySkill(' Plumbing', true);
displaySkill(' Photoshop');
displaySkill(' Oil Painting', true);




function DisplayPosition(companyName, jobTitle, description) {
    console.log(" ", "* " + companyName + " -" + jobTitle + " -" + description);
};


function displaySkill(skillName, cool) {

    if (cool) {
        console.log(" *", "BAM:" + skillName);
    }
    else {
        console.log(" *" + skillName);
    }
};




