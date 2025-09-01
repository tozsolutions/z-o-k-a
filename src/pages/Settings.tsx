import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ZokaLogo } from "@/components/ZokaLogo";
import { ArrowLeft, Volume2, Vibrate, Moon, Sun, Smartphone, Info, Shield } from "lucide-react";

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [settings, setSettings] = useState({
    soundEnabled: true,
    vibrationEnabled: true,
    darkMode: false,
    volume: [75],
    notifications: true,
    autoNext: false,
    timerEnabled: true,
    adultContent: true
  });

  const updateSetting = <K extends keyof typeof settings>(
    key: K,
    value: typeof settings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Apply settings immediately
    if (key === 'darkMode') {
      document.documentElement.classList.toggle('dark', value as boolean);
    }
    
    // Save to localStorage
    localStorage.setItem('zoka-settings', JSON.stringify({ ...settings, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Geri
        </Button>
        
        <div className="text-center">
          <ZokaLogo className="scale-50" />
        </div>
        
        <div className="w-20" /> {/* Spacer for alignment */}
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Ayarlar</h1>
          <p className="text-muted-foreground">Oyun deneyimini kişiselleştir</p>
        </div>

        {/* Audio Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Ses Ayarları
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="sound">Ses Efektleri</Label>
              <Switch
                id="sound"
                checked={settings.soundEnabled}
                onCheckedChange={(checked) => updateSetting('soundEnabled', checked)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Ses Seviyesi</Label>
              <Slider
                value={settings.volume}
                onValueChange={(value) => updateSetting('volume', value)}
                max={100}
                step={5}
                disabled={!settings.soundEnabled}
              />
              <div className="text-sm text-muted-foreground text-center">
                %{settings.volume[0]}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="vibration">Titreşim</Label>
              <Switch
                id="vibration"
                checked={settings.vibrationEnabled}
                onCheckedChange={(checked) => updateSetting('vibrationEnabled', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Display Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {settings.darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              Görünüm
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="darkmode">Karanlık Mod</Label>
              <Switch
                id="darkmode"
                checked={settings.darkMode}
                onCheckedChange={(checked) => updateSetting('darkMode', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Game Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Oyun Ayarları
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="timer">Süre Sayacı</Label>
                <p className="text-sm text-muted-foreground">Cesaret görevleri için sayaç</p>
              </div>
              <Switch
                id="timer"
                checked={settings.timerEnabled}
                onCheckedChange={(checked) => updateSetting('timerEnabled', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autonext">Otomatik Geçiş</Label>
                <p className="text-sm text-muted-foreground">Süre bitince otomatik sonraki soru</p>
              </div>
              <Switch
                id="autonext"
                checked={settings.autoNext}
                onCheckedChange={(checked) => updateSetting('autoNext', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Bildirimler</Label>
                <p className="text-sm text-muted-foreground">Oyun bildirimleri</p>
              </div>
              <Switch
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={(checked) => updateSetting('notifications', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Content Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              İçerik Ayarları
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="adult">Yetişkin İçeriği</Label>
                <p className="text-sm text-muted-foreground">18+ sorular ve görevler</p>
              </div>
              <Switch
                id="adult"
                checked={settings.adultContent}
                onCheckedChange={(checked) => updateSetting('adultContent', checked)}
              />
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* App Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Uygulama Bilgileri
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Versiyon</span>
              <span className="text-sm font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Son Güncelleme</span>
              <span className="text-sm font-medium">2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Geliştirici</span>
              <span className="text-sm font-medium">Zoka Team</span>
            </div>
          </CardContent>
        </Card>

        {/* Reset Button */}
        <div className="text-center pt-4">
          <Button 
            variant="outline" 
            onClick={() => {
              localStorage.removeItem('zoka-settings');
              window.location.reload();
            }}
          >
            Ayarları Sıfırla
          </Button>
        </div>
      </div>
    </div>
  );
}