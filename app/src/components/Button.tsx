import React, { forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps {
  name: string;
  className?: string;
  link?: string;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ name = "", className = "", link = "", onClick = () => { } }, ref) => {
    const btn = (
      <button
        ref={ref}
        className={`w-fit px-4 py-2 text-xl text-white font-normal rounded-lg bg-white bg-opacity-30 hover:bg-opacity-40 transition-all ease-in-out ${className}`}
        onClick={onClick}
      >
        {name}
      </button>
    );

    if (link.length > 0) {
      return (
        <Link legacyBehavior href={link} passHref>
          <a>{btn}</a>
        </Link>
      );
    }

    return btn;
  }
);

export default Button;
