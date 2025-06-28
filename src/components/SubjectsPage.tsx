
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Book } from 'lucide-react';

interface SubjectsPageProps {
  onNavigate: (page: string) => void;
}

const SubjectsPage = ({ onNavigate }: SubjectsPageProps) => {
  const subjects = [
    {
      id: 1,
      name: 'Matemática',
      description: 'Álgebra, geometria, cálculo e estatística',
      videos: 'X',
      books: 'X',
      color: 'from-blue-500 to-blue-600',
      progress: 'X%'
    },
    {
      id: 2,
      name: 'Física',
      description: 'Mecânica, termodinâmica, eletromagnetismo',
      videos: 'X',
      books: 'X',
      color: 'from-green-500 to-green-600',
      progress: 'X%'
    },
    {
      id: 3,
      name: 'Química',
      description: 'Química orgânica, inorgânica e físico-química',
      videos: 'X',
      books: 'X',
      color: 'from-purple-500 to-purple-600',
      progress: 'X%'
    },
    {
      id: 4,
      name: 'Biologia',
      description: 'Citologia, genética, ecologia e evolução',
      videos: 'X',
      books: 'X',
      color: 'from-emerald-500 to-emerald-600',
      progress: 'X%'
    },
    {
      id: 5,
      name: 'História',
      description: 'História mundial, do Brasil e contemporânea',
      videos: 'X',
      books: 'X',
      color: 'from-amber-500 to-amber-600',
      progress: 'X%'
    },
    {
      id: 6,
      name: 'Geografia',
      description: 'Geografia física, humana e do Brasil',
      videos: 'X',
      books: 'X',
      color: 'from-teal-500 to-teal-600',
      progress: 'X%'
    },
    {
      id: 7,
      name: 'Português',
      description: 'Gramática, literatura e redação',
      videos: 'X',
      books: 'X',
      color: 'from-red-500 to-red-600',
      progress: 'X%'
    },
    {
      id: 8,
      name: 'Inglês',
      description: 'Grammar, vocabulary e conversation',
      videos: 'X',
      books: 'X',
      color: 'from-indigo-500 to-indigo-600',
      progress: 'X%'
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6 fade-in px-2 md:px-0">
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Matérias de Ensino</h1>
        <p className="text-sm md:text-base text-muted-foreground">Organize seus estudos por disciplina</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {subjects.map((subject, index) => (
          <Card 
            key={subject.id} 
            className="card-hover cursor-pointer border-0 shadow-lg overflow-hidden w-full"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className={`h-20 md:h-24 bg-gradient-to-r ${subject.color} flex items-center justify-center`}>
              <div className="text-center">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white mx-auto mb-1" />
                <div className="text-xs text-white/90">Progresso: {subject.progress}</div>
              </div>
            </div>
            
            <CardHeader className="pb-2 p-3 md:p-6 md:pb-2">
              <CardTitle className="text-base md:text-lg">{subject.name}</CardTitle>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{subject.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-3 md:space-y-4 p-3 md:p-6 pt-0">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <div className="flex items-center space-x-1">
                  <Video className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  <span>{subject.videos} vídeos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Book className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  <span>{subject.books} livros</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full text-xs md:text-sm py-2" 
                  variant="outline"
                  onClick={() => onNavigate('videos')}
                >
                  Ver Vídeos
                </Button>
                <Button 
                  className="w-full gradient-bg hover:opacity-90 text-xs md:text-sm py-2"
                  onClick={() => onNavigate('books')}
                >
                  Materiais de Estudo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-4">
        <div className="text-sm md:text-base text-muted-foreground px-4">
          Organize seu tempo de estudo e acompanhe seu progresso em cada matéria
        </div>
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Adicionar Nova Matéria
        </Button>
      </div>
    </div>
  );
};

export default SubjectsPage;
