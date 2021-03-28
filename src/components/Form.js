import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <h2>New Appointment</h2>

            <form>
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Pet's Name"
                />

                <label>Owner's Name</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Owner's Name"
                />

                <label>Date</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />

                <label>Time</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />

                <label>Symptom</label>
                <textarea
                    className="u-full-width"
                    name="Symptom"
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