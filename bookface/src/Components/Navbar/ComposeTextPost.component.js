import React from 'react';
import '../../Include/bootstrap';

// **Modal/Popup Posting Text**
export class ComposeTextPostComponent extends React.Component{
   render(){
      return(
          <div className="modal" tabIndex="-1" role="dialog" id="post-text-modal">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Compose What is in your mind...</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <ul className= "list-group list-group-flush" >
                        <li className="list-group-item flex-row-sb">
                          <textarea className="form-control" type="text" rows="1" id="posting-text-modal"></textarea>
                        </li> 
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Post</button>
                  </div>
                </div>
              </div>
          </div>
      );
   }
}