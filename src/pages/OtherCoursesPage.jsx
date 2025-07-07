import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiBook,FiUsers,FiHeart,FiTarget,FiClock,FiStar}=FiIcons;

const OtherCoursesPage=()=> {
  const courses=[ 
    {
      id: 1,
      title: 'Biblical Foundations of Evangelism',
      description: 'Explore the theological foundations of sharing your faith through comprehensive biblical study and practical application.',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face',
      features: [ 
        'Deep biblical study of evangelism',
        'Historical perspectives on faith sharing',
        'Theological framework for modern evangelism',
        'Interactive group discussions' 
      ],
      icon: FiBook,
      color: 'blue'
    },
    {
      id: 2,
      title: 'International Ministry Friends Podcast',
      description: 'Ministry leaders from several countries, who are also close friends talk about life and ministry across cultural contexts. Monthly',
      duration: '6 weeks',
      level: 'Advanced',
      price: '$79',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop&crop=center',
      features: [ 
        'Mentoring best practices',
        'Spiritual growth strategies',
        'Building lasting relationships',
        'Practical discipleship tools' 
      ],
      icon: FiUsers,
      color: 'green'
    },
    {
      id: 3,
      title: 'Cross-Cultural Evangelism',
      description: 'Navigate cultural differences while sharing the gospel effectively across diverse communities and contexts.',
      duration: '10 weeks',
      level: 'Advanced',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop&crop=center',
      features: [ 
        'Cultural sensitivity training',
        'Cross-cultural communication',
        'Contextual gospel presentation',
        'Real-world case studies' 
      ],
      icon: FiHeart,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Apologetics for Everyday Christians',
      description: 'Equip yourself with solid answers to common questions and objections about the Christian faith.',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '$109',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face',
      features: [ 
        'Common objections and responses',
        'Logical reasoning skills',
        'Evidence for Christianity',
        'Graceful debate techniques' 
      ],
      icon: FiTarget,
      color: 'red'
    },
    {
      id: 5,
      title: 'Digital Evangelism in the Modern Age',
      description: 'Harness the power of social media and digital platforms to share your faith effectively online.',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$59',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center',
      features: [ 
        'Social media strategies',
        'Online community building',
        'Digital content creation',
        'Online safety and ethics' 
      ],
      icon: FiStar,
      color: 'indigo'
    },
    {
      id: 6,
      title: 'Youth Ministry and Evangelism',
      description: 'Specialized training for reaching and discipling young people in today\'s challenging cultural environment.',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$85',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop&crop=center',
      features: [ 
        'Youth culture understanding',
        'Age-appropriate communication',
        'Engaging teaching methods',
        'Parent and family involvement' 
      ],
      icon: FiUsers,
      color: 'yellow'
    } 
  ];

  const getColorClasses=(color)=> {
    const colorMap={
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
      green: 'from-green-50 to-green-100 border-green-200 text-green-600',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
      red: 'from-red-50 to-red-100 border-red-200 text-red-600',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600',
      yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getButtonClasses=(color)=> {
    const colorMap={
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      red: 'bg-red-600 hover:bg-red-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700'
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
            Other Courses with Dr. Joseph Wheat 
          </h1> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            Expand your ministry skills with these comprehensive courses designed to equip you for effective evangelism and discipleship. 
          </p> 
        </motion.div> 

        {/* Courses Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {courses.map((course,index)=> ( 
            <motion.div 
              key={course.id} 
              initial={{opacity: 0,y: 20}} 
              animate={{opacity: 1,y: 0}} 
              transition={{duration: 0.6,delay: index * 0.1}} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" 
            > 
              <div className="relative"> 
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                /> 
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getColorClasses(course.color)} px-3 py-1 rounded-full border`}> 
                  <span className={`text-sm font-semibold ${course.color==='yellow' ? 'text-yellow-700' : ''}`}> 
                    {course.level} 
                  </span> 
                </div> 
              </div> 
              <div className="p-6"> 
                <div className="flex items-center mb-3"> 
                  <div className={`bg-gradient-to-r ${getColorClasses(course.color)} p-2 rounded-lg mr-3`}> 
                    <SafeIcon icon={course.icon} className="w-5 h-5" /> 
                  </div> 
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3> 
                </div> 
                <p className="text-gray-600 mb-4">{course.description}</p> 
                <div className="flex items-center justify-between mb-4"> 
                  <div className="flex items-center text-gray-500"> 
                    <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" /> 
                    <span className="text-sm">{course.duration}</span> 
                  </div> 
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span> 
                </div> 
                <ul className="space-y-2 mb-6"> 
                  {course.features.map((feature,featureIndex)=> ( 
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600"> 
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div> 
                      {feature} 
                    </li> 
                  ))} 
                </ul> 
                <button className={`w-full ${getButtonClasses(course.color)} text-white py-3 rounded-lg font-semibold transition-colors`}> 
                  Enroll Now 
                </button> 
              </div> 
            </motion.div> 
          ))} 
        </div> 

        {/* Call to Action */} 
        <motion.div 
          initial={{opacity: 0,y: 20}} 
          animate={{opacity: 1,y: 0}} 
          transition={{duration: 0.8,delay: 0.6}} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mt-16 text-center" 
        > 
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Ministry?</h2> 
          <p className="text-blue-100 mb-6"> 
            Join thousands of believers who have enhanced their evangelism and discipleship skills through Dr. Wheat's comprehensive training programs. 
          </p> 
          <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"> 
              Browse All Courses 
            </button> 
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"> 
              Contact for Group Pricing 
            </button> 
          </div> 
        </motion.div> 
      </div> 
    </div> 
  );
};

export default OtherCoursesPage;