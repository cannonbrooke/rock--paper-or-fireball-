



var userChoice = prompt("Do you choose rock, paper or fireball?");
while (userChoice !=="rock" && userChoice !=="paper" && userChoice !=="fireball"){
 confirm(userChoice + " isn't rock, paper or fireball. How about you try again?");
 userChoice = prompt("Do you choose rock, paper or fireball?");
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
    else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    }
    else {
    computerChoice = "fireball";
    }
console.log("You Chose:  "+userChoice);
console.log("The Computer Chose:  "+computerChoice);
var compare = function (choice1,choice2){
    if (choice1 === choice2){
        return "The result is a tie!";
    }

if (choice1 === "rock"){
     if  (choice2 === "paper"){
        return "Paper wins";
    }
     if (choice2 === "fireball") {
        return "Rock wins";
    }
}
if (choice1 === "paper"){
     if (choice2 === "fireball"){
        return "fireball wins! (duh it's a fireball)";
    }
     if (choice2 === "rock"){
        return "Paper wins!";
        }
}
if (choice1 === "fireball"){
     if (choice2 === "rock"){
        return "Rock wins!";
    }
     if (choice2 === "paper"){
    return "fireball wins!";
    }
}
};
compare(userChoice,computerChoice);
