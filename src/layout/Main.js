import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
      <div>
        {/* <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer> */}
        <div className="flex flex-col h-screen justify-between">
          <Header className="h-10">Header</Header>
          <Outlet></Outlet>
          <Footer className="h-10">Footer</Footer>
        </div>
      </div>
    );
};

export default Main;