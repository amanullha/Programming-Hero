const student = {
    name: "aman",
    age: 23,
    movies: ['king khan', 'dhakar mastan'],
    obj: {
        name: "ola",
        id: 44
    }
}

const [firstMovie, secondMovie] = student.movies;

console.log(firstMovie);
console.log(secondMovie);

const { name, age, movies } = student;

console.log(name);
console.log(age);
console.log(movies);



// optional chaining

const { x } = student?.obj;
console.log(x);
// console.log(student?.obj?.x);


