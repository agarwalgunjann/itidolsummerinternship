import React from 'react';

const statusColors = {
  active: 'green',
  Past: 'blue',
  Upcoming: 'yellow'
};

const EventCard = ({ event }) => {
  const { name, date, location, status } = event;
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '30px',
    padding: '16px 100px',
    width: '170px', 
    margin: '8px 0',
    backgroundColor: statusColors[status] || 'white'
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default EventCard;
