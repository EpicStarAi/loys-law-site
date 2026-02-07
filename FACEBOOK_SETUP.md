# Facebook Integration Setup

Чтобы подключить настоящие посты из Facebook на страницу новостей, выполните следующие шаги:

## 1. Создание Facebook App

1. Перейдите на [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)
2. Создайте новое приложение (New App)
3. Выберите тип "Business" или "Consumer"
4. Заполните данные приложения

## 2. Получение App ID и настройка

1. В панели приложения найдите App ID
2. Откройте файл `client/src/components/FacebookFeed.tsx`
3. Замените `'your-app-id'` на ваш реальный App ID
4. Замените `'YourPageId'` на ID вашей Facebook страницы

## 3. Получение Page ID

1. Откройте вашу Facebook страницу
2. Перейдите в "About" → "Page transparency"
3. Скопируйте Page ID
4. Или используйте URL вашей страницы

## 4. Настройка домена

1. В настройках Facebook App добавьте ваш домен в "App Domains"
2. Добавьте URL сайта в "Site URL"

## 5. Активация компонента

После получения данных:

1. Откройте `client/src/pages/Blog.tsx`
2. Замените секцию с placeholder на:

```tsx
<FacebookFeed 
  pageId="YOUR_PAGE_ID" 
  width={400} 
  height={600} 
/>
```

## Альтернативное решение

Если Facebook API слишком сложный, можно:

1. Вручную добавлять новости в базу данных
2. Использовать RSS из Facebook (если доступен)
3. Интегрировать через Zapier или другие автоматизации

## Безпека

- Используйте только публичные данные
- Следите за лимитами API
- Регулярно обновляйте токены доступа