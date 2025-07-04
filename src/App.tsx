import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserList from './components/UserList';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';
import './App.css';
import Favorites from './components/Favorites';

function App() {
  
  return (
      <BrowserRouter>
          <>
              <NavigationPanel />
              <Routes>
                  <Route path='/' element={<UserList />} />
                  <Route path='/favorites' element={<Favorites />}/>
              </Routes>
              <Modal />
          </>
      </BrowserRouter>
    
  )
}

export default App
