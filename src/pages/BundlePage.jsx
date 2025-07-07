import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiBook,FiHeadphones,FiUsers,FiFileText,FiStar,FiCheck,FiCalendar,FiMessageCircle}=FiIcons;

const BundlePage=()=> {
  const bundleIncludes=[ 
    {
      icon: FiBook,
      title: 'TGFC: The Gospel Focused Conversation Training',
      description: 'Complete video course with 5 comprehensive modules',
      value: '$36'
    },
    {
      icon: FiHeadphones,
      title: 'Audio-only Version',
      description: 'Listen and learn on-the-go with our audio only version of the TGFC Course',
      value: '$24'
    },
    {
      icon: FiUsers,
      title: 'Interactive Online Community',
      description: 'Access to exclusive community with monthly webinars and weekly chats',
      value: '$48'
    },
    {
      icon: FiFileText,
      title: 'Complete Ebook',
      description: 'Digital copy of "TGFC: The Gospel Focused Conversation" published Ebook',
      value: '$12.99'
    },
    {
      icon: FiBook,
      title: 'Flipbook Format',
      description: 'Interactive flipbook version of the Course for easy reading',
      value: '$7.99'
    } 
  ];

  const communityFeatures=[ 
    {
      icon: FiCalendar,
      title: 'Monthly Webinars',
      description: 'Live training sessions with Dr. Joseph Wheat and guest experts'
    },
    {
      icon: FiMessageCircle,
      title: 'Weekly Chats',
      description: 'Connect with fellow believers and share experiences'
    },
    {
      icon: FiUsers,
      title: 'Peer Support',
      description: 'Get encouragement and advice from a community of faith sharers'
    } 
  ];

  return ( 
    <div className="min-h-screen bg-gray-50 py-12"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* Header */} 
        <motion.div 
          initial={{opacity: 0,y: 20}} 
          animate={{opacity: 1,y: 0}} 
          transition={{duration: 0.6}} 
          className="text-center mb-12" 
        > 
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full inline-block mb-4"> 
            <span className="font-semibold">🎉 Best Value - Save $68!</span> 
          </div> 
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> 
            TGFC Ultimate Bundle 
          </h1> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            Everything you need to become a confident gospel communicator with the TGFC online course and community access. All that is listed below. 
          </p> 
        </motion.div> 

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12"> 
          {/* Bundle Content */} 
          <div className="lg:col-span-2"> 
            <motion.div 
              initial={{opacity: 0,x: -50}} 
              animate={{opacity: 1,x: 0}} 
              transition={{duration: 0.8}} 
              className="bg-white rounded-2xl shadow-lg p-8 mb-8" 
            > 
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2> 
              <div className="space-y-6"> 
                {bundleIncludes.map((item,index)=> ( 
                  <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"> 
                    <div className="bg-purple-100 rounded-lg p-3"> 
                      <SafeIcon icon={item.icon} className="w-6 h-6 text-purple-600" /> 
                    </div> 
                    <div className="flex-1"> 
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3> 
                      <p className="text-gray-600">{item.description}</p> 
                    </div> 
                    <div className="text-right"> 
                      <span className="text-lg font-bold text-purple-600">{item.value}</span> 
                      <p className="text-sm text-gray-500">Value</p> 
                    </div> 
                  </div> 
                ))} 
              </div> 
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"> 
                <div className="flex items-center justify-between"> 
                  <div> 
                    <p className="text-lg text-gray-700">Total Individual Value:</p> 
                    <p className="text-sm text-gray-500">If purchased separately</p> 
                  </div> 
                  <div className="text-right"> 
                    <span className="text-2xl font-bold text-gray-400 line-through">$128.98</span> 
                    <p className="text-sm text-gray-500">Regular Price</p> 
                  </div> 
                </div> 
              </div> 
            </motion.div> 

            <motion.div 
              initial={{opacity: 0,x: -50}} 
              animate={{opacity: 1,x: 0}} 
              transition={{duration: 0.8,delay: 0.2}} 
              className="bg-white rounded-2xl shadow-lg p-8" 
            > 
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h2> 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                {communityFeatures.map((feature,index)=> ( 
                  <div key={index} className="text-center"> 
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> 
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-blue-600" /> 
                    </div> 
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3> 
                    <p className="text-gray-600">{feature.description}</p> 
                  </div> 
                ))} 
              </div> 
            </motion.div> 
          </div> 

          {/* Sidebar */} 
          <div className="lg:col-span-1"> 
            <motion.div 
              initial={{opacity: 0,x: 50}} 
              animate={{opacity: 1,x: 0}} 
              transition={{duration: 0.8}} 
              className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg p-8 sticky top-24" 
            > 
              <div className="text-center mb-6"> 
                <SafeIcon icon={FiStar} className="w-12 h-12 mx-auto mb-4" /> 
                <h3 className="text-2xl font-bold">Ultimate Bundle</h3> 
                <p className="text-purple-100">Complete Training Package</p> 
              </div> 
              <div className="text-center mb-8"> 
                <div className="mb-4"> 
                  <span className="text-lg line-through text-purple-200">$128.98</span> 
                  <span className="text-sm text-purple-200 ml-2">Regular Price</span> 
                </div> 
                <div className="text-center"> 
                  <span className="text-5xl font-bold">$60.00</span> 
                  <span className="text-purple-200">/year</span> 
                </div> 
                <p className="text-purple-100 mt-2">Save $68.98 instantly!</p> 
              </div> 
              <div className="space-y-3 mb-8"> 
                <div className="flex items-center space-x-2"> 
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300" /> 
                  <span className="text-sm">Complete Video Course</span> 
                </div> 
                <div className="flex items-center space-x-2"> 
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300" /> 
                  <span className="text-sm">Audio Version Included</span> 
                </div> 
                <div className="flex items-center space-x-2"> 
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300" /> 
                  <span className="text-sm">Exclusive Community Access</span> 
                </div> 
                <div className="flex items-center space-x-2"> 
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300" /> 
                  <span className="text-sm">Monthly Webinars</span> 
                </div> 
                <div className="flex items-center space-x-2"> 
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300" /> 
                  <span className="text-sm">Complete Ebook & Flipbook</span> 
                </div> 
              </div> 
              <button className="w-full bg-white text-purple-600 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors mb-4"> 
                Get Ultimate Bundle 
              </button> 
              <div className="text-center"> 
                <p className="text-sm text-purple-100"> 
                  30-day money-back guarantee 
                </p> 
              </div> 
            </motion.div> 
          </div> 
        </div> 
      </div> 
    </div> 
  );
};

export default BundlePage;