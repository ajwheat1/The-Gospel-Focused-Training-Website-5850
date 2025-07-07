import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiBook,FiHeadphones,FiUsers,FiBookOpen,FiStar,FiMessageCircle}=FiIcons;

const Courses=()=> {
  const courseFeatures=[ 
    {icon: FiBook,title: 'Comprehensive Training',description: 'Learn a conversational way to share the gospel of Jesus Christ with the TGFC Online Course'},
    {icon: FiHeadphones,title: 'Audio Learning',description: 'Listen and learn on-the-go with our audio only version of the TGFC Course'},
    {icon: FiUsers,title: 'Community Support',description: 'Join weekly chats and monthly webinars to continue to develop your evangelism skills'},
    {icon: FiBookOpen,title: 'Ebooks',description: 'TGFC: The Gospel Focused Conversation" Ebook and unique course flipbook'} 
  ];

  return ( 
    <section className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-16"> 
          <motion.h2 
            initial={{opacity: 0,y: 20}} 
            whileInView={{opacity: 1,y: 0}} 
            transition={{duration: 0.6}} 
            className="text-4xl font-bold text-gray-900 mb-4" 
          > 
            The Gospel Focused Conversation Training Programs 
          </motion.h2> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            Choose the perfect program to transform your approach to sharing faith through meaningful,structured conversations. 
          </p> 
        </div> 

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"> 
          {/* Course Card */} 
          <motion.div 
            initial={{opacity: 0,y: 20}} 
            whileInView={{opacity: 1,y: 0}} 
            transition={{duration: 0.8}} 
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl" 
          > 
            <div className="flex items-center mb-6"> 
              <SafeIcon icon={FiBook} className="w-8 h-8 text-blue-600 mr-3" /> 
              <h3 className="text-2xl font-bold text-gray-900">TGFC Training Online Course</h3> 
            </div> 
            <p className="text-gray-600 mb-6"> 
              Master the art of gospel-centered conversations with our comprehensive training course. Access anytime for a year to re-learn and practice. All for 75 cents a week! 
            </p> 
            <div className="flex items-center justify-between mb-6"> 
              <span className="text-3xl font-bold text-blue-600">$36/year</span> 
              <div className="flex items-center"> 
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500 mr-1" /> 
                <span className="text-gray-600">Foundational</span> 
              </div> 
            </div> 
            <Link 
              to="/course" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center" 
            > 
              Learn More 
            </Link> 
          </motion.div> 

          {/* Community Access Card */} 
          <motion.div 
            initial={{opacity: 0,y: 20}} 
            whileInView={{opacity: 1,y: 0}} 
            transition={{duration: 0.8,delay: 0.1}} 
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl" 
          > 
            <div className="flex items-center mb-6"> 
              <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-green-600 mr-3" /> 
              <h3 className="text-2xl font-bold text-gray-900">TGFC Community Access Only</h3> 
            </div> 
            <p className="text-gray-600 mb-6"> 
              Join our community of people learning to share their faith together. Includes weekly chats,monthly webinars,and special community events. Come in and grow for 1 dollar per week! 
            </p> 
            <div className="flex items-center justify-between mb-6"> 
              <span className="text-3xl font-bold text-green-600">$48/year</span> 
              <div className="flex items-center"> 
                <SafeIcon icon={FiUsers} className="w-5 h-5 text-yellow-500 mr-1" /> 
                <span className="text-gray-600">Community</span> 
              </div> 
            </div> 
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"> 
              Join Community 
            </button> 
          </motion.div> 

          {/* Bundle Card */} 
          <motion.div 
            initial={{opacity: 0,y: 20}} 
            whileInView={{opacity: 1,y: 0}} 
            transition={{duration: 0.8,delay: 0.2}} 
            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl relative overflow-hidden" 
          > 
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold"> 
              Best Value 
            </div> 
            <div className="flex items-center mb-6"> 
              <SafeIcon icon={FiStar} className="w-8 h-8 text-purple-600 mr-3" /> 
              <h3 className="text-2xl font-bold text-gray-900">TGFC Ultimate Bundle</h3> 
            </div> 
            <p className="text-gray-600 mb-6"> 
              Everything you need to become a confident gospel communicator with the TGFC online course and community access. All that is listed below. Get it all for 1.25 per week! 
            </p> 
            <div className="flex items-center justify-between mb-6"> 
              <span className="text-3xl font-bold text-purple-600">$60.00/year</span> 
              <div className="flex items-center"> 
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500 mr-1" /> 
                <span className="text-gray-600">Complete</span> 
              </div> 
            </div> 
            <Link 
              to="/bundle" 
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center" 
            > 
              Get Ultimate Bundle 
            </Link> 
          </motion.div> 
        </div> 

        {/* Features Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {courseFeatures.map((feature,index)=> ( 
            <motion.div 
              key={index} 
              initial={{opacity: 0,y: 20}} 
              whileInView={{opacity: 1,y: 0}} 
              transition={{duration: 0.6,delay: index * 0.1}} 
              className="text-center" 
            > 
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> 
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-blue-600" /> 
              </div> 
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4> 
              <p className="text-gray-600">{feature.description}</p> 
            </motion.div> 
          ))} 
        </div> 
      </div> 
    </section> 
  );
};

export default Courses;