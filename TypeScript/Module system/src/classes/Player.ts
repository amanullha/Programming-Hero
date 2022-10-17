import {isPlayer} from '../interface/isPlayer.js'

export class Player implements isPlayer{

    constructor(
        public name:string,
        private age:number,
        readonly country:string
    ){ }

    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
        
    }
    getProperty(){
        return this.age;
    }
}