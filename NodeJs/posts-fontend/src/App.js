import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost/AddPost';
import DeletePost from './Components/DeletePost/DeletePost';
import Header from './Components/Header/Header';
import ShowPosts from './Components/ShowPosts/ShowPosts';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path="/" element={<ShowPosts />} />
        <Route path="/show-posts" element={<ShowPosts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/delete-post" element={<DeletePost />} />
      </Routes>

    </div>
  );
}

export default App;
