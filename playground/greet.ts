const greet = (name: string) => {
	return `Heyho, ${name}!`
}

const testGreetFunction = () => {
	const name = "Taylor Swift"

	const message = greet(name);

	const expectedMessage = "Hello Taylor Swift!"

	if(message !== expectedMessage){
		throw new Error(`Expected message to equal to "${expectedMessage}", but got "${message}"`)
	}

	console.log("Unit test for greet function passed.");
}

testGreetFunction()

// 🐨 Create a variable named "message" and assign it the result
// of the "greet()" function call.
// 💰 Maybe pass "John" as the name.

// 🐨 Add an "if" statement to check whether the "message" equals
// to what you expect. If it's not, throw an error.
// 💰 Verify the message equals to "Hello, John!"
// 💰 You can throw an error like this one:
// new Error(`Expected message to equal to "Hello, John!" but got "${message}"`)
