# XanBookServer Documention

This app in the monorepo deals with the backend service. Following is the application structure which is used in this app:
- documentation: contains docs
- postman: contains postman configuration in json format
- src: contains application code
- project config files

## Express Practices
With in source folder, effort has been put to keep the code modular, extensible and with the best practices of ExpressJS framework. Directory structure is:
- api: contains route & controller setups in different api versions
- express: contains ExpressJS server configuration and plugs Express Router to API routes.
- middleware: It contains different middleware for express application. currently it has error handler & appender requestID for incoming requests.
- mocks: contains mock service & repository classes for use in integration and unit tests.
- repositories: contains data access layer code. In real world scenarios, it will either be talking to a DB or third party service to get data. For the scope of this project, we used some fake data.
- services: contains service classes which will house all the business logic.
- types: contains types for each business domain.
- utils: utility functions i.e. logger

## Code Structure (Extensibility)
API folder contains `*Routes.ts` for each domain which initializes the service, repository and controller for that domain. It then maps the API paths to the controller functions. 

This is the place from where we inject service into controller and repository into service to keep the code loosely coupled. This enable us to easily mock the service & repository, also it complies with the SOLID principles.

## Tests
Each domain folder inside API also contains its controller's spec file. These are the integration tests which test the code end to end by making an actuall HTTP call.

Similarly, each service & repository folder also contains a spec file which contains the unit tests for more granular testing.

## Third Party Packages
Following are the third party packages & plugins used.
- `morgan`: for logging HTTP requests
- `config`: for managing different level of configuration for different environments.
- `compression` for compressing API responses
- `helmet` for security purposes
- `supertest` for integration tests

## Code Coverage

All files
- **100% Statements** 129/129
- **84.61% Branches** 11/13 (A case from utility logger where we are supposed to send logs to a third party)
- **100% Functions** 27/27
- **100% Lines** 119/119

## Path to Production
If this system is supposed to move pass prototype phase, we do:
- Add a DB and a `docker-compose` file which will run the DB container.
- Add `ORM` to connect to DB and plug it in repositories.
- Add seed and migration configurations for managing DB structure changes in a gradual manner
- Create a `Dockerfile` for the backend in order to build backend artefact.
- Create a CI pipeline which will be doing:
  - Running docker-compose
  - Running backend docker container
  - Running lint
  - Running unit tests
  - Running integration tests
  - If everything passes, building docker image of backend artefact.
  - Push the artefact image to a docker repository (from where CD flow will kick in)
