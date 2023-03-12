import React, { useState } from 'react'
import { TextField } from '@mui/material';

export default function CaseRecordForm(props) {
    const [data, setData] = useState({
        InstituteName: '',
        Degree: '',
        FieldOfStudy: '',
        StartDate: '',
        EndDate: '',
        Grade: '',
        Description: '',
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetHandler = () => {
        setData({
            InstituteName: '',
            Degree: '',
            FieldOfStudy: '',
            StartDate: '',
            EndDate: '',
            Grade: '',
            Description: '',
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.CaseRecordsHandler(data);
        props.handleClose();
        resetHandler();
    }

    return (
        <div id='EduForm'><h3>Education</h3>
            <form onSubmit={submitHandler} id='EduDetails' >
                <TextField className='inputBox' type="text" name="InstituteName" id="Name" label="Institute Name" variant="outlined" required
                    value={data.InstituteName}
                    onChange={(e) => changeHandler(e)}
                />

                <TextField className='inputBox' id="Degree" label="Degree " variant="outlined" name="Degree" required
                    value={data.Degree}
                    onChange={(e) => changeHandler(e)} />

                <TextField className='inputBox' id="FieldOfStudy" label="Field Of Study " variant="outlined" name="FieldOfStudy" required
                    value={data.FieldOfStudy}
                    onChange={(e) => changeHandler(e)} />


                <div className='inputBox'>
                    <label htmlFor="IssueDate">Start Date : </label>
                    <input type="date" name="StartDate" id="StartDate" placeholder='Sart Date' required
                        value={data.StartDate}
                        onChange={(e) => changeHandler(e)} />
                </div>
                <div className='inputBox'>
                    <label htmlFor="EndDate">End Date or <code>(Expected end date)</code> : </label>
                    <input type="date" name="EndDate" id="EndDate" placeholder='End Date'
                        value={data.EndDate}
                        onChange={(e) => changeHandler(e)} />
                </div>

                <TextField className='inputBox' type="text" name="Grade" id="Grade" label='Grade' variant='outlined' required
                    value={data.Grade}
                    onChange={(e) => changeHandler(e)} />

                <TextField className='inputBox' type="text" name="Description" id="Description" label='Institute Description' variant='outlined'
                    value={data.Description}
                    onChange={(e) => changeHandler(e)} />
                <input className='inputBox' type="submit" value="Save" style={{ padding: "0.2rem 0.3rem", fontSize: "1rem" }} />
            </form>
        </div>
    )
}
