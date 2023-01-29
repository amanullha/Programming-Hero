let cal:(x:number,y:number,z:string)=>number ;


cal=(a:number,b:number,c:string)=>{

if(c==='add')
return a+b;
else return a-b;
}

console.log(cal(4,5,'addd'));
