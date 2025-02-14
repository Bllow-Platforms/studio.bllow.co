import { FC } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ISelectProps {
  title: string;
  description: string;
  image: string;
  path: string;
}



interface IEmailStepperProps {};

export const EnterEmailStepper: FC<IEmailStepperProps> = (props) => {
    const [selectedType, setSelectedType] = useState<ISelectProps | {}>({});
    const router = useRouter();
  
    const handleAccountType = (item: ISelectProps) => {
      setSelectedType(item);
    };
  
    const handleRoute = (path: string) => router.push(path);
    return (
        <div className="w-full lg:w-[800px] flex justify-center flex-col items-center mx-auto">
          Chose Username
         
      </div>
    );
}
