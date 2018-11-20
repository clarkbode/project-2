import React, { Component } from 'react';
import './Include/bootstrap';
import drake from './Assets/drake.jpeg';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar navbar-light bg-danger flex-row-sb mt-1 mb-1">
           <div className=""> <h1> BookFace</h1> </div>
           <div className=""> <img Style ="border-radius: 50%; width: 20%; height: 20%; align-items: right;" src={drake} alt="Avatar" align="right"></img></div>
          </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link class="navbar-brand"> BookFace </Link> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-4 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
      </div>
    );
  }
}

export default App;
