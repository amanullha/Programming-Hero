const express = require('express');
const cors = require('cors');
const port = process.env.port || 5000;
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Running post-backend server for post-fontend");
})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})





const uri = "mongodb+srv://postsUser1:mcX6jGfXjLKbveKp@cluster0.lda5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        await client.connect();

        const postsCollection = client.db('postsDB').collection('posts');


        // to get all the posts
        app.get('/posts', async (req, res) => {

            const query = {};

            const cursor = postsCollection.find(query);

            const posts = await cursor.toArray();

            res.send(posts);

        })

        // add post 
        app.post('/posts', async (req, res) => {

            const post = req.body;

            const result = await postsCollection.insertOne(post);

            res.send(result);

        })
        // delete post 
        app.delete('/posts/:postId', async (req, res) => {

            const postId = req.params.postId;

            const query = { _id: ObjectId(postId) }

            const result = await postsCollection.deleteOne(query);

            res.send(result);

        })



    }
    finally {

    }


}

run().catch(console.dir);

























// user : postsUser1
// password: mcX6jGfXjLKbveKp





































