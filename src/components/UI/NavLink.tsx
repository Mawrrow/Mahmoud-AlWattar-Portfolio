import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-600 transition-colors hover:text-blue-600"
    >
      {children}
    </a>
  );
};
export default NavLink;