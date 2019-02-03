function findMax(testArray) {
	
	var highest = 0;
	var arrayPosition = 0;

	
	for(arrayPosition; arrayPosition <= testArray.length - 1; arrayPosition++) {
		
		var currentElement = testArray[arrayPosition];
		var nextElement = testArray[arrayPosition + 1];
		
		if(currentElement > nextElement) {
			if(currentElement >= highest) {
				highest = currentElement;
			}
		}
		
		else if (currentElement < highest){
			highest = nextElement;
		}
		
		else {
		break;
		}
	}
console.log("The highest number is: " + highest);
}