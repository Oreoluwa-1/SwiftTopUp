import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, href, onClick, className }: ButtonProps) => {
  const baseStyles =
    "inline-block px-6 py-2 text-white bg-[#007aff] rounded-full font-medium hover:opacity-90 transition";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
