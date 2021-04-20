# Universities Service

## Description
The micro-service sample for managing universities using REST API.

All endpoints are secured by Bearer token (*092bb6e668ad4466991ed3388df5847b* by default)

### Tech Stack:

Node.js, Fastify, MongoDB

### Purpose

Although the business logic behind the micro-service is quite simple, the project structure itself is pretty comprehensive and can be used as boilerplate for Fastify based projects.


## Installation

```
npm i 
```

## Run

```
npm start
```
You can pass env variables to the application like this:

```
COMMON_BEARER_TOKEN=your_token_here MONGO_URI=your_mongo_uri npm start
```

## Containerization using Docker

You can build the application docker image by:
```
docker build -t universities-service:1.0.0 .
```
and then run it locally

```
docker run -d -p 3000:3000 universities-service:1.0.0
```
with passing some env variables (optional)

```
docker run -d -p 3000:3000 -e COMMON_BEARER_TOKEN=your_token_here universities-service:1.0.0
```

Notice that for now `HOST`, `COMMON_BEARER_TOKEN` and `MONGO_URI` can be passed, BUT I would strongly recommend to not overwrite `HOST` variable due to https://www.fastify.io/docs/v1.13.x/Server/#listen

## API Usage

### List of universities

```
GET: /api/v1/universities

Example: /api/v1/universities?country=Ukraine

Advanced quering example: /api/v1/universities?subjects[elemMatch][in]=OOP&subjects[elemMatch][in]=Data Science

...and using sparse fieldsets: /api/v1/universities?select=city,country
```


### Get a single university

```
GET: /api/v1/universities/:id

Example: /api/v1/universities/607438137b13967a2f608a3d
```


### Create a university record

```
POST: /api/v1/universities

{
    "name": "University of Cologne",
    "city": "Cologne",
    "country": "Germany",
    "subjects": [
        "Biology",
        "Math"
    ]
}
```

### Update a university
```
PATCH: /api/v1/universities/:id

{
    "subjects": [
        "Biology",
        "Math",
        "History"
    ],
    "name": "University of Cologne",
    "city": "Cologne",
    "country": "Germany"
}
```

Notice: you are able to include only those fields which should be updated


### Delete a university record

```
DELETE: /api/v1/universities/:id
```
