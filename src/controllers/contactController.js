const {Form} = require('../db');
const transporter = require('../config/sendMail');
const {MAIL_RECEIVER, USER_MAIL} = process.env;

const getMessage = async (req,res) =>{
    try {
        const getAll = await Form.findAll();

        res.status(200).json(getAll);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const createMessage = async (req,res) =>{
    
    try {
        console.log('Received a POST request to /contact');
        const {name, email, message} = req.body

        const newMessage = await Form.create({
            name,
            email,
            message,
        });

        
        if(newMessage){
            await transporter.sendMail({ 
                from:'"ContactMe" <contact.service.mailer@gmail.com>',
                to: MAIL_RECEIVER,
                subject: `You have a new message from ${name}`,
                html: `
                    <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>Feedback de Contact form</title>
                        </head>
                        <body>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Message:</strong> ${message}</p>
                        </body>
                    </html>
                        `
                        ,
            })
            res.status(200).json({message:'Message sent successfuly!'});
        } else {
            res.status(400).json({message: 'Must enter valid data'})
        }

    } catch (error) {
        console.error('Error creating message:', error);
        res.status(400).json({ error: 'Error creating message' });
    }
    
}

module.exports = {createMessage, getMessage}