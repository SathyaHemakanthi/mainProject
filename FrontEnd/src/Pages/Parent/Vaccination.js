import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./vaccination.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function UpcomingEvents({ events }) {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <li>Next clinic 09.11.2023</li>
    </div>
  );
}

function VaccinationHistory({ history }) {
  return (
    <div>
      <h2>Vaccination History</h2>
      <li>Got polio3 on 22.10.2023</li>
    </div>
  );
}

function Calendar1() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [vaccinationHistory, setVaccinationHistory] = useState([
    "First dose on 2021-08-15",
    "Second dose on 2021-09-10",
  ]);
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
    <div className="Calender-border">
      <div class="cale">
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week']} 
        />
      </div>
      
    </div>

<div className="app-container">
<div className="left-side">
  <UpcomingEvents events={allEvents} />
  <VaccinationHistory history={vaccinationHistory} />
</div>
{/* Add your right-side content here */}
</div>
</>
  );
}

export default Calendar1;

