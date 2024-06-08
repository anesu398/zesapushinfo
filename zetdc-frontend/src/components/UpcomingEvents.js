import { useEffect, useState } from 'react';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/upcoming-events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.name} className="mb-2">
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
