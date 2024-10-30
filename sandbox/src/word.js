/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
function theWorld(ms) {
    if (typeof ms !== 'number' || ms < 0) {
        throw new TypeError('Параметр "ms" должен быть положительным числом.');
    }

    const totalSeconds = Math.ceil(ms / 1000);
    let remainingSeconds = totalSeconds;

    console.log(`Time will continue running in ${remainingSeconds} second(s)`);

    const intervalId = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds > 0) {
            console.log(`Time will continue running in ${remainingSeconds} second(s)`);
        } else {
            clearInterval(intervalId);
            console.log('Time has resumed.');
        }
    }, 1000);

    // "Замораживаем" выполнение кода, используя setTimeout
    // Чтобы код после вызова theWorld выполнился после заморозки,
    // мы можем использовать Promise для ожидания завершения таймера
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}