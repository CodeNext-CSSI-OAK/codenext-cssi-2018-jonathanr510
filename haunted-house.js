// Author: Jonathan Rodriguez
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Jonathan Rodriguez");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
var enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
console.log('You enter the house and see a wolf will you fight it?');
  }

  else {

   console.log('You ran away');
  }

    let fightWolf = readline.question("Will you fight the wolf? (yes or no) ");{
      if(fightWolf === 'y' || fightWolf === 'yes');
}

 let fall = readline.question('Will you fall into the pit (yes or no)');{
   if (fall === 'y' || fall === 'yes'); 
 }

console.log("Thanks for playing!");
