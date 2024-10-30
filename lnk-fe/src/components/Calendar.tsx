import React, { useState, useEffect } from "react";
import {
  Calendar,
  momentLocalizer,
  SlotInfo,
  ToolbarProps,
} from "react-big-calendar";
import moment from "moment";
import "./custom-toolbar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Event } from "../types";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

interface ReactBigCalendarProps {
  events: Event[];
}

const ReactBigCalendar: React.FC<ReactBigCalendarProps> = ({ events }) => {
  const CustomToolbar: React.FC<
    ToolbarProps<{ title: string; start: Date; end: Date }, object>
  > = ({ label, onNavigate, onView }) => {
    return (
      <div className="custom-toolbar">
        <div className="toolbar-navigation">
          <button onClick={() => onNavigate("PREV")}>Prev</button>
          <button onClick={() => onNavigate("TODAY")}>Today</button>
          <button onClick={() => onNavigate("NEXT")}>Next</button>
        </div>
        <span className="toolbar-label">{label}</span>
        <div className="toolbar-view-options">
          <button onClick={() => onView("month")}>Month</button>
          <button onClick={() => onView("week")}>Week</button>
          <button onClick={() => onView("day")}>Day</button>
          <button onClick={() => onView("agenda")}>Agenda</button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginRight: 20 }}>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "80vh", color: "#000" }}
        onSelectEvent={(event) => alert(event.title)}
        components={{ toolbar: CustomToolbar }}
      />
    </div>
  );
};

export default ReactBigCalendar;
