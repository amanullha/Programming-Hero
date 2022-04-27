
const express = require('express');
const cors = require('cors');
const port = process.env.port || 5000
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

// middleware
app.use(cors());

// help to convert data to json 
app.use(express.json());


app.get("/", (req, res) => {

    res.send("Running Leaking Fixers Server")
})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})





const uri = `mongodb+srv://${process.env.DB_USERS}:${process.env.DB_PASSWORD}@cluster0.lda5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        await client.connect();

        const serviceCollection = client.db('leakingFixersDB').collection('services');
        const orderCollection = client.db('leakingFixersOrderDB').collection('leakingFixersOrders');



        // AUTH
        app.post('/login', async (req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });


            res.send({
                accessToken
            });
        })








        // get all the service data 
        app.get('/services', async (req, res) => {
            const query = {};

            const cursor = serviceCollection.find(query);

            const services = await cursor.toArray();

            res.send(services);
        });

        // get single service via service id
        app.get('/services/:serviceId', async (req, res) => {

            const serviceId = req.params.serviceId;
            const query = {
                _id: ObjectId(serviceId)
            };

            const service = await serviceCollection.findOne(query);
            res.send(service);
        })

        // POST Service data

        app.post('/services', async (req, res) => {

            const newService = req.body;
            const result = await serviceCollection.insertOne(newService);
            res.send(result);

        })

        // Delete a service with id

        app.delete('/services/:serviceId', async (req, res) => {

            const serviceId = req.params.serviceId;

            const query = { _id: ObjectId(serviceId) }

            const result = await serviceCollection.deleteOne(query);

            res.send(result);

        })



        // create orders  or store orders

        app.post('/orders', async (req, res) => {

            const order = req.body;

            const result = await orderCollection.insertOne(order);

            res.send(result);

        })


        // get all the orders

        app.get('/orders', async (req, res) => {
            console.log(req.query);

            const userId = req.query.userId;
            const query = { userId: userId };
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();

            res.send(orders);

        })









    }
    finally {
        // client.close();
    }
}

run().catch(console.dir);