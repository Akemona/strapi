### This is Strapi v3 maintenance release with focus on current LTS Node (18.x) & Latest Mongoose/MongoDB Support

## Motivation

After strapi decided to drop MongoDB support on v4, we have decided to maintain v3 for our internal use, but anyone can use this at their own risk.

## Getting Started

Follow the steps below:

### ⏳ Installation

Install Strapi with this **Quickstart** command to create a Strapi project instantly:

- (Use **yarn** to install the Strapi project (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
yarn create @akemona-org/strapi-app my-project --quickstart
```

**or**

- (Use npm/npx to install the Strapi project.)

```bash
npx @akemona-org/create-strapi-app my-project --quickstart
```

This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload). The **Quickstart** command installs Strapi using a **SQLite** database which is used for prototyping in development.

Enjoy 🎉

### Features

- **Keep control over your data**. With Strapi, you know where your data is stored, and you keep full control at all times.
- **Self-hosted**. You can host and scale Strapi projects the way you want. You can choose any hosting platform you want: AWS, Render, Heroku, a VPS, or a dedicated server. You can scale as you grow, 100% independent.
- **Database agnostic**. You can choose the database you prefer. Strapi works with SQL & NoSQL databases: MongoDB, PostgreSQL, MySQL, MariaDB, and SQLite. **(This custom version is only focused on MongoDB)**
- **Customizable**. You can quickly build your logic by fully customizing APIs, routes, or plugins to fit your needs perfectly.

### 🖐 Requirements

Complete installation requirements can be found in the documentation under <a href="https://docs-v3.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html#recommended-requirements">Installation Requirements</a>.

**Supported operating systems**:

- Ubuntu LTS/Debian 9.x
- CentOS/RHEL 8
- macOS Mojave
- Windows 10
- Docker - [Docker-Repo](https://github.com/strapi/strapi-docker)

(Please note that Strapi may work on other operating systems, but these are not tested nor officially supported at this time.)

**Node:**

- LTS versions
- NPM >= 6.x

**Database:**

- MongoDB >= 5.0
- MySQL >= 5.6
- MariaDB >= 10.1
- PostgreSQL >= 10
- SQLite >= 3

**We recommend always using the latest version of Strapi to start your new projects**.

## Features

- **Modern Admin Panel:** Elegant, entirely customizable and a fully extensible admin panel.
- **Secure by default:** Reusable policies, CORS, CSP, P3P, Xframe, XSS, and more.
- **Plugins Oriented:** Install the auth system, content management, custom plugins, and more, in seconds.
- **Blazing Fast:** Built on top of Node.js, Strapi delivers amazing performance.
- **Front-end Agnostic:** Use any front-end framework (React, Vue, Angular, etc.), mobile apps or even IoT.
- **Powerful CLI:** Scaffold projects and APIs on the fly.
- **SQL & NoSQL databases:** Works with MongoDB, PostgreSQL, MySQL, MariaDB, and SQLite.

**[See more on our website](https://strapi.akemona.com/overview)**.

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a Pull Request to the project.

## Community support

For general help using Strapi, please refer to [the official Strapi documentation](https://docs-v3.strapi.io/). For additional help, you can use one of these channels to ask a question:

- [Discord](https://discord.strapi.io) (For live discussion with the Community and Akemona team)
- [GitHub](https://github.com/strapi/strapi) (Bug reports, Contributions)
- [Community Forum](https://forum.strapi.io) (Questions and Discussions)
- [Academy](https://academy.strapi.io) (Learn the fundamentals of Strapi)
- [ProductBoard](https://portal.productboard.com/strapi/tabs/2-under-consideration) (Roadmap, Feature requests)
- [Twitter](https://twitter.com/strapijs) (Get the news fast)
- [Facebook](https://www.facebook.com/Strapi-616063331867161)
- [YouTube Channel](https://www.youtube.com/strapi) (Learn from Video Tutorials)

## Migration

Follow our [migration guides](https://docs-v3.strapi.io/documentation/developer-docs/latest/update-migration-guides/migration-guides.html) on the documentation to keep your projects up-to-date.

## Documentation

view our documentation live:

- [Developer docs](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [User docs](https://docs-v3.strapi.io/documentation/user-docs/latest/getting-started/introduction.html)

## License

See the [LICENSE](./LICENSE) file for licensing information.
