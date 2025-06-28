
import { BookOpen, LogOut, LogIn, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onLogout?: () => void;
  onLogin?: () => void;
  isLoggedIn?: boolean;
  onToggleSidebar?: () => void;
}

const Navbar = ({ onLogout, onLogin, isLoggedIn = false, onToggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {onToggleSidebar && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleSidebar}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">XXX</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground hidden sm:block">
              {isLoggedIn ? 'Bem-vindo ao seu ambiente de estudos' : 'Sistema Offline de Estudos'}
            </div>
            {isLoggedIn && onLogout ? (
              <Button
                variant="outline"
                size="sm"
                onClick={onLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            ) : (
              onLogin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogin}
                  className="flex items-center space-x-2"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Entrar</span>
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
