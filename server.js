// Import required modules
const express = require("express");
const winston = require('winston');

// Create an Express application
const app = express();

// Logger configuration
const logger = winston.createLogger({
    level: 'info', // Log level
    format: winston.format.json(), // Log format
    defaultMeta: { service: 'calculate-service' }, // Default meta information
    transports: [
        // Log errors to error.log file
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // Log all messages to combined.log file
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// If not in production mode, also log to console
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// Arithmetic operations functions
const add = (n1, n2) => {
    return n1 + n2;
}

const sub = (n1, n2) => {
    return n1 - n2;
}

const mul = (n1, n2) => {
    return n1 * n2;
}

const div = (n1, n2) => {
    return n1 / n2;
}

// Define API endpoints

// Root endpoint
app.get("/", (req, res) => {
    res.send("hello, I am listening to port. ^^ Welcome to the calculator microservice!");
});

// Addition endpoint
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid parameters: n1 and n2 must be numbers.");
            throw new Error("Invalid parameters: n1 and n2 must be numbers.");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for addition');
        const result = add(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        logger.error("Error performing addition: " + error.message);
        res.status(400).json({ statuscode: 400, message: error.message });
    }
});

// Subtraction endpoint
app.get("/sub", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid parameters: n1 and n2 must be numbers.");
            throw new Error("Invalid parameters: n1 and n2 must be numbers.");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for subtraction');
        const result = sub(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        logger.error("Error performing subtraction: " + error.message);
        res.status(400).json({ statuscode: 400, message: error.message });
    }
});

// Multiplication endpoint
app.get("/mul", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid parameters: n1 and n2 must be numbers.");
            throw new Error("Invalid parameters: n1 and n2 must be numbers.");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for multiplication');
        const result = mul(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        logger.error("Error performing multiplication: " + error.message);
        res.status(400).json({ statuscode: 400, message: error.message });
    }
});

// Division endpoint
app.get("/div", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid parameters: n1 and n2 must be numbers.");
            throw new Error("Invalid parameters: n1 and n2 must be numbers.");
        }
        if (n2 === 0) {
            logger.error("Division by zero: n2 cannot be zero.");
            throw new Error("Division by zero: n2 cannot be zero.");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for division');
        const result = div(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        logger.error("Error performing division: " + error.message);
        res.status(400).json({ statuscode: 400, message: error.message });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
