'use strict';

const { SESv2Client, SendEmailCommand } = require('@aws-sdk/client-sesv2');
const { removeUndefined } = require('@akemona-org/strapi-utils');

const nodemailer = require('nodemailer');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    // Create SES service object.
    const sesClient = new SESv2Client({
      region: providerOptions.region,
      credentials: {
        secretAccessKey: providerOptions.secret,
        accessKeyId: providerOptions.key,
      },
    });

    const transporter = nodemailer.createTransport({
      SES: { sesClient, SendEmailCommand },
    });
    return {
      send: (options) => {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, attachments, ...rest } = options;

          const msg = {
            from: from || settings.defaultFrom,
            to,
            cc,
            bcc,
            replyTo: replyTo || settings.defaultReplyTo,
            subject,
            text,
            html,
            attachments,
            ...rest,
          };
          transporter.sendMail(removeUndefined(msg), (err, info) => {
            if (err) {
              if (err.message) {
                reject(
                  `email send error: ${err.message} from: ${info?.envelope.from}, to: ${info?.envelope.to}`
                );
              }
              reject(err);
            } else {
              resolve(info.messageId);
            }
          });
        });
      },
    };
  },
};
