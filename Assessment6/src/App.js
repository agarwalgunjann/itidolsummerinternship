import React from 'react';
import EventList from './components/EventList';
import './App.css';

const events = [
  { id: 1, name: 'Tech Conference', date: '2024-07-10', location: 'New York', status: 'active' },
  { id: 2, name: 'Music Festival', date: '2024-07-05', location: 'Los Angeles', status: 'Past' },
  { id: 3, name: 'Art Expo', date: '2024-07-12', location: 'Chicago', status: 'Upcoming' },
];

const App = () => {
  return (
    <div>
      <h1>Event List</h1>
      <EventList events={events} />
    </div>
  );
}

export default App;