const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./models/post') // Модель для постів

const app = express()
const PORT = 4000

// Підключення до MongoDB
mongoose
	.connect('mongodb://localhost/posts-app')
	.then(() => {
		console.log('MongoDB підключено')
	})
	.catch(err => {
		console.log('Помилка при підключенні до MongoDB:', err)
	})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs') // Встановлюємо EJS як шаблонізатор

// Статичні файли
app.use(express.static('public'))

// Маршрут для кореня (перенаправляє на /posts)
app.get('/', (req, res) => {
	res.redirect('/posts')
})

// Route для відображення всіх постів
app.get('/posts', async (req, res) => {
	const posts = await Post.find()
	res.render('posts', { posts })
})

// Route для додавання нового посту
app.post('/posts', async (req, res) => {
	const { title, description, author } = req.body
	const newPost = new Post({ title, description, author })
	await newPost.save()
	res.redirect('/posts')
})

// Route для видалення посту
app.get('/delete/:id', async (req, res) => {
	const { id } = req.params
	await Post.findByIdAndDelete(id)
	res.redirect('/posts')
})

// Route для редагування посту
app.get('/edit/:id', async (req, res) => {
	const { id } = req.params
	const post = await Post.findById(id)
	res.render('edit', { post })
})

app.post('/edit/:id', async (req, res) => {
	const { id } = req.params
	const { title, description, author } = req.body
	await Post.findByIdAndUpdate(id, { title, description, author })
	res.redirect('/posts')
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
