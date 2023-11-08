import defaultImg from '../assets/default-image.jpeg';
import { Course } from '../types/types';

interface CourseProps {
  data: Course;
}

const CourseItem = ({ data }: CourseProps): JSX.Element => {
  return (
    <div className='md:max-w-xs border rounded-md shadow-sm cursor-pointer overflow-hidden'>
      <div className='w-full h-32'>
        <img
          src={data.thumbnail ? data.thumbnail : defaultImg}
          alt=''
          className=' w-full h-full object-cover'
          loading='lazy'
        />
      </div>
      <div className='flex flex-col items-start gap-2 h-3/4 my-2 px-3 text-sm '>
        <h2 className='font-bold text-left'>{data.name}</h2>
        <p className='text-left'>{data.description.substring(0, 50)}...</p>
        <p className='font-medium'>${data.price}</p>
      </div>
    </div>
  );
};

export default CourseItem;
