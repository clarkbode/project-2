import React from 'react';
import '../../Include/bootstrap';
import {connect} from 'react-redux';
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
                          <input className="form-control" type="text" rows="1" id="posting-text-modal"
                          value={this.props.inputComment}
                          onChange={this.props.inputChanged}
                          >{this.props.inputComment}</input>
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


const mapStateToProps = (state) => {
    return {
      inputComment: state.inputComment
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      inputChanged: (evt) => {
        console.log('Changed!', evt.target.value);
        const action = {type: ''}
      }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTextPostComponent);
