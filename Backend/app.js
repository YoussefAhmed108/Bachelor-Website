const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs')
const bodyParser = require('body-parser');
const PORT = 4000
const CSV_FILE_PATH = 'userMetrics.csv';
const cors = require("cors");
const corsOptions = require('./corsOptions')
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(PORT, () => { console.log(`Listening to requests on http://localhost:${PORT}`) });

function writeToCSV(data) {
    const csvContent = `${data.startTime},${data.endTime},${data.elapsedTime},${data.pagesViewed.length},${data.journey},${data.total_actions},${data.successfulActions}\n`;

    fs.writeFile(CSV_FILE_PATH, csvContent, { flag: 'a' }, (err) => {
        if (err) {
            console.error('Error writing to CSV file:', err);
        } else {
            console.log('Data written to CSV file successfully.');
        }
    });
}
app.post('/toCSV', (req, res) => {
    console.log(req.body)
    

    fs.access(CSV_FILE_PATH, fs.constants.F_OK, (err) => {
        if (err) {
            // CSV file does not exist, create it and add headers
            const headers = ['StartTime', 'EndTime', 'ElapsedTime','NumberOfPagesViewed','Journey','total_actions','successful_actions'];
            const headerRow = `${headers.join(',')}\n`;

            fs.writeFile(CSV_FILE_PATH, headerRow, (err) => {
                if (err) {
                    console.error('Error creating CSV file:', err);
                    res.status(500).send('Error creating CSV file.');
                } else {
                    console.log('CSV file created successfully.');
                    writeToCSV(req.body);
                    res.send('Data written to CSV file successfully.');
                }
            });
        } else {
            // CSV file exists, append data row
            writeToCSV(req.body);
            res.send('Data written to CSV file successfully.');
        }
    });

})