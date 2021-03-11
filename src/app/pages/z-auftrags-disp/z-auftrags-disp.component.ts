import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import deLocale from '@fullcalendar/core/locales/de';

@Component({
  selector: 'app-z-auftrags-disp',
  templateUrl: './z-auftrags-disp.component.html',
  styleUrls: ['./z-auftrags-disp.component.scss']
})
export class ZAuftragsDispComponent  {
  
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'dayGridMonth timeGridWeek timeGridDay listWeek',
      center: 'title',
      right: 'today prevYear,prev,next,nextYear'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // nur zur Demonstration mit Test-Events
    weekends: false,
    locale: 'de',
    locales: [deLocale],
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
    select: this.handleDateSelect.bind(this),
    eventDragStop: this.handleDragStop.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };
  currentEvents: EventApi[] = [];

  //handleCalendarToggle: Kalender komplett ausblenden

  /*handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }
  */

  //handleWeekendsToggle: das Wochenende ein-/ausblenden

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  //handleDateSelect: Erstellung von Events durch Selektion des gewünschten Zeitraums

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Geben Sie hier bitte die Auftragsbezeichung in folgendem Format ein: "Stadtbezirk YY.Durchlauf"');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // Selektion aufheben

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }


//handleDragStop löscht Event, in dem man es mit der Maus auf das Delete-Icon zieht 

  handleDragStop(eventDragStop) {
    
      let trashEl = document.getElementById('fcTrash');
          
      let x1 = 184 + trashEl.offsetLeft; //Start des Icons
      let x2 = 184 + trashEl.offsetLeft + trashEl.offsetWidth; //Ende des Icons
      let y1 = 62 + trashEl.offsetTop; //Start des Icons von oben
      let y2 = 62 + trashEl.offsetTop + trashEl.offsetHeight; //Ende des Icons unten

      //Folgende console.logs sind nur zu Testzwecken im Code, um ggf. die korrekte Position des Icons einzustellen (Hier muss berücksichtigt werden: SideNav-Breite von 184 und TopBar Höhe von 62)
      //console.log(x1)
      //console.log(y1)
      //console.log(x2)
      //console.log(y2)
      //console.log(eventDragStop.jsEvent.pageX)
      //console.log(eventDragStop.jsEvent.pageY)
      
            if (eventDragStop.jsEvent.pageX >= x1 && eventDragStop.jsEvent.pageX <= x2 &&
            eventDragStop.jsEvent.pageY>= y1 && eventDragStop.jsEvent.pageY <= y2)


               { if (confirm(`Möchten Sie folgenden Auftrag wirklich Löschen: '${eventDragStop.event.title}'?`)) {
                    eventDragStop.event.remove();}
            }
        }
    

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}


