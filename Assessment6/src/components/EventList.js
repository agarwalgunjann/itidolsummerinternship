import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
const listStyle = {
  display: 'flex',
  'justify-content': 'space-around'
}

  return (
    <div style={listStyle}>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
