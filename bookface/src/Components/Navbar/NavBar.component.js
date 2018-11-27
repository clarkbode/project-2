import React from 'react';
import {Link} from 'react-router-dom';
import '../../Include/bootstrap';
import drake from '../../Assets/drake.jpeg';
import {ComposeTextPostComponent} from './ComposeTextPost.component';
import {PictureUploadComponent} from './PictureUpload.component';



export class NavBarComponent extends React.Component{

   render(){
      return(
      <> 
      <ComposeTextPostComponent/>
      <PictureUploadComponent/>

      <div className="">
            <div className="navbar navbar-light bg-danger flex-row-sb mt-1 mb-1">
               <div className=""> 
                  <h1>BookFace(BF)</h1> 
               </div>
               <div> 
                  <img Style="border-radius: 50%; width: 20%; height: 20%; align-items: right; border-style: solid; border-color: black;" src={drake} alt="Avatar" align="right" ></img>
               </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item" id="log-out-btn">
                     <Link to="/home" className="btn btn-outline-danger" role="button" id="" 
                        aria-haspopup="true" aria-expanded="false"> Home </Link>
                  </li> 
                  <li className="nav-item" id="log-out-btn">
                     <Link to="/profile" className="btn btn-outline-danger" role="button" id="" 
                     aria-haspopup="true" aria-expanded="false"> Profile </Link>
                  </li>
                  <li className="nav-item" id="log-out-btn">
                     <Link to="/friends" className="btn btn-outline-danger" href="#" role="button" id="" 
                     aria-haspopup="true" aria-expanded="false"> Friends </Link>
                  </li>
                  <li className="nav-item" id="log-out-btn">
                  <div className="dropdown">
                        <a className="btn btn-outline-danger dropdown-toggle" href="#" role="button" id="" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Create 
                        </a>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" data-toggle="modal" data-target="#upload-picture-modal" > Upload</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#post-text-modal" >Compose</a>
                     </div>
                  </div>
                  </li>
               </ul>
               <form className="form-inline my-2 my-lg-0 ">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-danger my-2 my-sm-0 mr-10" type="submit">Search</button>
               </form>
               <div className="ml-10" id="log-out-btn">
               <div className="dropdown dropleft">
                  <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Log Out</a>
                  <a className="dropdown-item" href="#">Setting</a>
                  </div>
               </div>
               </div> 
            </div>
            </nav>   
         </div>
         </> 
      );
   }
}
