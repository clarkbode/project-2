import React from 'react';
import '../../Include/bootstrap';
import {connect} from 'react-redux';
import {fetchPostComments} from '../../Redux/Actions/post.comment.actions'
import {fetchPosts} from '../../Redux/Actions/post.actions'
import drake from '../../Assets/drake.jpeg';

export class PostCommentComponent extends React.Component{

  componentDidMount(){
    this.props.fetchPostComments();
    this.props.fetchPosts();
  }
  
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
                    {this.props.comments.map((comment, index)=>(  
                        <li className="list-group-item">
                           <img className="" Style="border-radius:50%; width: 40px; height: 40px; align-items: right; 
                            border: 1px solid; border-color: black;" src={drake} alt="Avatar" align="left" />
                           <textarea type="text" rows="2" className="form-control m-auto" id="ip5" readOnly>
                              {comment.commentBody}
                           </textarea>
                        </li>
                    ))}
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

const mapStateToProps = (state) => {
  return{
    posts: state.posts.posts,
    comments: state.comments.comments
  }
};

const mapsDispatchToProps = {
  fetchPosts,
  fetchPostComments
}

export default connect(mapStateToProps, mapsDispatchToProps)(PostCommentComponent);