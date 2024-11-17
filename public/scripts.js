// JavaScript для зірочок
document.addEventListener('DOMContentLoaded', () => {
	const stars = document.querySelectorAll('.star')
	const ratingInput = document.getElementById('rating')

	stars.forEach(star => {
		star.addEventListener('click', () => {
			const value = star.getAttribute('data-value')
			ratingInput.value = value // Встановлюємо значення рейтингу в input

			// Оновлюємо клас selected для кожної зірочки
			stars.forEach(star => {
				if (star.getAttribute('data-value') <= value) {
					star.classList.add('selected')
				} else {
					star.classList.remove('selected')
				}
			})
		})
	})
})
