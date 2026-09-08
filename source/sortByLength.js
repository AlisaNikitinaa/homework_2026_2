/**
 * Сортирует массив строк по длине, при равной длине - по алфавиту.
 *
 * @param {string[]} strings - исходный массив строк.
 *
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);
 *
 * @returns {string[]} - новый массив с отсортированными строками.
 */
const sortByLength = function (strings) {
    const copy = strings.slice();

    copy.sort(function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    return copy;
};