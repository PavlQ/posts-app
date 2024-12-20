# Пост-блог на основі Node.js та MongoDB

Це веб-додаток для керування постами, в якому користувачі можуть створювати, редагувати та видаляти пости. Додаток використовує Node.js, Express.js та MongoDB для збереження постів. Проект реалізований за допомогою архітектурного шаблону MVC.

## Функціональність

- Створення нових постів
- Перегляд списку всіх постів
- Редагування постів
- Видалення постів

## Технології

- Node.js
- Express.js
- MongoDB (через Mongoose)
- EJS (шаблонізатор)
- CSS для стилізації

## Інструкції з налаштування

1. **Клонувати репозиторій:**

   ```
   git clone https://github.com/your-username/posts-app.git
   ```

2. **Перейти в директорію проекту:**

   ```
   cd posts-app
   ```

3. **Встановити залежності:**
   Для цього необхідно мати встановлений Node.js. Використовуйте команду:

   ```
   npm install
   ```

4. **Запустити локальний сервер:**
   Для запуску серверу, використовуйте команду:

   ```
   node app.js
   ```

   Сервер запуститься на порту `4000`. Ви можете перейти в браузер за адресою [http://localhost:4000](http://localhost:4000).

5. **Підключення до MongoDB:**
   Переконайтеся, що у вас встановлений MongoDB, або використовуйте MongoDB Atlas для хмарного підключення. Перевірте підключення в файлі `app.js`.

## Деплой на хостинг

Для деплою додатку використовуйте одну з безкоштовних платформ:

1. **Render**:
   - Зареєструйтеся на [Render](https://render.com/) і підключіть ваш репозиторій.
   - Використовуйте налаштування для Node.js додатку.
2. **Netlify**:

   - Для розгортання на Netlify, налаштуйте підключення до GitHub та виберіть конфігурацію для серверного додатку (можна використовувати Netlify Functions або інші методи).

3. **Cyclic**:
   - Візьміть ваш код і розгорніть на [Cyclic](https://www.cyclic.sh/).

## Структура проекту

```
posts-app/
│
├── models/
│   └── post.js            <-- Модель для постів
├── views/
│   ├── posts.ejs          <-- Шаблон для відображення постів
│   └── edit.ejs           <-- Шаблон для редагування посту
├── public/
│   ├── styles.css         <-- Стилі для вашого сайту
│   └── script.js          <-- Додатковий JS (за потреби)
├── app.js                 <-- Основний файл сервера
└── package.json           <-- Залежності проекту
```

У вашому проекті для створення пост-блогу ви використовуєте наступний стек технологій:

### 1. **Node.js**

- **Використання:** Node.js дозволяє вам створювати серверну частину веб-додатку. Це середовище для виконання JavaScript на сервері.
- **Переваги:** Легкий у використанні для створення веб-серверів, асинхронне виконання коду, великий екосистема пакетів (npm).

### 2. **Express.js**

- **Використання:** Express.js — це фреймворк для Node.js, який спрощує створення серверів і обробку HTTP-запитів.
- **Переваги:** Простота в налаштуванні маршрутизації, обробки запитів і відповіді, велика підтримка спільноти.

### 3. **MongoDB**

- **Використання:** MongoDB — це база даних NoSQL, яка використовується для збереження постів. Вона зберігає дані у вигляді документів JSON.
- **Переваги:** Гнучкість в зберіганні даних, масштабованість, відсутність необхідності у попередньому визначенні схеми для зберігання даних.

### 4. **Mongoose**

- **Використання:** Mongoose — це бібліотека для роботи з MongoDB, яка забезпечує моделі та схеми для збереження та маніпулювання даними.
- **Переваги:** Спрощує роботу з MongoDB, додає валідацію та інші корисні функції.

### 5. **EJS (Embedded JavaScript)**

- **Використання:** EJS — це шаблонізатор для Node.js, який дозволяє генерувати HTML сторінки з динамічними даними.
- **Переваги:** Легко інтегрується з Express, дозволяє використовувати JavaScript у шаблонах для динамічного відображення даних.

### 6. **CSS**

- **Використання:** Для стилізації веб-сторінок і надання їм привабливого вигляду.
- **Переваги:** Дозволяє контролювати зовнішній вигляд вашого сайту (кольори, шрифти, макет).

### 7. **Body-parser**

- **Використання:** Middleware для Express, що дозволяє розбирати дані з POST-запитів (наприклад, форми).
- **Переваги:** Спрощує отримання та обробку даних з форм.

### 8. **Git (для контролю версій)**

- **Використання:** Git використовується для управління версіями коду, щоб зберігати історію змін і дозволяти спільну роботу.
- **Переваги:** Легко слідкувати за змінами, відновлювати попередні версії, працювати з іншими розробниками.

Цей стек технологій є досить популярним для створення сучасних веб-додатків і дозволяє розробляти потужні та масштабовані рішення.

## Ліцензія

Цей проект ліцензований під [MIT License](LICENSE).
