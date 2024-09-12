import React from "react";
import Navbar from "./Navbar";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
  return (
    <div className="bg-gray-50 min-h-screen bg-blue-800">
      <Navbar />

      <div className="container mx-auto py-12 bg-blue-800">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free</h2>
            <p className="text-gray-500 mb-6">$0/month</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Basic features
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Limited access to Audio, Video, and Chat
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Work with small team
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Limited support
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-auto">
              Get Started
            </button>
          </div>

          <div className="border-2 border-blue-500 p-6 rounded-lg bg-white shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro</h2>
            <p className="text-gray-500 mb-6">$15/month</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Work with your whole team
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Unlimited Audio, Video, and Chat
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Full customization
              </li>

              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Domain restricted access
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                End to end encryption
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-auto">
              Choose Pro
            </button>
          </div>

          <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Enterprise
            </h2>
            <p className="text-gray-500 mb-6">Custom pricing</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                For large team
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Unlimited Audio, Video, and Chat
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Full customization
              </li>

              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                Domain restricted access
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                End to end encryption
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                VR support
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2" />
                SSO support
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-auto">
              Choose Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
