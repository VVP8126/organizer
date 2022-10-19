import React, { FC, useEffect, useState } from "react";
import { Modal, Row, Button } from "antd";
import EventCalendar from "../components/calendar/EventCalendar";
import EventForm from "../components/form/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const EventPage: FC = () => {
  
  const { guests, events } = useTypedSelector(state => state.eventReducer);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const {user} = useTypedSelector(state => state.authReducer);

  useEffect(
    () => { 
      fetchGuests();
      fetchEvents(user.username);
    }, 
    []
  );
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  }
  const closeModal = () => {
    setIsModalVisible(false);
  }
  const addEvent = (event: IEvent) => {
    createEvent(event);
    setIsModalVisible(false);
  }

  return (
    <div>
      <h2 style={{textAlign:"center", marginTop:"15px", marginBottom:"15px"}}>Caledar events</h2>
      <EventCalendar events={events}></EventCalendar>
      <Row justify="center" style={{marginBottom:"20px"}}>
        <Button type="primary" onClick={openModal}>Add event</Button>
      </Row>
      <Modal title={"Add new event"} open={isModalVisible} onCancel={closeModal} footer={null} >
        <EventForm guests={guests} submit={addEvent} />
      </Modal>
    </div>
  );
}
export default EventPage;
