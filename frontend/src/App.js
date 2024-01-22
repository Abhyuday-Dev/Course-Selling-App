
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AddCourse from './Components/AddCourse';
import Courses from './Components/Courses';
import Course from './Components/Course';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#eeeeee"}}>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseId' element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
