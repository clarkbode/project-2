import React, { Component } from 'react';
import '../../Include/bootstrap';
import '../../App.css';
import '../../ProfileCss.css';
import { ProfileUpdate } from './ProfileUpdate.component';
import Elon from '../../Assets/elon.jpg';

export class Profile extends React.Component {
    render() {
      return (
          <>
          <ProfileUpdate/>

        <div id="userProfile">
            <div className="container portfolio">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading">				
                        
                    </div>	
                </div>
                <div className="bio-info">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bio-image">
                                    <img className="img-circle" src={Elon} alt="image" />
                                    </div>			
                                </div>
                            </div>	
                        </div>
                        <div className="col-md-6">
                            <div className="bio-content">
                                <h1>THE ELON</h1>
                                <p>10/23/2077</p>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#profileUpdateModal" >Update</button>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </div> 
    </div>
        </>
      )
    }
  }