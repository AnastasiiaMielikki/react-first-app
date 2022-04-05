import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

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
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('heeeey')
    },


    
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;

window.store = store;