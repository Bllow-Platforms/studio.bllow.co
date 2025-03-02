import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  value: string;
  label: string;
}

interface CustomTabProps {
  items: TabItem[];
  defaultValue?: string;
  variant?: 'default' | 'outline';
  className?: string;
  onChange?: (value: string) => void;
}

export const CustomTab: FC<CustomTabProps> = ({
  items,
  defaultValue,
  variant = 'default',
  className,
  onChange,
}) => {
  return (
    <Tabs
      defaultValue={defaultValue || items[0]?.value}
      className={className}
      onValueChange={onChange}
    >
      <TabsList className="bg-white/5 p-1 rounded-full">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};