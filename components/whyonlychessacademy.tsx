"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  {
    icon: <PersonIcon sx={{ fontSize: 40, color: '#f59e0b' }} />, 
    title: 'Expert Coaches',
    description: 'Learn from experienced FIDE-rated trainers.',
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40, color: '#f59e0b' }} />, 
    title: '1-on-1 & Group Sessions',
    description: 'Private sessions with flexibility & group-based structured learning.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: 'Tournaments',
    description: 'Monthly online practice tournaments.',
  },
  {
    icon: <AssignmentIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: 'Assignments',
    description: 'Puzzles & tasks via personal chess platform.',
  },
  {
    icon: <LiveTvIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: 'Live Online Learning',
    description: 'Interactive sessions using advanced digital platforms.',
  },
  {
    icon: <FeedbackIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: 'Monthly Feedback',
    description: 'Dedicated parent-teacher meetings for progress updates.',
  },
];

const courses = [
  {
    title: 'Beginner',
    color: 'bg-yellow-50 border-yellow-200',
    details: [
      'Basic chess knowledge – Ready to Play',
      '24 Sessions & 24 Assignments',
      '500+ Puzzles',
      '6 Tournaments',
      '24x7 Platform Access',
      'Monthly Feedback / PTM',
      'Duration: 3 Months',
    ],
  },
  {
    title: 'Intermediate',
    color: 'bg-green-50 border-green-200',
    details: [
      'Perform at school/club level tournaments',
      '48 Sessions & 40 Assignments',
      '1000+ Puzzles',
      '10 Tournaments',
      'Duration: 6 Months',
    ],
  },
  {
    title: 'Advanced',
    color: 'bg-blue-50 border-blue-200',
    details: [
      'Perform at district level tournaments',
      '48 Sessions & 48 Assignments',
      '5000+ Puzzles',
      '12 Tournaments',
      'Duration: >6 Months',
    ],
  },
  {
    title: 'FIDE Rating',
    color: 'bg-pink-50 border-pink-200',
    details: [
      'Perform at state level tournaments',
      'Become FIDE Rated Player',
      '48 Sessions & 96 Assignments',
      '2000+ Puzzles',
      '24 Tournaments',
      'Personalized Dev Plan',
      'Duration: 6+ Months',
    ],
  },
];

export default function WhyOnlyChessAcademy() {
  const isMobile = useMediaQuery('(max-width:640px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-navy-900/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"></div>

        {/* Chess piece decorations */}
        <div className="absolute top-32 right-1/4 text-6xl text-yellow-400/20 transform rotate-12">♞</div>
        <div className="absolute bottom-32 left-20 text-4xl text-navy-900/10 transform -rotate-12">♔</div>
        <div className="absolute top-1/2 left-10 text-5xl text-yellow-400/15 transform rotate-45">♜</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            ♟️ Why Only Chess Academy?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A complete learning experience through personalized coaching, structured curriculum, live sessions,
            puzzles, tournaments & feedback to sharpen every move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((item, i) => (
            <div 
              key={i}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          <div className="relative flex justify-center">
            <div className="px-6 py-2 bg-yellow-100 rounded-full text-yellow-800 font-medium inline-flex items-center">
              <span className="mr-2">📘</span> Our Courses
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {courses.map((course, i) => (
            <div 
              key={i}
              className={`${course.color} border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3 flex flex-col h-full`}
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6 pb-4 relative after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-yellow-400">
                {course.title}
              </h3>
              <ul className="space-y-3 flex-grow">
                {course.details.map((d, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                    <span className="text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full"
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}