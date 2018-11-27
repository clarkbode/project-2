import React from 'react';
import '../../Include/bootstrap';

// **Modal/Popup Posting Text**
export class ComposeTextPostComponent extends React.Component{
   render(){
      return(
          <div class="modal" tabindex="-1" role="dialog" id="post-text-modal">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Compose What is in your mind...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <ul className= "list-group list-group-flush" >
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="posting-text-modal"></textarea>
                        </li> 
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Post</button>
                  </div>
                </div>
              </div>
          </div>
      );
   }
}