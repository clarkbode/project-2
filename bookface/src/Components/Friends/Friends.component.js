import React from 'react';
import drake from '../../Assets/drake.jpeg';
import TaylorOne from '../../Assets/TaylorSwift.jpeg';
import TaylorTwo from '../../Assets/TaylorSwiftTwo.jpg';
import '../../App.css';

export class FriendsComponent extends React.Component{
   render(){
      return (
         <div>
            <div className="container mt-3">
               <div className="row" id="friend-Info-card">
                  <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                     <div class="card" Style="width: 15rem;">
                        <img class="card-img-top" src={drake} alt=""/>
                        <div class="card-body">
                           <h5 class="card-title">Drizzy Drake</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button href="#" class="btn btn-danger">view</button>
                        </div>
                     </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                     <div class="card" Style="width: 15rem;">
                        <img class="card-img-top" src={TaylorOne} alt=""/>
                        <div class="card-body">
                           <h5 class="card-title">Taylor Swift</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button href="#" class="btn btn-danger">view</button>
                        </div>
                     </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                     <div class="card" Style="width: 15rem;">
                        <img class="card-img-top" src={TaylorTwo} alt=""/>
                        <div class="card-body">
                           <h5 class="card-title">Taylor Swift 2</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button href="#" class="btn btn-danger">view</button>
                        </div>
                     </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                     <div class="card" Style="width: 15rem;">
                        <img class="card-img-top" src={drake} alt=""/>
                        <div class="card-body">
                           <h5 class="card-title">Drizzy Drake</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button href="#" class="btn btn-danger">view</button>
                        </div>
                     </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-3 champ-col"> 
                     <div class="card" Style="width: 15rem;">
                        <img class="card-img-top" src={drake} alt=""/>
                        <div class="card-body">
                           <h5 class="card-title">Drizzy Drake</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button href="#" class="btn btn-danger">view</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}