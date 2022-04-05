import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = 
    state.dialogsData.map (dialogsData =>
        <DialogItem name={dialogsData.name} id={dialogsData.id}/>);

    let messagesElements = 
    state.messagesData.map (messagesData =>
        <Message message={messagesData.message} />);

   let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>

                <div className={classes.messages}>
                    <div>{messagesElements}</div>

                    <div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder="enter your message"/>
                    </div>
                
                    <div>
                        <button onClick={onSendMessageClick}>New Message</button>
                    </div>
                    </div>         
                </div>

                

            </div>
    )
}

export default Dialogs;
