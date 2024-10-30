/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const result = []; // Массив для хранения отфильтрованных элементов

    if (inplace) {
        // Если inplace = true, модифицируем исходный массив
        for (let i = array.length - 1; i >= 0; i--) {
            if (!filterFn(array[i], i, array)) {
                array.splice(i, 1); // Удаляем элемент, если он не прошел фильтр
            }
        }
        return array;
    } else {
        // Если inplace = false, создаем новый массив с отфильтрованными элементами
        for (let i = 0; i < array.length; i++) {
            if (filterFn(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    }
};
