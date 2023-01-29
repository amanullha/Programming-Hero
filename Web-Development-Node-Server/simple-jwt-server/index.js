const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const jwt = require('jsonwebtoken');

const app = express();


// middle-ware
app.use(cors());
app.use(express.json());


// also a middle-ware for checking valid access token
const verifyJWT = (req, res, next) => {

    const authHeaders = req.headers.authorization;
    const token = authHeaders.split(" ")[1];

    if (!authHeaders || !token) {
        return res.status(401).send({ message: 'unauthorized user' })
    }


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {

        if (err) {
            return res.status(403).send({ message: "forbidden" });
        }
        req.decoded = decoded;
        next();
    })


}










app.get('/', (req, res) => {

    res.send("simple server is running");
})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})

app.post('/login', (req, res) => {

    const { user } = req.body;

    if (user.password === '123456') {

        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1D'
        });

        res.send({
            success: true,
            accessToken: accessToken
        });


    }

    else {
        res.send({ success: false })
    }


})


app.get('/orders', verifyJWT, (req, res) => {

    console.log(req.headers.authorization);




    res.send([{ id: 1, item: 'sunglass' }, { id: 2, item: 'moonglass' }]);
})
































