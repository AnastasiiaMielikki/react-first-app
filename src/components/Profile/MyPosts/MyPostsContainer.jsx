import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


// const MyPostsContainer = () => {

//     return (
//     <StoreContext.Consumer> 
//       {store => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
        
//         let onPostChange = (text) => {
//           let action = updateNewTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return <MyPosts updateNewText={onPostChange} addPost={addPost} 
//         postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
//     }
//     }
//     </StoreContext.Consumer>)
// }

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewText: (text) => {
      let action = updateNewTextActionCreator(text);
          dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


