QUnit.module("Тестируем функцию sortByLength", function() {
    QUnit.test("Правильно сортирует строки по длине", function(assert) {
        const result = sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);

        assert.deepEqual(result, ["fig", "kiwi", "apple", "grape", "banana"], "Строки должны быть отсортированы по длине.");
    });

    QUnit.test("Правильно сортирует строки с одинаковой длиной", function(assert) {
        const result = sortByLength(["cat", "bat", "ant", "dog"]);

        assert.deepEqual(result, ["ant", "bat", "cat", "dog"], "Строки с одинаковой длиной должны быть отсортированы в алфавитном порядке.");
    });

    QUnit.test("Правильно сортирует массив с одной строкой", function(assert) {
        const result = sortByLength(["hello"]);

        assert.deepEqual(result, ["hello"], "Массив с одной строкой должен вернуть ту же строку.");
    });

    QUnit.test("Правильно обрабатывает пустой массив", function(assert) {
        const result = sortByLength([]);
        assert.deepEqual(result, [], "Пустой массив должен возвращать пустой массив");
    });

    QUnit.test("Правильно сортирует строки разной длины, включая пустую строку", function(assert) {
        const result = sortByLength(["", "abc", "a", "ab", "b"]);
        assert.deepEqual(result, ["", "a", "b", "ab", "abc"], "Пустая строка и строки разной длины сортируются корректно");
    });

    QUnit.test("Правильно сортирует строки с числами внутри", function(assert) {
        const result = sortByLength(["a1", "b22", "c", "d333"]);
        assert.deepEqual(result, ["c", "a1", "b22", "d333"], "Строки с числами сортируются по длине");
    });

    QUnit.test('Возвращает новый массив, не изменяя исходный', function (assert) {
    const input = ['fig', 'kiwi', 'apple', 'grape', 'banana'];
    const result = sortByLength(input);

    assert.notStrictEqual(result, input, 'Результат - новый массив, а не тот же самый объект');
    assert.deepEqual(input, ['fig', 'kiwi', 'apple', 'grape', 'banana'], 'Исходный массив не изменился');
});
});
