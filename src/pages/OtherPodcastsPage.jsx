import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiMic,FiPlay,FiCalendar,FiClock,FiExternalLink,FiUsers,FiHeart}=FiIcons;

const OtherPodcastsPage=()=> {
  const podcasts=[ 
    {
      id: 1,
      title: 'The Ministry Frame Podcast',
      description: 'Three pastors talk about ministry and life,also with featured guests. Monthly',
      frequency: 'Monthly',
      episodes: 156,
      category: 'Culture & Faith',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center',
      color: 'blue',
      recentEpisodes: [ 
        {
          title: 'Navigating Social Media as a Christian',
          duration: '42 min',
          date: 'Dec 10,2024'
        },
        {
          title: 'Faith in the Workplace',
          duration: '38 min',
          date: 'Dec 3,2024'
        },
        {
          title: 'Raising Children in a Digital Age',
          duration: '45 min',
          date: 'Nov 26,2024'
        } 
      ]
    },
    {
      id: 2,
      title: 'International Ministry Friends Podcast',
      description: 'Church leaders who are friends talk about the Kingdom of God and life in several cultural contexts,also with featured guests. Monthly',
      frequency: 'Monthly',
      episodes: 78,
      category: 'Discipleship',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop&crop=center',
      color: 'green',
      recentEpisodes: [ 
        {
          title: 'The Art of Spiritual Mentoring',
          duration: '35 min',
          date: 'Dec 8,2024'
        },
        {
          title: 'Building Lasting Spiritual Habits',
          duration: '41 min',
          date: 'Nov 24,2024'
        },
        {
          title: 'Community and Accountability',
          duration: '39 min',
          date: 'Nov 10,2024'
        } 
      ]
    }
  ];

  const getColorClasses=(color)=> {
    const colorMap={
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
      green: 'from-green-50 to-green-100 border-green-200 text-green-600',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
      red: 'from-red-50 to-red-100 border-red-200 text-red-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getButtonClasses=(color)=> {
    const colorMap={
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      red: 'bg-red-600 hover:bg-red-700'
    };
    return colorMap[color] || colorMap.blue;
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> 
            Other Podcasts with Dr. Joseph Wheat 
          </h1> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            Explore Dr. Wheat's other podcast series covering faith,culture,discipleship,and ministry leadership. 
          </p> 
        </motion.div> 

        {/* Podcasts Grid */} 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          {podcasts.map((podcast,index)=> ( 
            <motion.div 
              key={podcast.id} 
              initial={{opacity: 0,y: 20}} 
              animate={{opacity: 1,y: 0}} 
              transition={{duration: 0.6,delay: index * 0.1}} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" 
            > 
              <div className="relative"> 
                <img 
                  src={podcast.image} 
                  alt={podcast.title} 
                  className="w-full h-48 object-cover" 
                /> 
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getColorClasses(podcast.color)} px-3 py-1 rounded-full border`}> 
                  <span className="text-sm font-semibold">{podcast.category}</span> 
                </div> 
              </div> 
              <div className="p-6"> 
                <div className="flex items-center mb-3"> 
                  <SafeIcon icon={FiMic} className={`w-6 h-6 mr-3 ${podcast.color==='blue' ? 'text-blue-600' : podcast.color==='green' ? 'text-green-600' : podcast.color==='purple' ? 'text-purple-600' : 'text-red-600'}`} /> 
                  <h3 className="text-xl font-bold text-gray-900">{podcast.title}</h3> 
                </div> 
                <p className="text-gray-600 mb-4">{podcast.description}</p> 
                <div className="flex items-center justify-between mb-6"> 
                  <div className="flex items-center space-x-4 text-sm text-gray-500"> 
                    <div className="flex items-center"> 
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" /> 
                      <span>{podcast.frequency}</span> 
                    </div> 
                    <div className="flex items-center"> 
                      <SafeIcon icon={FiPlay} className="w-4 h-4 mr-1" /> 
                      <span>{podcast.episodes} episodes</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="mb-6"> 
                  <h4 className="font-semibold text-gray-900 mb-3">Recent Episodes</h4> 
                  <div className="space-y-2"> 
                    {podcast.recentEpisodes.map((episode,episodeIndex)=> ( 
                      <div key={episodeIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"> 
                        <div className="flex-1"> 
                          <h5 className="font-medium text-gray-900 text-sm">{episode.title}</h5> 
                          <div className="flex items-center text-xs text-gray-500 mt-1"> 
                            <span>{episode.date}</span> 
                            <span className="mx-2">•</span> 
                            <span>{episode.duration}</span> 
                          </div> 
                        </div> 
                        <button className={`p-2 rounded-full ${getButtonClasses(podcast.color)} text-white hover:scale-105 transition-transform`}> 
                          <SafeIcon icon={FiPlay} className="w-4 h-4" /> 
                        </button> 
                      </div> 
                    ))} 
                  </div> 
                </div> 
                <div className="flex space-x-3"> 
                  <button className={`flex-1 ${getButtonClasses(podcast.color)} text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center`}> 
                    <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" /> 
                    Listen Now 
                  </button> 
                  <button className={`px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors`}> 
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5" /> 
                  </button> 
                </div> 
              </div> 
            </motion.div> 
          ))} 
        </div> 

        {/* Subscribe Section */} 
        <motion.div 
          initial={{opacity: 0,y: 20}} 
          animate={{opacity: 1,y: 0}} 
          transition={{duration: 0.8,delay: 0.4}} 
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 mt-16" 
        > 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> 
            <div> 
              <h2 className="text-2xl font-bold mb-4">Subscribe to All Podcasts</h2> 
              <p className="text-gray-300 mb-6"> 
                Get notifications for new episodes across all of Dr. Wheat's podcast series. Stay updated with the latest discussions on faith,culture,discipleship,and ministry leadership. 
              </p> 
              <div className="flex items-center space-x-4"> 
                <div className="flex items-center"> 
                  <SafeIcon icon={FiUsers} className="w-5 h-5 mr-2 text-blue-400" /> 
                  <span className="text-sm">10K+ Subscribers</span> 
                </div> 
                <div className="flex items-center"> 
                  <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2 text-red-400" /> 
                  <span className="text-sm">4.8/5 Rating</span> 
                </div> 
              </div> 
            </div> 
            <div className="space-y-4"> 
              <div className="flex flex-col sm:flex-row gap-4"> 
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900" 
                /> 
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"> 
                  Subscribe 
                </button> 
              </div> 
              <p className="text-sm text-gray-400"> 
                Subscribe to get weekly updates and never miss an episode from any of Dr. Wheat's podcasts. 
              </p> 
            </div> 
          </div> 
        </motion.div> 
      </div> 
    </div> 
  );
};

export default OtherPodcastsPage;