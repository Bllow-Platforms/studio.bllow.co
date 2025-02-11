import { FC } from "react";
import { cn } from "@/lib/utils";

interface NotificationCardProps {
  icon: string;
  text: string;
  user: string;
  time: string;
  className?: string;
}

export const NotificationCard: FC<NotificationCardProps> = ({
  icon,
  text,
  user,
  time,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute bg-white/5 backdrop-blur-md rounded-3xl p-4",
        "border border-white/50 shadow-lg",
        "transition-all duration-700 hover:scale-105 lg:w-[350px]",

        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex flex-col">
          <span className="text-white font-medium whitespace-nowrap">
            {text}
          </span>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>{user}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
