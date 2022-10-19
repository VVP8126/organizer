import React, {FC} from "react";
import "./../styles/access_denied_page.css";
import { LockOutlined } from "@ant-design/icons";

const PageAccessDenied: FC = () => {
  return (
    <div className="mainBlockAD">
      <LockOutlined className="blockIcon" />
      <p className="lblAD">LOG IN, PLEASE</p>
    </div>
  );
}
export default PageAccessDenied;
