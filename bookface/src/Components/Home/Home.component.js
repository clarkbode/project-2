import React, { Component } from 'react';
import TextPostComponent from './TextPost.component';
//import {PicturePostComponent} from './PicturePost.component';
import PostCommentComponent from './PostComment.component';


export class HomeComponent extends React.Component {
    render() {
      return (
        <div>
          <TextPostComponent/>
          {/* <PicturePostComponent/> */}
          <PostCommentComponent/>
        </div>
      )
    }
  }
