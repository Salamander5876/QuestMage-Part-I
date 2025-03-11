const courses = [
  { title: "Теория: Основы HTML", description: "Изучите основы HTML: Магию разметки.", link: "main/theoryHTML/index.html" },
  { title: "Теория: Основы CSS", description: "Изучите основы CSS: Магия стилей.", link: "main/theoryCSS/index.html" },
  { title: "Теория: Основы JS", description: "Изучите основы JavaScript в магической библиотеке.", link: "main/theoryJS/index.html" },
  { title: "Квест в катакомбах", description: "Начни своё приключение с основ JavaScript.", link: "main/quest1/index.html" },
];

const grid = document.querySelector('.grid');

courses.forEach(course => {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.innerHTML = `<h2>${course.title}</h2><p>${course.description}</p>`;
  gridItem.addEventListener('click', () => { window.location.href = course.link; });
  grid.appendChild(gridItem);
});

function createParticle(x, y) {
  const particlesContainer = document.getElementById('particles');
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.background = Math.random() > 0.5 ? '#f8c291' : '#6c5ce7';
  particle.style.width = `${Math.random() * 4 + 3}px`;
  particle.style.height = particle.style.width;
  particlesContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 1200);
}

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.2) createParticle(e.clientX, e.clientY);
});
document.addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) createParticle(e.clientX, e.clientY);
});