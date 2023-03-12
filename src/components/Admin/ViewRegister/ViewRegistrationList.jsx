import React from 'react'
import RegistrationCard from './RegistrationCard';
import './style/ViewRegistration.css';

export default function ViewRegistrationList(props) {

    const acceptRegistration = (email) => {
        props.acceptRegistration(email);
    };

    const rejectRegistration = (email) => {
        props.rejectRegistration(email);
    };

    const renderRegistrationList = props.registrationList.map((registration, index) => {
        return (
            <RegistrationCard registration={registration} key={index} acceptRegistration={acceptRegistration} rejectRegistration={rejectRegistration} />
        );
    });
    return (
        <div id='viewRegistration' >
            {renderRegistrationList}
        </div>
    )
}
