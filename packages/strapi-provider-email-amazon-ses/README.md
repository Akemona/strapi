# strapi-provider-email-amazon-ses

### Maintenance release by Akemona

## Resources

- [License](LICENSE)

## Links

- [Strapi website](https://strapi.akemona.com/)
- [Strapi community on Slack](https://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in you Strapi project.

## Installation

```bash
# using yarn
yarn add strapi-provider-email-amazon-ses

# using npm
npm install strapi-provider-email-amazon-ses --save
```

## Configuration

| Variable                | Type                    | Description                                                                                                                | Required | Default   |
| ----------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string                  | The name of the provider you use                                                                                           | yes      |           |
| providerOptions         | object                  | Will be directly given to `createClient` function. Please refer to [node-ses](https://www.npmjs.com/package/node-ses) doc. | yes      |           |
| settings                | object                  | Settings                                                                                                                   | no       | {}        |
| settings.defaultFrom    | string                  | Default sender mail address                                                                                                | no       | undefined |
| settings.defaultReplyTo | string \| array<string> | Default address or addresses the receiver is asked to reply to                                                             | no       | undefined |

> :warning: The Shipper Email (or defaultfrom) may also need to be changed in the `Email Templates` tab on the admin panel for emails to send properly

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_SES_KEY'),
      secret: env('AWS_SES_SECRET'),
      amazon: 'https://email.us-east-1.amazonaws.com',
    },
    settings: {
      defaultFrom: 'myemail@protonmail.com',
      defaultReplyTo: 'myemail@protonmail.com',
    },
  },
  // ...
});
```
