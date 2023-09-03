import Image from 'next/image';
import OutlineButton from "./Button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { useSession } from './SessionProvider';

const NavLink = ({ index, href, name, textColor = 'text-white hover:text-green', disabled = false, onClick = () => { } }) => {
  return (
    <Link href={disabled ? "" : href} passHref>
      <a className={` ${disabled ? 'opacity-30' : ''} font-bold mb-2 md:mx-4 md:mb-0 ${textColor} text-md transition-all`} onClick={onClick}><span className='text-green'></span>{name}</a>
    </Link>
  );
}

const HamburgerButton = ({ open, color = "white", onClick = () => { } }) => {
  return (
    <button className='relative md:hidden' onClick={onClick}>
      <div className={`w-8 h-[2px] bg-${color} ${open ? 'translate-y-[10px] rotate-45' : ''} transition-all`}></div>
      <div className={`my-2 w-8 h-[2px] ${open ? 'bg-transparent' : 'bg-' + color} transition-all`}></div>
      <div className={`w-8 h-[2px] bg-${color} ${open ? ' -translate-y-[10px] -rotate-45' : ''} transition-all`}></div>
    </button>
  );
}

const CloseButton = ({ open, color = "white", className = '', onClick = () => { } }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <div className={`w-2 h-[2px] bg-${color} ${open ? 'translate-y-[10px] rotate-45' : ''} transition-all`}></div>
      <div className={`w-2 h-[2px] my-2 ${open ? 'bg-transparent' : 'bg-' + color} transition-all`}></div>
      <div className={`w-2 h-[2px] bg-${color} ${open ? ' -translate-y-[10px] -rotate-45' : ''} transition-all`}></div>
    </button>
  );
}

const NavBar = ({ mode = 'dark' }) => {
  const [isOpen, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const atTopCallback = () => {
      if (window.scrollY >= 40) setAtTop(false);
      else setAtTop(true)
    }

    window.addEventListener('scroll', atTopCallback)
    return () => window.removeEventListener('scroll', atTopCallback)
  })

  const color = mode === 'light' ? 'black' : 'white';
  const logoSource = mode === 'light' ? '/images/logoGreen.png' : '/images/logo.png';
  const textColor = mode === 'light' ? 'text-green-600' : 'text-white hover:text-green';
  return (
    <nav className={`relative h-ful bg-white ${mode == 'dark' ? (atTop ? 'bg-opacity-10' : 'bg-opacity-25') : 'bg-opacity-100'} flex items-center justify-between z-10 py-2 px-4 sm:px-12 lg:px-24 transition-all ease-in-out duration-500`}>
      <div className='flex relative z-20'>
        <HamburgerButton open={isOpen} color={color} onClick={() => setOpen(!isOpen)} />
        <Link href="/" passHref>
          <a className="relative ml-4 w-6 md:w-12 aspect-square opacity-90 hover:opacity-100 transition-all ease-in-out">
            <Image src={logoSource} alt="Logo" layout="fill" />
          </a>
        </Link>
      </div>
      <div className={`block w-full md:w-fit h-screen md:h-full z-10 absolute md:relative top-0 ${isOpen ? 'left-0' : 'left-[-200%] md:left-0'} px-4 sm:px-12 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-center bg-navy bg-opacity-90 md:bg-transparent transition-all`}>
        <NavLink index={1} href="/" name="Home" textColor={textColor} />
        <span className={`text-${color} mx-2`}>|</span>
        <NavLink index={2} href="/about" name="About" textColor={textColor} />
        <span className={`text-${color} mx-2`}>|</span>
        <NavLink index={3} href="/policy" name="Policy" textColor={textColor} />
        <span className={`text-${color} mx-2`}>|</span>
        {/* <NavLink index={4} href="/media" name="Media" />
        <span className="text-white mx-2">|</span>
        <NavLink index={5} href="/advocacy" name="Advocacy" />
        <span className="text-white mx-2">|</span> */}
        <NavLink index={6} href="/newsletter_form" name="Get Involved" textColor={textColor} />

      </div>
    </nav>
  );
}


const Header = ({ mode = 'dark' }) => {
  return (
    <header className='fixed z-50 w-full h-16 sm:h-24'>
      <NavBar mode={mode} />
    </header>
  );
};

export default Header;