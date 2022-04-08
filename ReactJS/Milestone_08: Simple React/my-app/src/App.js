import logo from './logo.svg';
import './App.css';

const myName = "Md. Aman ullha";
const dynamicStyle = {
  color: "green"
}

function App() {

  const names = ["abcd", "efg", 'hij', 'klmn', 'aman', '']
  const singers = [
    { name: "singer 1", job: 'gay' },
    { name: "singer 2", job: 'likhe' },
    { name: "singer 3", job: 'bole' },
    { name: "singer 4", job: 'gay' },
  ];
  return (
    <div className='App'>

      {
        names.map(name => <li>{name}</li>)

      }
      {
        names.map(name => <Person2>{name}</Person2>)

      }

      {
        singers.map(singer => <Person3>{singer}</Person3>)

      }

      <Person name1="aman" name2="ullha" name3="bejailla"></Person>
      <Person name1="ola" name2="lala"></Person>

      <Person></Person>
      <Friend></Friend>
    </div>
  );
}


function Person3(singer) {
  console.log(singer);
  const name = singer.children.name;
  const job = singer.children.job
  console.log(name + " : " + job);
  return (
    <div className='person3'>
      <h1>{name} </h1>
      <p>{job}</p>
    </div>
  );
}
function Person2(name) {
  console.log(name);
  return (
    <div className='person2'>
      <h1>{name.children} </h1>
    </div>
  );
}


function Person({ name1, name2, name3 }) {

  name3 = name3 || "no Name found";

  return (
    <div className='person'>
      <h1>Props Name1:{name1} </h1>
      <h1>Props Name2:{name2} </h1>
      <h1>Props Name3:{name3} </h1>

    </div>
  );
}



// function App() {
//   return (
//     <div className='App'>
//       <Person name1="aman" name2="ullha" name3="bejailla"></Person>
//       <Person name1="ola" name2="lala"></Person>

//       <Person></Person>
//       <Friend></Friend>
//     </div>
//   );
// }


// function Person({ name1, name2, name3 }) {

//   name3 = name3 || "no Name found";

//   return (
//     <div className='person'>
//       <h1>Props Name1:{name1} </h1>
//       <h1>Props Name2:{name2} </h1>
//       <h1>Props Name3:{name3} </h1>

//     </div>
//   );
// }

function Friend(params) {
  return (
    <div className='container'>
      <h3>Name : Aman-Ullha</h3>
    </div>
  );
}




export default App;
