import { FC } from "react";
import { Calendar, Badge, BadgeProps } from "antd";
import { IEvent } from "../../models/IEvent";
import { Moment } from "moment";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ( {events} ) => {
    function dateCellRender (value: Moment) {
        const formattedDate = value.format("YYYY-MM-DD");
        const currentDayEvents = events.filter(ev => ev.date === formattedDate); // filter all events to get array of current date
        return (<ul>{ currentDayEvents.map((ev, index) => <li key={index}>{ev.description}</li>) }</ul>);
    };
    return (
        <Calendar dateCellRender={dateCellRender} ></Calendar>
    );
}
export default EventCalendar;
