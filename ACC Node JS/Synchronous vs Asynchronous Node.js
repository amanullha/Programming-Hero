// console.log("hello ");






// setTimeout(() => {

//     const user = { id: 1 };
//     console.log("f1");

//     setTimeout(() => {
//         console.log("f2");

//         const product = [{}, {}, {}];

//         setTimeout(() => {
//             console.log("f");

//             const prices = [];
//         }, 1000);


//         console.log("f22");

//     }, 500);

//     console.log("f11");

// }, 1000);












const myPromise = new Promise((resolve, reject) => {
    // console.log("user ");

    const user = "aman";

    if (!user) {

        reject("something went wrong")
    }
    else {

        setTimeout(() => {

            // resolve("successfully got the data!")
            resolve({ name: 'aman' })


        }, 1000);

    }



})










// myPromise
//     .then(res => {
//         console.log("res: ", res);
//     }).catch(err => {
//         console.log("error: ", err);
//     })









// const userIds = [1, 2, 3, 4, 5];

// const userData = [];

// for (let i = 0; i < userIds.length; i++) {

//     const userId = userIds[i];

//     myPromise.then(user => {

//         userData.push(user);

//     })



// }



// console.log(userData);







async function getData() {

    const res = await myPromise;
    console.log("res in async: ", res);
    console.log('hi');
}

getData();



