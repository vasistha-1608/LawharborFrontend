import React from 'react'
import UserCard from './UserCard'
import './style/ViewUserList.css'

export default function ViewUser(props) {

    const renderUserList = props.userList.map(user => {
        return (
            <UserCard user={user} key={user.id} />
        )
    })

    return (
        <div id='renderUserList' >
            {renderUserList}
        </div>
    )
}
