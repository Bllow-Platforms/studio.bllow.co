import { FC, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  value: string;
  label: string;
  content?: ReactNode;
}

interface CustomTabProps {
  items: TabItem[];
  defaultValue?: string;
  variant?: 'default' | 'outline';
  className?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
}

export const CustomTab: FC<CustomTabProps> = ({
  items,
  defaultValue,
  variant = 'default',
  className,
  onChange,
  children,
}) => {
  return (
    <Tabs
      defaultValue={defaultValue || items[0]?.value}
      className={className}
      onValueChange={onChange}
    >
      <TabsList className="bg-white/5 p-1 ">
        {items.map(item => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className=" rounded-none px-4 py-2 text-sm font-[400] text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-primary tw-shadow-0
              data-[state=active]:tw-shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary "
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map(item => (
        <TabsContent key={item.value} value={item.value}>
          {item.content || children}
        </TabsContent>
      ))}
    </Tabs>
  );
};
