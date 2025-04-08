import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, Clock } from 'lucide-react';

const OneTimeTab = () => {
  return (
    <div className="w-full bg-white max-w-4xl mx-auto p-12 my-4 rounded-lg">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        <Card className="bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold mb-2">0</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Heart className="w-4 h-4 mr-1" />
              <span>Supporter</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold mb-2">$0</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Last 30 days</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold mb-2">$0</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>All-time</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Empty State */}
      <div className="flex flex-col p-12 items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <Heart className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium mb-1">
          You don't have any supporters yet
        </h3>
        <p className="text-gray-500 text-sm">
          Share your page with your audience to get started.
        </p>
      </div>
    </div>
  );
};

export default OneTimeTab;
