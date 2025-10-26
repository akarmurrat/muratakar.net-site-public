# ⚡ Hızlı Başlangıç - Vercel Deployment

## 📋 Ön Hazırlık (5 dakika)

### 1. MongoDB Atlas Kurulumu
1. https://www.mongodb.com/cloud/atlas → "Try Free" 
2. Cluster oluştur (Free tier - M0)
3. Database Access → Add User (username/password)
4. Network Access → Add IP (0.0.0.0/0)
5. Connect → Copy connection string

### 2. GitHub'a Push
```bash
git add .
git commit -m "Add Vercel deployment config"
git push origin main
```

---

## 🚀 Vercel Deployment (3 dakika)

### Frontend Deploy
1. https://vercel.com → Login with GitHub
2. Import Project → Seç: `akarmurrat/muratakar.net-site-public`
3. Configure:
   - Framework: Create React App
   - Root Directory: Bırak (vercel.json ayarlı)
   - Environment Variable ekle:
     ```
     REACT_APP_BACKEND_URL = (boş bırak - sonra ekleyeceğiz)
     ```
4. **Deploy** → Bekle (2-3 dakika)
5. Vercel URL'i kopyala (örn: `muratakar-site.vercel.app`)

---

## 🔧 Backend Deployment - Railway (5 dakika)

### Railway Kurulumu
1. https://railway.app → Login with GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Repository seç → `akarmurrat/muratakar.net-site-public`
4. **Add variables** (Settings → Variables):
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
   DB_NAME=muratakar_db
   ALLOWED_ORIGINS=https://muratakar-site.vercel.app,https://muratakar.net
   PORT=8000
   ```
5. Settings → **Root Directory**: `app/backend`
6. Deploy → Bekle (3-4 dakika)
7. Settings → Networking → **Generate Domain**
8. Backend URL'i kopyala (örn: `yourapp.railway.app`)

---

## 🔗 Frontend'i Backend'e Bağla (2 dakika)

1. Vercel Dashboard → Project → Settings → Environment Variables
2. `REACT_APP_BACKEND_URL` ekle/düzenle:
   ```
   https://yourapp.railway.app
   ```
3. Deployments → Latest → **Redeploy**

---

## 🌐 Custom Domain (muratakar.net) - 10 dakika

### Vercel'de Domain Ekle
1. Vercel → Project → Settings → **Domains**
2. Add: `muratakar.net`
3. Add: `www.muratakar.net`

### DNS Ayarları (Domain sağlayıcınızda)

**Seçenek 1: A Record (Daha hızlı)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Seçenek 2: Nameservers (Daha kolay)**
Domain sağlayıcınızda nameserver'ları değiştir:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

⏰ **DNS propagation: 0-48 saat (genelde 1-2 saat)**

---

## ✅ Test

### Backend Test
```bash
curl https://yourapp.railway.app/api/
# Response: {"message":"Hello World"}
```

### Frontend Test
```
https://muratakar.net
```

---

## 🎉 Tamamlandı!

✅ Frontend: https://muratakar.net  
✅ Backend: https://yourapp.railway.app  
✅ Database: MongoDB Atlas  
✅ SSL: Otomatik (Let's Encrypt)

---

## 🔍 Sorun Giderme

### ❌ CORS Hatası
**Çözüm:** Railway environment variables → `ALLOWED_ORIGINS` kontrol et

### ❌ API bağlanamıyor
**Çözüm:** 
1. Backend URL'i doğru mu? (Railway)
2. Environment variable doğru mu? (Vercel)
3. Backend çalışıyor mu? (Railway logs)

### ❌ Domain çalışmıyor
**Çözüm:**
1. DNS ayarları doğru mu?
2. SSL sertifikası aktif mi? (24 saat bekle)
3. `dig muratakar.net` ile DNS kontrol et

---

## 📞 Yardım

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Docs: https://docs.atlas.mongodb.com

**Toplam süre: ~25 dakika** ⚡
