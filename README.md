This is a base node js template , which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anythings.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this wll not include any kind of tests.

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration or setup of a library module will be done . For Example :setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`

-`routes` -> In the routes folder, we register a route and the corresponding middlewares and controllers to it.

-`middlewares` -> They are just going to intercept the incoming where we can write our validations, authentication etc.

-`controllers` -> They are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the api response in controller and send output.

-`repositories` -> these folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here

-`services` -> Container the business logic and interact with te repositories for data from the database.

-`utils` -> Contains helper methods, error classes etc.


