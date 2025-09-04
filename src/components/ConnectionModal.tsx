
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Wifi, Bluetooth, Server, Copy, Check, Loader2 } from "lucide-react";
import { GameCard } from "./GameCard";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (method: string, code?: string) => void;
  isHost?: boolean;
}

export function ConnectionModal({ isOpen, onClose, onConnect, isHost = false }: ConnectionModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [connectionCode, setConnectionCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string>("");

  const connectionMethods = [
    {
      id: "wifi",
      title: "WiFi Ağı",
      description: "Aynı WiFi ağındaki cihazlar",
      icon: Wifi,
      color: "text-chapter-1"
    },
    {
      id: "bluetooth", 
      title: "Bluetooth",
      description: "Yakındaki cihazlarla doğrudan bağlantı",
      icon: Bluetooth,
      color: "text-chapter-2"
    },
    {
      id: "hotspot",
      title: "Yerel Sunucu",
      description: "Host cihaz sunucu oluşturur",
      icon: Server,
      color: "text-chapter-3"
    }
  ];

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    if (isHost && method === "hotspot") {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setConnectionCode(code);
      setShowCode(true);
    }
  };

  const handleConnect = () => {
    setIsConnecting(true);
    setConnectionStatus("Bağlantı kuruluyor...");
    
    // Gerçekçi bağlantı simülasyonu
    setTimeout(() => {
      setConnectionStatus("Oyuncular aranıyor...");
    }, 1000);

    setTimeout(() => {
      setConnectionStatus("Bağlantı başarılı!");
      setTimeout(() => {
        onConnect(selectedMethod, connectionCode);
        setIsConnecting(false);
        setConnectionStatus("");
        // Close modal and let WaitingRoom handle the rest
      }, 1000);
    }, 2000); // Reduced from 3000 to 2000
  };

  const copyCode = () => {
    navigator.clipboard.writeText(connectionCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground text-center text-xl">
            {isHost ? "Bağlantı Kurulumu" : "Oyuna Katıl"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {isConnecting ? (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
              <p className="text-foreground font-medium">{connectionStatus}</p>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedMethod === 'wifi' && 'WiFi ağında cihazlar aranıyor...'}
                  {selectedMethod === 'bluetooth' && 'Bluetooth cihazları taranıyor...'}
                  {selectedMethod === 'hotspot' && 'Yerel sunucu başlatılıyor...'}
                </p>
              </div>
            </div>
          ) : !showCode ? (
            <>
              <div className="space-y-3">
                {connectionMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <GameCard
                      key={method.id}
                      variant={selectedMethod === method.id ? "glow" : "default"}
                      className="cursor-pointer"
                      onClick={() => handleMethodSelect(method.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`${method.color} w-6 h-6`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </GameCard>
                  );
                })}
              </div>

              {selectedMethod && !isHost && (
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-foreground">Bağlantı Kodu</Label>
                  <Input
                    id="code"
                    placeholder="Bağlantı kodunu girin"
                    value={connectionCode}
                    onChange={(e) => setConnectionCode(e.target.value)}
                    className="bg-input border-border text-foreground"
                  />
                </div>
              )}

              <Button 
                variant="hero" 
                className="w-full" 
                disabled={!selectedMethod || (!isHost && !connectionCode)}
                onClick={handleConnect}
              >
                {isHost ? "Sunucu Başlat" : "Bağlan"}
              </Button>
            </>
          ) : (
            <div className="text-center space-y-4">
              <GameCard variant="glow">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground">Bağlantı Kodunuz</h4>
                  <div className="text-3xl font-mono font-bold text-primary tracking-wider">
                    {connectionCode}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={copyCode}
                    className="w-full"
                  >
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? "Kopyalandı!" : "Kodu Kopyala"}
                  </Button>
                </div>
              </GameCard>
              
              <p className="text-muted-foreground text-sm">
                Diğer oyuncular bu kodu kullanarak oyuna katılabilir
              </p>
              
              <Button variant="hero" className="w-full" onClick={handleConnect}>
                Oyuncuları Bekle
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
