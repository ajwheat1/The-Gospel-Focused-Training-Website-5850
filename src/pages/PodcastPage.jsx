import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiPlay, FiCalendar, FiClock, FiDownload, FiExternalLink } = FiIcons;

const PodcastPage = () => {
  const episodes = [
    {
      id: 1,
      title: 'Building Bridges: Starting Gospel Conversations',
      description: 'Learn how to naturally introduce faith topics in everyday conversations without being pushy or awkward. Dr. Wheat shares practical strategies for creating meaningful connections.',
      date: 'December 15, 2024',
      duration: '32 min',
      featured: true,
      topics: ['Natural Conversation Starters', 'Building Rapport', 'Overcoming Awkwardness']
    },
    {
      id: 2,
      title: 'Overcoming Fear in Faith Sharing',
      description: 'Practical strategies to build confidence when sharing your faith. Address common fears and learn how to step out in courage while maintaining authentic relationships.',
      date: 'September 22, 2024',
      duration: '28 min',
      featured: false,
      topics: ['Fear Management', 'Building Confidence', 'Authentic Relationships']
    },
    {
      id: 3,
      title: 'The Power of Listening in Gospel Conversations',
      description: 'Why listening is the most important skill in faith sharing. Discover how to truly hear others and create space for meaningful dialogue about spiritual matters.',
      date: 'June 18, 2024',
      duration: '35 min',
      featured: false,
      topics: ['Active Listening', 'Empathy', 'Creating Safe Spaces']
    },
    {
      id: 4,
      title: 'Handling Difficult Questions with Grace',
      description: 'Navigate challenging questions and objections with wisdom and grace. Learn how to respond thoughtfully when faced with tough spiritual discussions.',
      date: 'March 25, 2024',
      duration: '41 min',
      featured: false,
      topics: ['Apologetics', 'Graceful Responses', 'Maintaining Relationships']
    }
  ];

  const platforms = [
    { name: 'Apple Podcasts', icon: FiExternalLink },
    { name: 'Spotify', icon: FiExternalLink },
    { name: 'Google Podcasts', icon: FiExternalLink },
    { name: 'RSS Feed', icon: FiExternalLink }
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
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiMic} className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TGFC Podcast
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Quarterly episodes packed with practical insights and real-world applications for gospel-centered conversations.
          </p>
          
          {/* Platforms */}
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={platform.icon} className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{platform.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Episode */}
        {episodes.filter(ep => ep.featured).map((episode) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-12 border-l-4 border-green-500"
          >
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                Latest Episode
              </span>
              <div className="flex items-center text-gray-600">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                <span className="text-sm mr-4">{episode.date}</span>
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                <span className="text-sm">{episode.duration}</span>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{episode.title}</h2>
            <p className="text-gray-700 mb-6">{episode.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {episode.topics.map((topic, index) => (
                <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" />
                Listen Now
              </button>
              <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          </motion.div>
        ))}

        {/* All Episodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Episodes</h2>
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <div key={episode.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{episode.title}</h3>
                    <p className="text-gray-600 mb-3">{episode.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {episode.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                      <SafeIcon icon={FiPlay} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      <span>{episode.date}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-700 flex items-center">
                    <SafeIcon icon={FiDownload} className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Never Miss an Episode</h2>
          <p className="text-green-100 mb-6">
            Subscribe to get notified when new quarterly episodes are released.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1 max-w-md"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PodcastPage;