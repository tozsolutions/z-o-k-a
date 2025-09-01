# Zoka - En İyi Çiftler Oyunu 🔥

Partnerinizle veya arkadaşlarınızla unutulmaz anlar yaşayın. 2-4 oyuncu için tasarlanmış en kapsamlı ve intim çiftler oyunu.

![Zoka Landing Page](https://github.com/user-attachments/assets/7e67a6b8-e9f5-4f07-add7-e63d8a61e66b)
![Zoka Game Setup](https://github.com/user-attachments/assets/74be8f97-0e06-48fb-a5cb-951e832c0821)
![Zoka Chapter Selection](https://github.com/user-attachments/assets/9394f37d-21ab-4274-b3be-233cbe9f80aa)
![Zoka Game Playing](https://github.com/user-attachments/assets/f5f60972-8c69-480d-b520-8c4a4da4fc27)

## ✨ Özellikler

- 🎮 **2-4 Oyuncu Desteği**: Çift veya grup deneyimi
- 🔥 **4 Farklı Yoğunluk Seviyesi**: Geceye Başlarken → Isınma Turları → Akşamdan Kalma → Partner Değişimi
- 📱 **Çoklu Bağlantı**: WiFi, Bluetooth, Hotspot desteği
- 🤖 **Demo Modu**: Bot oyuncularla test etme imkanı
- 🎯 **200+ Soru**: Truth & Dare tarzında çeşitli sorular
- 📊 **İlerleme Takibi**: Hangi bölümde olduğunuzu görün
- 🌙 **Karanlık Tema**: Gece oyunları için optimize edilmiş
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel çalışır
- 🔒 **Güvenlik**: Modern güvenlik standartları
- ⚡ **Hızlı**: Optimize edilmiş performans

## 🏗️ Teknologi Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **State Management**: React Context + TanStack Query
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Docker + Nginx

## 🚀 Kurulum

### Geliştirme Ortamı

1. **Repository'yi klonlayın**
   ```bash
   git clone https://github.com/tozsolutions/z-o-k-a.git
   cd z-o-k-a
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Uygulamayı açın**
   ```
   http://localhost:5173
   ```

### Docker ile Geliştirme

```bash
# Geliştirme modu
npm run docker:dev

# Veya manuel
docker-compose --profile dev up --build
```

## 📦 Production Deployment

### Docker ile Deployment

1. **Production build**
   ```bash
   npm run docker:prod
   ```

2. **Manuel Docker deployment**
   ```bash
   # Build image
   docker build -t zoka-app .
   
   # Run container
   docker run -d -p 80:80 --name zoka zoka-app
   ```

### Geleneksel Deployment

1. **Production build oluşturun**
   ```bash
   npm run build
   ```

2. **`dist` klasörünü web sunucunuza yükleyin**

3. **Nginx configuration örneği**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 🧪 Test & Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Production build test
npm run build
npm run preview
```

## 🔧 Konfigürasyon

### Environment Variables

`.env.example` dosyasını `.env` olarak kopyalayın ve değerleri düzenleyin:

```bash
cp .env.example .env
```

Önemli değişkenler:
- `VITE_APP_TITLE`: Uygulama başlığı
- `VITE_ENABLE_ANALYTICS`: Analytics aktif/pasif
- `VITE_ENABLE_PWA`: PWA özellikleri

### PWA Konfigürasyonu

Uygulama PWA (Progressive Web App) desteği ile gelir:
- Offline çalışma
- Uygulama olarak yükleme
- Push notifications (gelecek güncellemeler)

## 📁 Proje Yapısı

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── ErrorBoundary.tsx
│   └── LoadingStates.tsx
├── contexts/           # React contexts
│   └── GameContext.tsx
├── data/              # Game data & questions
│   └── gameQuestions.ts
├── hooks/             # Custom hooks
├── lib/               # Utilities
├── pages/             # Page components
│   ├── Index.tsx
│   ├── GameSetup.tsx
│   ├── ChapterSelection.tsx
│   └── GamePlaying.tsx
├── types/             # TypeScript types
│   └── game.ts
└── App.tsx
```

## 🎮 Oyun Mekanikleri

### Bölümler

1. **Geceye Başlarken** (Mild): Eğlenceli başlangıç soruları
2. **Isınma Turları** (Moderate): Daha kişisel sorular
3. **Akşamdan Kalma** (Intense): Yoğun intimlik soruları
4. **Partner Değişimi** (Extreme): 4 oyuncu özel bölümü

### Oyun Türleri

- **Truth (Doğruluk)**: Kişisel sorular
- **Dare (Cesaret)**: Eylem görevleri
- **Custom**: Kullanıcı tanımlı (gelecek güncelleme)

## 🔒 Güvenlik

- Content Security Policy (CSP)
- XSS koruması
- HTTPS zorlaması
- Güvenli headers
- Input validation

## 📈 Performans

- Code splitting
- Lazy loading
- Asset optimization
- Gzip compression
- CDN hazır

## 🚀 Deployment Checklist

- [ ] Environment variables ayarlandı
- [ ] SSL sertifikası kuruldu
- [ ] CDN konfigüre edildi
- [ ] Analytics kuruldu
- [ ] Error tracking aktif
- [ ] Performance monitoring
- [ ] Backup stratejisi
- [ ] Health checks

## 🤝 Katkıda Bulunma

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create Pull Request

## 📄 Lisans

Bu proje özel lisans altındadır. Kullanım için izin gereklidir.

## 📞 İletişim

- **Email**: support@zoka.app
- **Website**: https://zoka.app
- **GitHub**: https://github.com/tozsolutions/z-o-k-a

## 🎯 Roadmap

- [ ] Çoklu dil desteği
- [ ] Özel soru ekleme
- [ ] Sosyal medya paylaşım
- [ ] Gelişmiş analitikler
- [ ] Mobil uygulama
- [ ] Multiplayer online mode

---

**⚠️ Yaş Sınırı**: Bu oyun 18+ içerik barındırır. Sorumlu bir şekilde oynayın.
