# Vercel Deployment Rehberi - muratakar.net

Bu rehber, React frontend ve FastAPI backend'inizi Vercel üzerinde deploy etmeniz için gerekli adımları içerir.

## Ön Gereksinimler

1. **Vercel Hesabı**: [vercel.com](https://vercel.com) üzerinden ücretsiz hesap oluşturun
2. **GitHub Hesabı**: Kodlarınız GitHub'da olmalı
3. **MongoDB Atlas**: Ücretsiz MongoDB veritabanı için [mongodb.com/atlas](https://mongodb.com/atlas)
4. **Domain**: muratakar.net domain'iniz hazır

## 1. MongoDB Atlas Kurulumu

1. [MongoDB Atlas](https://mongodb.com/atlas) hesabı oluşturun
2. Yeni bir cluster oluşturun (ücretsiz M0 tier yeterli)
3. Database Access bölümünden yeni kullanıcı oluşturun
4. Network Access bölümünden `0.0.0.0/0` IP adresini ekleyin (tüm IP'lere izin)
5. Connection string'i kopyalayın

## 2. GitHub Repository Hazırlığı

Kodlarınız zaten GitHub'da, şimdi Vercel'e bağlayacağız.

## 3. Vercel Deployment

### Adım 1: Vercel'e Giriş
1. [vercel.com](https://vercel.com) sitesine gidin
2. GitHub hesabınızla giriş yapın

### Adım 2: Proje İmport Etme
1. Dashboard'da "New Project" butonuna tıklayın
2. GitHub repository'nizi seçin: `akarmurrat/muratakar.net-site-public`
3. "Import" butonuna tıklayın

### Adım 3: Proje Konfigürasyonu
1. **Project Name**: `muratakar-net` (veya istediğiniz isim)
2. **Framework Preset**: "Other" seçin
3. **Root Directory**: Boş bırakın (root directory kullanacağız)
4. **Build and Output Settings**:
   - Build Command: `cd app/frontend && npm run build`
   - Output Directory: `app/frontend/build`
   - Install Command: `cd app/frontend && npm install`

### Adım 4: Environment Variables
"Environment Variables" bölümünde şu değişkenleri ekleyin:

```
MONGO_URL = mongodb+srv://kullanici:sifre@cluster.mongodb.net/
DB_NAME = muratakar
REACT_APP_BACKEND_URL = https://muratakar.net
```

**Önemli**: MONGO_URL'yi MongoDB Atlas'tan aldığınız connection string ile değiştirin.

### Adım 5: Deploy
"Deploy" butonuna tıklayın. İlk deployment 2-5 dakika sürebilir.

## 4. Domain Bağlama

### Adım 1: Vercel Dashboard
1. Proje dashboard'ına gidin
2. "Settings" sekmesine tıklayın
3. "Domains" bölümünü bulun

### Adım 2: Custom Domain Ekleme
1. "Add" butonuna tıklayın
2. `muratakar.net` yazın
3. "Add" butonuna tıklayın

### Adım 3: DNS Ayarları
Domain sağlayıcınızda (GoDaddy, Namecheap vb.) şu DNS kayıtlarını ekleyin:

**A Record:**
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Adım 4: SSL Sertifikası
Vercel otomatik olarak SSL sertifikası sağlayacak. Bu işlem 24 saat sürebilir.

## 5. Test Etme

1. Deployment tamamlandıktan sonra Vercel'in verdiği URL'yi test edin
2. Domain ayarları tamamlandıktan sonra `https://muratakar.net` adresini test edin
3. API endpoint'lerini test edin:
   - `https://muratakar.net/api/`
   - `https://muratakar.net/api/projects`

## 6. Güncellemeler

Kod değişikliklerini GitHub'a push ettiğinizde Vercel otomatik olarak yeniden deploy edecek.

```bash
git add .
git commit -m "Update website"
git push origin main
```

## Sorun Giderme

### Deployment Hataları
1. Vercel dashboard'da "Functions" sekmesinden log'ları kontrol edin
2. Build log'larını inceleyin
3. Environment variables'ları kontrol edin

### Domain Sorunları
1. DNS ayarlarının doğru olduğunu kontrol edin
2. DNS propagation'ı bekleyin (24 saat)
3. `dig muratakar.net` komutu ile DNS'i test edin

### API Sorunları
1. MongoDB connection string'ini kontrol edin
2. Database kullanıcı izinlerini kontrol edin
3. Network access ayarlarını kontrol edin

## Destek

Sorun yaşarsanız:
1. Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. MongoDB Atlas documentation: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

## Güvenlik Notları

1. MongoDB Atlas'ta sadece gerekli IP adreslerini whitelist'e ekleyin
2. Environment variables'ları asla kod içinde hardcode etmeyin
3. Production'da CORS ayarlarını spesifik domain'ler için yapın

Başarılar! 🚀