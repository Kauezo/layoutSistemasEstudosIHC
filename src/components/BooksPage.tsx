
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Book, Search } from 'lucide-react';
import { useState } from 'react';

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const genres = [
    'Todos os Gêneros',
    'Didáticos',
    'Exercícios',
    'Teoria',
    'Resumos',
    'Guias',
    'Referência'
  ];

  const books = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `Livro de Estudos ${i + 1}`,
    author: 'Autor Exemplo',
    subject: ['Matemática', 'Física', 'Química', 'Biologia'][Math.floor(Math.random() * 4)],
    pages: Math.floor(Math.random() * 400) + 100,
    type: genres[Math.floor(Math.random() * (genres.length - 1)) + 1]
  }));

  return (
    <div className="space-y-4 md:space-y-6 fade-in px-2 md:px-0">
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Biblioteca</h1>
        <p className="text-sm md:text-base text-muted-foreground">Material de leitura e estudo</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative w-full max-w-md mx-auto md:mx-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar livros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {genres.slice(0, 4).map((genre) => (
              <Button
                key={genre}
                variant="outline"
                size="sm"
                className="whitespace-nowrap text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {books.map((book, index) => (
          <Card 
            key={book.id} 
            className="card-hover cursor-pointer border-0 shadow-lg overflow-hidden w-full"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center p-3 md:p-4">
              <div className="text-center">
                <Book className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary/30">X</div>
              </div>
            </div>
            <CardContent className="p-3 md:p-4">
              <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2">{book.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">{book.author}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs w-fit">{book.subject}</span>
                <span className="text-xs">{book.pages} páginas</span>
              </div>
              <div className="text-xs text-muted-foreground mb-3 bg-accent/30 px-2 py-1 rounded w-fit">
                {book.type}
              </div>
              <Button className="w-full gradient-bg hover:opacity-90 text-sm md:text-base" size="sm">
                Abrir Livro
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Carregar Mais Livros
        </Button>
      </div>
    </div>
  );
};

export default BooksPage;
