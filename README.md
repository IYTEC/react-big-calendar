# react-big-calendar

An events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach.

[**DEMO and Docs**](http://jquense.github.io/react-big-calendar/examples/index.html)

A fork from [**React Big Calendar**](http://jquense.github.io/react-big-calendar/examples/index.html)

Inspired by [Full Calendar](http://fullcalendar.io/).

## Use and Setup

`yarn add react-big-calendar` or `npm install --save react-big-calendar-scheduler`

Include `react-big-calendar/lib/css/react-big-calendar.css` for styles, and make sure your calendar's container
element has a height, or the calendar won't be visible. To provide your own custom styling, see the [Custom Styling](#custom-styling) topic.

### Localization and Date Formatting

`react-big-calendar-scheduler` includes three options for handling the date formatting and culture localization, depending
on your preference of DateTime libraries. You can use either the [Moment.js](https://momentjs.com/), [Globalize.js](https://github.com/jquery/globalize) or [date-fns](https://date-fns.org/) localizers.

Regardless of your choice, you **must** choose a localizer to use this library:

#### Moment.js

```js
import { Calendar, momentLocalizer } from 'react-big-calendar-scheduler'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
```

## Custom Styling

Out of the box, you can include the compiled CSS files and be up and running. But, sometimes, you may want to style
Big Calendar to match your application styling. For this reason, SASS files are included with Big Calendar.

```
  @import 'react-big-calendar/lib/sass/styles';
  @import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD
```

SASS implementation provides a `variables` file containing color and sizing variables that you can
update to fit your application. _Note:_ Changing and/or overriding styles can cause rendering issues with your
Big Calendar. Carefully test each change accordingly.

## Join us on Reactiflux Discord

Join us on [Reactiflux Discord](https://discord.gg/reactiflux) community under the channel #libraries if you have any questions.
