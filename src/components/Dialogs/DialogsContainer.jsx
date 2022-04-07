import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';

// const DialogsContainer = () => {

//     return (
//             <StoreContext.Consumer> 
//                 {store => {
//                     let state = store.getState().dialogsPage;

//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     }
                
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body));
//                     }
            
//                     return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                     dialogsPage={state}/>
//                 }
//             }
//             </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchTpProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTpProps)(Dialogs);

export default DialogsContainer;
