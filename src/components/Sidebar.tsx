
import { BookOpen, Video, Book, BookMarked, LogIn, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
  { id: 'videos', label: 'Vídeo Aulas', icon: Video },
  { id: 'books', label: 'Biblioteca', icon: Book },
  { id: 'subjects', label: 'Matérias', icon: BookMarked },
  { id: 'settings', label: 'Configurações', icon: Settings },
  { id: 'login', label: 'Login', icon: LogIn },
];

const Sidebar = ({ currentPage, onNavigate, isCollapsed = false, onToggle }: SidebarProps) => {
  return (
    <div className={cn(
      "bg-primary text-primary-foreground transition-all duration-300 flex flex-col relative",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Toggle Button */}
      {onToggle && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="absolute -right-3 top-6 bg-primary border border-primary-foreground/20 text-primary-foreground hover:bg-primary/90 w-6 h-6 p-0 rounded-full z-10"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      )}

      <div className="p-6 border-b border-primary-foreground/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-lg">XXX</h2>
              <p className="text-xs text-primary-foreground/70">Sistema de Estudos</p>
            </div>
          )}
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-left transition-all duration-200 group relative",
                currentPage === item.id 
                  ? "bg-white/20 text-white hover:bg-white/25" 
                  : "text-primary-foreground/80 hover:bg-white/10 hover:text-white",
                isCollapsed ? "px-3" : "px-4"
              )}
              onClick={() => onNavigate(item.id)}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-3")} />
              {!isCollapsed && <span>{item.label}</span>}
              
              {/* Tooltip para botões quando colapsado */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-primary-foreground/20">
        <div className={cn(
          "text-xs text-primary-foreground/60",
          isCollapsed ? "text-center" : ""
        )}>
          {isCollapsed ? "v1.0" : "Versão 1.0 - Offline"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
