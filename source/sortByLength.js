/**
 * Сортирует массив строк по длине строк в порядке возрастания.
 * Если две строки имеют одинаковую длину, они сортируются в алфавитном порядке.
 *
 * @param {string[]} strings - массив строк для сортировки.
 *
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);
 * 
 * @returns {string[]} - новый массив с отсортированными строками.
 */
const sortByLength = strings => [...strings].sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    return a.localeCompare(b);
});