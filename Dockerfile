FROM php:8.2-apache

# Установка mysqli и зависимостей
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Копируем ваш проект в директорию сайта
COPY . /var/www/html/

# Настраиваем права доступа
RUN chown -R www-data:www-data /var/www/html
