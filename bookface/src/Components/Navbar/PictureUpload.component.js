import React from 'react';
import '../../Include/bootstrap';
import '../../App.css';
import NoPhotoSelected from '../../Assets/NoPhotoSelectediOS_2x.png';

// **Modal/Popup Uploading Picture**
export class PictureUploadComponent extends React.Component{
   render(){
      return(
          <div class="modal" tabindex="-1" role="dialog" id="upload-picture-modal">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Upload Picture</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className="card" Style="width: 16rem;">
                        <img className="card-img-top" src={NoPhotoSelected} alt=""/>
                          <div class="card-body">
                            <form>
                              <div class="form-group ">
                                  <input type="file" class="" id="exampleFormControlFile1"/>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div>
                          <ul className= "list-group list-group-flush" >
                              <li className="list-group-item flex-row-sb">
                                <textarea className="form-control" type="text" rows="1" id="picture-post-dialog"></textarea>
                              </li> 
                          </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Upload</button>
                    </div>
                  </div>
                </div>
          </div>
      );
   }

}



