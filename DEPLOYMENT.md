# Vercel Deployment Rehberi

Bu rehber, muratakar.net web sitesini Vercel üzerinden deploy etmek için gerekli adımları içerir.

## 1. Vercel Hesabı ve Proje Kurulumu

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin: `akarmurrat/muratakar.net-site-public`
4. Root Directory olarak `app/frontend` seçin
5. Framework Preset olarak "Create React App" seçin

## 2. Environment Variables Ayarlama

Vercel dashboard'da projenizi seçin ve Settings > Environment Variables bölümüne gidin:

### Frontend Environment Variables
- `REACT_APP_BACKEND_URL`: `https://muratakar.net/api`

### Backend Environment Variables
- `MONGO_URL`: MongoDB Atlas connection string'iniz
- `DB_NAME`: `muratakar_site`

## 3. Build Settings

Vercel otomatik olarak aşağıdaki ayarları algılayacak:
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

## 4. Domain Konfigürasyonu

1. Vercel dashboard'da projenizi seçin
2. Settings > Domains bölümüne gidin
3. "Add Domain" butonuna tıklayın
4. `muratakar.net` domain'ini ekleyin
5. DNS ayarlarını yapın:
   - A record: `76.76.19.61` (Vercel IP)
   - CNAME record: `cname.vercel-dns.com`

## 5. MongoDB Atlas Kurulumu

1. [MongoDB Atlas](https://cloud.mongodb.com) hesabı oluşturun
2. Yeni cluster oluşturun
3. Database Access bölümünde kullanıcı oluşturun
4. Network Access bölümünde IP adresinizi ekleyin (0.0.0.0/0 tüm IP'lere izin verir)
5. Connection string'i kopyalayın ve Vercel environment variables'a ekleyin

## 6. Deployment

1. GitHub repository'nize push yapın
2. Vercel otomatik olarak deploy işlemini başlatacak
3. Deploy tamamlandıktan sonra siteniz `muratakar.net` adresinde yayında olacak

## 7. Sorun Giderme

### Build Hataları
- `npm install` komutunu çalıştırarak dependencies'leri kontrol edin
- Environment variables'ların doğru ayarlandığından emin olun

### API Bağlantı Sorunları
- MongoDB connection string'inin doğru olduğundan emin olun
- CORS ayarlarının doğru yapıldığından emin olun

### Domain Sorunları
- DNS ayarlarının doğru yapıldığından emin olun
- Domain'in Vercel'de doğru şekilde konfigüre edildiğinden emin olun

## 8. Güncelleme

Kodunuzu güncellediğinizde:
1. GitHub'a push yapın
2. Vercel otomatik olarak yeni deployment başlatacak
3. Deploy tamamlandıktan sonra değişiklikler canlıya geçecek

## 9. Monitoring

Vercel dashboard'da:
- Deployments bölümünden deployment geçmişini görüntüleyebilirsiniz
- Analytics bölümünden site trafiğini takip edebilirsiniz
- Functions bölümünden API endpoint'lerini izleyebilirsiniz