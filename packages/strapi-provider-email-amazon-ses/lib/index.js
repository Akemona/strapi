'use strict';

const aws = require('@aws-sdk/client-ses');
const { removeUndefined } = require('@akemona-org/strapi-utils');

const nodemailer = require('nodemailer');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    // Create SES service object.
    const ses = new aws.SESClient({
      region: providerOptions.region,
      credentials: {
        secretAccessKey: providerOptions.secret,
        accessKeyId: providerOptions.key,
      },
    });

    const transporter = nodemailer.createTransport({
      SES: { ses, aws },
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
