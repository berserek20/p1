// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './crud/createDoc/Create'
import axios from 'axios';
import Task from './crud/Task/Task';

function App() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<Create />} />
              <Route path='/todos/:_id' element={<Task />} />
            </Routes>        

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
