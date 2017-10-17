This is a node application running on the Koa framework. Probably a client microservice site as seen in the client model field under models/ClientModel.js and application router validation and api validations.

Flow of the application can be seen from the routers, which links to the controllers. Controller functions are done in the services/ClientService.js.

There is a test file under services/ClientService.spec.js.

Only one model is used in the application dynamoose ORM is used.

Hosting is done on AWS and server is set up in app.js. config files are in the config folders.
