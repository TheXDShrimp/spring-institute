import Image from "next/legacy/image"
import Link from 'next/link'
import SiteLink from './SiteLink';


export const Footer = ({bgColor='bg-navy-darkest'}) => {
    return (
        <footer className={`relative w-full ${bgColor} pb-4 bg-opacity-100`}>
            <p className='mt-4 text-white text-center text-base'>Made with 💖 by <SiteLink href={"https://arulandu.com"} txt="Alvan Caleb Arulandu"/> {' '}
            <a className='inline-block align-middle' href="https://github.com/Claeb101/spring-institute">
                <img className='h-full' src="https://img.shields.io/github/last-commit/claeb101/spring-institute"/>
            </a>
            </p>
        </footer>
    );
}