/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    // Проверка корректности входных данных
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('Параметры a и b должны быть целыми числами.');
    }
    if (a < 1 || b < 1) {
        throw new Error('Параметры a и b должны быть натуральными числами (больше или равны 1).');
    }
    if (a > b) {
        throw new Error('Параметр a должен быть меньше или равен параметру b.');
    }

    // Генерация случайного целого числа в диапазоне [a, b]
    const randomInt = Math.floor(Math.random() * (b - a + 1)) + a;
    console.log(`Сгенерированное число: ${randomInt}`); // Для отладки, можно удалить в продакшене

    // Функция проверки простоты числа
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        const sqrt = Math.sqrt(num);
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // Проверка, является ли число простым
    if (isPrime(randomInt)) {
        return 'run';
    } else {
        return 'hit';
    }
};
