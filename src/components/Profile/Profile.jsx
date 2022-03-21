import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  debugger;
    return (
        <div>
        <ProfileInfo />
        
        <MyPosts postsData={props.profilePage.postsData} 
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}/>
      </div>
    )
}

export default Profile;


