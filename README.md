
```
npm install
```
** Add Env File **
```
PORT=3000 
```


`src` -> Inside the src folder all the actual source code regarding the project will reside, this wll not include any kind of tests.

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration or setup of a library module will be done . For Example :setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`

- `routes` -> In the routes folder, we register a route and the corresponding middlewares and controllers to it.

- `middlewares` -> They are just going to intercept the incoming where we can write our validations, authentication etc.

- `controllers` -> They are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the api response in controller and send output.

- `repositories` -> these folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here

- `services` -> Container the business logic and interact with te repositories for data from the database.

- `utils` -> Contains helper methods, error classes etc.

- Inside the  `src/config` folder create a file named as `config.json` and write the following code.
```
 move to -> /src
 npx sequelize init --force
```
- By executing the above command you will get migrations and seeders folder alog with config.json inside the config folder.
- If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql,mariadb etc.

- If you're setting up test or product environment ,make sure you also replace the host with the db url

## Sequelize Command

```
Sequelize CLI [Node: 10.21.0, CLI: 6.0.0, ORM: 6.1.0]

sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]

Please specify a command
```
## To Run Server
```
nodemon index.js
```
