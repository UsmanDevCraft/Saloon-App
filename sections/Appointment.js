
import React from 'react';
import { useState } from 'react';
import AppointmentCard from "@/components/AppointmentCard"
import { Title, TitleSm } from "@/components/common/Title"
import { Card } from "@/components/common/Card"
export default function Appointment() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send form data to your backend here
    console.log('Appointment Details:', { service, date, time });
  };

  return (
    <section className='agency bg-top'>
    <div className='container'>
       <div className='heading-title'>
      
      <TitleSm title='Appointment' /> <br />
            <br />
            <Title title='Book An Appointment Right Now' />
      </div>
    <AppointmentCard/>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="service">Service</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="consultation">Consultation</option>
            <option value="follow-up">Follow-Up</option>
            <option value="check-up">Check-Up</option>
          </select>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form> */}
   
    </div>
</section>
  );
}
