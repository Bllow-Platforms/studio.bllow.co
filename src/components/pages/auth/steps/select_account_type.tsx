import { FC } from "react";
import { AuthLayout } from "@/components/layouts/authLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ISelectProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const ACCOUNT_TYPE: ISelectProps[] = [
  {
    title: "Creator",
    description:
      "I want to receive donations, sell products and offer memberships",
    image: "/svgs/creator_type.svg",
    path: "/auth/creator",
  },
  {
    title: "Fan",
    description: "I want to support and discover creators",
    image: "/svgs/fan_type.svg",
    path: "/auth/fan",
  },
];

interface ISelectAccountTypeProps {};

export const SelectAccountType: FC<ISelectAccountTypeProps> = (props) => {
    const [selectedType, setSelectedType] = useState<ISelectProps | {}>({});
    const router = useRouter();
  
    const handleAccountType = (item: ISelectProps) => {
      setSelectedType(item);
    };
  
    const handleRoute = (path: string) => router.push(path);
    return (
        <div className="w-full lg:w-[800px] flex justify-center flex-col items-center mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          {ACCOUNT_TYPE.map((item: ISelectProps, index) => {
            const { title, description, image } = item || {};
            const isSelected = selectedType.title === title;
            return (
              <div
                key={index}
                onClick={() => handleAccountType(item)}
                className={`w-full flex lg:flex-col
                     lg:w-[350px] cursor-pointer border-4 rounded-[2em] items-center gap-4 lg:gap-0 p-[40px] transition-all duration-300 
                                    ${
                                      isSelected
                                        ? "border border-background/35 "
                                        : "border-gray-300/30"
                                    }`}
              >
                <div className="w-[220px] h-[220px] bg-white rounded-full flex items-center justify-center">
                  <img src={image} alt="account type" />
                </div>
                <div className="lg:text-center">
                  <h4 className={`text-2xl font-semibold text-[#808080]`}>
                    {title}
                  </h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Button
          className="px-[40px] mt-10"
          disabled={!selectedType}
          onClick={() => handleRoute(selectedType.path)}
        >
          Continue
        </Button> */}
      </div>
    );
}
