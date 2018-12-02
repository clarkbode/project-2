// Paul Martella: Added component to manage user profiles

import React from 'react';
import ReactDOM from 'react-dom';
import '../../Include/bootstrap';
import Elon from '../../Assets/elon.jpg';
import AWS from 'aws-sdk';

export class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: '',
      name: '',
      Bday: '',
      Desc: ''
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateBdayValue = this.updateBdayValue.bind(this);
    this.updateDescValue = this.updateDescValue.bind(this);
  }

  AWS = require('aws-sdk/dist/aws-sdk-react-native');

  handleClick(e){
    e.preventDefault();
    console.log("trying to add picture url");
    console.log("value of input field : " + this.state.inputfield);
    let files = this.state.inputfield;
    let file = files[0];
    let fileName = file.name;
    console.log(file);
    let albumBucketName = 'project2-test-bucket';

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:6b65a224-72c3-4e21-917c-62770b57a106',
    });

    let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: albumBucketName}
    });     

    function AddPhoto() {
    console.log("Add to s3 called");

      s3.upload({
          Key: fileName,
          Body: file,
          ACL: 'public-read'
      }, function(err, data) {
          if (err) {
          return alert('There was an error uploading your photo: ', err.message);
          }
          alert('Successfully uploaded photo.');
      });
    }
    AddPhoto();
  };

  getPhoto(e) {
    e.preventDefault();

    AWS.config.region = 'us-east-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:6b65a224-72c3-4e21-917c-62770b57a106',
    });

    let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'project2-test-bucket'}
    }); 

    let fileName = "better test.jpeg";

    let params = {
      Bucket: "project2-test-bucket", 
      Key: fileName
     };
     s3.getObject(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log("We Got It!!!" + data);           // successful response
     });
  };

   updateInputValue(evt) {
    console.log("input field updated with " + evt.target.files);
    let files = evt.target.files;
    let file = files[0]
    let fileName = file.name;
    console.log(file);
    console.log(fileName)
;    this.setState({
      ...this.state,
      inputfield: evt.target.files
    })
  } 

  updateBdayValue(evt) { 
    this.setState({
      ...this.state,
      Bday: evt.target.value
    })
  }

  updateDescValue(evt) { 
    this.setState({
      ...this.state,
      Desc: evt.target.value
    })
  }

  updateProfile(e) {
    e.preventDefault();
    console.log("Update Called");

    // let files = this.state.inputfield;
    // let file = files[0]
    // let fileName = file.name;

    let data = {id: 2, birthdate: "1856-07-10", image: "test.jpeg", description:"henlo fren", authorId: 1};

    fetch('http://bookfaceapi-env.mbs3j2imdu.us-east-2.elasticbeanstalk.com/profile/update',
    {
      method: 'PATCH',
      body: data,
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
      .then(function(response) {
        console.log(response);
      return response.json();
    })
      .then(function(myJson) {
      console.log(JSON.stringify(myJson));
      // ReactDOM.render(
      //   <div id="userProfile">
      //     <div className="container portfolio">
      //         <div className="row">
      //             <div className="col-md-12">
      //                 <div className="heading">				
      //             </div>	
      //         </div>
      //             <div className="bio-info">
      //                 <div className="row">
      //                     <div className="col-md-6">
      //                         <div className="row">
      //                             <div className="col-md-12">
      //                                 <div className="bio-image">
      //                                 <img className="img-circle" src={Elon} alt="image" />
      //                                 </div>			
      //                             </div>
      //                         </div>	
      //                     </div>
      //                     <div className="col-md-6">
      //                         <div className="bio-content">
      //                             <h1>ELON's MUSK</h1>
      //                             <p>Right Now</p>
      //                             <h6>Dew IT!</h6>
      //                             <button className="btn btn-danger" data-toggle="modal" data-target="#profileUpdateModal" >Update</button>
      //                         </div>
      //                     </div>
      //                 </div>	
      //             </div>
      //         </div>
      //     </div> 
      // </div>
      // );
    });
    
  }

    render() {
      return (
        <div id="divProfileUpdateModal">
            <div className="modal" tabindex="-1" role="dialog" id="profileUpdateModal">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Update Your Profile</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <ul className= "list-group list-group-flush" >
                        <li className="list-group-item flex-row-sb">
                          <form>
                            <input type="file" accept="image/*" id="updateProfilePic" onChange={this.updateInputValue}/>
                            <input class="btn btn-danger" type="submit" onClick={this.handleClick} value="Upload"/>
                          </form>
                        </li>
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="date" rows="1" id="profile-birthday-modal" placeholder="Birthday" value={this.state.BdayValue} onChange={this.updateBdayValue}></textarea>
                        </li>
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="profile-description-modal"placeholder="Description" value={this.state.DescValue} onChange={this.updateDescValue}></textarea>
                        </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.updateProfile}>Update</button>
                  </div>
                </div>
              </div>
            </div>  
        </div>

      )
    }
  }