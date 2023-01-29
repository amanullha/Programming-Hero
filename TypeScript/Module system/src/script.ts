
import {Player} from './classes/Player.js'

const mash=new Player('mash',25,'bd');

const players:Player[]=[];
players.push(mash)

console.log(players);


interface RectangleOptions{

    width:number,
    length:number
}


function drawRectangle(options:RectangleOptions) {
    
    let width=options.width;
    let length=options.length;

    console.log(width*length);
    
}

let threeDOptions={
    width:50,
    length:20,
    height:10
}

drawRectangle(threeDOptions);














