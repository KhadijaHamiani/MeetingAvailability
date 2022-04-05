const data = require('./data.json');
const moment = require('moment');

const findFreeTimes = (start, end, duration, data) =>
  data.filter(
    (e) =>
      moment(e.start).isSameOrAfter(start) &&
      moment(e.end).isSameOrBefore(end) &&
      moment(e.end).diff(e.start, 'm') === duration
  );
const start = moment('2017-02-21T05:00:00-05:00').parseZone();
const end = moment('2017-02-21T21:15:00-05:00').parseZone();

const freeSlots = findFreeTimes(start, end, 30, data);
console.log('freeSlots :>> ', freeSlots);
