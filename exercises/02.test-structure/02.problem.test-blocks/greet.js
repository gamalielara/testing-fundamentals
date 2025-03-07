console.log("HAHHAHAH");
function greet(name) {
    return "Hello, ".concat(name, "!");
}
function congratulate(name) {
    return "Congrats, ".concat(name, "!");
}
function test(testName, testBlock) {
    try {
        testBlock();
        console.log("\u2705 ".concat(testName));
    }
    catch (err) {
        console.log("\u274C ".concat(testName, " ").concat(err.message));
    }
}
// 🐨 Wrap each of the existing "expect()" calls in the
// "test()" function you will write later down this file.
// 💰 Use meaningful test case names, like:
// - returns a greeting message for the given name
// - returns a congratulation message for the given name
// 💰 Provide the callback to the "test()" function that
// will run these assertions.
// test('', () => {
//  expect(greet('John')).toBe('Hello, John!')
// })
function expect(actual) {
    return {
        toBe: function (expected) {
            if (actual !== expected) {
                throw new Error("Expected ".concat(actual, " to equal to ").concat(expected));
            }
        },
    };
}
test("Should return the correct greet Taylor Swift", function () {
    expect(greet('John')).toBe('Hello, Taylor Swift!');
});
test("Should return the correct congrats Taylor Swift", function () {
    expect(congratulate('Sarah')).toBe('Congrats, Sarah!');
});
// 🐨 Create a new function called "test".
// The "test" function accepts two arguments: "title" and "callback".
// 🐨 In the "test" function, call the "callback" function
// and print a message to the console if it completes without throwing.
// Include a checkbox icon and the test's title in the message.
// 💰 See if you can *try* and *catch* any errors from the "callback".
// 💰 Use this template for success messages: `✓ ${title}`
// 🐨 If the calling the "callback" function throws an error,
// print another message to the console. In this one, include a cross
// icon, the test's name, and the thrown error.
// 💰 Use this template for error messages: `✗ ${title}`
