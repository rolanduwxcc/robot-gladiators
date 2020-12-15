// // window refers to the browser, it is always present when run in browser
// //window.alert("This is an alert! javaScript is running!");


// //this creates a fight function
// function fight() {
//     window.alert("The fight has begun!");
// }

// var playerName = window.prompt("What is your robot's name?");
// //window.alert(playerName);
// //what is this?
// console.log(playerName);
// console.log("this logs a string, good for leaving yourself a message");
// //this will do math and log 17
// console.log(10+7);
// // what is this?
// console.log("Our robot's name is " + playerName)

// //fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerName, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //want to fight?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP to choose.");
    
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of playerAttack from value of enemy Health
        enemyHealth = enemyHealth - playerAttack;

        // Log a result message to the console to prove it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of enemyAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    } 
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
    


};

fight();