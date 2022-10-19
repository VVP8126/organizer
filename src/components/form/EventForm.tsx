import React, { FC, useState } from "react";
import { Row, Button, Form, Input, DatePicker, Select } from "antd";
import {rules} from "./../../utils/rules";
import { IUser } from "../../models/IUser";
import { IEvent } from "../../models/IEvent";
import type { DatePickerProps } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ( { guests, submit } ) => {
  
  const [userEvent, setUserEvent] = 
        useState<IEvent>({author:"", date:"", description:"", guest:""} as IEvent);
  
  const {user} = useTypedSelector(state => state.authReducer);

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEvent({...userEvent, author:user.username, description:e.target.value});
  }

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setUserEvent({...userEvent, date:dateString });
  }

  const onSelectChange = (value: string) => {
    setUserEvent({...userEvent, guest:value });
  }

  const onFinish = () => {
    submit(userEvent);
  }

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }} onFinish={onFinish} >
      <Form.Item    label="Event description"
                    name={"description"}
                    rules={[rules.required("Fill in all fields")]}>
        <Input value={userEvent.description} onChange={onDescriptionChange} />
      </Form.Item>
      <Form.Item    label="Set the date"
                    name={"date"}
                    rules={ [ rules.required("Fill in all fields"),
                              rules.isDateAfter("You can't add event for the date in the past") ]}>
        <DatePicker onChange={onDateChange} style={{width:"100%"}} />
      </Form.Item>
      <Form.Item    label="Select user"
                    name={"guest"}
                    rules={[rules.required("Fill in all fields")]}>
        <Select     onChange={onSelectChange} style={{width:"100%"}} >
            { guests.map(g => <Select.Option value={g.username} key={g.username}>{g.username}</Select.Option>) }
        </Select>
      </Form.Item>
      <Row justify="center">
        <Form.Item>
          <Button type="primary" htmlType="submit" >Add</Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
export default EventForm;
