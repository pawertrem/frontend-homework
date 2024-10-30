/**
 * Глобальный переключатель стилей с поддержкой обоих состояний
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const isActive = className.endsWith('_active');
    const defaultClass = isActive ? className.slice(0, -7) : className;
    const activeClass = isActive ? className : `${className}_active`;
    
    // Находим все элементы с дефолтным или активным классом
    const elements = document.querySelectorAll(`.${defaultClass}, .${activeClass}`);
    
    // Если элементов нет, прекращаем выполнение
    if (elements.length === 0) return;
    
    // Проходимся по всем элементам и заменяем классы
    elements.forEach(element => {
        if (element.classList.contains(activeClass)) {
            element.classList.remove(activeClass);
            element.classList.add(defaultClass);
        } else if (element.classList.contains(defaultClass)) {
            element.classList.remove(defaultClass);
            element.classList.add(activeClass);
        }
    });
};


