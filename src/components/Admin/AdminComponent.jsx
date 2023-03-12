import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Error from '../Error';
import AdminNavLink from './AdminNavLink';
import AdminRequestList from './AdminRequestList';
import ViewUserComponent from './ViewUserComponent';
import './style/AdminComponent.css'
export default function AdminComponent() {
    return (
        <div>
            <AdminNavLink />
            <Routes>
                <Route path="/admin/" element={<AdminRequestList />} />
                <Route path="/admin/ViewUser" element={<ViewUserComponent />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}
