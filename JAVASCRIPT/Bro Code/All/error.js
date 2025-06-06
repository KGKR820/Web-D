// Error = An Object that is created to represent a problem that occurs.
// Occur often with user input or establishing a connection.
// try { } = Encloses code that might potentially cause an error.
// catch { } = Catch and handle any thrown Errors from try { }.
// finally { } = (optional) Always executes. Used mostly for cleanup (e.g., close files, close connections, release resources).

try {
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers.");
    }

    if (divisor === 0) {
        throw new Error("You can't divide by zero!");
    }

    const result = dividend / divisor;
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("You have reached the end!");
}