import React from 'react';
import drake from '../../Assets/drake.jpeg';
import {connect} from 'react-redux';
import {friendsListFetch} from '../../Redux/Actions/friends.action';
import TaylorOne from '../../Assets/TaylorSwift.jpeg';
import TaylorTwo from '../../Assets/TaylorSwiftTwo.jpg';
import '../../App.css';

export class FriendsComponent extends React.Component{

   componentDidMount(){
      this.props.friendsListFetch();
   }
   
   render(){
      console.log(this.props.friendsList.friendsList);
      return (
         <div>
            <div className="container mt-3">
               <div className="row" id="friend-Info-card">
                  {this.props.friendsList.map((friendsList, index)=>(
                     <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                        <div class="card" Style="width: 15rem;">
                           <img class="card-img-top" src={drake} alt=""/>
                           <div class="card-body">
                              <h5 class="card-title">{friendsList.first_name} {friendsList.last_name}</h5>
                              <p class="card-text">He loves work from home. He likes to Sing and Rap.</p>
                              <button href="#" class="btn btn-danger">view</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return{
      friendsList: state.friendsList.friendsList
      //posterInfo: state.posts.posts.posterInfo
   }
};

const mapsDispatchToProps = {
   friendsListFetch
}

export default connect(mapStateToProps, mapsDispatchToProps)(FriendsComponent);