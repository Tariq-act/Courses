import './App.css';
import { Routes, Route } from 'react-router-dom';
import CourseList from './screen/CourseList';
import CourseDetail from './screen/CourseDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetail />} />
      </Routes>
    </>
  );
}

export default App;
