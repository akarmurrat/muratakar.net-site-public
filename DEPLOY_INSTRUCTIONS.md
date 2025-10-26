# 🚀 Vercel Deployment Rehberi - muratakar.net

Bu rehber, React frontend'inizi Vercel'de ve FastAPI backend'inizi Railway'de deploy etmeniz için adım adım talimatlar içerir.

## 📋 Gereksinimler

- GitHub hesabı
- Vercel hesabı (https://vercel.com)
- Railway hesabı (https://railway.app) veya alternatif backend hosting
- MongoDB Atlas hesabı (https://www.mongodb.com/cloud/atlas)
- Domain: muratakar.net

---

## 🎯 Deployment Stratejisi

**Frontend:** Vercel (React + Static Hosting)  
**Backend:** Railway/Render (FastAPI + MongoDB)  
**Database:** MongoDB Atlas

---

## 📦 Adım 1: Backend Deployment (Railway)

### 1.1 MongoDB Atlas Kurulumu

1. https://www.mongodb.com/cloud/atlas adresine gidin
2. Ücretsiz cluster oluşturun
3. Database Access'de yeni user oluşturun
4. Network Access'de IP whitelist ekleyin (0.0.0.0/0 - tüm IP'ler)
5. Connection string'i kopyalayın:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
   ```

### 1.2 Railway'de Backend Deploy

1. https://railway.app adresine gidin ve GitHub ile giriş yapın
2. "New Project" > "Deploy from GitHub repo" seçin
3. Repository'nizi seçin
4. **Root Directory'yi ayarlayın:** `app/backend`
5. Environment Variables ekleyin:
   ```
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=muratakar_db
   ALLOWED_ORIGINS=https://muratakar.net,https://www.muratakar.net
   ```
6. Deploy'u başlatın
7. Deploy edilen backend URL'ini not alın (örn: `https://your-app.railway.app`)

### 1.3 CORS Ayarlarını Güncelle

Backend'inizin `server.py` dosyasında CORS ayarlarının doğru olduğundan emin olun:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🎨 Adım 2: Frontend Deployment (Vercel)

### 2.1 Environment Variables Oluştur

Frontend klasöründe `.env.production` dosyası oluşturun:

```bash
cd app/frontend
```

`.env.production` dosyası:
```env
REACT_APP_BACKEND_URL=https://your-backend.railway.app
```

### 2.2 Vercel'e Deploy

#### Yöntem 1: Vercel Dashboard (Önerilen)

1. https://vercel.com adresine gidin
2. "Add New Project" > "Import Git Repository"
3. GitHub repository'nizi seçin
4. **Framework Preset:** Create React App
5. **Root Directory:** Bırakın (zaten vercel.json'da tanımlı)
6. **Environment Variables** ekleyin:
   ```
   REACT_APP_BACKEND_URL = https://your-backend.railway.app
   ```
7. "Deploy" butonuna tıklayın

#### Yöntem 2: Vercel CLI

```bash
# Vercel CLI'yi yükleyin
npm install -g vercel

# Project root'da çalıştırın
cd /path/to/workspace
vercel login
vercel

# Environment variable ekleyin
vercel env add REACT_APP_BACKEND_URL production
# Değer: https://your-backend.railway.app
```

---

## 🌐 Adım 3: Custom Domain Ekleme (muratakar.net)

### 3.1 Vercel'de Domain Ayarları

1. Vercel Dashboard > Project > Settings > Domains
2. "Add Domain" butonuna tıklayın
3. `muratakar.net` yazın ve ekleyin
4. `www.muratakar.net` için de tekrarlayın

### 3.2 DNS Ayarları

Domain sağlayıcınızın (GoDaddy, Namecheap, vb.) DNS ayarlarına gidin:

**A Record (muratakar.net):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record (www.muratakar.net):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Alternatif: Nameservers ile (Daha Kolay)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### 3.3 SSL Sertifikası

Vercel otomatik olarak Let's Encrypt SSL sertifikası sağlar. 24 saat içinde aktif olacaktır.

---

## ✅ Adım 4: Test Etme

### 4.1 Backend Testi
```bash
curl https://your-backend.railway.app/api/
# Response: {"message":"Hello World"}
```

### 4.2 Frontend Testi
```
https://muratakar.net
```

---

## 🔧 Troubleshooting

### CORS Hatası
```
Access to XMLHttpRequest has been blocked by CORS policy
```
**Çözüm:** Railway'deki ALLOWED_ORIGINS environment variable'ını kontrol edin.

### API Bağlantı Hatası
**Çözüm:** 
1. Backend URL'in doğru olduğunu kontrol edin
2. Backend servisinin çalıştığını kontrol edin
3. Network sekmesinde API isteklerini inceleyin

### Build Hatası
**Çözüm:**
```bash
cd app/frontend
npm install
npm run build
```

---

## 🔄 Güncellemeler

### Frontend Güncelleme
GitHub'a push yaptığınızda Vercel otomatik deploy eder.

### Backend Güncelleme
GitHub'a push yaptığınızda Railway otomatik deploy eder.

---

## 📝 Notlar

1. **Free Tier Limitleri:**
   - Railway: 500 saat/ay, $5 kredi
   - Vercel: 100 GB bandwidth/ay
   - MongoDB Atlas: 512 MB storage

2. **Production Checklist:**
   - [ ] MongoDB connection string güvenli
   - [ ] CORS origins doğru ayarlanmış
   - [ ] Environment variables production'da set edilmiş
   - [ ] SSL sertifikası aktif
   - [ ] Backend health check çalışıyor
   - [ ] Frontend build başarılı

3. **İletişim Bilgileri:**
   - Site: https://muratakar.net
   - Backend: https://your-backend.railway.app
   - Dashboard: https://vercel.com/dashboard

---

## 🎉 Deployment Tamamlandı!

Artık siteniz `https://muratakar.net` adresinde yayında! 

**Sonraki Adımlar:**
- Google Analytics ekleyin
- SEO optimizasyonu yapın
- Monitoring/logging ekleyin (Sentry, LogRocket)
- Backup stratejisi oluşturun

---

## 🆘 Yardıma mı ihtiyacınız var?

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
