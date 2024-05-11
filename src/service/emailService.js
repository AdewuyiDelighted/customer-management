const nodeMailer = require('nodemailer')


async function reminderUser(userEmail, message) {


    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env["myEmail "],
            pass: process.env["myPassword "]
        }
    });


    let mailOptions = {
        from: 'youremail@gmail.com',
        to: userEmail,
        subject: 'REMINDER: Deadline for customers works ',
        text: "Just a quick reminder about the upcoming deadline for your customers below" +
            message +
            " Please review and take any necessary actions before the specified date."

    };


    try {
        let info = await transporter.sendMail(mailOptions)
        console.log('Email sent: ' + info);
        return true;
    } catch (error) {
        console.err(error.message)
        return false;
    }
}

module.exports = reminderUser;



