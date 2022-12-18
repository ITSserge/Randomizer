/**
 * Конструктор объекта рандомайзера
 *
 * @constructor
 * @param {string} typeRandomizer - Тип рандомайзера
 * @param {number} min - Минимальное число
 * @param {number} max - Максимальное число
 * @param {bool} repeat - Повторять ли числа
 * @param {array} arrEl - Массив элементов, которые мы рандомано возращаем
 * @return {Randomizer} -Новый объект рандомайзера
 */
function Randomizer(typeRandomizer, {min, max, arrEl, repeat = true}) {
    switch (typeRandomizer) {
        case 'from-to-number' :
            FromToNumber.call(this);
            break;

        case 'random-el-from-array':
            RandomElFromArray.call(this);
            break;
    }

    function FromToNumber() {
        this.min = min;
        this.max = max;
        this.dataNumber = new Set();

        this.getRand = function() {
            const randNumber = this.getRandNumber(min, max)
            return randNumber;
        }
    }
    function RandomElFromArray() {
        this.dataNumber = new Set();
        this.getRand = function() {
            const randIndex = this.getRandNumber(0, arrEl.length - 1);
            return arrEl[randIndex];
        }
    }

    // Official functions
    this.getRandNumber = function(min, max) {
        const randNumber = this.randomFn(min, max);

        if(!repeat) {
            if(this.dataNumber.has(randNumber)) return this.getRandNumber(min, max);
            this.dataNumber.add(randNumber);
        }

        return randNumber;
    }
    this.randomFn = function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Object to primitive
    this.toString = function() {
        return this.getRand();
    }
}

const test = new Randomizer('from-to-number', {
    min : 10,
    max : 20
})
