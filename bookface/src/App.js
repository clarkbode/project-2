import React, { Component } from 'react';
import './Include/bootstrap';
import drake from './Assets/drake.jpeg';
import TaylorOne from './Assets/TaylorSwift.jpeg';
import TaylorTwo from './Assets/TaylorSwiftTwo.jpg';
import James from './Assets/Sketch.jpg';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import './App.css';

// handles the navigation to different components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Components/Home/Home.component';
import { Profile } from './Components/Profile/Profile.component';
import { Friends } from './Components/Friends/Friends.component';
import { Upload } from './Components/Upload/Upload.component';
import { Compose } from './Components/Compose/Compose.component';
import { LogOut } from './Components/LogOut/LogOut.component';
import { Setting } from './Components/Setting/Setting.component';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <>
          {/* <AppNav /> */}
          <div id="main-content-container">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/friends" component={Friends} />
              <Route path="/upload" component={Upload} />
              <Route path="/compose" component={Compose} />
              <Route path="/logout" component={LogOut} />
              <Route path="/setting" component={Setting} />

              {/* default */}
              {/* <Route component={Home} /> */}

            </Switch>
          </div>
        <div className="modal fade" id="post-commnet-modal" tabIndex="-1" role="dialog" aria-labelledby="post-commnet-modal-Title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="modal-title" id="post-commnet-modal-Title">Comments</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div> {/* Comment Modal Header */}
                  <div className="modal-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ">
                           <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                              You look stunning Taylor as always in that dress!
                           </textarea>
                        </li>
                        <li className="list-group-item">
                          <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={TaylorTwo} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                              Thank you Drizzy Drake!
                           </textarea>
                        </li>
                        <li className="list-group-item ">
                            <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={TaylorOne} alt="Avatar" align="left" />
                            <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                             Shout Out to Revature Associates for this btw #RevatureForever
                            </textarea> 
                        </li>
                        <li className="list-group-item">
                           <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                            Yes Sister! Shout Out to Revature Associates for this btw #RevatureForever!
                            I will retweet it too!
                           </textarea>
                        </li>
                    </ul>
                    <div>
                      <ul className= "list-group list-group-flush" >
                          <li className="list-group-item flex-row-sb">
                            <textarea className="form-control" type="text" rows="1" id="ip5"></textarea>
                            <div className="mt-2">
                              <button type="button" className="btn btn-danger">Post</button>
                            </div>
                          </li> 
                      </ul>
                    </div>
                    <div className="modal-footer">
                      {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div> 
      </div> {/* Modal Content end*/}
      <div className="">
          <div className="navbar navbar-light bg-danger flex-row-sb mt-1 mb-1">
              <div className=""> 
                <h1>(BF:-)</h1> 
              </div>
              <div> 
                <img Style="border-radius: 50%; width: 20%; height: 20%; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="right" ></img>
              </div>
          </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" id="log-out-btn">
                    <a className="btn btn-outline-danger" href="/home" role="button" id="" 
                    aria-haspopup="true" aria-expanded="false"> /\ Home </a>
                </li> 
                <li className="nav-item" id="log-out-btn">
                    <a className="btn btn-outline-danger" href="/profile" role="button" id="" 
                    aria-haspopup="true" aria-expanded="false"> Profile </a>
                </li>
                <li className="nav-item" id="log-out-btn">
                  <a className="btn btn-outline-danger" href="/friends" role="button" id="" 
                    aria-haspopup="true" aria-expanded="false"> Friends </a>
                </li>
                <li className="nav-item" id="log-out-btn">
                  <div className="dropdown">
                      <a className="btn btn-outline-danger dropdown-toggle" href="#" role="button" id="" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Create 
                      </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/upload"> Upload</a>
                      <a className="dropdown-item" href="/compose">Compose</a>
                    </div>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 ">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-danger my-2 my-sm-0 mr-10" type="submit">Search</button>
              </form>
              <div className="ml-10" id="log-out-btn">
              <div className="dropdown dropleft">
                <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/logout">Log Out</a>
                  <a className="dropdown-item" href="/setting">Setting</a>
                </div>
              </div>
              </div> 
            </div>
          </nav>   
          <ul className="list-group">
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
                          <img id="post-image-size"  src=""alt=""/>
                          <h5> Bookface the amazing unlike Facebook!</h5>
                        </div>
                    </div>
                    <div className="card-header bg-light  flex-row-sb">
                      <button type="button" className="btn btn-outline-danger"> 
                          Likes &nbsp; <span className="badge badge-danger">120</span>
                          <span className="sr-only">unread messages</span>
                      </button>
                      <button 
                          type="button" className="btn btn-danger" data-toggle="modal" data-target="#post-commnet-modal"> 
                          Say
                      </button>
                    </div>
                </div>
              </li> 
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
                          <img id="post-image-size"  src={TaylorTwo} alt=""/>
                        </div>
                    </div>
                    <div className="card-header bg-light  flex-row-sb">
                      <button type="button" className="btn btn-outline-danger"> 
                          Likes &nbsp; <span className="badge badge-danger">120</span>
                          <span className="sr-only">unread messages</span>
                      </button>
                      <button 
                          type="button" className="btn btn-danger" data-toggle="modal" data-target="#post-commnet-modal"> 
                          Say
                      </button>
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
                      <div className="card-header bg-light  flex-row-sb">
                        <button type="button" className="btn btn-outline-danger"> 
                            Likes &nbsp; <span className="badge badge-danger">120</span>
                            <span className="sr-only">unread messages</span>
                        </button>
                        <button 
                            type="button" className="btn btn-danger" data-toggle="modal" data-target="#post-commnet-modal"> 
                            Say
                        </button>
                    </div>
                  </div> 
                </li> 
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
                              <img id="post-image-size" src={James}alt=""/>
                            </div>
                        </div>
                        <div className="card-header bg-light  flex-row-sb">
                          <button type="button" className="btn btn-outline-danger"> 
                              Likes &nbsp; <span className="badge badge-danger">120</span>
                              <span className="sr-only">unread messages</span>
                          </button>
                          <button 
                              type="button" className="btn btn-danger" data-toggle="modal" data-target="#post-commnet-modal"> 
                              Say
                          </button>
                        </div>
                    </div>
                </li> 
              </ul> 
            </div>
        </>
        </BrowserRouter> 
      );
    }
  }

export default App;
