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

#react router dom kullaniyorsak:
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
