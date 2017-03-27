# Cheshire API [![CircleCI](https://circleci.com/gh/Phaesynthe/cheshire_api.svg?style=svg)](https://circleci.com/gh/Phaesynthe/cheshire_api) #

## Environment Requirements ##

* DB_MYSQL_URL
* DB_MYSQL_URL
* DB_MYSQL_USER
* DB_MYSQL_PASSWORD

## Recommended Development ##
```
docker pull mongo
docker pull mysql
docker pull redis
docker run mongo
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql
docker run redis
```

## Design Concepts ##
The API is expressed as a three layer application. Controller code represents the main access points and the highest level of logic.

### API ###
- `api.js` is the main entry point for the express server
- `routes.js` maps http accessible URIs to controller functions.

#### Controllers ####

#### Entities ####
Each Entity is expressed as a full service to provide for all entity access needs even when those needs involve working with other entities.

#### Services ####

### Database Project ###
The portion of this project that pertains to database specific operations shall be included within this project because of the inter-relatedness of the concerns.

The API code using Sails will not be used to create, mount, or modify the structure of the database. The waterline ORM underlying Sails will not have any say on the structure of the database in any way. Ideally, the SQL user account that is used by this service will have limits on it's privileges. If there is an incompatibility, a SQL view or stored procedure will be used to rectify it.

# Notes #
Seems to register a hosted function
`./node_modules/.bin/functions deploy helloWorld ./ --triger-http`

Seems to start the server
`./node_modules/.bin/functions start`

Seems to stop the server
`./node_modules/.bin/functions stop`

When running, the following local route receives http calls:
`http://localhost:8008/`
