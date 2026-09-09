'use strict';

/**
 * Сортирует массив строк по длине, при равной длине - по алфавиту.
 *
 * @param {string[]} strings - исходный массив строк.
 *
 * @throws {TypeError} если передан не массив строк.
 *
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);
 *
 * @returns {string[]} - новый массив с отсортированными строками.
 */
const sortByLength = strings => {
    if (!Array.isArray(strings) || !strings.every(item => typeof item === 'string')) {
        throw new TypeError('strings должен быть массивом строк');
    }

    const result = strings.slice();

    for (let i = 0; i < result.length; i += 1) {
        for (let j = 0; j < result.length - i - 1; j += 1) {
            const a = result[j];
            const b = result[j + 1];
            let shouldSwap = false;

            if (a.length > b.length) {
                shouldSwap = true;
            } else if (a.length === b.length && a > b) {
                shouldSwap = true;
            }

            if (shouldSwap) {
                result[j] = b;
                result[j + 1] = a;
            }
        }
    }

    return result;
};
