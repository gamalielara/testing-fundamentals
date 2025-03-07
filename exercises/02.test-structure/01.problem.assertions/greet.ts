function greet(name: string) {
	return `Hello, ${name}!`
}

function congratulate(name: string) {
	return `Congrats, ${name}!`
}

function expect(actual: string){
	return {
		toBe: (expected: string) => {
			if(expected !== actual){
				throw new Error(`Expected message to equal to "${expected}" but got "${actual}"`)
			}
		}
	}
}

expect(greet("Taylor Swift")).toBe("Hello, Taylor Swift")
expect(congratulate("Taylor Swift")).toBe("Congrats, Taylor Swift")


// 🐨 Create a function called "expect" that accepts a single argument:
// the "actual" value.

// 🐨 From the "expect" function, return an object that has
// a "toBe" property, which equals to a new function.
// The "toBe" function accepts the "expected" argument.
// 💰 Use shorthand function declaration on objects:
// return { toBe(expected) {} }

// 🐨 In the "toBe" function, compare the "actual" and the "expected"
// values, and throw an error if they don't mtach.
// 💰 You can throw an error like this one:
// new Error(`Expected ${actual} to equal to ${expected}`)
