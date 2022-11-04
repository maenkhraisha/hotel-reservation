import React, { useState } from 'react';
import ReservationRooms from './ReservationRooms';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => {
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');
    const [rooms, setrooms] = useState([]);
  
    const findRooms = (e) => {
      e.preventDefault();
      if (date && city) {
        fetch(`/api/v1/users/1/reservations`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((result) => setRooms(result.rooms));
      }
    };
  
    return (
      <div
        className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}
    >
    <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a Room</h2>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Reserve your dream room in our Hotel!🙂
      </p>
      <form
        className={`${styles.zindex} d-flex justify-content-around mb-5 align-items-end`}
        onSubmit={findRooms}
      >
        <div>
          <label htmlFor="city" className="form-label text-white ms-3">
            Your city:
          </label>
          <input
            id="city"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="City"
            aria-label=".form-control-lg example"
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label text-white ms-3">
            Reservation date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Date"
            aria-label=".form-control-lg example"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Reserve;