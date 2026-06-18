#!/bin/bash
# Скрипт установки ZABORIO на Ubuntu 22.04 VPS
# Запускать от root: bash deploy.sh

set -e

echo "=== 1. Обновление системы ==="
apt update && apt upgrade -y

echo "=== 2. Установка Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "=== 3. Установка PM2 и Nginx ==="
npm install -g pm2
apt install -y nginx

echo "=== 4. Установка зависимостей проекта ==="
cd /var/www/zaborio
npm install --production

echo "=== 5. Сборка проекта ==="
npm run build

echo "=== 6. Запуск через PM2 ==="
pm2 start npm --name "zaborio" -- start
pm2 save
pm2 startup systemd -u root --hp /root

echo "=== 7. Настройка Nginx ==="
cat > /etc/nginx/sites-available/zaborio << 'EOF'
server {
    listen 80;
    server_name zaborio.ru www.zaborio.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }

    # Статические файлы Next.js
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        proxy_pass http://localhost:3000;
        expires 30d;
        add_header Cache-Control "public";
    }
}
EOF

ln -sf /etc/nginx/sites-available/zaborio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
systemctl enable nginx

echo ""
echo "=== Готово! Сайт запущен на http://$(curl -s ifconfig.me) ==="
echo "=== После настройки DNS для zaborio.ru запустите SSL: ==="
echo "=== apt install certbot python3-certbot-nginx -y ==="
echo "=== certbot --nginx -d zaborio.ru -d www.zaborio.ru ==="
