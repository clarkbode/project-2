import React from 'react';
import '../../Include/bootstrap';
// **Modal/Popup Posting Text**
export class ComposeTextPostComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      inputComment: ''
    }
  }
  componentDidMount(){
    console.log(this.props.posts);
  }
  
  handleInputComment= (e)=>{
    this.setState({
       ...this.state,
       inputComment: e.target.value
    })
  }

  submitInputRequest = (e) => {
    e.preventDefault();
    this.setState({
       ...this.state
    });

    let inputCommentRequest = {
      "post_id": '0',
      "author_id": '3',
      "post_body": this.state.inputComment,
      "post_image": "www.url.com",
       "post_likes": '0'
    }
    console.log(inputCommentRequest);

    fetch('http://localhost:8088/posts/add', {
         method: 'POST',
         body: JSON.stringify(inputCommentRequest),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: 'include'
       })
         .then(res => {
            if(res.status === 200){
               alert("You have succefully Added Comment!");
            }
         })
         .catch(err=>{
            console.log(err)
      }) 
   }

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
                        <input className="form-control" type="text" rows="1" id="posting-text-modal"
                          value={this.state.inputComment}
                          onChange={this.handleInputComment}
                        ></input>
                      </li> 
                  </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.submitInputRequest}>Post</button>
                </div>
              </div>
            </div>
        </div>
      );
   }
}


