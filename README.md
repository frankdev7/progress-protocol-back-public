# Progress Protocol
Progress protocol es un protocolo que permite trackear tu progreso en los cursos.

## Cloud

AWS [here](https://aws.amazon.com/elasticbeanstalk/) 

## Framework

NestJS [here](https://nestjs.com/)

## EtherJS

EtherJS [here](https://docs.ethers.org/v5/)

## Alchemy 

Alchemy [here](https://www.alchemy.com/)

# APIS

# Mint (Inscribirse a un curso)

```http
POST /progress/mint
```
### Request

```javascript
{
  "address" : string,
  "courseAddresss" : string
}
```

El atributo `address` es la direccion del usuario (wallet)

El atributo `courseAddresss` es la direccion del Smart Contract del curso en Polygon

### Response 201

Indica que el alumno se inscribio correctamente en el curso

```javascript
{
  "transaction" : string
}
```

El atributo `transaction` es el hash de la trasaccion en la blockchain 


### Response 400

Indica que el alumno ya esta incrito en el curso y no puede hacerlo nuevamente

```javascript
{
    "statusCode": 400,
    "message": "Minting failed"
}
```

El atributo `statusCode` es el codigo http

El atributo `message` es el mensaje de respuesta


# Quiz (tomar una prueba)

```http
POST /progress/quiz
```
### Request

```javascript
{
  "address" : string,
  "courseAddresss" : string
  "points": number
}
```

El atributo `address` es la direccion del usuario (wallet)

El atributo `courseAddresss` es la direccion del Smart Contract del curso en Polygon

El atributo `points` es la cantidad de puntos que hizo en la prueba

### Response 201

Indica que el alumno completo la prueba y por lo tanto sube de nivel

```javascript
{
  "transaction" : string
}
```

El atributo `transaction` es el hash de la trasaccion en la blockchain 




# Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
