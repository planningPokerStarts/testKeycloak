import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAuth from '../pages/PageAuth';
import PageRoomList from '../pages/PageRoomList';
import PageStart from "../pages/PageStart";
import Page404 from "../pages/Page404";

const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/auth" element={<PageAuth />} />
          <Route path="/rooms" element={<PageRoomList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default AppRouter;