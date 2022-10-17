const http = require('http');
const fs = require('fs');
const url = require('url');


function readData(err, data) {
    console.log(data);
}

const server = http.createServer(async (req, res) => {


    // const parseUrl = url.parse(req.url, true);
    // console.log("parsedURL: ", parseUrl);

    if (req.url === '/') {

        res.writeHead(200, { 'content-type': 'text/HTML' })
        res.write('<p> Welcome to lazy world!!!</p>')
        res.end();
    }

    if (req.url === '/read') {
        const data = await fs.readFileSync('./test.txt', { encoding: 'utf8', flag: 'r' });
        res.write(data);
        res.end();
    }
    if (req.url === '/write') {
        const data1 = await fs.readFileSync('./test.txt', { encoding: "utf8", flag: 'r' });

        // fs.writeFile('secondFile.txt', data1, (err) => {
        //     if (err) {
        //         res.write('something wrong!!')
        //         res.end();
        //     }
        //     else {
        //         res.write('file written successfully!!')
        //         res.end();
        //     }
        // })

        try {
            fs.writeFileSync('sec.txt', data1, { encoding: 'utf8', flag: 'w' })
            res.end("file written successfully!")
        } catch (error) {
            res.end('something wrong!!')
        }

    }
    if (req.url === '/append') {
        const data = "\nHi this is robot!"
        fs.appendFile('./try.txt', data, (err) => {
            if (err) {
                res.end('file append wrong')
            } else {
                res.end("file append successfully!")
            }
        })
    }
    if (req.url === '/delete') {
        fs.unlink('./secondFile.txt', (err) => {
            if (err) {
                res.end('file delete wrong')
            } else {
                res.end("file deleted successfully!")
            }
        })
    }







    // if (req.url === '/get-text') {

    //     // const text = fs.readFileSync('./test.txt');
    //     const readStream = fs.createReadStream('./test.txt');

    //     readStream.on('data', (chunk) => {
    //         console.log(chunk);
    //     })

    //     // readStream.pause();
    //     // readStream.on('open', () => {
    //     //     console.log('\nfile is reading with read stream!!!\n');
    //     // })

    //     res.write(text)

    // }
})

const PORT = 5000;




server.listen(PORT);
console.log(`server is running port at : ${PORT}`);