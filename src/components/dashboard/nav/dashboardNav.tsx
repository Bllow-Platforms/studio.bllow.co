import { FC } from 'react';
import {
  Home,
  LayoutGrid,
  Heart,
  Wallet,
  Store,
  Leaf,
  Link,
  Zap,
  DollarSign,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface IDashboardNavProps {
  className?: string;
  isMobile?: boolean;
}

const navItems = [
  { icon: Home, label: 'Home', isActive: true },
  { icon: LayoutGrid, label: 'Dashboard' },
  { icon: Heart, label: 'Favorites' },
  { icon: Wallet, label: 'Wallet' },
  { icon: Store, label: 'Store' },
  { icon: Leaf, label: 'Products' },
  { icon: Link, label: 'Links' },
  { icon: Zap, label: 'Activity' },
  { icon: DollarSign, label: 'Earnings' },
  { icon: Settings, label: 'Settings' },
];

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
          isActive={item.isActive}
          isMobile={isMobile}
        />
      ))}
    </nav>
  );
};

interface INavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: FC<INavItemProps & { isMobile?: boolean }> = ({
  icon,
  label,
  isActive,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <button
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-full transition-all w-full',
          isActive ? 'bg-[#6C5DD3] text-white' : 'text-gray-500 hover:bg-gray-100'
        )}
      >
        <span className="flex-1 text-left">{label}</span>
        {icon}
      </button>
    );
  }

  return (
    <button
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
        isActive ? 'bg-[#6C5DD3] text-white' : 'text-gray-500 hover:bg-gray-100'
      )}
    >
      {icon}
      {isActive && <span>{label}</span>}
    </button>
  );
};
