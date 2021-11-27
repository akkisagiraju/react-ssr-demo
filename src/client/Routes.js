import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<User />} />
    </Routes>
  );
};
