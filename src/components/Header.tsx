
import { useEffect, useState } from 'react';
import { RiFacebookBoxFill, RiGithubFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'

export default function Header() {
  const [scrolld, setScrolld] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolld(window.scrollY > 0)
        
      );
    }
  }, []);
  return (
    <header className= {`flexAround duration-300 gap-20  w-full ${scrolld?' fixed bg-gray-100 z-20 top-0 ':'absolute top-4'}`}>
      <a href={'/'} className='py-2'>
        <img src={'./logo.png'} alt='logo' className='max-md:w-20 w-[120px] object-cover '  />
      </a>
      <SoicalIcons></SoicalIcons>
    </header>
  )
}
const SoicalIcons=()=>{
  return(
    <div className='flex gap-4 lg:gap-3 pr-4'>
      <a href={'https://github.com/mohamedsameh2002'} target='_blank' className=' bg-gray-800 p-1 text-2xl max-md:text-xl  rounded-full rounded-bl-none hover:bg-tertiary hover:text-gray-700 hover:bg-gray-200 hover:rounded-bl-full hover:rounded-tl-none duration-300 text-gray-200'><RiGithubFill></RiGithubFill></a>
      <a href={'https://www.linkedin.com/in/mohamed-sameh-3bb25a270/'} target='_blank' className=' bg-gray-800 p-1 text-2xl max-md:text-xl  rounded-full rounded-bl-none hover:bg-tertiary hover:text-gray-700 hover:bg-gray-200 hover:rounded-bl-full hover:rounded-tl-none duration-300 text-gray-200'><RiLinkedinFill></RiLinkedinFill></a>
      <a href={'https://www.facebook.com/profile.php?id=100020310902967&locale=ar_AR'} target='_blank' className=' bg-gray-800 p-1 text-2xl max-md:text-xl  rounded-full rounded-bl-none hover:bg-tertiary hover:text-gray-700 hover:bg-gray-200 hover:rounded-bl-full hover:rounded-tl-none duration-300 text-gray-200'><RiFacebookBoxFill></RiFacebookBoxFill></a>
      <a href={'http://wa.me/+201016603998'} target='_blank' className=' bg-gray-800 p-1 text-2xl max-md:text-xl  rounded-full rounded-bl-none hover:bg-tertiary hover:text-gray-700 hover:bg-gray-200 hover:rounded-bl-full hover:rounded-tl-none duration-300 text-gray-200'><RiWhatsappFill></RiWhatsappFill></a>
    </div>
  )
}
