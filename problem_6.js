// Function that wraps setTimeout in a Promise
function delayMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Resolves the promise after the message is logged
        }, delay);
    });
}

// The delayedMultiGreeting function that handles multiple greetings
async function delayedMultiGreeting(messages) {
    for (let i = 0; i < messages.length; i++) {
        const { message, delay } = messages[i];
        await delayMessage(message, delay); // Waits for the message to be logged before proceeding
    }
}

// Example usage
const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 }
];

delayedMultiGreeting(messages);
