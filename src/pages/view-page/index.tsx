import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllTab from '@/components/modules/tabs/creator-pages-tabs/all-tab';
import { useRef, useEffect } from 'react';
import PostsTab from '@/components/modules/tabs/creator-pages-tabs/posts-tab';
import MusicTab from '@/components/modules/tabs/creator-pages-tabs/music-tab';
import VideosTab from '@/components/modules/tabs/creator-pages-tabs/videos-tab';
import ArticleTab from '@/components/modules/tabs/creator-pages-tabs/articles-tabs';
import UserProfilePanel from '@/components/dashboard/profile-cover';

const tabs = [
  { label: 'All', component: <AllTab /> },
  { label: 'Post', component: <PostsTab /> },
  { label: 'Gallery', component: <VideosTab /> },
  { label: 'Music', component: <MusicTab /> },
  { label: 'Video', component: <VideosTab /> },
  { label: 'Article', component: <ArticleTab /> },
  { label: 'Shops', component: null },
];

const DashboardPage = () => {
  const tabsListRef = useRef(null);

  useEffect(() => {
    const tabsList = tabsListRef.current;
    if (!tabsList) return;

    // const handleWheel = (e) => {
    //   if (e.deltaY !== 0) {
    //     e.preventDefault();
    //     tabsList.scrollLeft += e.deltaY;
    //   }
    // };

    // tabsList.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // tabsList.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <DashboardLayout isThickGradient>
      <div className="bg-[#FBFBFB] min-h-screen mt-[8em] px-4 md:px-6">
        <UserProfilePanel />

        <Tabs defaultValue={tabs[0].label} className="mx-auto w-full">
          <div className="relative border-b overflow-hidden">
            <TabsList
              ref={tabsListRef}
              className="bg-transparent w-full flex overflow-x-auto md:gap-10 scrollbar-hide py-1"
            >
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  className="!bg-transparent pb-3 border-0 rounded-none flex-shrink-0 whitespace-nowrap
                    data-[state=active]:border-blue-500 data-[state=active]:text-background data-[state=active]:border-b
                    focus:outline-none focus:ring-0 focus-visible:ring-0"
                  value={tab.label}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="hidden sm:block absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FBFBFB] to-transparent pointer-events-none"></div>
            <div className="hidden sm:block absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FBFBFB] to-transparent pointer-events-none"></div>
          </div>

          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.label} className="mt-6">
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
