## WORK IN PROGRESS

### This is Strapi v3 maintenance release with focus on current LTS Node & MongoDB Support

## Motivation

After strapi decided to drop MongoDB support on v4, we have decided to maintain v3 for our internal use, but anyone can use this at their own risk.

### Features

- **Keep control over your data**. With Strapi, you know where your data is stored, and you keep full control at all times.
- **Self-hosted**. You can host and scale Strapi projects the way you want. You can choose any hosting platform you want: AWS, Render, Heroku, a VPS, or a dedicated server. You can scale as you grow, 100% independent.
- **Database agnostic**. You can choose the database you prefer. Strapi works with SQL & NoSQL databases: MongoDB, PostgreSQL, MySQL, MariaDB, and SQLite. **(This custom version is only focused on MongoDB)**
- **Customizable**. You can quickly build your logic by fully customizing APIs, routes, or plugins to fit your needs perfectly.

## Getting Started

<a href="https://strapi.akemona.com/documentation/developer-docs/latest/getting-started/quick-start.html" target="_blank">Read the Getting Started tutorial</a> or follow the steps below:

### ⏳ Installation

Install Strapi with this **Quickstart** command to create a Strapi project instantly:

- (Use **yarn** to install the Strapi project (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
yarn create strapi-app my-project --quickstart
```

**or**

- (Use npm/npx to install the Strapi project.)

```bash
npx create-strapi-app my-project --quickstart
```

This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload). The **Quickstart** command installs Strapi using a **SQLite** database which is used for prototyping in development.

Enjoy 🎉

### 🖐 Requirements

Complete installation requirements can be found in the documentation under <a href="https://strapi.akemona.com/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#recommended-requirements">Installation Requirements</a>.

**Supported operating systems**:

- Ubuntu LTS/Debian 9.x
- CentOS/RHEL 8
- macOS Mojave
- Windows 10
- Docker - [Docker-Repo](https://github.com/strapi/strapi-docker)

(Please note that Strapi may work on other operating systems, but these are not tested nor officially supported at this time.)

**Node:**

- NodeJS >= 10.16 <=14
- NPM >= 6.x

**Database:**

- MySQL >= 5.6
- MariaDB >= 10.1
- PostgreSQL >= 10
- SQLite >= 3
- MongoDB >= 3.6 ([please read this thread before using MongoDB](https://forum.strapi.io/t/mongodb-compatibility-delayed-on-v4/4549/108))

**We recommend always using the latest version of Strapi to start your new projects**.

## Features

- **Modern Admin Panel:** Elegant, entirely customizable and a fully extensible admin panel.
- **Secure by default:** Reusable policies, CORS, CSP, P3P, Xframe, XSS, and more.
- **Plugins Oriented:** Install the auth system, content management, custom plugins, and more, in seconds.
- **Blazing Fast:** Built on top of Node.js, Strapi delivers amazing performance.
- **Front-end Agnostic:** Use any front-end framework (React, Vue, Angular, etc.), mobile apps or even IoT.
- **Powerful CLI:** Scaffold projects and APIs on the fly.
- **SQL & NoSQL databases:** Works with MongoDB ([please read this thread before using MongoDB](https://forum.strapi.io/t/mongodb-compatibility-delayed-on-v4/4549/108)), PostgreSQL, MySQL, MariaDB, and SQLite.

**[See more on our website](https://strapi.akemona.com/overview)**.

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a Pull Request to the project.

## Community support

For general help using Strapi, please refer to [the official Strapi documentation](https://strapi.akemona.com/documentation/). For additional help, you can use one of these channels to ask a question:

- [Discord](https://discord.strapi.io) (For live discussion with the Community and Akemona team)
- [GitHub](https://github.com/strapi/strapi) (Bug reports, Contributions)
- [Community Forum](https://forum.strapi.io) (Questions and Discussions)
- [Academy](https://academy.strapi.io) (Learn the fundamentals of Strapi)
- [ProductBoard](https://portal.productboard.com/strapi/tabs/2-under-consideration) (Roadmap, Feature requests)
- [Twitter](https://twitter.com/strapijs) (Get the news fast)
- [Facebook](https://www.facebook.com/Strapi-616063331867161)
- [YouTube Channel](https://www.youtube.com/strapi) (Learn from Video Tutorials)

## Migration

Follow our [migration guides](https://strapi.akemona.com/documentation/developer-docs/latest/update-migration-guides/migration-guides.html) on the documentation to keep your projects up-to-date.

## Roadmap

Check out our [roadmap](https://portal.productboard.com/strapi) to get informed of the latest features released and the upcoming ones. You may also give us insights and vote for a specific feature.

## Documentation

See our dedicated [repository](https://github.com/strapi/documentation) for the Strapi documentation, or view our documentation live:

- [Developer docs](https://strapi.akemona.com/documentation/developer-docs/latest/getting-started/introduction.html)
- [User docs](https://strapi.akemona.com/documentation/user-docs/latest/getting-started/introduction.html)

## Try live demo

See for yourself what's under the hood by getting access to a [hosted Strapi project](https://strapi.akemona.com/demo) with sample data.

## License

See the [LICENSE](./LICENSE) file for licensing information.
