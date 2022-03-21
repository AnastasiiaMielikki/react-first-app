import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = 
    props.dialogsData.map (dialogsData =>
        <DialogItem name={dialogsData.name} id={dialogsData.id}/>);

    let messagesElements = 
    props.messagesData.map (messagesData =>
        <Message message={messagesData.message} />);

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>

                <div className={classes.messages}>
                    {messagesElements}            
                </div>
            </div>
    )
}

export default Dialogs;
