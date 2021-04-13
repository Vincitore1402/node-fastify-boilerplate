# Universities Service

## Description
The micro-service sample for managing universities using REST API.

All endpoints are secured by Bearer token (092bb6e668ad4466991ed3388df5847b by default)


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

## API Usage

### List of universities

```
GET: /api/v1/universities

Example: /api/v1/universities?country=Ukraine

Advanced quering example: /api/v1/universities?subjects[elemMatch][in]=OOP&subjects[elemMatch][in]=Data Science
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
