import { ReactNode } from 'react';
import { Link } from 'wouter';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className = '', href }: ButtonProps) => {
  if ( typeof href === 'string' ) {
    return (
      <Link href={href}>
        <a className={`inline-block rounded bg-slate-600 py-2.5 px-6 text-sm font-bold uppercase text-white hover:bg-slate-500 hover:text-white ${className}`}>
          { children }
        </a>
      </Link>
    );
  }

  return (
    <button className={`inline-block rounded bg-slate-600 py-2.5 px-6 text-sm font-bold uppercase text-white hover:bg-slate-500 hover:text-white ${className}`}>
      { children }
    </button>
  )
}

export default Button;