import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Sidebar from './components/Sidebar';
import Upload from './components/Upload';
import Options from './components/Options';
import Output from './components/Output';
import bot from './bot.svg'

export default function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Upload />}/>
          <Route path='/next' element={<Options />}/>
          <Route path='/done' element={<Output />}/>
        </Routes>
      </HashRouter>
      <img className='bot' src={bot} alt="robot"/>
    </div>
  );
}
