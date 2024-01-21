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
        className={`w-fit px-12 py-3 text-m text-white font-normal bg-buttonGreen hover:bg-opacity-80 transition-all ease-in-out ${className}`}
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
