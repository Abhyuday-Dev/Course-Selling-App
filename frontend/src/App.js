
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#eeeeee"}}>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
