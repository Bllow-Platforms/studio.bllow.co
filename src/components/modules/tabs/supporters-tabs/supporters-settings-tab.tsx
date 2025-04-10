import React, { useState } from 'react';
import { Eye, Info, Video } from 'lucide-react';

const SupportersSettingsTab = () => {
  const [selectedLayout, setSelectedLayout] = useState('standard');
  const [thankYouMessage, setThankYouMessage] = useState(
    'Thank you for the support!'
  );

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg mx-auto p-4 md:p-6">
      {/* Thank You Message Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-800">
              Thank you message
            </span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <button className="text-xs text-blue-600 font-medium">Edit</button>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          This will be visible after the payment and in the receipt mail. Write a
          personalized thank you message and include any rewards if you like.
        </p>

        <div className="flex gap-2 mb-4">
          <button className="flex items-center gap-1 bg-background text-white hover:bg-indigo-700 text-xs px-3 py-2 rounded-full">
            <Video className="w-4 h-4" />
            Add a video message
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full">
            <Eye className="w-4 h-4" />
            Preview message
          </button>
        </div>

        <textarea
          value={thankYouMessage}
          onChange={e => setThankYouMessage(e.target.value)}
          className="w-full bg-gray-100 rounded-md p-4 mb-4 resize-none min-h-24 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
        />

        <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-2 rounded-full">
          Save
        </button>
      </div>

      {/* Choose Layout Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-4 text-gray-800">Choose a Layout</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Standard View Option */}
          <div
            className={`border rounded-lg p-4 cursor-pointer ${selectedLayout === 'standard' ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-gray-200'}`}
            onClick={() => setSelectedLayout('standard')}
          >
            <p className="text-xs font-medium mb-4 text-gray-800">Standard View</p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-700 mb-3">Support Feedback</p>

              <div className="flex mb-4 p-3 rounded-full bg-[#F3F2FF]">
                <div className="mx-2">
                  💖 <span className="text-xs">x</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-indigo-500 mr-1"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>

              <div className="bg-white p-2 rounded mb-2">
                <p className="text-xs text-gray-400">Name</p>
              </div>

              <div className="bg-white p-2 rounded mb-4">
                <p className="text-xs text-gray-400">Say something nice</p>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs py-2 rounded">
                Support
              </button>
            </div>
          </div>

          {/* Suggested Amount Option */}
          <div
            className={`border rounded-lg p-4 cursor-pointer ${selectedLayout === 'suggested' ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-gray-200'}`}
            onClick={() => setSelectedLayout('suggested')}
          >
            <p className="text-xs font-medium mb-4 text-gray-800">
              Suggested Amount
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-700 mb-3">Support Feedback</p>

              <div className="flex items-center mb-3 rounded-full bg-[#F3F2FF] p-3">
                <span className="text-xs mr-2">$</span>
                <div className="py-1 px-2 rounded text-xs text-gray-400">
                  Enter Amount
                </div>
                <div className="flex ml-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-1"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                </div>
              </div>

              <div className="bg-white p-2 rounded mb-2">
                <p className="text-xs text-gray-400">Name</p>
              </div>

              <div className="bg-white p-2 rounded mb-4">
                <p className="text-xs text-gray-400">Say something nice</p>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs py-2 rounded">
                Support $1
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggest an amount Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium text-gray-800">Suggest an amount</h3>
          <button className="text-xs text-blue-600 font-medium">Edit</button>
        </div>
        <p className="text-xs text-gray-500">$25, $50, $100</p>
      </div>

      {/* Button wording Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1">
            <h3 className="text-sm font-medium text-gray-800">Button wording</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <button className="text-xs text-blue-600 font-medium">Edit</button>
        </div>
        <p className="text-xs text-gray-500">Support</p>
      </div>
    </div>
  );
};

export default SupportersSettingsTab;
