
// let val=2;

// console.log(val);

// val='di';
// console.log(val);



// function mul( a:number, b:number) {
    
//     return a*b;

// }


// console.log(mul(4,4));



// let ar=[]

// ar.push('aman')

// ar.push(4)

// console.log(ar);


// let person={
//     name:'aman',
//     age:23,
//     isbool:true,
// }

// person.name="lal";

// console.log(person);


// let a:any[]=[];

// a.push('aman')
// a.push(3)

// console.log(a);






// let  fun=(a:string, b:number,c:string="lala"):string=>{
//     console.log("hello fun",a,"  :  ",b," ",c);
//     return a+b;
// }


// console.log(fun('aman',5,'hello'));


type stringOrNumber=string | number;

type userType={name:string,age:number};




const userDatils=(
    id:string|number,
    user:{
        name:string,
        age:number
    }
)=>{
    console.log(id,user.name,user.age);
    
}

const sayHello=(user:userType)=>{
    
    console.log(user.age, user.name);
    
}




















































