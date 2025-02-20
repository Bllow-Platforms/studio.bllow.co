import LogoSvg from '@/assets/svgs/logo';
import { FC, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface IHeaderProps {
  isAuthenticated?: boolean;
}

export const Header: FC<IHeaderProps> = ({ isAuthenticated = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <LogoSvg className="h-8 w-auto" />
          </Link>
        </div>
        <button
          className="md:hidden text-white/90 hover:text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <Link
              href="/faq"
              className="text-white/90 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/wall-of-love"
              className="text-white/90 hover:text-white transition-colors"
            >
              Wall of ❤️
            </Link>
          </nav>

          <div className="relative">
            <Input
              type="search"
              placeholder="Search Creators"
              className="w-[200px] text-center bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-white/20"
            />
          </div>

          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Link href={'/auth'}>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Sign Up
                  </Button>
                </Link>
                <Link href={'/auth/signin'}>
                  <Button
                    variant="outline"
                    className="text-white hover:text-white/90 hover:bg-white/10"
                  >
                    Log In
                  </Button>
                </Link>
              </>
            ) : (
              <Button className="bg-white text-primary hover:bg-white/90">
                Dashboard
              </Button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-white/10 p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/faq"
                className="text-white/90 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/wall-of-love"
                className="text-white/90 hover:text-white transition-colors"
              >
                Wall of ❤️
              </Link>
              <div className="relative my-2">
                <Input
                  type="search"
                  placeholder="Search Creators"
                  className="w-full text-center bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-white/20"
                />
              </div>
              {!isAuthenticated ? (
                <div className="flex flex-col gap-2">
                  <Link href={'/auth'}>
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Sign Up
                    </Button>
                  </Link>
                  <Link href={'/auth/signin'}>
                    <Button
                      variant="outline"
                      className="w-full text-white hover:text-white/90 hover:bg-white/10"
                    >
                      Log In
                    </Button>
                  </Link>
                </div>
              ) : (
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Dashboard
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
