function saveNumberHandler() {
	debugger;
	// read new number from user input
	let newNumber = Number(document.getElementById('input').value);
	// read from state the data you will need for the next step
	numbers.all.push(numbers.current);
	// find the new biggest and smallest values
	if (newNumber < numbers.smallest) {
		numbers.smallest = newNumber;
	}
	if (newNumber > numbers.biggest) {
		numbers.biggest = newNumber;
	}
	// update state: new biggest, new smallest, new current & save the last current

	// re-render the user interface with values stored in state
	document.getElementById('biggest').innerHTML = numbers.biggest;
	document.getElementById('smallest').innerHTML = numbers.smallest;

	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'save number',
		newNumber,
		numbers: JSON.parse(JSON.stringify(numbers))
	});
}
