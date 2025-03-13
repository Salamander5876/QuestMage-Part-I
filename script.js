// Обновленный массив курсов с номерами шагов
const courses = [
  { 
    step: "I", 
    title: "Основы HTML", 
    description: "Расшифровка древних символов цифрового мира",
    link: "main/HTML/Введение в HTML/index.html"
  },
  { 
    step: "II", 
    title: "Архитектура Теней", 
    description: "Создание фундамента из магических блоков",
    link: "main/HTML/HTML-элементы подробно/index.html"
  },
  { 
    step: "III", 
    title: "Язык Духов Содержания", 
    description: "Семантические заклинания для общения с богами SEO",
    link: "main/HTML/Семантический HTML/index.html"
  },
  { 
    step: "IV", 
    title: "Запретный HTML", 
    description: "Тёмные искусства скрытых возможностей",
    link: "main/HTML/Продвинутые возможности HTML/index.html"
  },
  { 
    step: "V", 
    title: "Испытание Пустоты", 
    description: "Битва с демонами неправильной вложенности",
    link: "main/HTML/практики HTML/index.html"
  },
  { 
    step: "VI", 
    title: "Гримуар HTML-Мага", 
    description: "Полный кодекс искусства разметки",
    link: "main/HTML/theoryHTML/index.html"
  },
  { 
    step: "VII", 
    title: "Визуальная Алхимия", 
    description: "Первые опыты преобразования вещества в стили",
    link: "main/CSS/Основы CSS Первые заклинания стилей/index.html"
  },
  { 
    step: "VIII", 
    title: "Хоровод Блоков", 
    description: "Магия управления пространственными иллюзиями",
    link: "main/CSS/Работа с блоками и позиционированием/index.html"
  },
  { 
    step: "IX", 
    title: "Танцующие Блоки", 
    description: "Сакральная геометрия веб-макетов Flexbox и Grid",
    link: "main/CSS/Работа с макетами/index.html"
  },
  { 
    step: "X", 
    title: "Адаптивная Магия", 
    description: "Искусство отражений для разных измерений",
    link: "main/CSS/Адаптивность и медиа-запросы/index.html"
  },
  { 
    step: "XI", 
    title: "Каллиграфия Стихий", 
    description: "Искусство оживления символов",
    link: "main/CSS/Стилизация текста и шрифтов/index.html"
  },
  { 
    step: "XII", 
    title: "Хрономантия CSS", 
    description: "Заклинания времени и пространственных искажений",
    link: "main/CSS/Анимации и переходы/index.html"
  },
  { 
    step: "XIII", 
    title: "Свиток Алхимика", 
    description: "Эзотерические знания визуальной CSS",
    link: "main/CSS/theoryCSS/index.html"
  },
  { 
    step: "XIV", 
    title: "Манускрипт демона", 
    description: "Расшифровка языка демонов интерактивности JavaScript",
    link: "main/JS/theoryJS/index.html"
  },
  { 
    step: "XV", 
    title: "Квест в катакомбах", 
    description: "Начни своё приключение с основ JavaScript",
    link: "main/JS/quest1/index.html"
  }
];

// Массив заклинаний с магией Годжо Сатору и веб-разработкой
const spells = [
  "<div class='infinity'>",
  "</limitless>",
  "display: domain-expansion;",
  "position: blue-absolute;",
  "margin: limitless;",
  "font-size: six-eyes;",
  "let barrier = infinity;",
  "function hollowPurple() {}",
  "if (cursedEnergy > 0) {}",
  "querySelector('.domain')",
  "addEventListener('jujutsu')",
  "transform: red-reversal;",
  "opacity: blue-attraction;",
  "border-radius: infinity;",
  "<section class='cursed-technique'>",
  "console.log('Unlimited Void!');",
  "z-index: six-eyes-max;",
  "background: purple-hollow;"
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
  particle.style.top = `${y + window.scrollY}px`; // Учитываем прокрутку
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

// Фоновые заклинания (появляются только по бокам от .grid)
function createSpell() {
  const particlesContainer = document.getElementById('particles');
  const spell = document.createElement('div');
  spell.classList.add('spell');
  spell.textContent = spells[Math.floor(Math.random() * spells.length)];

  // Получаем размеры и положение .grid
  const gridRect = grid.getBoundingClientRect();
  const gridLeft = gridRect.left + window.scrollX; // Учитываем горизонтальную прокрутку
  const gridRight = gridRect.right + window.scrollX;
  const gridWidth = gridRect.width;
  const windowWidth = window.innerWidth;

  // Определяем зоны слева и справа от .grid
  const leftZoneWidth = gridLeft; // Ширина левой зоны
  const rightZoneWidth = windowWidth - gridRight; // Ширина правой зоны
  let spellX;

  // Случайно выбираем левую или правую зону
  if (Math.random() < 0.5 && leftZoneWidth > 0) {
    // Левая зона
    spellX = Math.random() * leftZoneWidth;
  } else if (rightZoneWidth > 0) {
    // Правая зона
    spellX = gridRight + Math.random() * rightZoneWidth;
  } else {
    // Если зоны слишком узкие, размещаем случайно по всей ширине (запасной вариант)
    spellX = Math.random() * windowWidth;
  }

  spell.style.left = `${spellX}px`; // Позиция в пикселях вместо vw
  spell.style.top = `${Math.random() * 100}vh`; // Случайная высота
  spell.style.animationDelay = `${Math.random() * 5}s`;
  particlesContainer.appendChild(spell);
  setTimeout(() => spell.remove(), 5000);
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

// Создание фоновых частиц и заклинаний
setInterval(createBgParticle, 30); // Частицы каждые 0.03 секунды
setInterval(createSpell, 2000);     // Заклинания каждые 0.5 секунды