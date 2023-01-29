const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.use(express.json({ origin: "*" }))


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://theCleaningFairies:jtjHne5uB0OYgCIf@cluster0.w2egzbh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





async function run() {

    try {

        const userCollection = client.db('assUserDB').collection('users');
        const bookCollection = client.db('assUserDB').collection('books');

        console.log("MongDB connected");

        // get all the users without using JWT verify 

        app.get('/get-users', async (req, res) => {

            const query = {};
            const users = await userCollection.find(query).toArray();

            res.send(users);

        })

        // Add/Post new user without using JWT verify or verify the admin

        app.post('/post-user', async (req, res) => {

            const data = req.body;

            console.log("data: ", data);

            const result = await userCollection.insertOne(data);

            res.send(result);

        })

        // Delete a user without using JWT verify or verify the admin

        app.delete('/delete-user/:userId', async (req, res) => {

            const { userId } = req.params;
            const query = { _id: ObjectId(userId) };

            const result = await userCollection.deleteOne(query);

            res.send(result);

        })


        // get all the books  without using JWT verify or verify the admin

         app.get('/users/get-books', async (req, res) => {

            const query = {};
            const books = await bookCollection.find(query).toArray();

            res.send(books);

        })

        // get all the books by userId without using JWT verify or verify the admin

         app.get('/user/get-books/:userId', async (req, res) => {

            const {userId}=req.params;
            console.log(userId);
            const query = {userId:userId};

            const books = await bookCollection.find(query).toArray();

            res.send(books);

        })







    }
    finally {

    }

}

run().catch(console.dir)






















app.get('/', async (req, res) => {
    res.send("md_amanullha_backend_2 server is running")
})
app.listen(port, () => {
    console.log("md_amanullha_backend_2 server is running at port: ", port);
})