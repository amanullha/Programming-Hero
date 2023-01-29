const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();



// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Ema-Jhon server is running");
});

app.listen(port, () => {
    console.log("ema-jhon server running on port: ", port);
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lda5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(params) {

    try {
        await client.connect();

        const productCollection = client.db("emaJhonDB").collection("emaJhonProducts");


        // load all the data
        app.get('/products', async (req, res) => {

            const currentPage = parseInt(req.query.page);
            const pageProductSize = parseInt(req.query.pageSize);

            const query = {};
            const cursor = productCollection.find(query);

            let products;

            if (currentPage || pageProductSize) {

                const skipProductCount = (currentPage - 1) * pageProductSize;

                products = await cursor.skip(skipProductCount).limit(pageProductSize).toArray();
            }
            else {

                products = await cursor.toArray();
            }

            res.send(products);
        })


        // get total count of products
        app.get('/productsCount', async (req, res) => {

            const count = await productCollection.estimatedDocumentCount();


            res.send({ count });
        })


        // use post to get products by ids
        app.post('/productsByIds', async (req, res) => {

            const ids_array = req.body;
            const ids = ids_array.map(id => ObjectId(id));

            const query = { _id: { $in: ids } };

            const cursor = productCollection.find(query);
            const products = await cursor.toArray();

            res.send(products);
        })




    }
    finally {

    }
}

run().catch(console.dir);