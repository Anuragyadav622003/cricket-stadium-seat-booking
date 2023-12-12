import React, { useEffect, useState } from 'react';
import Card from './Card';

function Event() {
  const [events, setEvents] = useState([]);
  const [uniqueEvents, setUniqueEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/cricket');
        const data = await response.json();
        setEvents(data);

        const removeDuplicates = (arr, key) => {
          return arr.filter((item, index, self) => {
            return index === self.findIndex((t) => t[key] === item[key]);
          });
        };

        const uniqueData = removeDuplicates(data, 'event_name');
        setUniqueEvents(uniqueData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const filteredEvents = selectedEvent
    ? events.filter((event) => event.event_name === selectedEvent)
    : events;

  return (
    <div className='bg-slate-900'>
      <div className='my-4 w-1/2 mx-auto'>
        <select
          id='exampleSelect'
          name='exampleSelect'
          value={selectedEvent}
          onChange={handleSelectChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value='' disabled>
            Select an event
          </option>
          {uniqueEvents.map((event) => (
            <option key={event.event_name} value={event.event_name}>
              {event.event_name}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-wrap justify-center gap-16 my-11 min-h-screen'>
        {filteredEvents.map((event) => (
          <div className='mt-10' key={event.id}>
            <Card data={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
