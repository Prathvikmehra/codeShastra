import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FiGrid, FiBookOpen, FiTerminal, FiFolder, FiTarget, FiBarChart2, FiUser, FiPlus, FiSettings, FiHelpCircle, FiArrowLeft, FiMenu, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/authSlice';
import { ROUTES } from '@/utils/constants';
import CreateProjectModal from '@/components/modals/CreateProjectModal';
import SEO from '@/components/SEO';
import { usePageTracking } from '@/utils/analytics';

const SidebarLink = React.memo(({ link, onClick }) => (
  <NavLink
    to={link.path}
    onClick={onClick}
    className={({ isActive }) => 
      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
        isActive 
          ? 'bg-indigo-50 text-indigo-700' 
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
      }`
    }
  >
    {link.icon}
    {link.name}
  </NavLink>
));

const DashboardLayout = () => {
  usePageTracking();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const authUser = useSelector(selectUser);
  const userInitials = authUser?.name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'CS';

  // Restore persisted theme on every app load
  useEffect(() => {
    const saved = localStorage.getItem('cs_theme') || 'light';
    const root = document.documentElement;
    if (saved === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (saved === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
    } else {
      root.removeAttribute('data-theme');
    }
  }, []);

  const navLinks = useMemo(() => [
    { name: 'Dashboard', path: ROUTES.DASHBOARD, icon: <FiGrid size={18} /> },
    { name: 'Courses', path: ROUTES.LABS, icon: <FiBookOpen size={18} /> },
    { name: 'Debugging Lab', path: ROUTES.DEBUGGING_LAB, icon: <FiTerminal size={18} /> },
    { name: 'Projects', path: ROUTES.PROJECTS, icon: <FiFolder size={18} /> },
    { name: 'Challenges', path: ROUTES.CHALLENGES, icon: <FiTarget size={18} /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <FiBarChart2 size={18} /> },
    { name: 'Profile', path: '/profile', icon: <FiUser size={18} /> },
  ], []);

  const handleMobileLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleCreateProject = async (projectData) => {
    console.log('Create project payload:', projectData);
    // Ideally call API to create project, then navigate
    // navigate(`/projects/${newProject.id}`);
  };

  const SidebarContent = (
    <>
      {/* Brand Area */}
      <div className="p-6 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <button onClick={() => navigate('/profile')} className="flex-shrink-0 focus:outline-none">
              {authUser?.avatar ? (
                <img
                  src={authUser.avatar}
                  alt={authUser.name}
                  className="w-9 h-9 rounded-xl object-cover border-2 border-white shadow-sm"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-extrabold text-white shadow-sm">
                  {userInitials}
                </div>
              )}
            </button>
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{authUser?.name || 'CodeShastra'}</p>
              <span className="text-xs font-medium text-gray-500">Student</span>
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navLinks.map((link) => (
          <SidebarLink key={link.name} link={link} onClick={handleMobileLinkClick} />
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-4 shrink-0">
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsCreateModalOpen(true);
          }}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors shadow-sm"
        >
          <FiPlus size={16} /> New Project
        </button>
        
        <div className="space-y-1">
          <button onClick={() => { setIsMobileMenuOpen(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <FiSettings size={18} /> Settings
          </button>
          <button onClick={() => { setIsMobileMenuOpen(false); navigate('/support'); }} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <FiHelpCircle size={18} /> Support
          </button>
          <button onClick={() => { setIsMobileMenuOpen(false); navigate(ROUTES.HOME); }} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <FiArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-20 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gray-900">CodeShastra</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-gray-600 hover:text-gray-900 p-2"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-slate-50 border-r border-gray-200 flex flex-col shrink-0
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {SidebarContent}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto pt-16 lg:pt-0">
        <Outlet />
      </main>

      {/* Create Project Modal */}
      <CreateProjectModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
        onCreate={handleCreateProject}
      />
    </div>
  );
};

export default DashboardLayout;
