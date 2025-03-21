import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Search } from "lucide-react";

interface Creator {
    id: number;
    name: string;
    username: string;
    avatar: string;
    followers: string;
}

const creators: Creator[] = [
    {
        id: 1,
        name: "Kathryn Murphy",
        username: "@kathyrn",
        avatar: "/avatars/1.png",
        followers: "25K followers"
    },
    {
        id: 2,
        name: "Dionna Russell",
        username: "@dionna",
        avatar: "/avatars/2.png",
        followers: "12K followers"
    },
   
];

const ExploreView = () => {
    return (
        <div className=" mx-auto p-6">
            <div className="mb-8 flex items-center rounded-full  px-4 border-[0.5px]">
                <Search className="text-gray-400 " size={20}/>
                <Input 
                    placeholder="Search 1,0000,000 creators" 
                    className="border-none text-muted-primary bg-white"
                />
            </div>

            <div className="space-y-6">
                <h2 className="text-lg font-semibold">Trending creators this week</h2>
                
                <div className="space-y-4 bg-white">
                    {creators.map((creator) => (
                        <div key={creator.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <span className="absolute -left-2 -top-1 text-sm">#{creator.id}</span>
                                    <Avatar className="h-12 w-12">
                                        <img src={creator.avatar} alt={creator.name} />
                                    </Avatar>
                                </div>
                                <div>
                                    <h3 className="font-medium">{creator.name}</h3>
                                    <p className="text-sm text-gray-500">{creator.username}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{creator.followers}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExploreView;