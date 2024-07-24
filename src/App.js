import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';
import UpdateBlog from './pages/UpdateBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/edit/:id" element={<UpdateBlog />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
