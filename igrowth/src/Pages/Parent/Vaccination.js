import format from "date-fns/format";
import { Link } from 'react-router-dom';
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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





function Calendar1() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [vaccinationHistory, setVaccinationHistory] = useState([
      "First dose on 2021-08-15",
      "Second dose on 2021-09-10",
    ]);
    const [allEvents, setAllEvents] = useState(events);

    
    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
      
        <div className="App">

            <div>
                {/* <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button> */}
            </div>
            <div class="cale">
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"  />
            </div>
            <div className="app-container">
        <div className="left-side">
          <UpcomingEvents events={allEvents} />
          <VaccinationHistory history={vaccinationHistory} />
        </div>
        {/* <div className="right-side">
          <VaccinationHistory history={vaccinationHistory} />
        </div> */}
      </div>

            
        </div>
    );
}
function UpcomingEvents({ events }) {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

function VaccinationHistory({ history }) {
  return (
    <div className="vaccination-history">
      <h2>Vaccination History</h2>
      {/* <ul>
        {history.map((entry, index) => (
          // <li key={index}>{entry}</li>
        ))}
      </ul> */}
    </div>
  );
}



export default (Calendar1,UpcomingEvents,VaccinationHistory)