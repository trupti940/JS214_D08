function smartRepeatedLogger(message, interval, duration) {
    let intervalId = null; // To hold the ID of the interval
    let startTime = Date.now(); // Capture the start time
    let pausedTime = 0; // Track total paused time
    let remainingDuration = duration; // Track remaining duration
    let paused = false; // Track if logging is paused

    // Function to start the logging
    function startLogger() {
        intervalId = setInterval(() => {
            console.log(message);
        }, interval);
        
        // Set a timeout to stop logging after the specified duration
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("Logging stopped.");
        }, remainingDuration);
    }

    // Start logging initially
    startLogger();

    // Method to pause logging
    function pause() {
        if (!paused) {
            clearInterval(intervalId); // Stop the interval
            pausedTime = Date.now() - startTime; // Calculate how long it has been running
            remainingDuration -= pausedTime; // Update remaining duration
            paused = true;
            console.log("Logging paused.");
        }
    }

    // Method to resume logging
    function resume() {
        if (paused) {
            startTime = Date.now(); // Reset start time
            startLogger(); // Restart the logging
            paused = false;
            console.log("Logging resumed.");
        }
    }

    // Return the methods to control logging
    return {
        pause,
        resume
    };
}

// Example usage
const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3000); // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
