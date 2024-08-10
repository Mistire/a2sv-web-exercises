'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-indigo-800/80 backdrop-blur-lg' : 'bg-indigo-800 backdrop-blur-none'
        } z-50`}
      >
        <div className="container mx-auto flex justify-between items-center h-16">
          {/* Logo and Navigation Links Container */}
          <div className="flex items-center sm:space-x-32">
            {/* Logo */}
            <Link href="/" className="text-white text-3xl font-bold">
              Akil
            </Link>

            {/* Navigation Links (Visible on Larger Screens) */}
            {status === 'authenticated' && (
              <div className="hidden sm:flex space-x-4">
                <Link href="/" className="text-white font-bold">
                  Opportunities
                </Link>
                <Link href="/bookmarked" className="text-white font-bold">
                  Bookmarked Jobs
                </Link>
              </div>
            )}
          </div>

          {/* Right Side: Auth Buttons */}
          {status === 'authenticated' && (
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={() => signOut()}
                className="text-white font-bold"
              >
                Logout
              </button>
            </div>
          )}

          {/* Hamburger Menu Icon (Visible on Mobile Screens) */}
          {status === 'authenticated' && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white sm:hidden"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {status === 'authenticated' && (
          <div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-indigo-800/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } sm:hidden z-40`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                <FiX size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center mt-8 space-y-6">
              <Link
                href="/"
                className="text-white font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Opportunities
              </Link>
              <Link
                href="/bookmarked"
                className="text-white font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Bookmarked Jobs
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="text-white font-bold"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add spacing to prevent content from being hidden under the navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
