import React, { Component } from 'react';
import './Include/bootstrap';
import {Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {store} from './Redux/Store';

import  { HomeComponent }  from './Components/Home/Home.component';
import { Profile } from './Components/Profile/Profile.component';
import  FriendsComponent  from './Components/Friends/Friends.component';
import { LogOut } from './Components/LogOut/LogOut.component';
import { Setting } from './Components/Setting/Setting.component';
import { NavBarComponent } from './Components/Navbar/NavBar.component';
import {PostCommentComponent} from './Components/Home/PostComment.component';

class App extends Component {
  
  render() {
    return (
         <Provider store={store} >  
          <BrowserRouter>
          <>
            <NavBarComponent/>
            <div> 
              <PostCommentComponent/>
            </div>
              <div className="App">
                  <Switch>
                    <Route path="/home" component={HomeComponent} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/friends" component={FriendsComponent} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/setting" component={Setting} /> 
                      {/* default */}
                    <Route component={HomeComponent} />
                  </Switch>
              </div>
           </>
          </BrowserRouter>
          </Provider>
      );
    }
  }

export default App;