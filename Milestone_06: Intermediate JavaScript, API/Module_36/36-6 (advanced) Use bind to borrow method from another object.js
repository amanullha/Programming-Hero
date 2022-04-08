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


const bb = a.treat.bind(b);
console.log(bb(100));