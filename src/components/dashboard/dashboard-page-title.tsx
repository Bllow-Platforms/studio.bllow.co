import { FC, ReactNode } from 'react';
import { CustomTab } from '../ui/custom-tab';

interface TabItem {
  value: string;
  label: string;
  content?: ReactNode;
}

interface IDashboardPageTitleProps {
  title: string;
  showTabs?: boolean;
  tabs?: TabItem[];
  defaultTab?: string;
  onTabChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
  info?: string;
}

export const DashboardPageTitle: FC<IDashboardPageTitleProps> = ({
  title,
  showTabs = false,
  tabs = [],
  defaultTab,
  onTabChange,
  children,
  className,
  info,
}) => {
  return (
    <div className="space-y-4">
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        {info && <p className="">{info}</p>}
      </div>
      {showTabs && (
        <CustomTab
          items={tabs}
          defaultValue={defaultTab}
          onChange={onTabChange}
          className={className}
        >
          {children}
        </CustomTab>
      )}
    </div>
  );
};
