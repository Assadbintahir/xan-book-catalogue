# XanBookServer Documention

This app in the monorepo deals with the front end react application. Following is the application structure which is used in this app:
- documentation: contains docs
- src: contains application code
- project config files

## React Practices
With in `src/app` folder, effort has been put to keep the code modular, extensible and with the best practices of React & Redux Toolkit. Directory structure is:
- __mocks__: contains the mocks and currently house axios mock.
- component: This folder contains all the reuseable UI components.
- containers: Contains the two containers which deals with data from redux toolkit. 1) Book Catalogue 2) Book Details
- features: As per redux toolkit patterns, features contains all the data manipulation and slices. Slices are responsible for creating reducers and actions.
- routes: Contains react router configuration.
- store: contains the hooks and store configuration for redux.
- types: domain types are present in features folder and should be source of truth for domain type across application.

## Code Structure (Extensibility)
Considering the architecture of presentation and stateful components, we have divided them in containers and dumb components. All the redux related logic is in features and this separation of concerns keep our data manipulation & UI components separate. This makes it easier to extend the code and add further features.

## Tests
Due to limited time, test to cover all the screens were not created. There are some tests for the sanity checks in the FE. Backend code has 100% test coverage. In real production applications, we also add cypress tests as integration tests for the application.

## Third Party Packages
Following are the third party packages & plugins used.
- `redux-toolkit`: for state management in a declarative and reactive way.
- `react-router-v6`: version 6 of react-router-dom.
- `css-modules`: in order to keep the css styling of one component limited to itself, css-modules are used.

## Code Coverage

All files
- **64.17%** Statements 43/67
- **25%** Branches 2/8
- **53.57%** Functions 15/28
- **64.51%** Lines 40/62


## Path to Production
If this system is supposed to move pass prototype phase, we do:
- Add npm script for creating a production bundle of react app.
- We decide either we want to deploy it to S3 or some server which serves static files. Or we want to host our own NGINX server to server our app.
- If we want to use S3,
  - In our CI pipeline, we simply upload our production react bundle files to S3.
- If we want to use NGINX server,
  - We use NGINX docker image to create a server and recreate a docker image after putting our bundle files in volume. This docker image is uploaded to artifactory from CI pipeline.
- Create a CI pipeline which will be doing:
  - Building NGINX docker image with our bundle files (if we opt for our own FE server)
  - Running lint
  - Running unit tests
  - Running integration (cypress) tests
  - If everything passes, uploading FE artefact to docker registry.
  - If we want to use S3, upload bundle files to S3.
