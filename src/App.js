import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' 
            element={<DialogsContainer/>} />
            <Route path='/profile' 
            element={<Profile />} />

            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  ); 
}

export default App;

