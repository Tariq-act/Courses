import CourseItem from '../components/CourseItem';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { useEffect } from 'react';

import { fetchCourses } from '../services/api';
import { Link } from 'react-router-dom';
import { Course } from '../types/types';

interface RootState {
  courses: Course[];
}

const CourseList = () => {
  const courses = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCourses(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Header title={'List of Courses'} />
      <div className='w-3/4 mx-auto my-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {courses.map((data, idx) => (
          <Link to={`course/${data.id}`} key={idx}>
            <CourseItem data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
