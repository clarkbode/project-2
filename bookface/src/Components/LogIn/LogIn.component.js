import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../../Include/bootstrap.js';
import '../../logInOut.css';
import '../../App.css';
import {SignUpComponent} from '../LogIn/SignUp.component';
// import {RouteComponent} from '../Route/Route.component';

export class LogInComponent extends React.Component {

      constructor(props){
         super(props);
         this.state ={
               username: '',
               password: ''
         }
      }

      passwordChange = (e) => {
         this.setState({
         ...this.state,
         password: e.target.value
         })
      }
   
      usernameChange = (e) => {
      this.setState({
         ...this.state,
         username: e.target.value
      })
      }

      submit = (e) => {
      e.preventDefault();
      let credentials = {
         username: this.state.username,
         password: this.state.password
      }
   }

   submitTest = (e) => {
      console.log("SUBMIT!");
      e.preventDefault();
      let cred = this.state;
      fetch('http://bookfaceapi-env.mbs3j2imdu.us-east-2.elasticbeanstalk.com/users/findByCred/user/' + this.state.username + 
      '/pass/' + this.state.password, {
        method: 'POST',
      //   body: JSON.stringify(cred),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      .then(res => {
        if (res.status === 201) {
         //  this.props.history.push('user/home');
         console.log(res.status);
         console.log("IT'S GOOD!");
         this.props.history.push('/home');
        }
        else
        {
           console.log(res.status);
           console.log("WRONG!");
        }
      })
      .catch(err => {
        console.log(err);
      })
   
    }

  
   render() {
   return(
      <> 
         <SignUpComponent/>
         <div class="text-center" Style="padding:50px 0">
            <div class="logo">Login</div>
            <div class="login-form-1">
               <form id="login-form" className="text-left">
                  <div class="login-form-main-message"></div>
                  <div class="main-login-form">
                     <div class="login-group">
                        <div class="form-group">
                           <label for="lg_username" class="sr-only">Username</label>
                           <input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username"
                              required
                              value={this.state.username}
                              onChange={this.usernameChange}
                           />
                        </div>
                        <div class="form-group">
                           <label for="lg_password" class="sr-only">Password</label>
                           <input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password"
                              required
                              value={this.state.password}
                              onChange={this.passwordChange}
                              />
                        </div>
                        {/* <div class="form-group login-group-checkbox">
                           <input type="checkbox" id="lg_remember" name="lg_remember"/>
                           <label for="lg_remember">remember</label>
                        </div> */}
                        <div className ="mt-4 login-btn" Style="mr-auto">
                           <button  className="btn btn-danger" onClick={this.submitTest}> submit
                            {/* <Link to="/routesComponent"> Submit </Link> */}
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="etc-login-form">
                     <p>create new account <a type="button"data-toggle ="modal" data-target="#sign-up-form-modal" > click here </a></p>
                  </div>
               </form>
            </div>  
         </div>   
       </>
      );
   }
}