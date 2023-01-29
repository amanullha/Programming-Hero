const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json())


function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: "Unauthorized access" });
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {

        if (err) {
            return res.status(403).send({ message: "Forbidden access" });
        }
        req.decoded = decoded;
        next();
    })

}





app.get('/', (req, res) => {
    res.send('Hello from docTreat server')
})
app.listen(port, () => {
    console.log("DocTreat server running on port : ", port);
})




const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0fuk0.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {

        await client.connect();
        const servicesCollection = client.db("docTreatDB").collection("services");
        const bookingCollection = client.db("docTreatDB").collection("booking");
        const usersCollection = client.db("docTreatDB").collection("users");
        const doctorsCollection = client.db("docTreatDB").collection("doctors");



        // verify admin

        const verifyAdmin = async (req, res, next) => {

            const requester = req.decoded.email;
            console.log('requester: ', requester);

            const requesterAccount = await usersCollection.findOne({ email: requester });

            if (requesterAccount.role === 'admin') {
                next();
            }
            else {
                return res.status(403).send({ message: "Forbidden access" });

            }

        }



        // put all the users one by one
        app.put('/user/:email', async (req, res) => {

            const email = req.params.email;
            const userInfo = req.body;

            const filter = { email: email };

            const options = { upsert: true };

            const updateDoc = {
                $set: userInfo
            };

            const result = await usersCollection.updateOne(filter, updateDoc, options);
            const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
            res.send({ result, token });
        })

        // make user as admin 
        app.put('/user/admin/:email', verifyJWT, verifyAdmin, async (req, res) => {


            const email = req.params.email;



            const filter = { email: email };

            const updateDoc = {
                $set: { role: 'admin' }
            };

            const result = await usersCollection.updateOne(filter, updateDoc);
            res.send(result);



        })

        // check a user is admin or not
        app.get('/admin/:email', async (req, res) => {

            const email = req.params.email;
            const user = await usersCollection.findOne({ email: email })

            const isAdmin = user.role === 'admin';

            res.send({ admin: isAdmin })
        })


        // get all the users

        app.get('/users', verifyJWT, async (req, res) => {

            const query = {};

            const users = await usersCollection.find(query).toArray();


            res.send(users);

        })


        // get all the services
        app.get('/services', async (req, res) => {

            const query = {};
            const cursor = servicesCollection.find(query);
            const services = await cursor.toArray();

            res.send(services);

        })


        app.get('/available', async (req, res) => {

            const date = req.query.date;
            console.log("date: ", date);

            //step-1:  get all the sevices
            const services = await servicesCollection.find().toArray();

            //step-2:  get the booking of that day
            const query = { date: date };

            const bookings = await bookingCollection.find(query).toArray();

            //step-3: for each service, find booking for the service

            services.forEach(service => {
                // step-4: find bookings for that services 
                const bookedService = bookings.filter(b => b.treatmentName === service.name);

                // step-5: select slots for the service bookings
                const bookingSlots = bookedService.map(s => s.slot);

                // service.bookingSlots = bookingSlots;

                // step-6: select those slots that are not in bookingSlots
                const availableSlots = service.slots.filter(slot => !bookingSlots.includes(slot));


                // service.availableSlots = availableSlots;
                // service.bookingSlots = bookingSlots;
                service.slots = availableSlots;

            })

            res.send(services);
        })




        // booking 
        app.post('/booking', async (req, res) => {


            const booking = req.body;

            const query = { treatment: booking.treatment, date: booking.date, patient: booking.patient }

            const exists = await bookingCollection.findOne(query);

            if (exists) {
                return res.send({ success: false, booking: exists })
            }

            else {
                const result = await bookingCollection.insertOne(booking);

                return res.send({ success: true, booking: exists, result })
            }
        })



        // get my booking all appointment
        app.get('/myBooking', verifyJWT, async (req, res) => {

            const decodedEmail = req.decoded.email;

            const patient = req.query.patient;

            if (patient === decodedEmail) {

                const query = { patient: patient };

                const myBookings = await bookingCollection.find(query).toArray();

                res.send(myBookings);
            } else {

                res.status(403).send({ message: 'Forbidden access' })
            }



        })



        // add doctor 
        app.post('/doctor', verifyJWT, verifyAdmin, async (req, res) => {

            const doctor = req.body;
            const result = await doctorsCollection.insertOne(doctor);
            res.send(result)
        })

        // get all the  doctors 
        app.get('/doctors', verifyJWT, verifyAdmin, async (req, res) => {

            const doctors = await doctorsCollection.find().toArray();
            res.send(doctors);
        })


        // delete a doctors
        app.delete('/doctor/:email', verifyJWT, verifyAdmin, async (req, res) => {
            const email = req.params.email;
            const query = { email: email };

            const result = await doctorsCollection.deleteOne(query)
            res.send(result);
        })















    } finally {

    }

}
run().catch(console.dir)

























