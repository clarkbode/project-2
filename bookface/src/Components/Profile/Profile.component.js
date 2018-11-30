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

    // PM: adding test values for now, will need to add oir main credentials later.

    // let albumBucketName = 'BUCKET_NAME';
    // let bucketRegion = 'REGION';
    // let IdentityPoolId = 'IDENTITY_POOL_ID';

    // AWS.config.update({
    //   region: bucketRegion,
    //   credentials: new AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: IdentityPoolId
    //   })
    // });

    // let s3 = new AWS.S3({
    //   apiVersion: '2006-03-01',
    //   params: {Bucket: albumBucketName}
    // });     

    // function addPhoto() {
    //   let file = document.getElementById('photoupload').files;
    //   if (!file.length) {
    //     return alert('Please choose a file to upload first.');
    //   }
    //   let photoKey = "";

    //   s3.upload({
    //     Key: photoKey,
    //     Body: file,
    //     ACL: 'public-read'
    //   }, function(err, data) {
    //     if (err) {
    //       return alert('There was an error uploading your photo: ', err.message);
    //     }
    //     alert('Successfully uploaded photo.');
    //     viewAlbum(albumName);
    //   });
    // }

      )
    }
  }