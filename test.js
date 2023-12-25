module.exports = (title, name, usn, guideName, selt1, selt2, dept) => {

    // const scrData = require('./script.js');
    // console.log(scrData);
    const PDFDocument = require('pdfkit');
    const fs = require('fs');
    const doc = new PDFDocument({ size: 'A4' });
    const width = 595.28;
    const height = 841.89;

    dept = "Department of " + dept;
    dept = dept.toUpperCase();
    usn = usn.toUpperCase();
    name = name.toUpperCase();

    // var title = 'Javascript Programming Fundamentals'
    // var name = "Ketan Hegde".toUpperCase();
    // var usn = "1AY21IS046".toUpperCase();
    var gName = selt1 + " " + guideName.toUpperCase();
    // var guideTitle = "Assistant Professor";
    // var dept = "DEPARTMENT OF INFORMATION SCIENCE & ENGINEERING";

    doc.lineJoin()
        .roundedRect(63, 45, width - 108, height - 90, 10)
        .stroke();

    doc.lineJoin()
        .roundedRect(66, 48, width - 114, height - 96, 10)
        .stroke();

    doc.font('Times-Bold').fontSize(18)
        .text('VISVESVARAYA TECHNOLOGICAL UNIVERSITY', 100, 90, { align: 'center' });
    doc.font('Times-Roman').fontSize(16)
        .text('JNANA SANGAMA, BELAGAVI - 590 014', { align: 'center' });


    doc.image('images/vtu.jpg', 252, 150, { width: 120 }, { height: 120 }, { fit: [120, 120], align: 'center' });


    doc.font('Times-Bold').fontSize(12).moveDown(12)
        .text('A Internship Report on', { align: 'center' });
    doc.font('Times-Bold').fontSize(12).moveDown(0.8)
        .text("\"" + title + "\"", { align: 'center' });

    doc.font('Times-Bold').fontSize(12).moveDown(2.7)
        .text('Submitted By', { align: 'center' });
    doc.font('Times-Bold').fontSize(12).moveDown(0.5)
        .text(name, { align: 'center' });
    doc.font('Times-Bold').fontSize(12).moveDown(0.3)
        .text(usn, { align: 'center' });

    doc.font('Times-Bold').fontSize(12).moveDown(3)
        .text('Under the Guidance of', { align: 'center' });
    doc.font('Times-Bold').fontSize(12).moveDown(0.5)
        .text(gName, { align: 'center' });
    doc.font('Times-Bold').fontSize(12).moveDown(0.3)
        .text(selt2, { align: 'center' });


    doc.image('images/acharya.jpg', 232, 515, { width: 160 }, { height: 150 });


    doc.font('Times-Bold').fontSize(14).moveDown(9)
        .text(dept, { align: 'center' });

    doc.font('Times-Bold').fontSize(14).moveDown(0.2)
        .text("ACHARYA INSTITUTE OF TECHNOLOGY", { align: 'center' });

    var t1 = doc.x
    var t2 = doc.y
    doc.font('Times-Bold').fontSize(9).moveDown(0.2)
        .text("(Affiliated to Visvesvaraya Technological University, Belgavi, Accredited by NACC, Regonised by AICTE, New Delhi)", 85, 701, { lineBreak: false, align: 'center' });

    doc.x = t1;
    doc.y = t2;
    doc.font('Times-Bold').fontSize(11).moveDown(1.3)
        .text("Acharya Dr. SarvepalliRadhadrishnan Road, Soladevanahalli, Bengaluru - 560107", { align: 'center' });

    doc.font('Times-Bold').fontSize(16).moveDown(0.9)
        .text("2023-2024", { align: 'center' });

    // Pipe the PDF content to a writable stream (in this case, a file)
    // const stream = fs.createWriteStream('output.pdf');
    // doc.pipe(stream);

    // Finalize the document
    // doc.end();
    console.log('PDF created successfully.');
    return doc;
}
