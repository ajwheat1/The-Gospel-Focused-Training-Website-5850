import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiCalendar, FiPlay, FiShare2 } = FiIcons;

const Podcast = () => {
  const recentEpisodes = [
    {
      title: 'Building Bridges: Starting Gospel Conversations',
      description: 'Learn how to naturally introduce faith topics in everyday conversations.',
      date: 'December 2024',
      duration: '32 min'
    },
    {
      title: 'Overcoming Fear in Faith Sharing',
      description: 'Practical strategies to build confidence when sharing your faith.',
      date: 'September 2024',
      duration: '28 min'
    },
    {
      title: 'The Power of Listening in Gospel Conversations',
      description: 'Why listening is the most important skill in faith sharing.',
      date: 'June 2024',
      duration: '35 min'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            TGFC Podcast
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quarterly episodes packed with practical insights and real-world applications for gospel-centered conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMic} className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Quarterly TGFC Podcast</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Join Dr. Joseph Wheat for in-depth discussions about evangelism, personal stories, with guest experts and real-world case studies.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Quarterly Release</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiPlay} className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Free Access</span>
                </div>
              </div>
              <div className="space-y-3">
                <Link
                  to="/podcast"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Listen Now
                </Link>
                <button className="w-full bg-white border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                  <SafeIcon icon={FiShare2} className="w-5 h-5 mr-2" />
                  Share Podcast
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Episodes</h3>
            <div className="space-y-6">
              {recentEpisodes.map((episode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{episode.title}</h4>
                  <p className="text-gray-600 mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{episode.date}</span>
                    <span>{episode.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;