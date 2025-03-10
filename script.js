const locations = [
    {
        description: "Ты очнулся в катакомбах, вокруг тьма шепчет: 'Назови ключ, умник!' Каменная плита ждёт магию. Объяви переменную `key` со значением `'darkness'`! 🌚",
        answer: "let key = 'darkness';",
        hint: "Шёпот хихикает: 'let' и 'darkness', давай быстрей!'",
        friendHint: "Сер Ивар Кимачес орёт: 'Пиши: let key = 'darkness'; и готово!'"
    },
    {
        description: "Тени разошлись, перед тобой три котла: 'Огонь', 'Вода', 'Пустота'. Закинь туда: число 666, строчку 'Бум!' и true. Покажи, какой ты маг! 🔥💧👻",
        answer: "let firePot = 666;\nlet waterPot = 'Бум!';\nlet voidPot = true;",
        hint: "Огонь — 666, Вода — 'Бум!', Пустота — true, не спи!",
        friendHint: "Сер Ивар Кимачес: 'Вот: let firePot = 666; let waterPot = 'Бум!'; let voidPot = true;!'"
    },
    {
        description: "Стена гудит: 'Заклинание давай, или застрянешь!' Создай функцию `boomMagic`, которая в консоль крикнет 'Взрыв!', и вызови её. Давай, маг-затейник! 💥",
        answer: "function boomMagic() {\n    console.log('Взрыв!');\n}\nboomMagic();",
        hint: "Духи шепчут: 'function' и вызови, не зевай!",
        friendHint: "Сер Ивар Кимачес: 'Пиши: function boomMagic() { console.log('Взрыв!'); } boomMagic();!'"
    },
    {
        description: "Перед тобой арка с кнопкой 'Жми сюда!'. Сделай, чтобы при клике выскочило 'Ты попал!' через alert. Будь магом-кнопочником! 🖱️",
        answer: "document.getElementById('magicButton').addEventListener('click', function() {\n    alert('Ты попал!');\n});",
        hint: "Шёпот: 'addEventListener', 'click' и alert, ищи 'magicButton'!",
        friendHint: "Сер Ивар Кимачес: 'Вот: document.getElementById('magicButton').addEventListener('click', function() { alert('Ты попал!'); });!'"
    },
    {
        description: "Табличка хнычет: 'Скучно, покрась меня!' Найди элемент с id 'stone' и сделай его красным через стиль. Ты маг-краситель! 🎨",
        answer: "document.getElementById('stone').style.color = 'red';",
        hint: "Духи: 'style.color', 'red', ищи 'stone'!",
        friendHint: "Сер Ивар Кимачес: 'Пиши: document.getElementById('stone').style.color = 'red'; и всё!'"
    },
    {
        description: "Скелет в углу просит: 'Собери мне друзей!' Создай массив `skeletons` с именами 'Билл', 'Джек', 'Сэм'. Ты маг-организатор! 💀",
        answer: "let skeletons = ['Билл', 'Джек', 'Сэм'];",
        hint: "Шёпот: массив в скобках, три имени, давай!",
        friendHint: "Сер Ивар Кимачес: 'Вот: let skeletons = ['Билл', 'Джек', 'Сэм']; — готово!'"
    },
    {
        description: "Призрак хихикает: 'Опиши меня!' Создай объект `ghost`: имя 'Каспер', возраст 300, жив ли — false. Ты маг-писатель! 👻",
        answer: "let ghost = {\n    name: 'Каспер',\n    age: 300,\n    isAlive: false\n};",
        hint: "Духи: объект в скобках, три поля, не теряйся!",
        friendHint: "Сер Ивар Кимачес: 'Пиши: let ghost = { name: 'Каспер', age: 300, isAlive: false };!'"
    },
    {
        description: "Череп спрашивает: 'Сколько мне лет?' Напиши функцию `countBones`, которая берёт число и возвращает 'Тебе [число] лет!'. Проверь с 500. Ты маг-счётчик! 🦴",
        answer: "function countBones(age) {\n    return 'Тебе ' + age + ' лет!';\n}\ncountBones(500);",
        hint: "Шёпот: функция с числом, строка, и 500!",
        friendHint: "Сер Ивар Кимачес: 'Вот: function countBones(age) { return 'Тебе ' + age + ' лет!'; } countBones(500);!'"
    },
    {
        description: "Стена просит: 'Нарисуй граффити!' Найди список с id 'wall' и добавь пункт 'Пустота рулит!' через appendChild. Ты маг-художник! 🖌️",
        answer: "let item = document.createElement('li');\nitem.textContent = 'Пустота рулит!';\ndocument.getElementById('wall').appendChild(item);",
        hint: "Духи: создай 'li', текст, и в 'wall'!",
        friendHint: "Сер Ивар Кимачес: 'Пиши: let item = document.createElement('li'); item.textContent = 'Пустота рулит!'; document.getElementById('wall').appendChild(item);!'"
    },
    {
        description: "Препод-шутник в звёздной мантии кричит: 'Поздоровайся со мной!' Создай функцию `greet`, которая берёт имя и возвращает 'Эй, [имя], ты в катакомбах!' Назови его 'Шутник'. Ты маг-приветик! 🌟",
        answer: "function greet(name) {\n    return 'Эй, ' + name + ', ты в катакомбах!';\n}\ngreet('Шутник');",
        hint: "Шёпот: функция, имя, и 'Шутник'!",
        friendHint: "Сер Ивар Кимачес: 'Вот: function greet(name) { return 'Эй, ' + name + ', ты в катакомбах!'; } greet('Шутник');!'"
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
    document.getElementById('codeInput').value = locations[currentLocation].answer;
}

// Начало истории
document.getElementById('location').style.display = 'none';