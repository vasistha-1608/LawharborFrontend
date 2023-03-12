import React from 'react'
import Card from 'react-bootstrap/Card';
import { ContactMailOutlined, ContactPhoneOutlined, } from '@mui/icons-material';
import { Button, ButtonGroup } from 'react-bootstrap';
import { RegistrationStatus } from './RegistrationStatus.tsx';
import './style/RegistrationCard.css';


export default function RegistrationCard(props) {

    const { id, name, email, phoneNo, role, status } = props.registration;

    return (

        <Card bg={"dark"} text={"wheat"} className="mb-3 regCard" key={id} >
            <Card.Body>
                <Card.Title className="mb-3" >Name : {name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><ContactMailOutlined style={{ fontSize: "1.5rem" }} /> : {email}</Card.Subtitle>
                <Card.Text className="mb-2">
                    <ContactPhoneOutlined style={{ fontSize: "1.5rem" }} /> : {phoneNo}<br />
                </Card.Text>
                <Card.Text className="mb-2">Role : {role}</Card.Text>
                {status === RegistrationStatus.PENDING ?
                    <Card.Text className="mb-2" >
                        Status : Pending <br />
                        <ButtonGroup style={{ padding: "0.5rem", textAlign: "center", margin: "0.5rem auto" }} >
                            <Button type="button" className="btn btn-primary" onClick={() => props.acceptRegistration(email)}>Accept</Button>
                            <Button type="button" className="btn btn-danger" onClick={() => props.rejectRegistration(email)}>Reject</Button>
                        </ButtonGroup>
                    </Card.Text> : null}
                {status === RegistrationStatus.APPROVED ? <Card.Text>Status : Accepted</Card.Text> : null}
                {status === RegistrationStatus.REJECTED ? <Card.Text>Status : Rejected</Card.Text> : null}



            </Card.Body>
        </Card >


    )
}
