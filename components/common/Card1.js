import React from "react";

export const Card1 = ({ data, onBook, isBooked }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <h3>{data.title}</h3>
        <p>{data.category}</p>
        <div className='appointment-info'>
          <p>Date: {data.date}</p>
          <p>Time: {data.time}</p>
        </div>
        <button  
          onClick={onBook}
          className='button-primary'
          disabled={isBooked} // Disable button if already booked
        >
          {isBooked ? "Session Booked" : "Book Appointment"}
        </button>
      </div>
    </div>
  );
};
