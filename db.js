db.createCollection('users');

db.users.find();

db.users.insertMany([
    {
        "nombre": "Cristian",
        "apellidos": "Velasquez",
        "correo": "cistian@correo.com",
        "ciudad": "Londres",
        "país": "Inglaterra",
        "salario": 7000,
        "edad": 31,
        "altura": 180,
        "peso": 150
    },
    {
        "nombre": "Marisol",
        "apellidos": "Gómez",
        "correo": "marisol@correo.com",
        "ciudad": "Londres",
        "país": "Inglaterra",
        "salario": 5000,
        "edad": 18,
        "altura": 165,
        "peso": 120
    },
    {
        "nombre": "Gamorra",
        "apellidos": "Bedoya",
        "correo": "gamorra@correo.com",
        "ciudad": "Paris",
        "país": "Francia",
        "salario": 11000,
        "edad": 35,
        "altura": 170,
        "peso": 140
    },
    {
        "nombre": "Fernando",
        "apellidos": "Marin",
        "correo": "fernando@correo.com",
        "ciudad": "Medellin",
        "país": "Colombia",
        "salario": 15000,
        "edad": 24,
        "altura": 175,
        "peso": 172
    },
    {
        "nombre": "Sofia",
        "apellidos": "Vergara",
        "correo": "sofia@correo.com",
        "ciudad": "miami",
        "país": "Estados unidos",
        "salario": 25000,
        "edad": 37,
        "altura": 172,
        "peso": 130
    },
    {
        "nombre": "Robinson",
        "apellidos": "Cortes",
        "correo": "robin@correo.com",
        "ciudad": "Toronto",
        "país": "Canadá",
        "salario": 3500,
        "edad": 27,
        "altura": 176,
        "peso": 180
    }
]);

db.users.find({ nombre: { $regex: /^Mario/ } });

db.users.insertOne({
    "nombre": "pedro"
});

db.users.insertOne({
    "nombre": "Omar",
    "apellidos": "Rodriguez",
    "correo": "omar@correo.com",
    "ciudad": "Agra",
    "país": "India",
    "edad": 24,
    "altura": 163,
    "peso": 172
});

db.users.updateOne({ _id: ObjectId("65f78edcbe7f84a0ac2b1fbe") },
    { $set: {
        "nombre": "Marta",
        "apellidos": "Torres",
        "correo": "martica@gmail.com",
        "ciudad": "Santa cruz",
        "país": "Mexico",
        "salario": 2600,
        "edad": 46,
        "altura": 165,
        "peso": 155
    }}
);

db.users.deleteOne({
    _id: ObjectId("65f7828b35ca774340556569")
});

//solución primer taller
//Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({ edad: { $gt: 18 } });
//Obtener todos los usuarios que sean de Londres o de París.
db.users.find({ $or: [{ ciudad: { $eq: 'Londres' } }, { ciudad: { $eq: 'Paris' } }] });
//Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({ $and: [{ salario: { $gt: 2000 } }, { edad: { $lt: 30 } }] });
//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({ $and: [{ país: { $eq: 'España' } }, { salario: { $gt: 3000 } }] });
//Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({ $and: [{ edad: { $gte: 25}}, { edad: { $lte: 35}}]});
//Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({ país: { $not: { $eq: 'Estados unidos'}}});
//Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({ $and: [{ ciudad: { $eq: 'Londres'}}, $or: { salario: { $gt: 2500}}, { edad: { $gt: 30}}] });
//Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({ $and: [{ país: { $eq: 'Australia'}}, { peso: { $gt: 140}}] });
//Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({ ciudad: { $nin: [ 'Londres', 'Paris']}});
//Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({ $or: [{ salario: { $lt: 2000}}, { edad: { $gt: 40}}]});
//Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({ $and: [{ país: { $eq: "Canadá" } }, { $or: [{ salario: { $gt: 4000 } }, { altura: { $gt: 180 } }]}]});
//Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({ $and: [{ país: { $eq: 'Italia'}}, { edad: { $gte: 20, $lte: 30}}]});
//Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({ correo: { $exists: false} });
//Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({ $and: [{ país: { $eq: 'Francia'}}, { salario: { $gte: 3000, $lte: 5000}}] });
//Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({$and: [{ país: { $eq: "Brasil" } }, { $or: [{ peso: { $lt: 120 } }, { peso: { $gt: 140 } }] }]});
//Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({ $and: [{ país: { $in: ['Argentina', 'Chile'] }}, { edad: { $lt: 25}}]});
//Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({ $and: [{ país: { $nin: [ 'España', 'Mexico']}}, { salario: { $lt: 3000}}]});
//Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({ $and: [{ país: { $eq: 'Alemania'}}, { $or: [{ salario: { $lt: 4000 }}, { edad: { $gt: 35 }}] }]});
//Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({ $and: [{ país: { $nin: [ 'Colombia' ]}}, { altura: { $lt: 170}}]});
//Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({ $and: [{ país: { $eq: 'India'}}, { salario: { $exists: false}}] });