import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Bogenhausen 20.7',
    start: '2020-12-15',
    end: '2020-12-17',
  },

  {
    id: createEventId(),
    title: 'Ramersdorf-Perlach 20.8',
    start: '2020-12-21',
    end: '2020-12-26'
  },
  {
    id: createEventId(),
    title: 'Schwabing-Freimann 20.5',
    start: '2020-12-02',
    end: '2020-12-05'
  },

];

export function createEventId() {
  return String(eventGuid++);
}