const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors');
const { add } = require('nodemon/lib/rules');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello first time showing ")
})


const users = [
    { id: 1, name: "aman ullha1", email: "aman1@gmail.com", phone: "008801899" },
    { id: 2, name: "aman 2", email: "aman2@gmail.com", phone: "008801899" },
    { id: 3, name: "aman ullha3", email: "aman3@gmail.com", phone: "008801899" },
]

app.get('/users', (req, res) => {
    console.log(req.query);

    //filter by search query 

    if (req.query.name) {

        const searchText = req.query.name.toLocaleLowerCase();
        const filterUsers = users.filter(user => user.name.toLocaleLowerCase().includes(searchText));
        res.send(filterUsers);
    }
    else {
        res.send(users)
    }


})

app.post('/users', (req, res) => {
    console.log('request :', req.body);
    const user = req.body;

    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    console.log("id ", id)
    const user = users.find(user => user.id === id);

    res.send(user)

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.listen(port, () => {
    console.log("Listening to port ", port);
})