
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Book, TrendingUp, Clock, Target } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const stats = [
    {
      title: 'Vídeos Assistidos',
      value: 'X',
      icon: Video,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Livros Lidos',
      value: 'X',
      icon: Book,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Horas de Estudo',
      value: 'X h',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Metas Atingidas',
      value: 'X%',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'video', title: 'Matemática - Álgebra Linear', time: 'X minutos atrás' },
    { id: 2, type: 'book', title: 'Física Quântica - Capítulo X', time: 'X horas atrás' },
    { id: 3, type: 'video', title: 'História do Brasil - República', time: 'X dias atrás' },
    { id: 4, type: 'book', title: 'Literatura Brasileira - Romantismo', time: 'X semana atrás' }
  ];

  return (
    <div className="space-y-4 md:space-y-6 fade-in px-2 md:px-0">
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Bem-vindo ao XXX</h1>
        <p className="text-sm md:text-base text-muted-foreground">Seu ambiente personalizado de estudos offline</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.title} 
              className="card-hover border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6 md:pb-2">
                <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground line-clamp-2">
                  {stat.title}
                </CardTitle>
                <div className={`p-1.5 md:p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-3 w-3 md:h-4 md:w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent className="p-3 md:p-6 pt-0">
                <div className="text-lg md:text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <TrendingUp className="h-2 w-2 md:h-3 md:w-3 mr-1 text-green-600" />
                  <span className="text-xs">Progresso constante</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="card-hover cursor-pointer border-0 shadow-lg" onClick={() => onNavigate('videos')}>
          <CardHeader className="text-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-2">
              <Video className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <CardTitle className="text-base md:text-lg">Assistir Vídeos</CardTitle>
          </CardHeader>
          <CardContent className="text-center p-4 md:p-6 pt-0">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">Continue seus estudos com vídeo aulas</p>
            <Button className="w-full text-sm md:text-base">Acessar Vídeos</Button>
          </CardContent>
        </Card>

        <Card className="card-hover cursor-pointer border-0 shadow-lg" onClick={() => onNavigate('books')}>
          <CardHeader className="text-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-2">
              <Book className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <CardTitle className="text-base md:text-lg">Ler Materiais</CardTitle>
          </CardHeader>
          <CardContent className="text-center p-4 md:p-6 pt-0">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">Acesse sua biblioteca de estudos</p>
            <Button className="w-full text-sm md:text-base">Ver Biblioteca</Button>
          </CardContent>
        </Card>

        <Card className="card-hover cursor-pointer border-0 shadow-lg md:col-span-1 col-span-1" onClick={() => onNavigate('subjects')}>
          <CardHeader className="text-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-2">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <CardTitle className="text-base md:text-lg">Explorar Matérias</CardTitle>
          </CardHeader>
          <CardContent className="text-center p-4 md:p-6 pt-0">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">Organize seus estudos por disciplina</p>
            <Button className="w-full text-sm md:text-base">Ver Matérias</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            <span>Atividades Recentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0">
          <div className="space-y-3 md:space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-2 md:p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm md:text-base line-clamp-1">{activity.title}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className="text-xs text-muted-foreground flex-shrink-0">
                  {activity.type === 'video' ? 'Vídeo' : 'Leitura'}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
