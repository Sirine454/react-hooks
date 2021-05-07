import React  from 'react';

import './App.css';

import MovieList from './component/MovieList';
import Addmovie from './component/Addmovie';
import {Nav,Navbar} from 'react-bootstrap';



function App() {
  
  return (
    <div className="App">
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      
    </Nav>
  </Navbar>
  <br />
      </>
      <div>
      <h2 className="Title">Add a movie</h2>
      <Addmovie
        placeholder="Add a movie"
        onChange={(e) => console.log(e.target.value)}
       />
      </div>
      <div className="row">
      <MovieList />
      
      
     </div>

    </div>
  );
}

export default App;
