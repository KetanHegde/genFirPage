const express = require('express');
const app = express();
const port = 3000;
var drawPage = require('./test.js');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit', (req, res) => {
    const inpName = req.body.inpName;
    const title = req.body.inpTitle;
    const usn = req.body.inpUSN;
    const gname = req.body.inpGname;
    const dept = req.body.selDept;
    const selTitle1 = req.body.selTitle1;
    const selTitle2 = req.body.selTitle2;
    // res.send(`Hello, ${username}!`);
    var doc = drawPage(title, inpName, usn, gname, selTitle1, selTitle2, dept);

    // Create a new PDF document
    // const doc = new PDFDocument();

    // // Add content to the PDF
    // doc.fontSize(16).text('Hello, this is a PDF created with PDFKit!', 100, 100);

    // Set response headers for PDF download
    res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');
    res.setHeader('Content-Type', 'application/pdf');




    // Pipe the PDF content to the response stream
    doc.pipe(res);

    // Finalize the document
    doc.end();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
