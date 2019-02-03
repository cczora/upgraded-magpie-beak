// Note: We can initialize an array by putting the list of elements in square brackets. 
// Also note that JavaScript is loosely typed - which means it allows us to mix types in our arrays...
// And that can cause all sorts of confusion. 
// Mixing element types like this is a *bad* practice. 
// We are doing this to show you how JavaScript can do these and how JavaScript can treat strings like numbers

var testArray = [0, 1, 1, "1", 3, "311"];

for (var arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPosition++) 
  {
    var currentElement = testArray[arrayPosition];
    var nextElement = testArray[arrayPosition + 1];
	 
    console.log("Testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));

    console.log("Testing " + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));

    if (currentElement == nextElement)
	{
        console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
        
        if (currentElement !== nextElement) 
		{
            console.log(currentElement + " is " + typeof(currentElement)); 
            console.log(nextElement  + " is " +  typeof(nextElement));
        }
    } else 
	{
        console.log("Testing " + currentElement + " and " + nextElement + "(equal to): false");

    }
}
