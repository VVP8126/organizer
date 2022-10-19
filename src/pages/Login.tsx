import React, {FC} from "react";
import "./../styles/login_page.css";
import { Layout, Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import useInput from "../hooks/useInput";
import { useActions } from "../hooks/useActions";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  
  const {error, isLoading} = useTypedSelector(state => state.authReducer);
  const username = useInput("");
  const password = useInput("");
  const { login } = useActions();
  const navigate = useNavigate();
  
  const sendForm = () => {
    login(username.value, password.value);
    navigate("/");
  }

  const sendWithFail = () => {
    console.log("Failed to send form data !");
  }

  return (
    <Layout className="content">
      <Form name="basic"
            onFinish={sendForm}
            onFinishFailed={sendWithFail}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off">
        { error && <div style={{color:"red", textAlign:"center", marginBottom:"15px"}}><b><i>{error}</i></b></div> }
        <Form.Item
            label="Username"
            name="username"
            rules={[rules.required("Enter your name")]} >
          <Input {...username} />
        </Form.Item>
        <Form.Item
            label="Password"
            name="password"
            rules={[rules.required("Enter password")]}>
          <Input.Password {...password} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={ isLoading } >
                Login
            </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
export default Login;
