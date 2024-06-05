import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { CiCalendarDate } from "react-icons/ci";
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import './Calendar.css'

dayjs.locale('es')

function App () {
  const localizer = dayjsLocalizer(dayjs)
  const events = [
    {
      start: dayjs('2024-06-05T09:00').toDate(),
      end: dayjs('2024-06-05T11:00').toDate(),
      title: "Python CD",
    }
  ]

  const components = {
    event: props => {
      console.log(props)
      return <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '6px',
      }}>
        <CiCalendarDate />
        {props.title}
      </div>
    }
  }
  return (
    <div style={
      {
        height: '95vh',
        width: '70vw',
      }
    }>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        defaultView='month'
        toolbar={true}
        min={dayjs('2024-06-05T09:00').toDate()}
        max={dayjs('2024-06-05T17:00').toDate()}
        formats={{
          dayHeaderFormat: date => {
            return dayjs(date).format('dddd h:mm A')
          }
        }}
        components={components}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />
    </div>
  )
}

export default App