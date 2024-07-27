import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Details from './pages/Details';
import Chats from './pages/Chats';

const App = () => {
  return (
    <div className='h-screen bg-blue-200 flex flex-col'>
    
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/chats' element={<Chats />} />
        </Routes>
     
    </div>
  );
}

export default App;
