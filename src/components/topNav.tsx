import Logo from './logo';

export default function TopNav() {
  
  return (
    <div className='h-20 px-4 flex items-center bg-pine shadow-lg text-white'> 
      <Logo /> 
      <span className='font-mono font-semibold ml-3'>
        Playground
      </span> 
    </div>
  );
}