// Обновленный массив курсов с номерами шагов
const courses = [
  { step: 1, title: "Введение в HTML", description: "Основа веб-страниц", link: "main/HTML/Введение в HTML/index.html" },
  { step: 2, title: "Элементы", description: "HTML элементы: Магия блоков", link: "main/HTML/HTML-элементы подробно/index.html" },
  { step: 3, title: "Семантика", description: "Семантический HTML:Теги описывающие содержание", link: "main/HTML/Семантический HTML/index.html" },
  { step: 4, title: "Продвинутый уровень", description: "Магия следующего уровня", link: "main/HTML/Продвинутые возможности HTML/index.html" },
  { step: 5, title: "Практика по HTML", description: "Реши задачи для закрепления марьяла", link: "main/HTML/практики HTML/index.html" },
  { step: 6, title: "Теория: Вся основа HTML в крации", description: "Изучите основы HTML: Магию разметки", link: "main/HTML/theoryHTML/index.html" },
  { step: 7, title: "Теория: Основы CSS", description: "Изучите основы CSS: Магия стилей", link: "main/theoryCSS/Index.html" },
  { step: 8, title: "Теория: Основы JS", description: "Изучите основы JavaScript в магической библиотеке", link: "main/theoryJS/index.html" },
  { step: 9, title: "Квест в катакомбах", description: "Начни своё приключение с основ JavaScript", link: "main/quest1/index.html" },
];

const grid = document.querySelector('.grid');

// Создаем блоки курсов с номерами шагов
courses.forEach((course, index) => {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.setAttribute('data-step', course.step);
  gridItem.innerHTML = `
    <span class="step-number">${course.step}</span>
    <h2>${course.title}</h2>
    <p>${course.description}</p>
  `;
  gridItem.addEventListener('click', () => { window.location.href = course.link; });
  grid.appendChild(gridItem);

  gridItem.style.animationDelay = `${index * 0.1}s`;

  gridItem.addEventListener('mouseenter', (e) => {
    const rect = gridItem.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    for (let i = 0; i < 10; i++) {
      createHoverParticle(centerX, centerY, gridItem);
    }
  });
});

// Частицы при наведении на карточки
function createHoverParticle(x, y, parent) {
  const particle = document.createElement('div');
  particle.classList.add('hover-particle');
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.background = Math.random() > 0.5 ? '#f8c291' : '#6c5ce7';
  document.getElementById('particles').appendChild(particle);

  const angle = Math.random() * 2 * Math.PI;
  const distance = 50 + Math.random() * 20;
  const translateX = Math.cos(angle) * distance;
  const translateY = Math.sin(angle) * distance;
  particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
  setTimeout(() => particle.remove(), 1000);
}

// Частицы от мыши
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

// Фоновые частицы
function createBgParticle() {
  const particlesContainer = document.getElementById('particles');
  const particle = document.createElement('div');
  particle.classList.add('bg-particle');
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  particlesContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
}

// Волны от курсора
function createRipple(e) {
  const ripple = document.body.querySelector('::after');
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  ripple.style.width = '300px';
  ripple.style.height = '300px';
  ripple.style.transform = 'translate(-50%, -50%)';
  ripple.style.opacity = '1';
  setTimeout(() => {
    ripple.style.opacity = '0';
    ripple.style.width = '0';
    ripple.style.height = '0';
  }, 500);
}

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.2) createParticle(e.clientX, e.clientY);
  createRipple(e); // Волны от курсора
});

document.addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) createParticle(e.clientX, e.clientY);
});

// Создание фоновых частиц каждые 0.5 секунды
setInterval(createBgParticle, 100);