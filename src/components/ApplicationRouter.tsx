import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { routesPublic, routesPrivate } from "./../router";

const ApplicationRouter = () => {

  const { isAuthorized } = useTypedSelector(state => state.authReducer);
  
  return (
    isAuthorized
      ? <Routes>
          { routesPrivate.map(r => <Route path={r.path}  key={r.path} element={<r.element />} />) }
        </Routes>
      : <Routes>
          { routesPublic.map(r => <Route path={r.path}  key={r.path} element={<r.element />} />) }
        </Routes>
  );
}
export default ApplicationRouter;
