import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiZap, FiClock, FiAward, FiPlay, FiCheckCircle } from 'react-icons/fi';

const MOCK_CHALLENGES = {
  1: { title: 'LRU Cache Implementation', difficulty: 'MEDIUM', xp: 450, track: 'Data Structures', timeLimit: '45 min', description: 'Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put in O(1) time complexity. Implement a full solution with proper eviction policy.', hints: ['Think about using a HashMap + Doubly Linked List', 'O(1) time complexity requires constant-time access and update', 'Track insertion order carefully'] },
  2: { title: 'Valid Palindrome II', difficulty: 'EASY', xp: 200, track: 'Algorithms', timeLimit: '20 min', description: 'Given a string, determine if it can be a palindrome after deleting at most one character. Return true if the string is a palindrome or can become one by removing a single character.', hints: ['Use two-pointer approach', 'On mismatch, try skipping one character from either side', 'Check if the resulting substring is a palindrome'] },
  3: { title: 'Distributed Log Sorter', difficulty: 'HARD', xp: 1200, track: 'System Design', timeLimit: '90 min', description: 'Design a system that efficiently sorts millions of log entries across a distributed network with minimal latency and memory usage. Consider fault tolerance and horizontal scalability.', hints: ['Look into external merge sort', 'Consider a distributed approach with map-reduce', 'Handle network failures gracefully'] },
  4: { title: 'Async Request Scheduler', difficulty: 'MEDIUM', xp: 550, track: 'Algorithms', timeLimit: '40 min', description: 'Build a throttle mechanism that limits the number of concurrent API requests. Implement a queue-based system where excess requests wait until slots free up.', hints: ['Use a promise queue', 'Track active and pending requests', 'Handle rejection and timeout gracefully'] },
  5: { title: 'Bento Layout Generator', difficulty: 'MEDIUM', xp: 600, track: 'Frontend Core', timeLimit: '50 min', description: 'Create an algorithm that arranges dynamic card components into an optimal bento-grid layout. Cards have variable sizes and the layout must minimize empty space.', hints: ['Think of it as a bin-packing variant', 'Greedy works, but DP gives optimal results', 'Consider card aspect ratios'] },
  6: { title: 'JWT Validation Engine', difficulty: 'HARD', xp: 950, track: 'System Design', timeLimit: '75 min', description: 'Implement a secure token validation library that handles rotation and expiration. Include support for RS256 and HS256 signing algorithms, with proper error handling.', hints: ['Parse the JWT header, payload, and signature', 'Implement signature verification from scratch', 'Handle edge cases: expired, malformed, wrong audience'] },
  99: { title: 'Recursive Tree Pruning Optimization', difficulty: 'HARD', xp: 800, track: 'Algorithms', timeLimit: '60 min', description: 'Master the art of memory efficiency. Reduce space complexity in hierarchical data structures without losing traversal speed. This is the Daily Spotlight challenge — optimized for real-world applications.', hints: ['Think recursively — what makes a subtree redundant?', 'Post-order traversal is your best friend here', 'Consider both time and space complexity trade-offs'] },
};

const difficultyStyle = (diff) => {
  switch (diff) {
    case 'EASY':   return 'bg-green-100 text-green-700';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-700';
    case 'HARD':   return 'bg-red-100 text-red-700';
    default:       return 'bg-gray-100 text-gray-600';
  }
};

export const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = MOCK_CHALLENGES[id] || MOCK_CHALLENGES[1];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-semibold text-gray-500 hover:text-primary mb-6 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to Challenges
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6 border-t-4 border-t-indigo-600">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded tracking-wider mr-3 ${difficultyStyle(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 text-gray-600 tracking-wider">
              {challenge.track}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-1.5"><FiZap className="text-yellow-500" /> {challenge.xp} XP</span>
            <span className="flex items-center gap-1.5"><FiClock className="text-primary" /> {challenge.timeLimit}</span>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{challenge.title}</h1>
        <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hints */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Hints</h3>
            <div className="space-y-3">
              {challenge.hints.map((hint, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                  <FiCheckCircle className="text-indigo-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-indigo-800 font-medium">{hint}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ready?</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate(`/challenges/${id}/room`)}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md"
              >
                <FiPlay size={15} /> Start Challenge
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <FiAward size={15} /> View Leaderboard
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100 text-center">
            <FiZap className="text-yellow-500 mx-auto mb-2" size={28} />
            <p className="font-extrabold text-2xl text-gray-900">{challenge.xp} XP</p>
            <p className="text-xs text-gray-500 mt-1">Awarded on completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;
