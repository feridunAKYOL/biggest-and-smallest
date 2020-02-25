function resetHandler() {
	debugger;
	// reset state to initial values
	biggest = numbers.biggest;
	smallest = numbers.smallest;

	// re-render UI with values saved in state
	document.getElementById('biggest').innerHTML = biggest;
	document.getElementById('smallest').innerHTML = smallest;
	// log interaction: handler name, new state
	log.push({
		handler: 'reset',
		numbers: JSON.parse(JSON.stringify(numbers))
	});
}
