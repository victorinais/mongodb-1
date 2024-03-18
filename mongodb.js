/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'NEW_DATABASE_NAME';
const collection = 'NEW_COLLECTION_NAME';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection('users');

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
//--------------------------------------------------------------------------------------

//inserta registros en el json
db.users.insertOne({
    name: 'Mario',
    lastname: 'henao',
    email: 'mario@gmail.com',
    age: 20,
    gender: "M"
});
//trae a todos en general
db.users.find();
//busca documentos iguales a edad 25
db.users.find({ age: { $eq: 25 }});
//busca todos los documentos que sean diferentes a edad 25
db.users.find({ age: { $ne: 25 }});
//busca todos los documentos que sean mayores a edad 25
db.users.find({ age: { $gt: 25 }});
//busca todos los documentos que sean menores a edad 25
db.users.find({ age: { $lt: 25 }});
//busca todos los documentos que sean mayores o iguales a edad 25
db.users.find({ age: { $gte: 25 }});
//busca todos los documentos que sean menores o iguales a edad 25
db.users.find({ age: { $lte: 25 }});
//busca el valor de un campo que esté dentro del array de valores
db.users.find({ age: { $in: [20, 32, 45] }});
//busca el valor de un campo que no este dentro del array de valores
db.users.find({ age: { $nin: [20, 32, 45] }});
//busca documentos que no sean de los campos especificados
db.users.find({ ciudad: { $nin: ["Londres", "París"] } });
//busca que un documento especifico exista
db.users.find({ name: { $exists: true}});
//busca un documento que coincida con una expresion regular
db.users.find({ name: { $regex: /^Cristian/ }});
//busca documentos que cumplan con multiples condiciones
db.users.find({ $and: [{ age: { $gt: 20 }}, { age: {$lt: 30}}]});
//busca documentos que al menos cumpla una de las condiciones
db.users.find({ $or: [{ age: { $gt: 70 }}, { age: {$lt: 30}}]});
//busca documentos contrarios a la condicion o revierte los resultados
db.users.find({ age: { $not: { $lt: 30 }}});
//busca documentos que no cumplan ninguna de varias condiciones
db.users.find({ $nor: [{ age: { $lt: 20 }}, { age: {$gt: 30}}]});