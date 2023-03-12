import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import './style/CaseRecord.css'
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import CaseRecordForm from './CaseRecordComponent/CaseRecordForm';
import ViewCaseRecord from './CaseRecordComponent/ViewCaseRecord';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function CaseRecordComponent() {
    const [CaseRecords, setCaseRecords] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const CaseRecordsHandler = (Course) => {
        const data = {
            id: uuidv4(),
            ...Course,
        }
        setCaseRecords([...CaseRecords, data]);
    }
    const deleteHandler = (id) => {
        const newCaseRecordsList = CaseRecords.filter((course) => {
            return course.id !== id;
        });
        setCaseRecords(newCaseRecordsList);
    }

    useEffect(() => {
        const caseRecords = JSON.parse(localStorage.getItem('CaseRecords'));
        setCaseRecords(caseRecords);
    }, [])


    useEffect(() => {
        localStorage.setItem('CaseRecords', JSON.stringify(CaseRecords));
    }, [CaseRecords]);

    return (
        <div id='CaseRecords-Component'>
            <div className='header'>
                <h2>Education Details</h2>
                <Fab size="small" color="primary" aria-label="add" onClick={handleOpen} >
                    <AddIcon />
                </Fab>
            </div>
            <Modal

                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CaseRecordForm CaseRecordsHandler={CaseRecordsHandler} handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (CaseRecords.length < 1) ? (<p>Please click <code><b> + </b></code> to add CaseRecords </p>)
                        :
                        (<ViewCaseRecord CaseRecords={CaseRecords} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
