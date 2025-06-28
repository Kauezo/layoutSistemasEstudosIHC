
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import VideosPage from '@/components/VideosPage';
import BooksPage from '@/components/BooksPage';
import SubjectsPage from '@/components/SubjectsPage';
import SettingsPage from '@/components/SettingsPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginForm onLogin={handleLogin} />;
      case 'videos':
        return <VideosPage />;
      case 'books':
        return <BooksPage />;
      case 'subjects':
        return <SubjectsPage onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onLogout={isLoggedIn ? handleLogout : undefined} 
        onLogin={() => handleNavigate('login')}
        isLoggedIn={isLoggedIn}
        onToggleSidebar={handleToggleSidebar}
      />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          isCollapsed={isSidebarCollapsed}
          onToggle={handleToggleSidebar}
        />
        <main className="flex-1 overflow-auto">
          <div className="p-3 md:p-6 max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
