const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const objectId = require('mongodb').ObjectId;

// middleware
const cors = require('cors');
app.use(cors());

// for json handle json file
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Running my Node server ")
})

app.listen(port, () => {
    console.log('CRUD server is running');
})

// user : dbuser1
// password : BwHzAlZcVHj6raep


const uri = "mongodb+srv://dbuser1:BwHzAlZcVHj6raep@cluster0.lda5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('users');



        // load all existing users

        app.get('/users', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();

            res.send(users);

        })


        // load a single user via id

        app.get('/users/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: objectId(id) }
            console.log(query);

            const result = await userCollection.findOne(query);

            res.send(result);


        })










        // POST user : Add a new user
        app.post('/users/add', async (req, res) => {

            const newUser = req.body;
            console.log("adding new user: ", newUser);

            const result = await userCollection.insertOne(newUser);


            res.send(result);
        })

        // PUT user : update a user
        app.put('/users/:id', async (req, res) => {

            const id = req.params.id;
            const updatedUser = req.body;

            const filter = { _id: objectId(id) };

            const options = { upsert: true };

            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }


            const result = await userCollection.updateOne(filter, updatedDoc, options);

            res.send(result);


        })











        // delete a user

        app.delete('/users/:id', async (req, res) => {

            const id = req.params.id;
            const query = {
                _id: ObjectId(id)
            }

            const result = await userCollection.deleteOne(query);

            res.send(result);

        })




    }
    finally {

    }
}
run().catch(console.dir);