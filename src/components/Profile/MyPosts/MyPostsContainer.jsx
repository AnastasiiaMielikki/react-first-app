import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

let state = props.store.getState();

let addPost = () => {
  props.store.dispatch(addPostActionCreator());
};

let onPostChange = (text) => {
  let action = updateNewTextActionCreator(text);
  props.store.dispatch(action);
};

    return (<MyPosts updateNewText={onPostChange} addPost={addPost} 
      postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;


