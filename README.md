# Murat Akar - Kişisel Web Sitesi

Bu proje, Murat Akar'ın kişisel web sitesi için geliştirilmiş React frontend ve FastAPI backend içerir.

## Proje Yapısı

- `app/frontend/` - React.js frontend uygulaması
- `app/backend/` - FastAPI backend uygulaması
- `vercel.json` - Vercel deployment konfigürasyonu

## Yerel Geliştirme

### Frontend
```bash
cd app/frontend
npm install
npm start
```

### Backend
```bash
cd app/backend
pip install -r requirements.txt
python -m uvicorn server:app --reload
```

## Vercel'e Deploy

1. Vercel hesabınıza giriş yapın
2. GitHub repository'nizi bağlayın
3. Environment variables'ları ayarlayın:
   - `MONGO_URL`: MongoDB connection string
   - `DB_NAME`: Veritabanı adı
4. Deploy edin

## Domain Konfigürasyonu

Domain'inizi Vercel'de ayarlamak için:
1. Vercel dashboard'da projenizi seçin
2. Settings > Domains bölümüne gidin
3. `muratakar.net` domain'ini ekleyin
4. DNS ayarlarını yapın

## API Endpoints

- `GET /api/` - API durumu
- `GET /api/projects` - Projeler listesi
- `GET /api/blog` - Blog yazıları
- `GET /api/calendar` - Takvim etkinlikleri
- `GET /api/timeline` - Zaman çizelgesi
- `POST /api/contact` - İletişim formu