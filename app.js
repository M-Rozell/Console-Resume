let myName = "Maggie Rozell"
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

DisplayPosition('Green Bus Brewing', ' Taproom Manager', ' Oversaw all operations.');
DisplayPosition('Cork and Crust', ' MOD/Bar Manager', ' Oversaw all bar and closing operations.');
DisplayPosition('Commerce Kitchen',' Bar Manager', ' Oversaw all bar operations and cocktail program.');

console.log('My Skillz:');
displaySkill(' Small Engine Repair',true);
displaySkill(' HTML');
displaySkill(' CSS');
displaySkill(' Plumbing',true);
displaySkill(' Photoshop');
displaySkill(' Oil Painting',true);




function DisplayPosition(companyName, jobTitle, description) {
    console.log(" ", "* " + companyName + " -" + jobTitle + " -" + description);
};


function displaySkill(skillName, cool) {
   
    if(cool){
        console.log(" *", "BAM:" + skillName);
    }
    else {
        console.log(" *" + skillName);
    }
};




