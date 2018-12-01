// Paul Martella: Added component to manage user profiles

import React from 'react';
import '../../Include/bootstrap';
import AWS from 'aws-sdk';

export class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: '',
      name: ''
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
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

    let params = {
      Bucket: "project2-test-bucket", 
      Key: "test"
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

    render() {
      //console.log(this.state.inputfield);
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
                            <input type="submit" onClick={this.handleClick} value="Upload"/>
                            <button onClick={this.getPhoto}>Download</button>
                          </form>
                        </li> 
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="profile-name-modal" placeholder="Name"></textarea>
                        </li> 
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="profile-birthday-modal" placeholder="Birthday"></textarea>
                        </li>
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="profile-description-modal"placeholder="Description"></textarea>
                        </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Update</button>
                  </div>
                </div>
              </div>
            </div>  
        </div>

      )
    }
  }