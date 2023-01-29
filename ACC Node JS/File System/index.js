const _ = require('underscore');
const http = require('http');
const fs = require('fs');
// const fs = require('fs/promises');



const server = http.createServer((req, res) => {

    console.log("url: ", req.url);

    if (req.url === '/getFile') {

        // Asynchronous

        // fs.readFile('data.txt', (err, data) => {

        //     if (err) {
        //         res.write("File can't read")
        //     }
        //     else {
        //         res.write(data)
        //     }
        //     res.end("close");
        // })


        // Synchronous

        // const data = fs.readFileSync('data.txt');

        // res.write(data);

        // res.end("close")

        fs.writeFile('data.txt', "hello aman", (err) => {

            if (err) {
                res.write("data fail to write")
            }
            else {
                res.write("data written successfully")
            }
            res.end();
        })



    }

})




const PORT = 5001;
server.listen(PORT);
console.log(`server is running at port ${PORT}`);













