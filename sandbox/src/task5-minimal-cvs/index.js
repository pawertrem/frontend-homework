/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versions = [initialCommit.slice()]; // Сохраняем первую версию массива (копия начального массива)

    return {
        head() {
            return versions[versions.length - 1].slice(); // Возвращаем копию последней версии массива
        },
        history() {
            return versions.map(version => version.slice()); // Возвращаем копии всех версий массива
        },
        push(element) {
            const newVersion = [...versions[versions.length - 1], element]; // Создаем новую версию с добавленным элементом
            versions.push(newVersion); // Сохраняем новую версию
        },
        pop() {
            const currentVersion = versions[versions.length - 1];
            const poppedElement = currentVersion[currentVersion.length - 1]; // Последний элемент текущей версии
            const newVersion = currentVersion.slice(0, -1); // Создаем новую версию без последнего элемента
            versions.push(newVersion); // Сохраняем новую версию
            return poppedElement; // Возвращаем удаленный элемент
        }
    };
};
