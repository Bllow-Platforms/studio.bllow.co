import { CustomTab } from '@/components/ui/custom-tab';
import ExploreView from '../views/explore';
const ExploreIndex = () => {
  const TABITEMS = [
    {
      label: 'Explore',
      value: 'Explore',
      content: <ExploreView />,
    },
    {
      label: 'Following',
      value: 'Following',
      content: <div>Explore</div>,
    },
  ];

  return (
    <div className=" lg:w-[900px] mx-auto">
      <CustomTab items={TABITEMS} />
    </div>
  );
};

export default ExploreIndex;
