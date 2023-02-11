function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['Керилл', 'Арина', 'Глеб', 'Светозар', 'Алена', 'Илья', 'Платон']
    let todos = ['прыгать 10 раз!', 'делать матешу!', 'бежать 10 кругов!', 'делать 1 фофан Злобину!']
    // Вывод в консоль ответа
    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${todos[getRandomNumber(0, todos.length)]}`)
    }
    