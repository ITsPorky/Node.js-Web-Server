// Node.js Express Web Server

// Constants
const express = require('express');
const { nextTick } = require('process');
const app = express();
const url = require('url');
const expressip = require('express-ip');
const fs = require('fs');
const chalk = require('chalk');
const port = process.env.port || 8080;

const getActualRequestDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9; // Convert to nanoseconds
    const NS_TO_MS = 1e6; // Convert to milliseconds
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

// Get Logs
let logger = function(req, res, next) {
    // Date variables
    let current_date = new Date();
    // Date variable used for Logs
    let formattedDate = current_date.getFullYear() + "-" 
        + current_date.getMonth() + "-" 
        + current_date.getDate() + " " 
        + current_date.getHours() + ":" 
        + current_date.getMinutes() + ":" 
        + current_date.getSeconds();
    // Request variables
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    const start = process.hrtime();
    // Get request duration in milliseconds
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
    // Log info to be printed
    let log = `[${chalk.blue(formattedDate)}] ${method}:${url} ${chalk.green(status)} ${chalk.red(durationInMilliseconds.toLocaleString() + "ms")}`;

    console.log(log);
    // Write request logs to a file
    fs.appendFile("./logs/request_logs.txt", log + "\n", err => {
        if(err) {
            console.log(err);
        }
    });
    next();
};

// Print Logs
app.use(logger);
// Express-Ip
app.use(expressip().getIpInfoMiddleware);

// Create a server object
app.get('/', (req, res) => { 
    // Handle requests
    let parsedURL = url.parse(req.url, true);
    // Remove leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    if(path =="") {
        path = "index.xhtml";
    }

    // Store file path
    let file = __dirname + "/public/" + path;

    // Get the Website directory for files
    app.use(express.static(__dirname + '/public'));

    // Send requested file to display
    res.sendFile(file, function(err) {
        const ipInfo = req.ipInfo;
        if(err) {
            next(err);
        }else{
            console.log(`User: ${ipInfo.city}, ${ipInfo.country} File: ${file}`);
        }
    });
});

// Listen to port
app.listen(port, function(err) {
    if(err){
        console.log(err);
    }
    console.log(`Server listening on port: ${port}`);
});