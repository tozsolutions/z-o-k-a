import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ZokaLogo } from "@/components/ZokaLogo";
import { ArrowLeft, Users, Heart, Flame, Clock, Shuffle } from "lucide-react";

interface HowToPlayProps {
  onBack: () => void;
}

export function HowToPlay({ onBack }: HowToPlayProps) {
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

      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Nasıl Oynanır?</h1>
          <p className="text-lg text-muted-foreground">
            Z-O-K-A ile unutulmaz anlar yaşamaya hazır mısın?
          </p>
        </div>

        <div className="space-y-8">
          {/* Game Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Heart className="w-6 h-6 text-primary" />
                Oyun Hakkında
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Z-O-K-A, çiftler ve gruplar için tasarlanmış interaktif bir oyundur. 
                Doğruluk soruları ve cesaret görevleri ile partnerinizle veya arkadaşlarınızla 
                daha yakın olmayı hedefler.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>2-4 oyuncu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>30-90 dakika</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Modes */}
          <Card>
            <CardHeader>
              <CardTitle>Oyun Modları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    1 Çift Modu (2 Oyuncu)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    İntim çift deneyimi için özel tasarlanmış sorular ve görevler.
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    2 Çift Modu (4 Oyuncu)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Grup dinamikleri ve partner değişimi seçenekleri ile.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chapters */}
          <Card>
            <CardHeader>
              <CardTitle>Bölümler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <Badge variant="outline" className="bg-green-500/10">1</Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Geceye Başlarken</h3>
                    <p className="text-sm text-muted-foreground">
                      Buzları kırmak için hafif sorular ve görevler. Birbirinizi tanıyın.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <Badge variant="outline" className="bg-yellow-500/10">2</Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Isınma Turları</h3>
                    <p className="text-sm text-muted-foreground">
                      Daha kişisel sorular ve fiziksel temas. Sıcaklığı artırın.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <Badge variant="outline" className="bg-orange-500/10">3</Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Akşamdan Kalma</h3>
                    <p className="text-sm text-muted-foreground">
                      En tutkulu ve yoğun bölüm. Maksimum intimlik için hazır olun.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-border rounded-lg opacity-75">
                  <Badge variant="outline" className="bg-red-500/10">4</Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Partner Değişimi</h3>
                    <p className="text-sm text-muted-foreground">
                      Sadece 4 oyuncu modu. Eksklüsif grup deneyimi.
                    </p>
                    <Badge variant="secondary" className="mt-2">4 Oyuncu Gerekli</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Types */}
          <Card>
            <CardHeader>
              <CardTitle>Soru Türleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">Doğruluk</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kişisel sorular ve itiraflar. Dürüst olun ve kendinizi açın.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Cesaret</Badge>
                    <Flame className="w-4 h-4 text-orange-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fiziksel görevler ve eylemler. Cesaretinizi gösterin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intensity Levels */}
          <Card>
            <CardHeader>
              <CardTitle>Yoğunluk Seviyeleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-3 border border-border rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Hafif</span>
                </div>
                <div className="text-center p-3 border border-border rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Orta</span>
                </div>
                <div className="text-center p-3 border border-border rounded-lg">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Yoğun</span>
                </div>
                <div className="text-center p-3 border border-border rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Ekstrem</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Oyun Kontrolleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button size="sm" variant="outline">
                    <Shuffle className="w-4 h-4 mr-1" />
                    Farklı Soru
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Mevcut soruyu beğenmediyseniz yeni bir soru alın
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button size="sm">Cevaplandı</Button>
                  <span className="text-sm text-muted-foreground">
                    Doğruluk sorusunu cevapladıktan sonra tıklayın
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Cesaret görevleri için otomatik süre sayacı
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>İpuçları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Kendinizi rahat hissettiğiniz sınırları belirleyin</li>
                <li>• "Geç" deme hakkınız her zaman var</li>
                <li>• Oyunu eğlenceli ve güvenli tutun</li>
                <li>• Demo modu ile önce oyunu keşfedin</li>
                <li>• Özel mod ile kendi sorularınızı ekleyin</li>
                <li>• İyi bir bağlantı için WiFi kullanın</li>
              </ul>
            </CardContent>
          </Card>

          {/* Safety */}
          <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-200">
                Güvenlik ve Sınırlar
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700 dark:text-orange-300">
              <p className="text-sm">
                Bu oyun yalnızca 18 yaş üstü kişiler içindir. Tüm katılımcılar 
                herhangi bir soruyu veya görevi reddetme hakkına sahiptir. 
                Karşılıklı rıza olmadan hiçbir şey yapmaya zorlanmamalıdır.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 pb-8">
          <Button onClick={onBack} size="lg">
            Oyuna Başla
          </Button>
        </div>
      </div>
    </div>
  );
}