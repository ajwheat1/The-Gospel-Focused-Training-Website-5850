import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiArrowRight,FiMessageCircle,FiUsers,FiTarget,FiShare2,FiPlay} = FiIcons;

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Enjoying Faith{' '}
              <span className="text-blue-600">Conversations</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Have you ever felt intimidated in talking about spiritual truths? If so, you are not alone. Transform your approach to communicating the gospel through meaningful conversations. Learn how in The Gospel Focused Conversation Online Course.
            </p>
            <div className="flex items-center space-x-8 mt-8">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-red-500" />
                <span className="text-gray-700">Conversation Centered</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Community Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-blue-500" />
                <span className="text-gray-700">Skills Training</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="relative mt-16 lg:mt-24"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">TGFC Training</h3>
                <p className="text-blue-100 mb-6">
                  Gain confidence in your conversations that can transform hearts and minds.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">$36/year</span>
                </div>
                <p className="text-blue-100 text-sm mt-2">(Online Course Only)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Welcome Video Section */}
      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.4}}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              A Message from the Creator of TGFC, Dr. Joseph Wheat
            </h2>
          </div>
          <div className="p-8">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer hover:bg-gray-200 transition-colors">
              {/* Video Placeholder - Replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="text-center text-white">
                  <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                    <SafeIcon icon={FiPlay} className="w-10 h-10 ml-1" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Welcome to TGFC</h3>
                  <p className="text-blue-100">Click to watch Dr. Wheat's personal welcome message</p>
                </div>
              </div>
              
              {/* Replace this div with actual video embed code */}
              {/* Example YouTube embed structure:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Welcome Message from Dr. Joseph Wheat"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
            
            <div className="mt-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/course"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Your Training Journey
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/bundle"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Explore Ultimate Bundle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;