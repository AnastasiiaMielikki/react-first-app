import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElement = 
  props.postsData.map (postsData =>
  <Post message={postsData.message} likesCount={postsData.likescount}/>);

let newPostElement = React.createRef();

let onAddPost = () => {
  props.addPost();
};

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewText(text);
};

    return (
        <div className={classes.postsBlock}>
          <h3>My Posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} 
              ref={newPostElement} 
              value={props.newPostText}/>
            </div>
            <div>
              <button onClick={onAddPost}>New Post</button>
            </div>
          </div>
          <div className={classes.posts}>
              {postsElement}
          </div>
        </div>
    )
}

export default MyPosts;


