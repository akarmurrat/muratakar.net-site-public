# 🌐 muratakar.net - Personal Website

Modern ve responsive kişisel web sitesi. React frontend ve FastAPI backend ile geliştirilmiştir.

## 🚀 Teknolojiler

### Frontend
- React 18.3
- React Router v6
- Axios
- Create React App

### Backend
- FastAPI
- MongoDB (Motor - async driver)
- Pydantic
- Python 3.9+

## 📁 Proje Yapısı

```
workspace/
├── app/
│   ├── frontend/          # React frontend uygulaması
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── App.js
│   │   └── package.json
│   │
│   └── backend/           # FastAPI backend
│       ├── routes/
│       │   ├── blog.py
│       │   ├── calendar.py
│       │   ├── contact.py
│       │   ├── projects.py
│       │   └── timeline.py
│       ├── models.py
│       ├── server.py
│       ├── seed_data.py
│       └── requirements.txt
│
├── vercel.json            # Vercel deployment config
├── DEPLOY_INSTRUCTIONS.md # Detaylı deployment rehberi
└── README.md
```

## 🔧 Yerel Geliştirme

### Backend Kurulumu

1. Backend klasörüne gidin:
```bash
cd app/backend
```

2. Virtual environment oluşturun:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# veya
venv\Scripts\activate     # Windows
```

3. Bağımlılıkları yükleyin:
```bash
pip install -r requirements.txt
```

4. `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

`.env` içeriği:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=muratakar_db
ALLOWED_ORIGINS=http://localhost:3000
```

5. Sunucuyu başlatın:
```bash
uvicorn server:app --reload --port 8000
```

Backend şu adreste çalışacak: `http://localhost:8000`

### Frontend Kurulumu

1. Frontend klasörüne gidin:
```bash
cd app/frontend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

`.env` içeriği:
```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

4. Development sunucusunu başlatın:
```bash
npm start
```

Frontend şu adreste çalışacak: `http://localhost:3000`

## 🚀 Production Deployment

Detaylı deployment talimatları için `DEPLOY_INSTRUCTIONS.md` dosyasına bakın.

### Hızlı Özet

**Frontend (Vercel):**
```bash
vercel login
vercel
```

**Backend (Railway/Render):**
1. GitHub repository'yi bağlayın
2. Root directory: `app/backend`
3. Environment variables ekleyin
4. Deploy edin

**Domain (muratakar.net):**
- Vercel'de custom domain ekleyin
- DNS ayarlarını güncelleyin
- SSL otomatik aktif olacak

## 📚 API Endpoints

### Projects
- `GET /api/projects` - Tüm projeleri listele
- `GET /api/projects/{id}` - Belirli bir projeyi getir
- `POST /api/projects` - Yeni proje oluştur
- `PUT /api/projects/{id}` - Projeyi güncelle
- `DELETE /api/projects/{id}` - Projeyi sil

### Blog
- `GET /api/blog` - Tüm blog yazılarını listele
- `GET /api/blog/{id}` - Belirli bir yazıyı getir
- `POST /api/blog` - Yeni yazı oluştur
- `PUT /api/blog/{id}` - Yazıyı güncelle
- `DELETE /api/blog/{id}` - Yazıyı sil

### Calendar
- `GET /api/calendar` - Tüm takvim etkinliklerini listele
- `POST /api/calendar` - Yeni etkinlik oluştur
- `PUT /api/calendar/{id}` - Etkinliği güncelle
- `DELETE /api/calendar/{id}` - Etkinliği sil

### Timeline
- `GET /api/timeline` - Zaman çizelgesi etkinliklerini listele
- `POST /api/timeline` - Yeni etkinlik ekle
- `PUT /api/timeline/{id}` - Etkinliği güncelle
- `DELETE /api/timeline/{id}` - Etkinliği sil

### Contact
- `POST /api/contact` - İletişim mesajı gönder
- `GET /api/contact` - Tüm mesajları listele

## 🧪 Testing

### Backend Tests
```bash
cd app/backend
pytest
```

### Frontend Tests
```bash
cd app/frontend
npm test
```

## 📝 Environment Variables

### Backend
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database adı
- `ALLOWED_ORIGINS` - CORS için izin verilen origin'ler (virgülle ayrılmış)

### Frontend
- `REACT_APP_BACKEND_URL` - Backend API URL'i

## 🔐 Güvenlik

- Environment variables asla commit edilmez (`.gitignore`'da)
- CORS origin'ler production için kısıtlanmalı
- MongoDB connection string güvenli tutulmalı
- API rate limiting eklenebilir

## 📄 Lisans

MIT License

## 👤 İletişim

- Website: https://muratakar.net
- Email: contact@muratakar.net

---

**Not:** Bu proje aktif olarak geliştirilmektedir. Katkıda bulunmak için pull request gönderebilirsiniz.
