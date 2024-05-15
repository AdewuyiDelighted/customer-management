const nodeMailer = require('nodemailer')


async function reminderUser(userEmail, customers) {


    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });


    let mailOptions = {
        from: process.env["myEmail "],
        to: userEmail,
        subject: 'REMINDER: Deadline for customers works ',
        text: "Just a quick reminder about the upcoming deadline for your customers below" +
            customers +
            " Please review and take any necessary actions before the specified date."

    };


    try {
        let info = await transporter.sendMail(mailOptions)
        console.log('Email sent: ' + info);
        return true;
    } catch (error) {
        console.error(error.message)
        return false;
    }
}

module.exports = reminderUser;



