import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MAIN_PATH, FAVORITES_PATH } from './components/NavigationPanel/NavigationPanel';

import UserList from './components/UserList';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  
  return (
      <BrowserRouter>
          <>
              <NavigationPanel />
              <Routes>
                  <Route path={MAIN_PATH} element={<UserList />} />
                  <Route path={FAVORITES_PATH} element={<Favorites />}/>
              </Routes>
              <Modal />
          </>
      </BrowserRouter>
    
  )
}

export default App
