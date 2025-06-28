import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Bell, Eye, Palette, Download, Trash2, Video } from 'lucide-react';

const SettingsPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Usuário',
    email: 'usuario@email.com',
    phone: '',
    bio: ''
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
    autoPlay: true,
    downloadQuality: 'medium'
  });

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field: string, value: boolean | string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2 slide-up">
        <h1 className="text-3xl font-bold text-primary">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas informações e preferências</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Informações Pessoais */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Informações Pessoais</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                value={userInfo.name}
                onChange={(e) => handleUserInfoChange('name', e.target.value)}
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={userInfo.email}
                onChange={(e) => handleUserInfoChange('email', e.target.value)}
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={userInfo.phone}
                onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biografia</Label>
              <Input
                id="bio"
                value={userInfo.bio}
                onChange={(e) => handleUserInfoChange('bio', e.target.value)}
                placeholder="Conte um pouco sobre você"
              />
            </div>

            <Button className="w-full">
              Salvar Informações
            </Button>
          </CardContent>
        </Card>

        {/* Preferências */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Preferências</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <div>
                  <Label>Notificações</Label>
                  <p className="text-sm text-muted-foreground">Receber notificações de estudo</p>
                </div>
              </div>
              <Switch
                checked={preferences.notifications}
                onCheckedChange={(checked) => handlePreferenceChange('notifications', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <div>
                  <Label>Modo Escuro</Label>
                  <p className="text-sm text-muted-foreground">Tema escuro para a interface</p>
                </div>
              </div>
              <Switch
                checked={preferences.darkMode}
                onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <div>
                  <Label>Reprodução Automática</Label>
                  <p className="text-sm text-muted-foreground">Reproduzir vídeos automaticamente</p>
                </div>
              </div>
              <Switch
                checked={preferences.autoPlay}
                onCheckedChange={(checked) => handlePreferenceChange('autoPlay', checked)}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Qualidade de Download</Label>
              <select 
                className="w-full p-2 border rounded-md"
                value={preferences.downloadQuality}
                onChange={(e) => handlePreferenceChange('downloadQuality', e.target.value)}
              >
                <option value="low">Baixa (480p)</option>
                <option value="medium">Média (720p)</option>
                <option value="high">Alta (1080p)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Segurança */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Segurança</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Alterar Senha
            </Button>
            
            <Button variant="outline" className="w-full">
              Configurar Autenticação em Duas Etapas
            </Button>

            <Separator />

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Última alteração de senha: Nunca
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dados e Armazenamento */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Dados e Armazenamento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Vídeos baixados</span>
                <span className="text-sm text-muted-foreground">X GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Materiais salvos</span>
                <span className="text-sm text-muted-foreground">X MB</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-sm">Total utilizado</span>
                <span className="text-sm">X GB</span>
              </div>
            </div>

            <Separator />

            <Button variant="outline" className="w-full">
              Limpar Cache
            </Button>

            <Button variant="destructive" className="w-full flex items-center space-x-2">
              <Trash2 className="h-4 w-4" />
              <span>Excluir Todos os Dados</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="gradient-bg hover:opacity-90">
          Salvar Todas as Configurações
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
