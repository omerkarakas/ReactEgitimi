# 14. Build ve Dockerfile Kullanımı

## Özet

**Konular:**

- Build oluşturma
- Docker üzerinde projeyi çalıştırma

**Dersin Konusu veya Ünite:** Build ve Dockerfile  
**Düzey:** Başlangıç / Orta  
**Amaç:** Projenin geliştirme ortamından canlıya alınması ve container kullanımı  
**Ayrılan Süre:** 40dk

---

## Uygulama

### Docker Nedir?

Docker, uygulamaları ve bağımlılıklarını birlikte kapsayan **container** adı verilen hafif sanal ortamlar oluşturmaya yarayan bir platformdur. React projelerini build edip dağıtmak için çok uygundur.

---

## Docker Kurulumu

### Windows için Docker Kurulumu

**Gerekli Ön Koşullar:**

- Windows 10 veya 11 Pro, Enterprise ya da Education sürümleri (Home sürümü için WSL2 gerekir)
- BIOS'ta virtualization açık olmalı

**Kurulum Adımları:**

1. [Docker Desktop](https://www.docker.com/products/docker-desktop/) adresinden indirin.
2. Kurulum sırasında **WSL 2 destekli yükleme** seçeneğini işaretleyin.
3. Kurulum bittikten sonra bilgisayarı yeniden başlatın.
4. Docker Desktop’ı açın. Tray'de Docker simgesi görünmeli.
5. Terminalde şu komutu çalıştırarak test edin:
   ```bash
   docker --version
   ```

**Test: Docker Çalışıyor mu?**

```bash
docker run hello-world
```

Eğer bu komut başarılıysa, sisteminiz Docker için hazırdır.

---

## Build ve Dockerfile Kullanımı

### Projeyi Build Et

```bash
npm run build
```

Bu komut, **dist/** klasörünü oluşturur ve burada statik dosyalar yer alır.

### Dockerfile Yazımı

Proje kök dizinine `Dockerfile` adında bir dosya oluşturun:

```dockerfile
# 1. Build aşaması
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# 2. Production aşaması - Statik dosyaları sunmak için nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx default.conf üzerine yazmak istersen:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# react router dom kullanıyorsak:
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
```

---

### Docker Image Oluştur ve Çalıştır

```bash
docker build -t my-react-app .
docker run -d -p 3000:80 my-react-app
```

Artık tarayıcıda [http://localhost:3000](http://localhost:3000) adresinden uygulamaya erişebilirsiniz.

---

## (Opsiyonel) nginx.conf Ayarı (SPA için route fallback)

Eğer React Router kullanıyorsanız, 404 hataları için aşağıdaki `nginx.conf` dosyasını ekleyin:

```nginx
server {
  listen 80;
  server_name localhost;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

Ve bunu Dockerfile içine şu şekilde dahil edin:

```dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

---

## Kısaca

| Adım               | Açıklama                             |
| ------------------ | ------------------------------------ |
| npm install        | Gerekli bağımlılıkları kur           |
| npm run build      | Statik üretim dosyalarını hazırla    |
| Dockerfile         | 2 aşamalı yapı (build + nginx serve) |
| docker build & run | Uygulamayı container'da çalıştır     |

---

## Özet

Bu bölümde:

- ✔️ Build oluşturduk
- ✔️ Docker container üzerinde projeyi çalıştırdık
