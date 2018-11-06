/* eslint-env node */
'use strict';

module.exports = function(app) {
    var express = require('express');
    var emailRouter = express.Router();
    var nodemailer = require('nodemailer');
    //Replace the username and password below to connect to GMail SMTP.
var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
                user: 'itmexcontact@gmail.com',
                pass: 'itmex123'
            }
        });

    emailRouter.get('/', function(req, res) {
        res.send({
            'email': []
        });
    });

    emailRouter.post('/', function(req, res) {

        console.log('Sending email');
        
        console.log(req.body);



        const mailOptions = {
          from: 'itmexcontact@gmail.com', // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.body // plaintext body
        };

        transporter.sendMail(mailOptions, function (err, info) {
           if(err)
             console.log(err)
           else
             console.log(info);
        });
        res.status(201).end();
    });

    emailRouter.get('/:id', function(req, res) {
        res.send({
            'email': {
                id: req.params.id
            }
        });
    });

    emailRouter.put('/:id', function(req, res) {
        res.send({
            'email': {
                id: req.params.id
            }
        });
    });

    emailRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    app.use('/api/email', require('body-parser').urlencoded({ extended: false }));
    app.use('/api/email', emailRouter);
};