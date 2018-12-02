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


