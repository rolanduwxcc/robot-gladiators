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

var fight = function (enemyName) {
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        //want to fight?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to quit
            var confirmSkip = window.confirm("Are you sure you'd like to skip this round?");

            //if yes leave the ring
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye.");
                //pay up penalty fee
                playerMoney = playerMoney - 10;
                console.log("playerMoney ", playerMoney);
                break;
            }
        }

        // Subtract the value of playerAttack from value of enemy Health
        enemyHealth = enemyHealth - playerAttack;

        // Log a result message to the console to prove it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break; //enemy is dead break out of loop
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of enemyAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;  //This kicks us out of the loop
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
};

var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in the battle! Game Over Man, Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    
    if (window.confirm("Would you like to play again?")) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Tell your mom I said hi.");
    }
};

//start the game when the page loads
startGame();