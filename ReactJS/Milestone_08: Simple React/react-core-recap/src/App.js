import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts>

      </LoadPosts>


      <District name="comilla" speciality="dd"></District>
      <District name="Dhaka" speciality="cc"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "green",
  margin: "20px",
  borderRadius: "25px",
  padding: "5px"
}

function District(props) {

  const [power, setPower] = useState(1);

  const boostPower = () => {
    setPower(power * 2);
  }

  return (<div style={districtStyle}>

    <h2>Name : {props.name}</h2>
    <p>Specialty: {props.speciality}</p>

    <h3>power: {power}</h3>
    <button onClick={boostPower}>Boost the power</button>

  </div>);
}


const LoadPosts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (<div>

    <h1>Posts: {posts.length}</h1>
    {
      posts.map(post => <Post key={post.id} title={post.title} body={post.body}></Post>)
    }

  </div>);

}

function Post(props) {
  return (<div style={{ backgroundColor: "green", margin: "20px", borderRadius: "20px", padding: '20px' }}>

    <h2>Title: {props.title}</h2>
    <p>Body: {props.body}</p>

  </div>);
}








export default App;
