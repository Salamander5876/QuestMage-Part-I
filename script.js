// А ты смотрю самый умный раз зашёл сюда
const locations = [
    {
        description: "Ты очнулся в катакомбах, вокруг — тьма и шёпот: 'Назови ключ, лошара!' Каменная плита требует магию. Объяви переменную `key` со значением `'darkness'` и не облажайся! 🌚",
        answer: "let key = 'darkness';",
        hint: "Шёпот орёт: 'let' и 'darkness', не тупи!'"
    },
    {
        description: "Тени разошлись, и перед тобой три котла: 'Огонь', 'Вода', 'Пустота'. Закинь туда магические шмотки: число 666, строчку 'Бум!' и true. Давай, шаман, не тормози! 🔥💧👻",
        answer: "let firePot = 666;\nlet waterPot = 'Бум!';\nlet voidPot = true;",
        hint: "Огонь хочет 666, Вода — 'Бум!', Пустота — true, шевели мозгами!"
    },
    {
        description: "Стена гудит: 'Заклинание, или пылесос пустоты тебя засосёт!' Создай функцию `boomMagic`, которая в консоль орёт 'Взрыв!', и вызови её. Ну, давай, маг-рэпер! 💥",
        answer: "function boomMagic() {\n    console.log('Взрыв!');\n}\nboomMagic();",
        hint: "Духи ржут: пиши 'function' и вызови, не спи!"
    },
    {
        description: "Перед тобой арка с кнопкой, подписанной 'Жми, лузер!' Сделай так, чтобы при клике выскакивало 'Ты попал!' через alert. Покажи, кто тут магический босс! 🖱️",
        answer: "document.getElementById('magicButton').addEventListener('click', function() {\n    alert('Ты попал!');\n});",
        hint: "Шёпот: 'addEventListener', 'click' и alert, не профукай id 'magicButton'!"
    },
    {
        description: "Тут табличка: 'Поменяй мне цвет, а то скучно!' Найди элемент с id 'stone' и покрась его в красный через стиль. Давай, маг-дизайнер! 🎨",
        answer: "document.getElementById('stone').style.color = 'red';",
        hint: "Духи ржут: 'style.color', 'red', и ищи 'stone'!"
    },
    {
        description: "Скелет в углу орёт: 'Собери мне банду!' Создай массив `skeletons` с тремя костяками: 'Билл', 'Джек', 'Сэм'. Покажи, кто тут маг-тусовщик! 💀",
        answer: "let skeletons = ['Билл', 'Джек', 'Сэм'];",
        hint: "Шёпот скалится: массив через квадратные скобки, три имени, не тупи!"
    },
    {
        description: "Призрак ржёт: 'Опиши меня, лошок!' Создай объект `ghost` с полями: имя 'Каспер', возраст 300, жив ли — false. Давай, маг-детектив! 👻",
        answer: "let ghost = {\n    name: 'Каспер',\n    age: 300,\n    isAlive: false\n};",
        hint: "Духи шепчут: объект в фигурных скобках, три поля, не лажа!"
    },
    {
        description: "Череп на полу: 'Скажи, сколько мне лет!' Напиши функцию `countBones`, которая принимает число и возвращает 'Тебе [число] лет!'. Проверь с 500. Давай, маг-математик! 🦴",
        answer: "function countBones(age) {\n    return 'Тебе ' + age + ' лет!';\n}\ncountBones(500);",
        hint: "Шёпот: функция с параметром, строка с числом, и 500!"
    },
    {
        description: "Стена орёт: 'Добавь мне граффити!' Найди список с id 'wall' и добавь в него пункт 'Пустота рулит!' через appendChild. Покажи стиль, маг-хулиган! 🖌️",
        answer: "let item = document.createElement('li');\nitem.textContent = 'Пустота рулит!';\ndocument.getElementById('wall').appendChild(item);",
        hint: "Духи ржут: создай 'li', текст, и пихай в 'wall'!"
    },
    {
        description: "Препод-шутник в мантии из звёзд орёт: 'Поздоровайся, или пылесос пустоты врублю!' Создай функцию `greet`, которая принимает имя и возвращает 'Эй, [имя], ты в катакомбах!' Назови его 'Шутник'. Давай, маг-комик! 🌟",
        answer: "function greet(name) {\n    return 'Эй, ' + name + ', ты в катакомбах!';\n}\ngreet('Шутник');",
        hint: "Шёпот: функция, параметр 'name', и 'Шутник' в конце!"
    }
];

let currentLocation = 0;

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
}

// Проверка ответа
function checkAnswer() {
    const userAnswer = document.getElementById('codeInput').value.trim();
    const correctAnswer = locations[currentLocation].answer;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Магия в шоке! Путь открыт, гений! 🌌';
        document.getElementById('feedback').style.color = '#ba55d3'; // Фиолетовый успех
        if (currentLocation < locations.length - 1) {
            currentLocation++;
            setTimeout(displayLocation, 2000); // Переход через 2 секунды
        } else {
            document.getElementById('description').textContent = 'Препод орёт: "Да вы шо, выбрались?!" Вы вылезли из катакомб!';
            document.getElementById('codeInput').style.display = 'none';
            document.getElementById('feedback').textContent = 'Свобода, лошки! Свет солнца бьёт в глаза, а ваши коды войдут в анналы Пустоты. Браво, маги-комики!';
            document.getElementById('feedback').style.color = '#ba55d3';
            document.querySelectorAll('button').forEach(button => button.style.display = 'none');
        }
    } else {
        document.getElementById('feedback').textContent = 'Тьма ржёт над тобой! Неправильно, лузер! 💀';
        document.getElementById('feedback').style.color = '#ff4500'; // Оранжевый провал
    }
}

// Показ подсказки
function showHint() {
    const hint = locations[currentLocation].hint;
    document.getElementById('feedback').textContent = `${hint} 👁️‍🗨️`;
    document.getElementById('feedback').style.color = '#00ff00'; // Зелёный для подсказки
}

// Начало истории 
document.getElementById('location').style.display = 'none';