import LogoSvg from '@/assets/svgs/logo';
import { FC } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Link from 'next/link';

interface IHeaderProps {
  isAuthenticated?: boolean;
}

export const Header: FC<IHeaderProps> = ({ isAuthenticated = false }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <LogoSvg className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
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

          <div className="hidden sm:block relative">
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
      </div>
    </header>
  );
};
