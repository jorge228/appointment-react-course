import React, { Fragment, useState } from 'react';

const Form = () => {

    // create state appointment
    const [appointment, updateAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    });

    const { pet, owner, date, time, symptom } = appointment;

    // event when user writes in inpunt
    const handleChange = (e) => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    const submit = (e) =>{
        e.preventDefault();
        
        // validate

        // add id

        // create appointment

        // reset form
    }

    return (
        <Fragment>
            <h2>New Appointment</h2>

            <form
                onSubmit={submit}
            >
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's Name"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />

                <label>Symptom</label>
                <textarea
                    className="u-full-width"
                    name="symptom"
                    onChange={handleChange}
                    value={symptom}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Appointment</button>
            </form>
        </Fragment>
    );
}

export default Form;