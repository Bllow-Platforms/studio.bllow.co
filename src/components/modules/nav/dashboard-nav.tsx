import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  LayoutGrid,
  Heart,
  Wallet,
  Store,
  Leaf,
  LinkIcon,
  Zap,
  DollarSign,
  Settings,
  Layout,
  CloudLightningIcon,
  Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Flash } from 'iconsax-react';

interface IDashboardNavProps {
  className?: string;
  isMobile?: boolean;
}

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Layout, label: 'Dashboard', path: '/view-page' },
  { icon: LayoutGrid, label: 'Explore', path: '/explore' },
  { icon: CloudLightningIcon, label: 'Integrations', path: '/integrations' },
  { icon: Heart, label: 'Supporters', path: '/supporters' },
  { icon: Lock, label: 'Memberships', path: '/memberships' },
  // { icon: Store, label: 'Store', path: '/dashboard/store' },
  // { icon: Leaf, label: 'Products', path: '/dashboard/products' },
  // { icon: LinkIcon, label: 'Links', path: '/dashboard/links' },
  { icon: Zap, label: 'Activity', path: '/activity' },
  { icon: DollarSign, label: 'Earnings', path: '/earnings' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

interface INavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive?: boolean;
}

const NavItem: FC<INavItemProps & { isMobile?: boolean }> = ({
  icon,
  label,
  path,
  isMobile,
}) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  if (isMobile) {
    return (
      <Link href={path} className="w-full">
        <button
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-full transition-all w-full',
            isActive ? 'bg-[#6C5DD3] text-white' : 'text-gray-500 hover:bg-gray-100'
          )}
        >
          <span className="flex-1 text-left">{label}</span>
          {icon}
        </button>
      </Link>
    );
  }

  return (
    <Link href={path}>
      <button
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
          isActive ? 'bg-[#6C5DD3] text-white' : 'text-gray-500 hover:bg-gray-100'
        )}
      >
        {icon}
        {isActive && <span>{label}</span>}
      </button>
    </Link>
  );
};

export const DashboardNav: FC<IDashboardNavProps> = ({ className, isMobile }) => {
  return (
    <nav
      className={cn(
        'flex items-center gap-4 py-1.5 px-1 rounded-full bg-white ',
        className
      )}
    >
      {navItems.map(item => (
        <NavItem
          key={item.label}
          icon={<item.icon className="h-5 w-5" />}
          label={item.label}
          path={item.path}
          isMobile={isMobile}
        />
      ))}
    </nav>
  );
};
