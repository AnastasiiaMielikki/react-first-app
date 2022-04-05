const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
    
            state.messagesData.push({id: 5, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;