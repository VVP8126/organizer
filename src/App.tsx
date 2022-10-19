import React, { useEffect } from 'react';
import './styles/styles.css';
import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from './components/ApplicationRouter';
import { Layout } from "antd";
import Navbar from './components/navbar/Navbar';
import "antd/dist/antd.css";
import { FC } from "react";
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {

  const { setUser, setIsAuthorized } = useActions();

  // Block that "saves authorization result"
  useEffect(
    () => {
      if(localStorage.getItem("auth")) {
        setUser({username: localStorage.getItem("username" || "")} as IUser);
        setIsAuthorized(true);
      }
    },
    []
  );
  // End of block

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Layout.Content>
          <ApplicationRouter />
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
