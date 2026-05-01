import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiZap, FiFilter, FiPlay, FiAward, FiClock,
  FiCheckCircle, FiTrendingUp, FiUsers, FiStar, FiLock,
} from 'react-icons/fi';
import { FaCode, FaDatabase, FaReact, FaServer, FaCogs, FaNodeJs, FaPython } from 'react-icons/fa';

// ── Constants ──────────────────────────────────────────────────
const TRACKS = ['All Tracks', 'Algorithms', 'Data Structures', 'System Design', 'Frontend Core'];
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];

const CHALLENGES = [
  { id: 1, title: 'LRU Cache Implementation', description: 'Design and implement a data structure for Least Recently Used cache with O(1) time complexity for all operations.', difficulty: 'MEDIUM', track: 'Data Structures', xp: 450, completion: 64, icon: <FaCogs className="text-yellow-600" size={22} />, iconBg: 'bg-yellow-100' },
  { id: 2, title: 'Valid Palindrome II', description: 'Given a string, determine if it can be a palindrome by deleting at most one character from it.', difficulty: 'EASY', track: 'Algorithms', xp: 200, completion: 82, icon: <FaCode className="text-green-600" size={22} />, iconBg: 'bg-green-100' },
  { id: 3, title: 'Distributed Log Sorter', description: 'Efficiently sort millions of log entries across a distributed network with minimal latency and memory usage.', difficulty: 'HARD', track: 'System Design', xp: 1200, completion: 12, icon: <FaDatabase className="text-red-500" size={22} />, iconBg: 'bg-red-100' },
  { id: 4, title: 'Async Request Scheduler', description: 'Build a throttle mechanism that limits the number of concurrent API requests with a queue-based waiting list.', difficulty: 'MEDIUM', track: 'Algorithms', xp: 550, completion: 41, icon: <FaServer className="text-blue-600" size={22} />, iconBg: 'bg-blue-100' },
  { id: 5, title: 'Bento Layout Generator', description: 'Create an algorithm that arranges dynamic cards into an optimal bento-grid layout minimizing empty space.', difficulty: 'MEDIUM', track: 'Frontend Core', xp: 600, completion: 35, icon: <FaReact className="text-indigo-600" size={22} />, iconBg: 'bg-indigo-100' },
  { id: 6, title: 'JWT Validation Engine', description: 'Implement a secure token validation library that handles rotation and expiration with RS256 and HS256.', difficulty: 'HARD', track: 'System Design', xp: 950, completion: 18, icon: <FaCogs className="text-rose-600" size={22} />, iconBg: 'bg-rose-100' },
  { id: 7, title: 'Fibonacci Memoization', description: 'Implement the Fibonacci sequence with top-down memoization and analyze space-time trade-offs.', difficulty: 'EASY', track: 'Algorithms', xp: 150, completion: 91, icon: <FaCode className="text-teal-600" size={22} />, iconBg: 'bg-teal-100' },
  { id: 8, title: 'GraphQL Rate Limiter', description: 'Design a per-query rate limiting system for a GraphQL API that handles burst traffic with token bucket algorithm.', difficulty: 'HARD', track: 'System Design', xp: 1100, completion: 8, icon: <FaNodeJs className="text-green-700" size={22} />, iconBg: 'bg-green-50' },
  { id: 9, title: 'React Virtual Scroller', description: 'Build a high-performance virtual list that renders only visible rows, supporting dynamic item heights.', difficulty: 'MEDIUM', track: 'Frontend Core', xp: 700, completion: 29, icon: <FaReact className="text-sky-500" size={22} />, iconBg: 'bg-sky-100' },
  { id: 10, title: 'Binary Search Variants', description: 'Solve 5 progressively harder binary search problems — from classic to rotated arrays to 2D matrix search.', difficulty: 'EASY', track: 'Algorithms', xp: 300, completion: 74, icon: <FaCode className="text-purple-600" size={22} />, iconBg: 'bg-purple-100' },
  { id: 11, title: 'Kafka Consumer Group', description: 'Model and implement a Kafka-inspired consumer group system with offset management and partition rebalancing.', difficulty: 'HARD', track: 'System Design', xp: 1400, completion: 5, icon: <FaDatabase className="text-orange-600" size={22} />, iconBg: 'bg-orange-100' },
  { id: 12, title: 'CSS-in-JS Theme Engine', description: 'Build a lightweight theme engine that generates CSS variables dynamically from a JavaScript token object.', difficulty: 'MEDIUM', track: 'Frontend Core', xp: 500, completion: 47, icon: <FaPython className="text-yellow-500" size={22} />, iconBg: 'bg-yellow-50' },
];

const SPOTLIGHT = {
  id: 99,
  title: 'Recursive Tree Pruning Optimization',
  badge: 'DAILY SPOTLIGHT',
  description: 'Master the art of memory efficiency. Reduce space complexity in hierarchical data structures without losing traversal speed.',
  codeSnippet: `function pruneTree(node) {\n  if (!node) return null;\n  node.left  = pruneTree(node.left);\n  node.right = pruneTree(node.right);\n  // The optimization logic\n  if (node.val === 0 && !node.left) {\n    return null;\n  }\n  return node;\n}`,
};

const MASTERY = { level: 42, currentXP: 12450, maxXP: 15000, streak: 14, rank: '#842', topPercent: 5 };

const LEADERBOARD = [
  { rank: 1, name: 'Aryan Mehta', xp: 28400, avatar: 'https://i.pravatar.cc/150?u=10', badge: '🥇' },
  { rank: 2, name: 'Priya Sharma', xp: 26100, avatar: 'https://i.pravatar.cc/150?u=11', badge: '🥈' },
  { rank: 3, name: 'Rishi Gupta', xp: 23750, avatar: 'https://i.pravatar.cc/150?u=12', badge: '🥉' },
  { rank: 4, name: 'Neha Verma', xp: 21300, avatar: 'https://i.pravatar.cc/150?u=13', badge: '' },
  { rank: 5, name: 'Dev Patel', xp: 19900, avatar: 'https://i.pravatar.cc/150?u=14', badge: '' },
];

const RECENT_ACTIVITY = [
  { title: 'Valid Palindrome II', result: 'Passed', xpGained: 200, time: '2h ago', difficulty: 'EASY' },
  { title: 'LRU Cache Implementation', result: 'In Progress', xpGained: 0, time: '1d ago', difficulty: 'MEDIUM' },
  { title: 'Binary Search Variants', result: 'Passed', xpGained: 300, time: '2d ago', difficulty: 'EASY' },
];

// ── Helper ─────────────────────────────────────────────────────
const difficultyStyle = (diff) => {
  switch (diff) {
    case 'EASY':   return 'bg-green-100 text-green-700';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-700';
    case 'HARD':   return 'bg-red-100 text-red-700';
    default:       return 'bg-gray-100 text-gray-600';
  }
};

// ── Component ──────────────────────────────────────────────────
export const ChallengesPage = () => {
  const navigate = useNavigate();
  const [activeTrack, setActiveTrack] = useState('All Tracks');
  const [diffFilter, setDiffFilter] = useState('All');

  const filtered = CHALLENGES.filter((c) => {
    const matchTrack = activeTrack === 'All Tracks' || c.track === activeTrack;
    const matchDiff  = diffFilter === 'All' || c.difficulty === diffFilter.toUpperCase();
    return matchTrack && matchDiff;
  });

  const goToChallenge = (id) => navigate(`/challenges/${id}`);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">

      {/* ── Page Header ───────────────────────────────────────── */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Challenges</h1>
        <p className="text-lg text-gray-500">Test your skills with curated problems. Earn XP, climb the ranks, and ship battle-tested code.</p>
      </div>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Challenges', value: '120+', icon: <FiZap className="text-yellow-500" />, bg: 'bg-yellow-50' },
          { label: 'Completed', value: '38', icon: <FiCheckCircle className="text-green-500" />, bg: 'bg-green-50' },
          { label: 'Current Streak', value: '14 Days', icon: <FiTrendingUp className="text-primary" />, bg: 'bg-indigo-50' },
          { label: 'Total XP Earned', value: '12,450', icon: <FiAward className="text-purple-500" />, bg: 'bg-purple-50' },
        ].map((stat) => (
          <div key={stat.label} className={`${stat.bg} rounded-2xl p-4 border border-gray-100 flex items-center gap-4`}>
            <div className="text-2xl">{stat.icon}</div>
            <div>
              <p className="text-xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Spotlight + Mastery ───────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Spotlight Card */}
        <div
          className="lg:col-span-2 relative rounded-2xl overflow-hidden text-white cursor-pointer group min-h-[260px]"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
          onClick={() => goToChallenge(SPOTLIGHT.id)}
        >
          <pre className="absolute inset-0 text-[11px] leading-6 text-indigo-300/20 font-mono p-6 pt-16 select-none overflow-hidden pointer-events-none whitespace-pre-wrap">
            {SPOTLIGHT.codeSnippet}
          </pre>
          <div className="relative z-10 p-8">
            <span className="text-[10px] font-bold tracking-widest bg-indigo-500/30 border border-indigo-400/40 px-3 py-1 rounded-full mb-4 inline-block">
              {SPOTLIGHT.badge}
            </span>
            <h2 className="text-3xl font-extrabold leading-tight mb-3 max-w-sm drop-shadow-lg">{SPOTLIGHT.title}</h2>
            <p className="text-sm text-indigo-200 mb-6 max-w-xs leading-relaxed">{SPOTLIGHT.description}</p>
            <button
              className="flex items-center gap-2 bg-white text-indigo-900 font-bold text-sm px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg group-hover:scale-105 transform duration-200"
              onClick={(e) => { e.stopPropagation(); goToChallenge(SPOTLIGHT.id); }}
            >
              <FiPlay size={15} /> Start Challenge
            </button>
          </div>
        </div>

        {/* Mastery Progress Panel */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Mastery Progress</h3>
            <p className="text-xs text-gray-500 mb-4">You are in the top {MASTERY.topPercent}% of Algorithm architects this month.</p>
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-primary font-bold">Level {MASTERY.level}</span>
              <span className="text-gray-500">{MASTERY.currentXP.toLocaleString()} / {MASTERY.maxXP.toLocaleString()} XP</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${(MASTERY.currentXP / MASTERY.maxXP) * 100}%` }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <FiClock className="text-primary mx-auto mb-1" size={18} />
              <p className="text-2xl font-extrabold text-gray-900">{MASTERY.streak}</p>
              <p className="text-xs text-gray-500 font-medium">Day Streak</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <FiAward className="text-yellow-500 mx-auto mb-1" size={18} />
              <p className="text-2xl font-extrabold text-gray-900">{MASTERY.rank}</p>
              <p className="text-xs text-gray-500 font-medium">Global Rank</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tracks + Difficulty Filter ────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 mb-8 pb-4">
        <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {TRACKS.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`whitespace-nowrap pb-4 -mb-5 px-1 font-semibold text-sm transition-colors border-b-2 ${activeTrack === track ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {track}
            </button>
          ))}
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-2 text-sm font-semibold text-gray-600">
          <FiFilter size={14} />
          <select value={diffFilter} onChange={(e) => setDiffFilter(e.target.value)} className="bg-transparent border-none outline-none text-sm font-semibold text-gray-600 cursor-pointer appearance-none">
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d === 'All' ? 'Difficulty' : d}</option>)}
          </select>
        </div>
      </div>

      {/* ── Challenge Cards Grid ──────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <FiZap size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-semibold text-lg">No challenges match your filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((challenge) => (
            <div
              key={challenge.id}
              onClick={() => goToChallenge(challenge.id)}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${challenge.iconBg}`}>{challenge.icon}</div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded tracking-wider ${difficultyStyle(challenge.difficulty)}`}>{challenge.difficulty}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{challenge.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-5 flex-grow">{challenge.description}</p>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><FiZap size={13} className="text-yellow-500" />{challenge.xp} XP</span>
                  <span className="flex items-center gap-1.5"><FiCheckCircle size={13} className="text-primary" />{challenge.completion}%</span>
                </div>
                <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{challenge.track}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Bottom Section: Leaderboard + Recent Activity ─────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">

        {/* Weekly Leaderboard */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Weekly Leaderboard</h3>
              <p className="text-sm text-gray-500">Top performers this week</p>
            </div>
            <FiUsers className="text-primary" size={20} />
          </div>
          <div className="space-y-3">
            {LEADERBOARD.map((user) => (
              <div key={user.rank} className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${user.rank === 1 ? 'bg-yellow-50 border border-yellow-100' : 'hover:bg-gray-50'}`}>
                <span className="text-lg w-6 text-center">{user.badge || <span className="text-sm font-bold text-gray-400">#{user.rank}</span>}</span>
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{user.name}</p>
                </div>
                <span className="text-sm font-bold text-primary">{user.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
              <p className="text-sm text-gray-500">Your latest challenge attempts</p>
            </div>
            <FiTrendingUp className="text-green-500" size={20} />
          </div>
          <div className="space-y-4">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.result === 'Passed' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  {item.result === 'Passed' ? <FiCheckCircle className="text-green-600" size={16} /> : <FiClock className="text-yellow-600" size={16} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{item.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${difficultyStyle(item.difficulty)}`}>{item.difficulty}</span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </div>
                {item.xpGained > 0 && (
                  <span className="text-sm font-bold text-green-600 flex-shrink-0">+{item.xpGained} XP</span>
                )}
                {item.result === 'In Progress' && (
                  <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full flex-shrink-0">In Progress</span>
                )}
              </div>
            ))}
          </div>

          {/* Locked Premium Challenge Teaser */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 flex items-center gap-4">
            <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FiLock className="text-indigo-600" size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900">Unlock 80+ Premium Challenges</p>
              <p className="text-xs text-gray-500">Upgrade to Pro to access FAANG-level interview problems.</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex-shrink-0">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
