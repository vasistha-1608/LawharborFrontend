import React, { useState, useEffect } from 'react'
import UserService from '../../service/UserService';
import ViewUser from './ViewUser/ViewUser';

export default function ViewUserComponent() {

    const [userList, setUserList] = useState([]);

    const getUserList = async () => {
        await UserService.getUserList().then(res => {
            if (res.data !== null) {
                setUserList(res.data);
            }

        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getUserList();
    }, [])


    return (
        <div className='component' >
            <h1>User List</h1>
            {userList.length > 0 ? <ViewUser userList={userList} /> : <div>No Data To Display</div>}

        </div>
    )
}
