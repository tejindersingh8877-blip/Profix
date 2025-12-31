'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-secondary">Profix</span>
              <span className="text-white"> Masters</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="hover:text-secondary transition-colors">
              Browse Services
            </Link>
            <Link href="/become-provider" className="hover:text-secondary transition-colors">
              Become a Provider
            </Link>
            <Link href="/api/auth/login" className="hover:text-secondary transition-colors">
              Login
            </Link>
            <Link 
              href="/api/auth/register" 
              className="bg-secondary hover:bg-secondary-600 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/services"
              className="block py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Services
            </Link>
            <Link
              href="/become-provider"
              className="block py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Provider
            </Link>
            <Link
              href="/api/auth/login"
              className="block py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/api/auth/register"
              className="block bg-secondary hover:bg-secondary-600 px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
