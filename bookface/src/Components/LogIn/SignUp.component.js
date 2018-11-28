import React from 'react';
import '../../Include/bootstrap.js';
import '../../logInOut.css';
import '../../App.css';

export class SignUpComponent extends React.Component {

render(){

   return(
      <div>
         <div class="modal" tabindex="-1" role="dialog" id="sign-up-form-modal">
            <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h2 class="modal-title">Create an Account</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button> 
                     </div>
                     <div class="modal-body">
                        <div className="justify-content-center">
                           <div className="card mt-1" Style="width: 20rem;">
                              <form> 
                                 <div className="row mx-2 mt-3">
                                    <div class="form-group col">
                                          <label for="reg_fullname" class="sr-only">First Name</label>
                                          <input type="text" class="form-control" id="reg_fullname" name="reg_fullname" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group col">
                                          <label for="reg_fullname" class="sr-only">Last Name</label>
                                          <input type="text" class="form-control" id="reg_fullname" name="reg_fullname" placeholder="Last Name"/>
                                    </div>
                                 </div>
                                 <div class="form-group mx-5">
                                    <label for="reg_username" class="sr-only">Username</label>
                                    <input type="text" class="form-control" id="reg_username" name="reg_username" placeholder="username"/>
                                 </div>
                                 <div class="form-group mx-5">
                                    <label for="reg_email" class="sr-only">Email</label>
                                    <input type="email" class="form-control" id="reg_email" name="reg_email" placeholder="email"/>
                                 </div>
                                 <div class="form-group mx-5">
                                    <label for="reg_password" class="sr-only">Password</label>
                                    <input type="password" class="form-control" id="reg_password" name="reg_password" placeholder="password"/>
                                 </div>
                                 <div class="form-group mx-5">
                                    <label for="reg_password_confirm" class="sr-only">Password Confirm</label>
                                    <input type="password" class="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password"/>
                                 </div>
                                 <div class="form-group login-group-checkbox mx-5">
                                    <input type="radio" class="mr-2" name="reg_gender" id="male" placeholder="username"/>
                                    <label for="male">Male</label>
                                    
                                    <input type="radio" class="" name="reg_gender" id="female" placeholder="username"/>
                                    <label for="female">Female</label>
                                 </div>
                                 <div className="modal-footer">
                                    <div className ="col">
                                       <button type="submit" class="btn btn-danger">Create</button>
                                    </div>
                                    <div className="col">
                                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                 </div>
                              </div>  
                           </form>  
                           </div> 
                        </div>
                     </div>    
                  </div>
               </div>
         </div>
      </div>
   );
  }
}