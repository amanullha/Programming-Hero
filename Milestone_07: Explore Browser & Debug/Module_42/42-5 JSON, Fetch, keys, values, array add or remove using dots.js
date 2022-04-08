// JSON



const student = {
    name: "aman",
    age: 23,
    movies: ['king khan', 'dhakar mastan'],
    obj: {
        name: "ola",
        id: 44
    }
}

// convert to JSON
const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

// convert to normal obj from JSON

const studentNormal = JSON.parse(studentJSON);

console.log(student);
console.log(studentJSON);
console.log(studentNormal);





// Fetch

const fetchData = async url => {

    const response = await fetch(url);
    const data = await response.json();

    return data;
}


























