"use strict";
class Player {
    constructor(_name, _age, _country) {
        this.name = _name;
        this.age = _age;
        this.country = _country;
    }
    play() {
        console.log(`${this.name} form ${this.country} is playing`);
    }
}
let mash = new Player('Mash', 26, "Bangladesh");
const sakib = new Player('sakib', 24, "Bangladesh");
const players = [];
players.push(mash, sakib);
console.log(players[0].play());
console.log(players);
