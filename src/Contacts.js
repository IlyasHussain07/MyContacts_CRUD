import React, { useState } from 'react'
import Styles from './Contacts.module.css'
import AddIcon from '@material-ui/icons/Add'
import { ContactListItems } from './ContactListItems'
import { contacts } from './contacts.1'

export default function Contacts() {

    const [isCurrentState, setIsCurrentState] = useState(contacts)

    const [isValue, setIsValue] = useState("");

    const emailAddress = isValue.toLowerCase().split(" ").join("")

    const stateHandler = () => {
        setIsCurrentState([
            ...isCurrentState, {
                _id: new Date().getTime(),
                name: isValue,
                emailId: `${emailAddress}@gmail.com`
            }])
        setIsValue("")
    }

    const changeHandler = (_childId, _childName) => {

        console.log(`${_childId} and name ${_childName}`);

        let updatedList = isCurrentState.map((item) => {
            if (item._id === _childId) {
                item.name = _childName;
                let emailValue = _childName.toLowerCase().split(" ").join("")
                item.emailId = `${emailValue}@gmail.com`
            }
            return item;
        })

        setIsCurrentState(updatedList)
    }

    const removeItemHandler = (_removeId) => {
        let removeArray = isCurrentState.filter((item) => {
            return _removeId !== item._id
        })

        setIsCurrentState(removeArray)
    }

    return (
        <div className={Styles.contacts}>
            <div className={Styles.contactList}>
                <div className={Styles.myContact}>
                    <div className={Styles.contactsHeader}>
                        <h2>My Contacts</h2>
                        <div className={Styles.inputSearch}>
                            <input
                                type="text"
                                value={isValue}
                                onChange={(e) => {
                                    setIsValue(e.target.value)
                                }}
                                placeholder="Add Contact"
                            />
                            <AddIcon
                                onClick={stateHandler}
                                className={Styles.addIcon}
                            />
                            <span style={{ color: "red" }}>Note : Do not edit initial Contacts</span>
                        </div>
                    </div>
                    <div className={Styles.contactBody}>
                        {
                            isCurrentState.length === 0 ?
                                <p
                                    style={{
                                        textAlign: "center",
                                        color: 'red',
                                        fontSize: "18px",
                                    }}
                                >"No Contacts are available try to restart the application or Add new Contacts"<br />" Note: Do not Edit initial Contacts "
                                </p>
                                :
                                isCurrentState.map((item) => {
                                    return <ContactListItems
                                        key={item._id}
                                        _id={item._id}
                                        name={item.name}
                                        emailId={item.emailId}
                                        changeHandler={changeHandler}
                                        removeItemHandler={removeItemHandler}
                                    />
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

