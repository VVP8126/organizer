import React, {FC} from "react";
import { Layout, Menu } from "antd";
import { MenuItemsLogin, MenuItemsLogout } from "./MenuItems";
import { useNavigate } from "react-router-dom";
import { ScheduleOutlined } from "@ant-design/icons";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Navbar: FC = () => {

  const navigate = useNavigate();
  const { isAuthorized, user } = useTypedSelector(state => state.authReducer);
  const { logout } = useActions();

  return (
    <Layout.Header className="header" >
      <ScheduleOutlined style={{float:"left", color:"white", fontSize:"58px", justifySelf:"end", display:"block", paddingRight:"60px" }} />
      { isAuthorized 
        ? <>
            <div style={{float:"left", width:"100px", color:"white"}}>{user.username}</div>
            <Menu theme="dark"
                mode="horizontal"
                selectable={false}
                items={MenuItemsLogout?.map(i => {
                  return { key:i?.key, label:i.label, onClick:() => logout() }
                })} >
            </Menu>
          </>
        : <Menu theme="dark"
                selectable={false}
                mode="horizontal"
                items={MenuItemsLogin?.map(i => {
                  return { key:i?.key, label:i.label, onClick:() => navigate("/" + i.path) }
                })}>
          </Menu>
      }
    </Layout.Header>
  );
}
export default Navbar;
