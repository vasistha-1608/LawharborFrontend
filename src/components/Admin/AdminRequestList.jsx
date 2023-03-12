import React from 'react'
import RegistrationService from '../../service/RegistrationService';
import ViewRegistrationList from './ViewRegister/ViewRegistrationList';

export default function AdminRequestList() {

    const [registrationList, setRegistrationList] = React.useState([]);

    const getRegistrationList = async () => {
        await RegistrationService.getRegistrationList().then(response => {
            setRegistrationList(response.data);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    const checkResponseStatus = (status) => {
        if (status === 200) {
            getRegistrationList();
        } else {
            return alert(status)
        }
    }

    const rejectRegistration = async (email) => {
        await RegistrationService.rejectRegistration(email).then(response => {
            checkResponseStatus(response.status);

        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    const acceptRegistration = async (email) => {
        await RegistrationService.acceptRegistration(email).then(response => {
            checkResponseStatus(response.status);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }


    React.useEffect(() => {
        getRegistrationList();
    }, [])

    return (
        <div className='component'>

            <h1>AdminRequestList</h1>

            {registrationList.length > 0 ? <ViewRegistrationList registrationList={registrationList} acceptRegistration={acceptRegistration} rejectRegistration={rejectRegistration} /> : <div>No Registration Request</div>}


        </div>
    )
}
