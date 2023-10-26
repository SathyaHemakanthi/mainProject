import React from 'react'
import { Link } from 'react-router-dom';
import { Inject,ScheduleComponent,Day, Week,WorkWeek,Month,Agenda } from "@syncfusion/ej2-react-schedule"; 
import './growth.css';

function Growth() {
  return (
    <div>
        <h1 className='con_1'>Growth</h1>
        {/* <ScheduleComponent currentView='Month'>
          <Inject services ={[Day, Week,WorkWeek,Month,Agenda]}/>
        </ScheduleComponent> */}

        
    </div>
  )
}

export default Growth;