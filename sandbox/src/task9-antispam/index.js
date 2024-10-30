/**
 * Проверяет, содержит ли текст письма хотя бы одно из ключевых слов
 * 
 * @param {String} text - текст, проверяемый на спам
 * @param {String[]} keywords - массив ключевых слов
 * @returns {Boolean}
 */
export const isSpam = (text, keywords) => {
    // Валидация входных параметров
    if (typeof text !== 'string') {
        throw new TypeError('Параметр "text" должен быть строкой.');
    }
    if (!Array.isArray(keywords)) {
        throw new TypeError('Параметр "keywords" должен быть массивом строк.');
    }
    if (!keywords.every(word => typeof word === 'string')) {
        throw new TypeError('Все элементы в массиве "keywords" должны быть строками.');
    }

    // Нормализация текста для нечувствительности к регистру
    const normalizedText = text.toLowerCase();

    // Перебор ключевых слов
    for (const keyword of keywords) {
        const normalizedKeyword = keyword.toLowerCase();

        // Проверка наличия ключевого слова в тексте
        // Используем \b для поиска целых слов
        const regex = new RegExp(`\\b${escapeRegExp(normalizedKeyword)}\\b`, 'i');

        if (regex.test(normalizedText)) {
            return true; // Найдено ключевое слово
        }
    }

    return false; // Ключевые слова не найдены
};

/**
 * Экранирует специальные символы в строке для использования в регулярном выражении
 * 
 * @param {String} string - исходная строка
 * @returns {String} - экранированная строка
 */
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& означает всю найденную строку
};