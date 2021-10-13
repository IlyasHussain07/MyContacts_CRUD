import React, { useState } from 'react';
import Styles from './Contacts.module.css';
import Image1 from './userImage.png';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Restore';

export function ContactListItems(props) {

    let { _id, name, emailId, changeHandler, removeItemHandler } = props;

    const [isEdit, setIsEdit] = useState(false);

    const [isName, setIsName] = useState(name);


    return <div className={Styles.contactitems}>
        <div className={Styles.contactName}>
            <img src={Image1} alt="img1" />
            {isEdit ?
                <div className={Styles.editItems}>
                    <input type="text" value={isName} onChange={(e) => {
                        setIsName(e.target.value);
                    }} /><br />
                </div>
                :
                <div className={Styles.userInfo}>
                    <p>{name}</p>
                    <span>{emailId}</span>
                </div>}
        </div>
        <div>
            {isEdit ?
                <SaveIcon
                    onClick={() => {
                        changeHandler(_id, isName);
                        setIsEdit(false);
                    }}
                    className={Styles.editIcons} />
                :

                <EditIcon
                    className={Styles.editIcons}
                    onClick={() => {
                        setIsEdit(true);
                    }} />}
            <DeleteIcon
                onClick={() => {
                    removeItemHandler(_id);
                }}
                className={Styles.editIcons} />
        </div>
    </div>;
}
