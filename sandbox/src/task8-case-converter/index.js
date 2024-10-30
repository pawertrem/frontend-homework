/**
 * Конвертер регистра из snake_case в camelCase
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    // Проверка входных данных
    if (typeof snakeCaseString !== 'string') {
        throw new TypeError('Аргумент должен быть строкой.');
    }

    // Разделение строки по символу подчёркивания
    const words = snakeCaseString.split('_');

    // Обработка первого слова (оставляем в нижнем регистре)
    const firstWord = words[0].toLowerCase();

    // Обработка остальных слов
    const processedWords = words.slice(1).map(word => {
        if (word.length === 0) return ''; // Обработка пустых строк
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    // Объединение всех слов в одну строку
    return [firstWord, ...processedWords].join('');
};

