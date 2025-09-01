# Z-O-K-A - En İyi Çiftler Oyunu

🔥 **Çiftler ve gruplar için tasarlanmış interaktif intimlik oyunu**

[![Production Ready](https://img.shields.io/badge/status-production%20ready-green)](https://github.com/tozsolutions/z-o-k-a)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![PWA](https://img.shields.io/badge/PWA-enabled-purple)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

## 🎮 Özellikler

### 🎯 Oyun Modları
- **1 Çift Modu** (2 oyuncu): İntim çift deneyimi
- **2 Çift Modu** (4 oyuncu): Grup dinamikleri ve partner değişimi
- **Demo Modu**: Bot oyuncularla test etme imkanı

### 📚 4 Farklı Bölüm
1. **Geceye Başlarken** - Buzları kırma ve tanışma
2. **Isınma Turları** - Daha kişisel sorular ve fiziksel temas
3. **Akşamdan Kalma** - Yoğun ve tutkulu anlar
4. **Partner Değişimi** - Eksklüsif 4 oyuncu deneyimi

### 🎪 Oyun Özellikleri
- **32+ Profesyonel Soru**: Doğruluk ve cesaret kategorilerinde
- **Yoğunluk Seviyeleri**: Hafif → Orta → Yoğun → Ekstrem
- **Süre Sayacı**: Cesaret görevleri için otomatik sayaç
- **İlerleme Takibi**: Bölüm içinde ve genel ilerleme
- **Soru Karıştırıcı**: Beğenmediğiniz soruları değiştirin

### 🔧 Teknik Özellikler
- **Progressive Web App (PWA)**: Mobil cihazlara yüklenebilir
- **Responsive Tasarım**: Tüm ekran boyutlarında çalışır
- **Offline Çalışma**: Service worker ile çevrimdışı kullanım
- **Karanlık/Aydınlık Tema**: Kullanıcı tercihi desteği
- **Çoklu Dil Hazır**: i18n altyapısı mevcut
- **Error Boundaries**: Graceful hata yönetimi

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum
```bash
# Repoyu klonlayın
git clone https://github.com/tozsolutions/z-o-k-a.git
cd z-o-k-a

# Bağımlılıkları yükleyin
npm install

# Development sunucusunu başlatın
npm run dev
```

### Kullanılabilir Komutlar
```bash
npm run dev          # Development sunucusu
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint kontrolü
npm run preview      # Build önizlemesi
```

## 📱 Kullanım

### Temel Oyun Akışı
1. **Oyun Modunu Seçin**: 2 veya 4 oyuncu
2. **Bağlantı Kurulumu**: WiFi, Bluetooth veya Hotspot
3. **Bölüm Seçimi**: 4 farklı yoğunluk seviyesi
4. **Oyun Oynama**: Doğruluk soruları ve cesaret görevleri
5. **İlerleme**: Tamamlanan sorularla bir sonraki bölüme geçiş

### Demo Modu
Oyunu tanımak için bot oyuncularla test edebilirsiniz:
- Ana sayfada "Demo Modu" seçeneklerini kullanın
- Gerçek oyuncular olmadan tüm özellikleri deneyimleyin

## 🏗️ Teknoloji Yığını

### Frontend
- **React 18** - Modern component tabanlı UI
- **TypeScript** - Type safety ve developer experience
- **Vite** - Hızlı build tool ve HMR
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Özelleştirilebilir component library

### State Management
- **React Context** - Oyun state yönetimi
- **TanStack Query** - Server state ve caching
- **localStorage** - Kullanıcı tercihleri persistence

### PWA & Performance
- **Service Worker** - Offline functionality
- **Web App Manifest** - Native app benzeri deneyim
- **Code Splitting** - Lazy loading ve performance
- **Bundle Optimization** - Tree shaking ve minification

## 🔧 Geliştirme

### Proje Yapısı
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ErrorBoundary.tsx
├── contexts/           # React context providers
├── data/              # Static data ve configurations
├── hooks/             # Custom React hooks
├── pages/             # Ana sayfa components
├── types/             # TypeScript type definitions
└── lib/               # Utility functions
```

### Yeni Soru Ekleme
```typescript
// src/data/questions.ts
{
  id: 'unique_id',
  type: 'truth' | 'dare',
  content: 'Soru veya görev metni',
  chapter: 1-4,
  intensity: 'mild' | 'moderate' | 'intense' | 'extreme',
  playerCount: '2-player' | '4-player' | 'both'
}
```

### Component Geliştirme
```typescript
// Yeni component örneği
import { Button } from "@/components/ui/button";
import { useGame } from "@/contexts/GameContext";

export function MyComponent() {
  const { gameSession } = useGame();
  // Component logic
}
```

## 📦 Deployment

Detaylı deployment bilgileri için [DEPLOYMENT.md](./DEPLOYMENT.md) dosyasına bakın.

### Hızlı Deploy Seçenekleri
- **Netlify**: Drag & drop dist klasörü
- **Vercel**: Git entegrasyonu ile otomatik deploy
- **GitHub Pages**: Actions ile otomatik deployment

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

### Development Guidelines
- TypeScript kullanın
- ESLint kurallarına uyun
- Responsive design prensiplerini takip edin
- Accessibility standartlarına dikkat edin
- Commit mesajlarında conventional commits kullanın

## 📄 Lisans

Bu proje özel lisans altındadır. Ticari kullanım için iletişime geçin.

## 🔗 Bağlantılar

- **Live Demo**: [Buradan test edin](#)
- **Bug Reports**: [Issues](https://github.com/tozsolutions/z-o-k-a/issues)
- **Feature Requests**: [Discussions](https://github.com/tozsolutions/z-o-k-a/discussions)

## ⚠️ Önemli Notlar

- Bu oyun **18 yaş üstü** kullanıcılar içindir
- Tüm katılımcılar **rıza** göstermelidir
- Herhangi bir soru veya görevi **reddetme hakkı** vardır
- **Güvenli ve eğlenceli** ortam oluşturmaya odaklanır

---

**Z-O-K-A Team** tarafından ❤️ ile geliştirilmiştir.
