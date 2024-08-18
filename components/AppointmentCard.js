import React, { useState } from "react";
import { Card1 } from "./common/Card1";
import { appointmentOptions } from "@/assets/data/dummydata";

const AppointmentCard = () => {
  // State to manage which appointment has been booked
  const [bookedAppointments, setBookedAppointments] = useState({});

  const handleBookAppointment = async (appointment) => {
    const { title, date, time } = appointment;

    try {
      // Send data to the backend or database
      const response = await fetch('https://backend-saloon.vercel.app/api/bookAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, date, time }),
      });

      if (response.ok) {
        // Mark the appointment as booked
        setBookedAppointments((prev) => ({
          ...prev,
          [appointment.id]: true,
        }));
      } else {
        console.error("Failed to book the appointment");
      }
    } catch (error) {
      console.error("Error booking the appointment:", error);
    }
  };

  return (
    <div className='container appointment-card grid-2 py'>
      {appointmentOptions.map((item) => (
        <Card1
          data={item}
          key={item.id}
          onBook={() => handleBookAppointment(item)}
          isBooked={bookedAppointments[item.id]}
        />
      ))}
    </div>
  );
};

export default AppointmentCard;
