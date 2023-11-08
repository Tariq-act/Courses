interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='w-full bg-blue-700 text-white text-center'>
      <h1 className=' text-xl py-4'>{title}</h1>
    </div>
  );
};

export default Header;
