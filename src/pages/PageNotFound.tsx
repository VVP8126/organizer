import React, {FC} from "react";
import "./../styles/not_found_page.css"

const Page404: FC = () => {
  return (
    <div className="mainBlock">
      <span className="error404">404</span>
      <p className="lbl">REQUESTED INFORMATION NOT FOUND</p>
    </div>
  );
}
export default Page404;
