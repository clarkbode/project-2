// Paul Martella: Added component to manage user profiles

import React from 'react';
import '../../Include/bootstrap';

export class ProfileUpdate extends React.Component {
    render() {
      return (
        <div id="divProfileUpdateModal">
            <div class="modal" tabindex="-1" role="dialog" id="profileUpdateModal">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Update Your Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <ul className= "list-group list-group-flush" >
                        <li className="list-group-item flex-row-sb">
                            <input type="file" class="" id="updateProfilePic"/>
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
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Update</button>
                  </div>
                </div>
              </div>
            </div>  
        </div>
      )
    }
  }