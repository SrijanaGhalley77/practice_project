import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/about', text: 'About Us' },
  { href: '/menuPage', text: 'Menu' },
  { href: '/contacts', text: 'Contacts' },
  { href: '/reservations', text: 'Reservations' },
  { href: '/shops', text: 'Shops' },
  { href: '/news', text: 'News' },
];

const Header: React.FC = () => {
  return (
    <header className=" flex justify-center space-x-8 bg-secondary-50 p-1 border shadow-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-primary-950 hover:text-primary-800">
            {link.text}
          </Link>
        ))}
    </header>
  );
};

export default Header;