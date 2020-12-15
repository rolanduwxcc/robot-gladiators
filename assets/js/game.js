//Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerName, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Fet"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0) {
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

            //confirm player wants to quit
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes leave the ring
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye.");
                //pay up penalty fee
                playerMoney = playerMoney - 2;
            } 
            // if no, ask fight question again
            else {
                fight();
            }

            //if no call fight function
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }  
    }
};

for (var i=0; i < enemyNames.length; i++) {
    var pickedEnemyName=enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
//fight();