---
title: ConvoMark
repository: https://github.com/matteojoliveau/convomark
website: https://convomark.matteojoliveau.com/about
description: Bookmark your telegram conversations! A Telegram bot to save your important
  conversations
weight: 30
language: nodejs
draft: true
images:
- https://d1r70b9eh1brae.cloudfront.net/convomark.jpg
tags:
- open source
- telegram
- bot

---
[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/307b81de-0925-45c8-ab57-7401052d63f2/deploy-status)](https://app.netlify.com/sites/suspicious-pike-0e144f/deploys)
[![CircleCI](https://circleci.com/gh/MatteoJoliveau/convomark.svg?style=svg)](https://circleci.com/gh/MatteoJoliveau/convomark)
![Node Version](https://img.shields.io/badge/node-%5E10.15.0-brightgreen.svg)
![Yarn Version](https://img.shields.io/badge/yarn-%5E1.13.0-brightgreen.svg)
![Website Status](https://img.shields.io/website/https/convomark.matteojoliveau.com.svg)

ConvoMark is a web application and Telegram bot that makes it easy to bookmark a specific message and retrieve it later.  
Messages can be grouped together in named collections to keep them nice and organized.
It features a web interface to manage your bookmarks and collections, secure login via Telegram OAuth, a GraphQL API and a Telegram bot, [@convomarkbot](https://t.me/convomarkbot)!

The **backend** is a NodeJS application, using [LoopBack 4](https://loopback.io) as the primary framework for everything, from database access to configuration.

The **frontend** application is built with [VueJS](https://vuejs.org) and leverages some packages from the Vue ecosystem, such as:

- Vuex for application-wide state management
- Vue Router for local page navigation (using HTML5 History API)
- Vue Apollo for sending GraphQL requests to the backend
- Vue i18n for text localization
- Buefy for Bulma-styled Vue components

Styles are provided by [Bulma](https://bulma.io), a powerful and easy to use CSS component framework.

The **Telegram bot** is implemented using the wonderful [Telegraf](https://telegraf.js.org) library, and packaged into a nice, self-contained [LoopBack component]({{< param repository >}}/blob/master/backend/src/telegram/component.ts). The component handles configuring and registering all the various parts of the bot (the main bot instance, fetching the token, installing the various commands etc) and wiring them with the rest of the application.  
The bot is configured to run using the [long polling strategy](https://core.telegram.org/bots/api#getupdates) in development, and [webhooks](https://core.telegram.org/bots/api#setwebhook) in production. By default the endpoint for webhooks is `/bot/updates/{hex(sha256(token))}`.

## Project requirements

- [Node](https://nodejs.org) 10.15 or later
- [Yarn](https://yarnpkg.com) 1.13 or later
- [PostgreSQL](https://www.postgresql.org/) 11
- [Redis](https://redis.io) 5

### Setup with Docker

If you have Docker installed you can use [Docker Compose](https://docs.docker.com/compose/) to run Postgres and Redis without the need to have them installed. Simply run `docker-compose up -d` to have them started and listening in the background on their native ports (5432 for Postgres, 6379 for Redis).