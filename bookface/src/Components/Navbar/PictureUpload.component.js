import React from 'react';
import '../../Include/bootstrap';
import '../../App.css';
import NoPhotoSelected from '../../Assets/NoPhotoSelectediOS_2x.png';

// **Modal/Popup Uploading Picture**
export class PictureUploadComponent extends React.Component{
   render(){
      return(
          <div className="modal" tabindex="-1" role="dialog" id="upload-picture-modal">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Upload Picture</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="card" Style="width: 16rem;">
                        <img className="card-img-top" src={NoPhotoSelected} alt=""/>
                          <div className="card-body">
                            <form>
                              <div className="form-group ">
                                  <input type="file" className="" id="exampleFormControlFile1"/>
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
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Upload</button>
                    </div>
                  </div>
                </div>
          </div>
      );
   }

}
