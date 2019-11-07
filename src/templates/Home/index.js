import React from 'react';
import { NavBar, SearchForm } from '../../components'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <SearchForm/>
      </div>
    </div>
  );
}

export default Home;