let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, alien!', likescount: 16 },
                {id: 2, message: 'Hello, world!', likescount: 25 },
                {id: 3, message: 'Hello!', likescount: 2 }
                ],
            newPostText: 'hello'
        },
        dialogsPage: {
            dialogsData:[
                {id: 1, name: 'Kotik'},
                {id: 2, name: 'Zaika'},
                {id: 3, name: 'Enotik'},
                {id: 4, name: 'Ptichka'},
            ],
            messagesData: [
                {id: 1, message: 'Vecher v hatu!'},
                {id: 2, message: 'Vecher dobre!'},
                {id: 3, message: 'Vecher.'},
                {id: 4, message: 'V'},
            ]
        }
    },
    getState () {
        return this._state;
    },
    
    _callSubscriber() {
        console.log('heeeey')
    },

    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likescount: 0
        };
  
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe  (observer) {
        this._callSubscriber = observer;
      }
}

  export default store;

window.store = store;