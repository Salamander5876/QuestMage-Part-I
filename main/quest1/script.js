const locations = [
    {
        description: "Ты в темных катакомбах. Голос шепчет: 'Назови ключ!' Объяви переменную key со значением 'darkness'.",
        answer: "let key = 'darkness';",
        hint: "Подсказка: используй 'let', чтобы создать переменную, и присвой ей строку 'darkness'.",
        friendHint: "Сер Ивар Кимачес: 'Пиши let key = 'darkness'; — это просто!'"
    },
    {
        description: "Перед тобой три котла: Огонь, Вода, Пустота. Присвой им значения: 666 для fire, 'Бум!' для water и true для void.",
        answer: "let fire = 666; let water = 'Бум!'; let void = true;",
        hint: "Подсказка: создай три переменные с 'let' и присвой каждой нужное значение.",
        friendHint: "Сер Ивар Кимачес: 'Пиши let fire = 666; let water = 'Бум!'; let void = true;'"
    },
    {
        description: "Стена требует заклинание. Напиши функцию boomMagic, которая выведет 'Взрыв!' в консоль, и вызови её.",
        answer: "function boomMagic() { console.log('Взрыв!'); } boomMagic();",
        hint: "Подсказка: используй 'function' для создания функции и 'console.log' для вывода.",
        friendHint: "Сер Ивар Кимачес: 'Пиши function boomMagic() { console.log('Взрыв!'); } boomMagic();'"
    },
    {
        description: "На арке кнопка 'Жми сюда!'. Сделай так, чтобы при клике появилось сообщение 'Ты попал!' через alert.",
        answer: "document.getElementById('magicButton').addEventListener('click', function() { alert('Ты попал!'); });",
        hint: "Подсказка: найди кнопку по id 'magicButton' и добавь обработчик клика с 'alert'.",
        friendHint: "Сер Ивар Кимачес: 'Пиши document.getElementById('magicButton').addEventListener('click', function() { alert('Ты попал!'); });'"
    },
    {
        description: "Табличка просит: 'Сделай мой текст красным!' Найди элемент с id 'stone' и покрась его текст в красный цвет.",
        answer: "document.getElementById('stone').style.color = 'red';",
        hint: "Подсказка: используй 'style.color' и укажи 'red' для элемента с id 'stone'.",
        friendHint: "Сер Ивар Кимачес: 'Пиши document.getElementById('stone').style.color = 'red';'"
    },
    {
        description: "Скелет хочет друзей. Создай массив skeletons с именами 'Билл', 'Джек', 'Сэм'.",
        answer: "let skeletons = ['Билл', 'Джек', 'Сэм'];",
        hint: "Подсказка: объяви массив через 'let' и перечисли имена в квадратных скобках.",
        friendHint: "Сер Ивар Кимачес: 'Пиши let skeletons = ['Билл', 'Джек', 'Сэм'];'"
    },
    {
        description: "Призрак просит описать его. Создай объект ghost с полями: имя 'Каспер', возраст 300, жив ли — false.",
        answer: "let ghost = { name: 'Каспер', age: 300, isAlive: false };",
        hint: "Подсказка: используй 'let' и создай объект с тремя полями в фигурных скобках.",
        friendHint: "Сер Ивар Кимачес: 'Пиши let ghost = { name: 'Каспер', age: 300, isAlive: false };'"
    },
    {
        description: "Череп спрашивает: 'Сколько мне лет?' Напиши функцию countBones, которая принимает число и возвращает 'Тебе [число] лет!'. Проверь с 500.",
        answer: "function countBones(age) { return 'Тебе ' + age + ' лет!'; } countBones(500);",
        hint: "Подсказка: создай функцию с параметром и верни строку, соединив её с числом.",
        friendHint: "Сер Ивар Кимачес: 'Пиши function countBones(age) { return 'Тебе ' + age + ' лет!'; } countBones(500);'"
    },
    {
        description: "Стена хочет надпись. Добавь в список с id 'wall' пункт 'Пустота рулит!' через создание элемента.",
        answer: "let item = document.createElement('li'); item.textContent = 'Пустота рулит!'; document.getElementById('wall').appendChild(item);",
        hint: "Подсказка: создай элемент 'li', добавь текст и вставь его в список с id 'wall'.",
        friendHint: "Сер Ивар Кимачес: 'Пиши let item = document.createElement('li'); item.textContent = 'Пустота рулит!'; document.getElementById('wall').appendChild(item);'"
    },
    {
        description: "Препод кричит: 'Поздоровайся!' Напиши функцию greet, которая принимает имя и возвращает 'Эй, [имя], ты в катакомбах!'. Вызови с 'Шутник'.",
        answer: "function greet(name) { return 'Эй, ' + name + ', ты в катакомбах!'; } greet('Шутник');",
        hint: "Подсказка: создай функцию с параметром и верни строку с именем.",
        friendHint: "Сер Ивар Кимачес: 'Пиши function greet(name) { return 'Эй, ' + name + ', ты в катакомбах!'; } greet('Шутник');'"
    }
];

let currentLocation = 0;

// Автозапуск музыки
const music = document.getElementById('backgroundMusic');
music.play().catch(error => console.log("Автозапуск заблокирован:", error));

// Управление музыкой
let isPlaying = true;
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        document.getElementById('volumeIcon').textContent = '🔇';
    } else {
        music.play();
        document.getElementById('volumeIcon').textContent = '🔊';
    }
    isPlaying = !isPlaying;
}

// Старт после интро
document.getElementById('startGame').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('location').style.display = 'block';
    displayLocation();
});

// Отображение локации
function displayLocation() {
    const location = locations[currentLocation];
    document.getElementById('description').textContent = location.description;
    document.getElementById('codeInput').value = '';
    document.getElementById('feedback').textContent = '';
    if (currentLocation === 3) document.getElementById('magicButton').style.display = 'block';
    else document.getElementById('magicButton').style.display = 'none';
    if (currentLocation === 4) document.getElementById('stone').style.display = 'block';
    else document.getElementById('stone').style.display = 'none';
    if (currentLocation === 8) document.getElementById('wall').style.display = 'block';
    else document.getElementById('wall').style.display = 'none';
}

// Проверка ответа
function checkAnswer() {
    const userAnswer = document.getElementById('codeInput').value.trim();
    const correctAnswer = locations[currentLocation].answer;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Магия сработала! Дорога открыта, молодец! 🌌';
        document.getElementById('feedback').style.color = '#ba55d3';
        if (currentLocation < locations.length - 1) {
            currentLocation++;
            setTimeout(displayLocation, 2000);
        } else {
            // Получаем имя пользователя ПК
            const username = window.localStorage.getItem('username') || 'Безымянный Герой'; // Заглушка, если не удалось получить имя
            document.getElementById('description').textContent = 'Препод хихикает: "Ого, вы выбрались!" Вы вышли из катакомб!';
            document.getElementById('codeInput').style.display = 'none';
            document.getElementById('feedback').textContent = `Поздравляем, ${username}! Вы выжили! Солнце светит, а ваши коды — легенда Академии. Ура, маги-затейники!`;
            document.getElementById('feedback').style.color = '#ba55d3';
            document.querySelectorAll('button').forEach(button => button.style.display = 'none');
        }
    } else {
        document.getElementById('feedback').textContent = 'Тьма хихикает: не угадал! Попробуй ещё! 💀';
        document.getElementById('feedback').style.color = '#ff4500';
    }
}

// Показ подсказки
function showHint() {
    const hint = locations[currentLocation].hint;
    document.getElementById('feedback').textContent = `${hint} 👁️‍🗨️`;
    document.getElementById('feedback').style.color = '#00ff00';
}

// Позвать друга — прямой ответ
function callFriend() {
    const friendAnswer = locations[currentLocation].friendHint;
    document.getElementById('feedback').textContent = `${friendAnswer} ⚔️`;
    document.getElementById('feedback').style.color = '#25a4ee';
    
}

// Начало истории
document.getElementById('location').style.display = 'none';