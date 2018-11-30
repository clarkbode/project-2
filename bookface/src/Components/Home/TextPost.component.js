import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../Redux/Actions/post.actions'
import drake from '../../Assets/drake.jpeg';
import TaylorOne from '../../Assets/TaylorSwift.jpeg';
import TaylorTwo from '../../Assets/TaylorSwiftTwo.jpg';

import '../../Include/bootstrap';

export class TextPostComponent extends React.Component{
   
    componentDidMount(){
      this.props.fetchPosts();
    }

  
   render(){

   return(
         <div>
            <ul className="list-group">
               {this.props.posts.map((posts, index)=>(
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
                                 <img id="post-image-size"  src={TaylorTwo} alt=""/>
                                 <h5>{posts.post_body}</h5>
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
               ))}
            </ul>
         </div>
      );
   }
}


const mapStateToProps = (state) => {
   return{
      posts: state.posts.posts.data
   }
};

const mapsDispatchToProps = {
   fetchPosts
}

export default connect(mapStateToProps, mapsDispatchToProps)(TextPostComponent);