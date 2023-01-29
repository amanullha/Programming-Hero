import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const user = { name: name, email: email };


    //poset data to server


    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log('success : ', data);
        const newUsers = [...users, data];

        setUsers(newUsers);
      })


  }


  return (
    <div className="App">
      <h1>Users: {users.length}</h1>


      <form onSubmit={handleAddUser}>

        <input type="text" name="name" id="name" required />
        <br />
        <input type="email" name="email" id="email" required />
        <br />
        <input type="submit" value="Add User" />

      </form>


      <div>
        {
          users.map(user => <li key={user.id}> id: {user.id} name : {user.name} gmail: {user.email}</li>)
        }
      </div>

    </div>
  );
}

export default App;
