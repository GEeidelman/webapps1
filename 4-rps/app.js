var beats = {
    "rock":"scissors",
    "paper": "rock",
    "scissors": "paper"
}

var score = {
    wins: 0,
    losses: 0, 
    ties: 0
}

// var message = `rock beats ${beats["rock""]}`;

// Get computer random choice

    function getComputerChoice() {
    var choices = Object.keys(beats);
    var choice = 
    choice = choices[Math.floor(Math.random()* 3)];
    console.log(choice);
    return choice;
}

// Determine winner

// Output who won/modify scoreboard

function playerChoice(c) {
    var computerChoice = getComputerChoice();
    if (beats[c] == computerChoice) {
       score.wins += 1;

    } else if (beats[computerChoice] == c) {
        score.losses += 1
    } else {
        score.ties += 1
    }
    updateScoreboard()
}


function updateScoreboard() {
    var winsP = document.querySelector("#wins");
    var lossesP = document.querySelector("#losses");
    var tiesP = document.querySelector("#ties");
    winsP.innerHTML = "Wins: " + score.wins;
    lossesP.innerHTML = "Losses: " + score.losses;
    tiesP.innerHTML = "Ties: " + score.ties;
}
