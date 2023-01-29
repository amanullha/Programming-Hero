// setInterval(() => {
//     console.log("tick tick");
// }, 1000);

let second = 0;

const timeId = setInterval(() => {
    console.log(second++);
    if (second > 20) {
        clearInterval(timeId);
    }
}, 1000);