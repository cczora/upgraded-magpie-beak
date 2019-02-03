//Purpose- restore fields to their natural state
function clearErrors(){
	var loopCounter;
	for(loopCounter =0; loopCounter < document.forms["mathFun"].elements.length;loopCounter++) {
		//do any elements have "has-" in their class name as assigned by Bootstrap? (indexOf will not return -1 if it can find that string)
		if(document.forms["mathFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			
			//change the class name of the parent element of the particular input back to form-group (ie to normal)
			document.forms["mathFun"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}
   
function displayEvens() 
{	
	var num1 = Number(document.forms["mathFun"]["startingNumber"].value);
	var num2 = Number(document.forms["mathFun"]["endingNumber"].value);
	var steps = Number(document.forms["mathFun"] ["numberOfSteps"].value);
	var list = [];
	var filterList = [];
	
	//Verify the user's inputs are correct, and give errors if not
    if (num1 == "" || isNaN(num1) || num1 < 0) {
        alert("Starting Number must be filled in with a positive number.");
        document.forms["mathFun"]["num1"].parentElement.className = "form-group has-error";
        document.forms["mathFun"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2) || num2 < 0) {
       alert("Ending Number must be filled in with a positive number.");
       document.forms["mathFun"]["num2"].parentElement.className = "form-group has-error"
       document.forms["mathFun"]["num2"].focus();
       return false;
    }
   if(num2 <= num1) {
	   alert("Ending number must be greater than Starting Number");
       document.forms["mathFun"]["num2"].parentElement.className = "form-group has-error"
       document.forms["mathFun"]["num2"].focus();
	   return false;
    }
    if (steps == "" || isNaN(steps) || steps < 0) {
		alert("Steps must be filled in with a positive number.");
		document.forms["mathFun"]["steps"].parentElement.className = "form-group has-error"
        document.forms["mathFun"]["steps"].focus();
       return false;
    }
   
	clearErrors();   
   
	for(var i = num1; i <= num2; i++) {	
		list.push(i);
	}

	for(var loopCounter = 0; loopCounter < list.length; loopCounter++) {
		if(list[loopCounter] % 2 === 0) {
			filterList.push(list[loopCounter]);
		}
	}
	
	//Trim filterList to size specified by steps
	var trimFilterList = filterList.slice(0,steps);
	
	//Unhide the results area and put the filterList array into a string
	document.getElementById("Results").style.display = "block";
	document.getElementById("Results2").style.display = "block";
	
	document.getElementById("num1").innerText = num1;
	document.getElementById("num2").innerText = num2;
	document.getElementById("steps").innerText = steps;
	
	//Display the values in filterList
	document.getElementById("Results2").innerHTML = trimFilterList.toString();
}
