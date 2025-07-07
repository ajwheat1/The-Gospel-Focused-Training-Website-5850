import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiAward,FiBookOpen,FiUsers,FiHeart}=FiIcons;

const About=()=> {
  const achievements=[ 
    {
      icon: FiAward,
      title: '30+ Years Experience',
      description: 'Decades of ministry and theological education'
    },
    {
      icon: FiBookOpen,
      title: 'Published Author',
      description: 'Helpful books including "TGF: The Gospel Focused Conversation" Ebook'
    },
    {
      icon: FiUsers,
      title: 'Hundreds Trained',
      description: 'Equipped believers worldwide in gospel conversations'
    },
    {
      icon: FiHeart,
      title: 'Passionate Educator',
      description: 'Dedicated to practical,biblical training'
    } 
  ];

  return ( 
    <section className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
          <motion.div 
            initial={{opacity: 0,x: -50}} 
            whileInView={{opacity: 1,x: 0}} 
            transition={{duration: 0.8}} 
          > 
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white"> 
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"> 
                <span className="text-4xl font-bold">DJW</span> 
              </div> 
              <h3 className="text-2xl font-bold text-center mb-4">Dr. Joseph Wheat</h3> 
              <p className="text-center text-blue-100"> 
                Preacher/Teacher, Professor, Evangelistic Communicator and Equipper 
              </p> 
            </div> 
          </motion.div> 

          <motion.div 
            initial={{opacity: 0,x: 50}} 
            whileInView={{opacity: 1,x: 0}} 
            transition={{duration: 0.8}} 
          > 
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Dr. Joseph Wheat</h2> 
            <p className="text-lg text-gray-600 mb-6"> 
              Dr. Joseph Wheat is a preacher/teacher with over three decades of experience in ministry and theological education. He loves to share the gospel with people. Dr. Wheat is dedicated to equipping believers with practical tools for communicating their faith. 
            </p> 
            <p className="text-lg text-gray-600 mb-8"> 
              Through his conversational approach personal evangelism,Dr. Wheat has trained hundreds of believers,helping them overcome fear and develop confidence in sharing their faith naturally and effectively. 
            </p> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
              {achievements.map((achievement,index)=> ( 
                <motion.div 
                  key={index} 
                  initial={{opacity: 0,y: 20}} 
                  whileInView={{opacity: 1,y: 0}} 
                  transition={{duration: 0.6,delay: index * 0.1}} 
                  className="flex items-start space-x-3" 
                > 
                  <div className="bg-blue-100 rounded-lg p-2"> 
                    <SafeIcon icon={achievement.icon} className="w-5 h-5 text-blue-600" /> 
                  </div> 
                  <div> 
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4> 
                    <p className="text-sm text-gray-600">{achievement.description}</p> 
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

export default About;