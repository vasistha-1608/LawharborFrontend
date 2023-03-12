import React from 'react'
import Card from 'react-bootstrap/Card';
import { ContactMailOutlined, ContactPhoneOutlined, } from '@mui/icons-material';
import './style/UserCard.css';

export default function UserCard(props) {
    const { id, name, email, phoneNo, role } = props.user;
    return (
        <div>
            <Card bg={"dark"} text={"wheat"} className="mb-3 userCard" key={id} >
                <Card.Body>
                    <Card.Title className="mb-3">Name : {name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><ContactMailOutlined style={{ fontSize: "1.5rem" }} /> : {email}</Card.Subtitle>
                    <Card.Text className="mb-2">
                        <ContactPhoneOutlined style={{ fontSize: "1.5rem" }} /> : {phoneNo}
                    </Card.Text>
                    <Card.Text className="mb-2">  Role : {role}</Card.Text>
                </Card.Body>
            </Card >

        </div>
    )
}
