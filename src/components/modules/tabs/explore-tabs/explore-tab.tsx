import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { faker } from '@faker-js/faker';
import CreatorCard from '../../cards/explore-card';

interface Creator {
  id: number;
  name: string;
  username: string;
  description: string;
  supporters: string;
}

const creators: Creator[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  username: `@${faker.internet.userName().toLowerCase()}`,
  description: faker.lorem.sentence(10),
  supporters: `${faker.number.int({ min: 100, max: 999 })} Supporters`,
}));

const ExploreTab = () => {
  return (
    <div className="mx-auto p-6">
      <div className="mb-8 flex items-center rounded-full px-4 border-[0.5px] bg-white">
        <Search className="text-gray-400" size={18} />
        <Input
          placeholder="Search 1,0000,000 creators"
          className="border-none text-muted-primary  "
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Trending creators this week</h2>

        <div className="bg-white rounded-[30px] py-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {creators.map(creator => (
              <CreatorCard key={creator.id} {...creator} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTab;
