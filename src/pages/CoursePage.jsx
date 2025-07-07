import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBook, FiClock, FiUsers, FiCheck, FiPlay } = FiIcons;

const CoursePage = () => {
  const courseModules = [
    {
      title: 'Foundation of Gospel Conversations',
      duration: '45 min',
      topics: ['Understanding the Gospel', 'Biblical Foundations', 'Overcoming Fear']
    },
    {
      title: 'Listening and Relationship Building',
      duration: '50 min',
      topics: ['Active Listening Skills', 'Building Trust', 'Finding Common Ground']
    },
    {
      title: 'Natural Conversation Starters',
      duration: '40 min',
      topics: ['Everyday Opportunities', 'Question Techniques', 'Story Sharing']
    },
    {
      title: 'Handling Objections Gracefully',
      duration: '55 min',
      topics: ['Common Objections', 'Respectful Responses', 'Maintaining Relationship']
    },
    {
      title: 'Following Up and Discipleship',
      duration: '35 min',
      topics: ['Continued Engagement', 'Resources for Growth', 'Community Connection']
    }
  ];

  const benefits = [
    'Overcome fear and anxiety in faith sharing',
    'Learn natural conversation techniques',
    'Build genuine relationships while sharing faith',
    'Handle difficult questions with confidence',
    'Develop a sustainable evangelism lifestyle'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TGFC: The Gospel Focused Conversation Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of sharing your faith through natural, meaningful conversations that build relationships and transform lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
              <div className="space-y-6">
                {courseModules.map((module, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                      <div className="flex items-center text-gray-500">
                        <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                        <span className="text-sm">{module.duration}</span>
                      </div>
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center">
                          <SafeIcon icon={FiPlay} className="w-3 h-3 mr-2 text-blue-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiBook} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Course Details</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">5 Modules</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Time</span>
                  <span className="font-semibold">4+ Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Access</span>
                  <span className="font-semibold">Lifetime</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Certificate</span>
                  <span className="font-semibold">Included</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$36</span>
                <span className="text-gray-600">/year</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Enroll Now
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
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

export default CoursePage;