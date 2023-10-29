// import React from 'react'
// import { Link } from 'react-router-dom';
// import './vaccination.css';

// function Calendar() {
//   return (
//     <div className="calendar">
//     <h1> date</h1>
//     </div>
//   );
// }





// export default Calendar;


// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the calendar CSS
// import './vaccination.css';

// const localizer = momentLocalizer(moment);

// function CustomCalendar() {
//   const events = [
//     // Add your events here, in the following format:
//     {
//       title: 'Event 1',
//       start: new Date(2023, 10, 10, 10, 0), // Use real date and time
//       end: new Date(2023, 10, 10, 12, 0),   // Use real date and time
//     },
//     {
//       title: 'Event 2',
//       start: new Date(2023, 10, 15, 14, 0),
//       end: new Date(2023, 10, 15, 16, 0),
//     },
//     // Add more events as needed
//   ];

//   return (
//     <div className="calendar">
//       <h1>Event Calendar</h1>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }} // Adjust the height as needed
//       />
//     </div>
//   );
// }

// export default CustomCalendar;


// import { useState } from 'react';
// import Calendar from 'react-calendar';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// function Calendar() {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default Calendar;


