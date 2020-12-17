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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney ", playerMoney);
                break;
            }
        }

        // Subtract the value of playerAttack from value of enemy Health
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);

        // Log a result message to the console to prove it worked
        console.log(playerName + " attacked " + enemyName + " for " + damage + " damage. " + enemyName + " now has " + enemyHealth + " health remaining");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break; //enemy is dead break out of loop
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of enemyAttack from the value of playerHealth
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        console.log(enemyName + " attacked " + playerName + " for " + damage + " damage. " + playerName + " now has " + playerHealth + " health remaining");

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
            // enemyHealth = Math.floor(Math.random()*21)+40;
            enemyHealth = randomNumber(40,60);
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length-1) {
                if (window.confirm("The fight is over, visit the store?")) {
                    shop();
                }
            }
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

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    shopOptionPrompt = shopOptionPrompt.toLocaleLowerCase();
    //switcharoo
    switch(shopOptionPrompt) {
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling palyer's health by 20 for 7 dollars.");

                //increase health take money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack take money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, function ends
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

//start the game when the page loads
startGame();