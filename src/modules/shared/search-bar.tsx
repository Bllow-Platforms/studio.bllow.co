import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  placeholder?:string
}

const SearchBar = ({ className, placeholder }: Props) => {
  return (
    <div
      className={cn(
        'py-1 px-4 my-6 border flex items-center rounded-full',
        className
      )}
    >
      <Search size={20} className="text-[#ddd]" />
      <Input className="border-none ring-0" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
