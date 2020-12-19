//--------------------------------------FUNCTIONS
var fightOrSkip = function () {
    var promptFight = (window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP to choose.")).toLocaleLowerCase();
    
    if (!promptFight || (!(promptFight === "fight") && !(promptFight === "skip"))) {
        window.alert("you need to provide a valid answer! Try harder.");
        return fightOrSkip();
    }

    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to quit
        var confirmSkip = window.confirm("Are you sure you'd like to skip this round?");

        //if yes leave the ring
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye.");
            //pay up penalty fee
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money ", playerInfo.money);
            return true;
        }
    }
    return false;
};

//Main fight function, takes an enemy object as input
var fight = function (enemy) { 
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
        console.log(enemy.name + " goes first!");
    } else {
        console.log(playerInfo.name + " goes first!");
    }

    // console.log(enemy);
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            //want to fight?
            if (fightOrSkip()) {
                break;
            }
            // PLAYER ATTACKING ENEMY ROBOT
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage. " + enemy.name + " now has " + enemy.health + " health remaining");
            // Damage calculation
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break; //enemy is dead break out of loop
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        } 
        else {
            // ENEMY ROBOT ATTACKING PLAYER
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage. " + playerInfo.name + " now has " + playerInfo.health + " health remaining");
            //damage calculation
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;  //This kicks us out of the loop
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
};

var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            // enemy.health = Math.floor(Math.random()*21)+40;
            pickedEnemyObj.health = randomNumber(40,60);
            //You can also log multiple values at once like this
            console.log("Name: ",playerInfo.name,", Money: ", playerInfo.money,", Health: ",playerInfo.health);
            console.log("VERSUS");
            console.log("Name: ",enemyInfo[i].name,", Health: ",enemyInfo[i].health);
            //READY TO FIGHT
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length-1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to (1) REFILL your health, (2) UPGRADE your attack, or (3) LEAVE the store? Please enter a number : 1, 2 or 3 to make a choice.");
    if (shopOptionPrompt === null) {
        shopOptionPrompt = "x";
    }
    shopOptionPrompt = shopOptionPrompt.toLocaleLowerCase();
    //switcharoo
    switch(shopOptionPrompt) {
        case "1":
            playerInfo.refillHealth();
            break;
        case "2":
            playerInfo.upgradeAttack();
            break;
        case "3":
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
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null || name === "null" || name === " ") {
        name = window.prompt("What is your robot's name? ");
    }

    console.log("Your robot's name is " + name);
    return name;
};







//----------------------------------------OBJECTS
var playerInfo = {
    // name: window.prompt("What is your robot's name?"),
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling palyer's health by 20 for 7 dollars.");
           this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You dont have enough money!!!!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 or 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
    }
};

var enemyInfo = [
    { 
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Droid",
        attack: randomNumber(10,14)
    },
    { 
        name: "Robo Fett",
        attack: randomNumber(10,14)
    }
];





//start the game when the page loads
startGame();