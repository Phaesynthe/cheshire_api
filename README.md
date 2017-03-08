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

### Database Project ###
The portion of this project that pertains to database specific operations shall be included within this project because of the inter-relatedness of the concerns.

The API code using Sails will not be used to create, mount, or modify the structure of the database. The waterline ORM underlying Sails will not have any say on the structure of the database in any way. Ideally, the SQL user account that is used by this service will have limits on it's privileges. If there is an incompatibility, a SQL view or stored procedure will be used to rectify it.
