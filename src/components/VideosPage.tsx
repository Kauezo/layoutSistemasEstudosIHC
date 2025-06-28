
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Video, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = [
    'Todas as Categorias',
    'Matemática',
    'Física',
    'Química',
    'Biologia',
    'História',
    'Geografia',
    'Português',
    'Inglês'
  ];

  const videos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Vídeo Aula ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    duration: `${Math.floor(Math.random() * 60) + 10} min`,
    thumbnail: 'X'
  }));

  const handleWatchVideo = () => {
    navigate('/video-not-found');
  };

  return (
    <div className="space-y-4 md:space-y-6 fade-in px-2 md:px-0">
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Vídeo Aulas</h1>
        <p className="text-sm md:text-base text-muted-foreground">Conteúdo educativo em formato de vídeo</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative w-full max-w-md mx-auto md:mx-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar vídeos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.slice(0, 6).map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="whitespace-nowrap text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {videos.map((video, index) => (
          <Card 
            key={video.id} 
            className="card-hover cursor-pointer border-0 shadow-lg overflow-hidden w-full"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center">
                <Video className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            <CardContent className="p-3 md:p-4">
              <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2">{video.title}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="bg-accent px-2 py-1 rounded-full text-xs w-fit">{video.category}</span>
                <span className="text-xs">{video.duration}</span>
              </div>
              <Button 
                className="w-full text-sm md:text-base gradient-bg hover:opacity-90"
                onClick={handleWatchVideo}
              >
                Assistir Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Carregar Mais Vídeos
        </Button>
      </div>
    </div>
  );
};

export default VideosPage;
