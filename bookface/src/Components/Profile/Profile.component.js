import React, { Component } from 'react';
import '../../Include/bootstrap';
import '../../App.css';
import '../../ProfileCss.css';
import { ProfileUpdate } from './ProfileUpdate.component';
import Elon from '../../Assets/elon.jpg';

export class Profile extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          profile: []
        };
      }

    componentDidMount(){
        fetch('http://bookfaceapi-env.mbs3j2imdu.us-east-2.elasticbeanstalk.com/profile/2', {
          credentials: 'include'
        })
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            ...this.state,
            profile: data
          });
          console.log(this.state.profile);
        })
      }

    render() {
        console.log(this.state.profile);
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
                                        <p>{this.state.profile.authorBirthdate}</p>
                                        <h6>{this.state.profile.profileDescription}</h6>
                                        <button className="btn btn-danger" data-toggle="modal" data-target="#profileUpdateModal" >Update</button>
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
                </div> 
            </div>
        </>


        //
        // componentDidMount() {
        //     fetch('someurl', {
        //       credentials: 'include'
        //     })
        //       .then(resp => resp.json())
        //       .then(data => {
        //         this.setState({
        //           this:data
        //         })
        //         console.log(data);
        //       });
        //   }

    

      )
    }
  }