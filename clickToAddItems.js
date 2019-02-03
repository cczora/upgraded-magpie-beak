//Purpose- restore fields to their natural state
function clearErrors(){
	for(var loopCounter =0; loopCounter < document.forms["numberFun"].elements.length;loopCounter++) {
		//do any elements have "has-" in their class name as assigned by Bootstrap? (indexOf will not return -1 if it can find that string)
		if(document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			
			//change the class name of the parent element of the particular input back to form-group (ie to normal)
			document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

//Purpose- clear all fields in the <form>
function resetForm() {
	clearErrors();
	document.forms["numberFun"]["num1"].value="";
	document.forms["numberFun"]["num2"].value="";
	document.getElementById("results").style.display = "none";
	//innerText is the text on the button itself
	document.getElementById("submitButton").innerText = "Submit";
	//focus() moves the cursor back to that field and makes it the active field
	document.forms["numberFun"]["num1"].focus();
}

//Purpose- verify the user's input is expected, then perform all the calculations and display them
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                     Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
}