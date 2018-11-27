import React from 'react';
import drake from '../../Assets/drake.jpeg';
import '../../Include/bootstrap';

export class TextPostComponent extends React.Component{
   
render(){
   return(
         <div>
            <ul className="list-group">
               <li> 
               <div className="card mt-3 mb-5" id="image-post-carousel">
                     <div className="card-header bg-danger">
                           <div className=""> 
                              <img Style="border-radius:50%; width: 45px; height: 45px; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           </div>
                           <div className = "" id="poster-info">
                              Drake posted 3 minutes ago
                           </div>
                           </div>
                           <div className="card-body text-center" >
                                 <div>
                                 <img id="post-image-size"  src=""alt=""/>
                                 <h5> Bookface the amazing unlike Facebook!</h5>
                                 </div>
                           </div>
                           <div className="card-header bg-light  flex-row-sb">
                              <button type="button" className="btn btn-outline-danger"> 
                                 Likes &nbsp; <span className="badge badge-danger">120</span>
                                 <span className="sr-only">unread messages</span>
                              </button>
                              <button type="button" className="btn btn-light" id="posting-comment" disabled> 
                                 I am currently at the UTA Campus
                              </button>
                              <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#post-commnet-modal"> 
                                 Say!
                              </button>
                           </div>
                     </div>
                </li> 
            </ul>
         </div>
      );
   }
}