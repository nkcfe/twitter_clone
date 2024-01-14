import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>homepage</h1>} />
      <Route path="/posts" element={<h1>Post List Page</h1>} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
      <Route path="/posts/new" element={<h1>Post New Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
      <Route path="/profile" element={<h1>Post New Page</h1>} />
      <Route path="/profile/edit" element={<h1>Post Edit Page</h1>} />
      <Route path="/notifications" element={<h1>Notification Page</h1>} />
      <Route path="/search" element={<h1>Post New Page</h1>} />
      <Route path="/users/login" element={<h1>Post New Page</h1>} />
      <Route path="/users/signup" element={<h1>Post New Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
