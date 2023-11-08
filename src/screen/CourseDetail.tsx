import { useParams } from 'react-router-dom';
import { getSingleCourse } from '../services/api';
import { Course } from '../types/types';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const CourseDetail = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      getSingleCourse('courses', id).then((data) => {
        setCourse(data as Course);
      });
    }
  }, [id]);

  const renderCourseDetail = () => {
    if (course) {
      return (
        <div className='max-w-2xl mx-auto p-4 border my-5 rounded-lg bg-gray-100'>
          <div className='w-full h-72'>
            <img
              src={course.thumbnail}
              alt=''
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          <h2 className='text-3xl font-bold my-4'>{course.name}</h2>
          <p className='mb-4'>
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className='mb-4'>
            <strong>Description:</strong> {course.description}
          </p>
          <p className='mb-4'>
            <strong>Enrollment Status:</strong> {course.enrollmentStatus}
          </p>
          <p className='mb-4'>
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className='mb-4'>
            <strong>Schedule:</strong> {course.schedule}
          </p>
          <p className='mb-4'>
            <strong>Location:</strong> {course.location}
          </p>
          <p className='mb-4'>
            <strong>Pre-requisites:</strong> {course.prerequisites}
          </p>

          <div>
            <h1 className='text-xl font-medium'>Syllabus</h1>
            {course.syllabus.map((point, idx) => (
              <details className='my-4 transition-all' key={idx}>
                <summary className='cursor-pointer '>Week {point.week}</summary>
                <div className='bg-white rounded-lg p-1'>
                  <h2 className='pl-4 my-1 text-lg'>{point.topic}</h2>
                  <p className='pl-4 text-sm'>{point.content}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      );
    } else {
      return <LoadingSpinner />;
    }
  };

  return <div>{renderCourseDetail()}</div>;
};

export default CourseDetail;
