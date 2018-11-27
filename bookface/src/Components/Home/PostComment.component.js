import React from 'react';
import '../../Include/bootstrap';
import drake from '../../Assets/drake.jpeg';
import TaylorOne from '../../Assets/TaylorSwift.jpeg';
import TaylorTwo from '../../Assets/TaylorSwiftTwo.jpg';

export class PostCommentComponent extends React.Component{

   render(){
      return(
        <div className="modal fade" id="post-commnet-modal" tabIndex="-1" role="dialog" aria-labelledby="post-commnet-modal-Title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="modal-title" id="post-commnet-modal-Title">Comments</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div> {/* Comment Modal Header */}
                  <div className="modal-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ">
                           <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                              You look stunning Taylor as always in that dress!
                           </textarea>
                        </li>
                        <li className="list-group-item">
                          <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={TaylorTwo} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                              Thank you Drizzy Drake!
                           </textarea>
                        </li>
                        <li className="list-group-item ">
                            <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={TaylorOne} alt="Avatar" align="left" />
                            <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                             Shout Out to Revature Associates for this btw #RevatureForever
                            </textarea> 
                        </li>
                        <li className="list-group-item">
                           <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                            Yes Sister! Shout Out to Revature Associates for this btw #RevatureForever!
                            I will retweet it too!
                           </textarea>
                        </li>
                    </ul>
                    <div>
                      <ul className= "list-group list-group-flush" >
                          <li className="list-group-item flex-row-sb">
                            <textarea className="form-control" type="text" rows="1" id="ip5"></textarea>
                            <div className="mt-2">
                              <button type="button" className="btn btn-danger">Post</button>
                            </div>
                          </li> 
                      </ul>
                    </div>
                    <div className="modal-footer">
                      {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div> 
      </div> 
      );
   }
}