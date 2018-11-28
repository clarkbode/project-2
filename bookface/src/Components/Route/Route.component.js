import React from 'react';
import '../../Include/bootstrap';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../../App.css';

import { Home } from '../../Components/Home/Home.component';
import { Profile } from '../../Components/Profile/Profile.component';
import { Friends } from '../../Components/Friends/Friends.component';
import { LogOut } from '../../Components/LogOut/LogOut.component';
import { Setting } from '../../Components/Setting/Setting.component';
import { NavBarComponent } from '../../Components/Navbar/NavBar.component';
import { LogInComponent } from '../../Components/LogIn/LogIn.component';


export class RouteComponent extends React.Component {
   render(){
      
      return(
         <BrowserRouter>
            <> 
               <NavBarComponent/>
                  <div id="main-content-container">
                     <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/friends" component={Friends} />
                        <Route path="/logout" component={LogOut} />
                        <Route path="/setting" component={Setting} /> 
                        <Route path="/login" component={LogInComponent}/>
                           {/* default */}
                        <Route component= {LogInComponent} />
                     </Switch>
                  </div>
            </> 
          </BrowserRouter>
      );
   }
}