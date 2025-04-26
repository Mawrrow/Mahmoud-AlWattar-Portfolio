import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline';
}

const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all';
  
  const variantClasses = variant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'border-2 border-white text-white hover:bg-white hover:text-gray-900';

  // If href is provided, return a Link (for navigation)
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses}`}
      >
        {children}
      </a>
    );
  }

  // Otherwise return a button (for form submissions)
  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;