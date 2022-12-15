/**
 * Конструктор объекта рандомайзера
 *
 * @constructor
 * @param {number} min - Минимальное число
 * @param {number} max - Максимальное число
 * @return {Randomizer} -Новый объект рандомайзера
 */
function Randomizer(min, max) {
    this.min = min;
    this.max = max;
    this.dataNumber = new Set();

    this.randomFn = function() {
        return Math.round(Math.random() * (this.max - this.min) + this.min);
    }

    this.getRand = function() {
        const randNumber = this.randomFn();

        if(this.dataNumber.has(randNumber)) return this.getRand();

        this.dataNumber.add(randNumber);
        return randNumber;
    }
}


