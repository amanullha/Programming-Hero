const a = {
    name: 'aman',
    id: 10,
    salary: 500,
    treat: function (x) {
        console.log(this);
        this.salary -= x;
        return this.salary;
    }
}
const b = {
    name: 'ullha',
    id: 5,
    salary: 700

}

const aa = a.treat(50);
console.log(aa);


let bb = a.treat.bind(b);
console.log(bb(100));

bb = a.treat.call(b, 100)
console.log(bb);

bb = a.treat.call(b, 120)
console.log(bb);


bb = a.treat.apply(b, [80])
console.log(bb);






