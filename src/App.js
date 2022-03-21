import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element=
            {<Dialogs dialogsData={props.dialogsData} 
            messagesData={props.messagesData}
            />} />
            <Route path='/profile' 
            element={<Profile profilePage={props.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>} />

            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  ); 
}


export default App;
