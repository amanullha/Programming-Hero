// const fs = require('fs');

// const readstream = fs.createReadStream('./dummyText.txt');

// readstream.on('data', (chunk) => {

//     console.log("\n....................buffer.....................\n");

//     console.log(chunk);

// })

// readstream.on('open', () => {
//     console.log("\n\n***************stream is open********************\n\n");
// })

// setTimeout(() => {

//     readstream.pause();
//     console.log("\n************Streaming i s pause now*********\n");

// }, 5);






const fs = require('fs');

const readStream = fs.createReadStream('./dummyText.txt');

readStream.on('data', (chunk) => {
    // console.log('\n ............chunk ...........\n');
    console.log(chunk);
})

readStream.on('open', () => {
    console.log('\n............stream is open ..............  \n');
})


setTimeout(() => {
    readStream.pause();
    console.log('..............streaming is pause now ..............');
}, 20);

setTimeout(() => {
    readStream.resume();
    console.log('..............streaming is resume now ..............');
}, 2000);




















