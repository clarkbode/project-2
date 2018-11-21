import React, { Component } from 'react';
import './Include/bootstrap';
import drake from './Assets/drake.jpeg';
import TaylorOne from './Assets/TaylorSwift.jpeg';
import TaylorTwo from './Assets/TaylorSwiftTwo.jpg';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <>  
        <div className="">
            <div className="navbar navbar-light bg-danger flex-row-sb mt-1 mb-1">
                <div className=""> 
                  <h1>(BF:-)</h1> 
                </div>
                <div> 
                  <img Style="border-radius: 50%; width: 20%; height: 20%; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="right" ></img>
                </div>
            </div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active ">
                      <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
                    </li>
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
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                  <li class="nav-item" id="log-out-btn">
                  <div class="dropdown">
                  <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Create </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#"> Upload</a>
                    <a class="dropdown-item" href="#">Compose</a>
                  </div>
                </div>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 ">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-danger my-2 my-sm-0 mr-10" type="submit">Search</button>
                </form>
                <div className="ml-10" id="log-out-btn">
                <div class="dropdown dropleft">
                  <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Log Out</a>
                    <a class="dropdown-item" href="#">Setting</a>
                  </div>
                </div>
                </div> 
              </div>
            </nav>   
              <ul>
                <li> 
                <div className="card mt-3 mb-5" id="image-post-carousel">
                  <div className="card-header bg-danger">
                        <div className=""> 
                          <img Style="border-radius:50%; width: 50px; height: 50px; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                        </div>
                        <div className = "" id="poster-info">
                          Drake posted 3 minutes ago
                        </div>
                      </div>
                      <div className="card-body text-center" >
                          <div>
                            <img id="post-image-size"  src={TaylorTwo}alt=""/>
                          </div>
                      </div>
                      <div class="card-header bg-light flex-row-sb">
                        <button type="button" class="btn btn-outline-danger"> 
                            Likes &nbsp; <span class="badge badge-danger">120</span>
                            <span class="sr-only">unread messages</span>
                        </button>
                        <p className ="">
                            #Stunning @Drake
                        </p>
                      </div>
                  </div>
                </li> 
                <li> 
                <div className="card mt-3 mb-5" id="image-post-carousel">
                  <div className="card-header bg-danger mb-5">
                        <div className=""> 
                          <img Style="border-radius:50%; width: 50px; height: 50px; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                        </div>
                        <div className = "" id="poster-info">
                          Drake posted 3 minutes ago
                        </div>
                      </div>
                      <div className="card-body text-center" >
                          <div>
                            <img id="post-image-size"  src={drake}alt=""/>
                          </div>
                      </div>
                      <div class="card-header bg-light flex-row-sb">
                        <button type="button" class="btn btn-outline-danger"> 
                            Likes &nbsp; <span class="badge badge-danger">120</span>
                            <span class="sr-only">unread messages</span>
                        </button>
                        <p className ="">
                            #Stunning @Drake
                        </p>
                      </div>
                  </div> 
                </li> 
              </ul> 

              </div>
            </>
      );
    }
  }

export default App;
