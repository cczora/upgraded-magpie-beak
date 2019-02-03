function luckySevens() {
	//Make a variable for the starting input
	startingBet = Number(document.getElementById("bet").value);
	//throw an error if startingBet is not a positive number
	if (startingBet <= 0) {
		alert("Starting bet must be a whole dollar amount greater than zero!");
		document.forms["lucky7"]["bet"].value = "";
		document.forms["lucky7"]["bet"].focus();
	}
	//Set the initial value of currentMoney
	var currentMoney = startingBet;
	var winningValuesArray = [];
	var numPlays = 0;
	
	for(var loopCounter = 0; currentMoney > 0; loopCounter++) {
		
		numPlays = numPlays + 1;
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		var sum = dice1 + dice2;
		
		if(sum === 7) {
			currentMoney = currentMoney + 4;
			//Add the current winnings to an array containing only the winning rolls
			winningValuesArray.push(currentMoney);
		}
		else {
			currentMoney = currentMoney - 1;
		}
	}
	
	//find the maximum value in winningValuesArray
	var highAmount = 0;
	highAmount = Math.max(...winningValuesArray);
	
	var highIndex = 0;
	highIndex = winningValuesArray.indexOf(highAmount);
	
	
	//Unhide the results table
	var displayTable = document.getElementById("results");
	if(displayTable.id === "results") {
		displayTable.className = "table table-hover";
	}
	
	document.getElementById("startingMoney").innerText = "$" + startingBet + ".00";
	
	document.getElementById("numberOfRolls").innerText = numPlays;
	
	document.getElementById("highWinnings").innerText = "$" + highAmount + ".00";
	
	document.getElementById("rollsAtHigh").innerText = (highIndex + 1);
	
	document.getElementById("startGame").innerText = "Play Again?";
	return false;
}