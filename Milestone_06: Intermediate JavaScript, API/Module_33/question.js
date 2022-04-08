
class A {

    name: string;
  

    constructor(id,name) {
        this.id = id;
        this.name=name;
    }
    print() {
        console.log(this.id);
    }
}

const x = new A(50,'abc');

console.log(x);
x.print();