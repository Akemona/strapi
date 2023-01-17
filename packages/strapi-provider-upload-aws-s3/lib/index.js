'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');

module.exports = {
  init(config) {
    if (!config.params.Bucket || !config.region) {
      throw new Error('Invalid config.');
    }
    const client = new S3Client({
      region: config.region,
      ...(config.accessKeyId && {
        credentials: {
          accessKeyId: config.accessKeyId,
          secretAccessKey: config.secretAccessKey,
        },
      }),
    });

    return {
      async upload(file, customParams = {}) {
        // upload file on S3 bucket
        const path = file.path ? `${file.path}/` : '';

        try {
          const command = new PutObjectCommand({
            Bucket: config.params.Bucket,
            Key: `${path}${file.hash}${file.ext}`,
            Body: Buffer.from(file.buffer, 'binary'),
            ACL: 'public-read',
            ContentType: file.mime,
            ...customParams,
          });
          client.config.Bu;
          const data = await client.send(command);
          const location = `https://${command.input.Bucket}.s3.${config.region}.amazonaws.com/${command.input.Key}`;
          file.url = config.baseUrl ? `${config.baseUrl}/${command.input.Key}` : location;
          // console.log('s3 upload Success:', data);
          return data;
        } catch (err) {
          console.log('s3 upload failed: ' + err);
          throw err;
        }
      },
      async delete(file, customParams = {}) {
        // delete file on S3 bucket
        const path = file.path ? `${file.path}/` : '';
        try {
          const data = await client.send(
            new DeleteObjectCommand({
              Key: `${path}${file.hash}${file.ext}`,
              ...customParams,
            })
          );
          return data;
        } catch (err) {
          console.log('delete from S3 failed: ' + err);
          throw err;
        }
      },
    };
  },
};
