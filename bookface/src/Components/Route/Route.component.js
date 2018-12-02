import React from 'react';
import '../../Include/bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../../App.css';
import { HomeComponent } from '../Home/Home.component';
import { Profile } from '../Profile/Profile.component';
import { FriendsComponent } from '../Friends/Friends.component';
// import { LogOutComponent } from './Components/LogOut/LogOut.component';
import { Setting } from '../Setting/Setting.component';
import { NavBarComponent } from '../Navbar/NavBar.component';
export class RouteComponent extends React.Component {
   render(){
      return(
         <BrowserRouter>
            <> 
               <NavBarComponent/>
                  <div id="main-content-container">
                     <Switch>
                        <Route path="/home" component={ HomeComponent} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/friends" component={FriendsComponent} />
                        {/* <Route path="/logout" component={LogOutComponent} /> */}
                        <Route path="/setting" component={Setting} /> 
                           {/* default */}
                        <Route component= { HomeComponent} />
                     </Switch>
               </div>
            </> 
         </BrowserRouter>
      );
   }
}