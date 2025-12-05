const tooltip = document.createElement('div')
tooltip.className = 'tooltip'
document.body.appendChild(tooltip)

const games = document.querySelectorAll('.game-item')
games.forEach(game => {
  game.addEventListener('mouseenter', () => {
    const title = game.dataset.title
    const year = game.dataset.year
    const dev = game.dataset.dev
    const req = game.dataset.requirements
    const img = game.dataset.img
    tooltip.innerHTML = `<strong>${title}</strong><br>Рік: ${year}<br>Розробник: ${dev}<br>Системні вимоги: ${req}<br><img src='${img}' alt='${title}' style='width:100%; margin-top:5px; border-radius:5px;'>`
    tooltip.style.display = 'block'
    const rect = game.getBoundingClientRect()
    tooltip.style.top = rect.bottom + window.scrollY + 'px'
    tooltip.style.left = rect.left + window.scrollX + 'px'
  })
  game.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none'
  })
})

const playButton = document.getElementById('playButton')
if (playButton) {
  const container = document.getElementById('animationContainer')
  const videoContainer = document.getElementById('videoContainer')
  playButton.addEventListener('click', () => {
    container.innerHTML = 'Завантаження GTA SAMP...'
    setTimeout(() => {
      container.innerHTML = 'Вітаємо!'
      setTimeout(() => {
        container.innerHTML = 'Дякуємо що вибрали Grand Theft Auto VI і дякуємо що ви досі це слухаєте'
        videoContainer.style.display = 'block'
        setTimeout(() => {
          container.innerHTML = 'Ми отримали всі ваші особисті дані ОЛУХ BAY BAY'
        }, 4000)
      }, 2000)
    }, 2000)
  })
}
