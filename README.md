# XanBookCatalogue
This Project is a book catalogue named as Xan-Book-Catalogue. This is a monorepo which contains front end and back end both projects. `nx` is the tool which is used to manage the monorepo. This tool enables us to manage following:
- Typescript Configuration
- eslint configuration
- prettier configuration
- build tooling

`apps` folder contains the applications of this monorepo. 

There is a documentation folder in each project which contains detailed documentation and architectural decisions for that project.

## Decision for Monorepo
There are multiple practices on how people organize their FE and BE projects.
- Keep FE and BE both in same repo and use BE service to serve FE bundle. **Drawback: We are putting unnecessary burden on BE service because serving static assets is a slow operation.**
- Keep FE and BE in separate repos and deploy them separately. **Drawback: Developer experience is not good since now we have to track two repos and bootstrap them to work.**
- Keep FE and BE in a monorepo where repo management is done via monorepo management tool & deploy them to separate place. **Drawback: Some people find it difficult to work with monorepo tools.**

In this project, we have opted for third solution. Since it gives a good developer experience and there are no performance concerns for BE service.

## Bootstrap
In order to setup project, please run 
1. `npm install -g nx`
2. `npm install`


## Running Server
- Run `npm run start:server` to run server
- Run `npm run build:server` to build server

## Running Server Tests
- Run `npm run test:server` for running backend tests
- Run `npm run test:server:coverage` for running coverage of backend tests

## Backend Documentation
[This README.md](./apps/xan-book-server/documentation/README.md) doc contain all the documentation and architectural decisions for backend project.

## Running react app
- Run `npm run start:react` to run server
- Run `npm run build:react` to build server

## Running react Tests
- Run `npm run test:react` for running backend tests
- Run `npm run test:react:coverage` for running coverage of backend tests

## FE Documentation
[This README.md](./apps//xan-book-react/documentation/README.md) doc contain all the documentation and architectural decisions for FE project.
