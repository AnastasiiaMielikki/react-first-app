const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, alien!', likescount: 16 },
        {id: 2, message: 'Hello, world!', likescount: 25 },
        {id: 3, message: 'Hello!', likescount: 2 }
        ],
    newPostText: 'hello'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type)  {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likescount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
        return stateCopy;
    }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText; 
            return stateCopy;
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;