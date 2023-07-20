import React, { useState } from 'react';
import { EventApi, DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { Task } from '../../interfaces/Task';

interface Props {
  // currentEvents: EventApi[];
  onSelectedTask: (data: Task) => void;
  tasks: Task[];
}

const Calendar: React.FC<Props> = (props: Props) => {

  // const handleDateSelect = (selectInfo: DateSelectArg) => {
  //   let title = prompt('Please enter a new title for your event');
  //   let calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay,
  //     });
  //   }
  // };

  // const handleEvents = (events: EventApi[]) => {
  //   setCurrentEvents(events);
  // };

  const handleEventClick = (clickInfo: EventClickArg) => {
    let foundTask = props.tasks.find((item) => item.id === Number(clickInfo.event.id)) as Task;
    props.onSelectedTask(foundTask);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  function convertTaskToEvent(task: Task) {
    return {
      id: task.id.toString(),
      title: task.description,
      start: task.dueDate,
      allDay: true
      // Add other properties as needed (e.g., 'end', 'allDay', 'extendedProps', etc.).
    };
  }

  const events = props.tasks.map(convertTaskToEvent);

  function renderEventContent(eventContent: EventContentArg) {
    return (
      < >
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  }

  return (
    <div className='calendar'>
      <div className='calendar-main'>
        <FullCalendar
          plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          initialView='dayGridMonth'
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          firstDay={1}
          aspectRatio={2.4}
        // height={'auto'}
        /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>
    </div>
  );
};

export default Calendar;
