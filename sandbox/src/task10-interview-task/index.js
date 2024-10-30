/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num Натуральное число
 * @returns {Number} Одноразрядное число
 */
export const solutionFn = (num) => {
    // Валидация входных данных
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
        throw new TypeError('Аргумент должен быть натуральным числом (целым положительным числом).');
    }

    // Если число уже одноразрядное, возвращаем его
    if (num >= 0 && num <= 9) {
        return num;
    }

    // Функция для перемножения цифр числа
    const multiplyDigits = (number) => {
        return number
            .toString()
            .split('')
            .map(digit => Number(digit))
            .reduce((acc, curr) => acc * curr, 1);
    };

    let currentNumber = num;

    // Итеративное перемножение цифр до получения одноразрядного числа
    while (currentNumber > 9) {
        currentNumber = multiplyDigits(currentNumber);
    }

    return currentNumber;
};
