// Задание 4

/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4. Создайте экземпляры каждого прибора.
5. Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:

1. Имена функций, свойств и методов должны быть информативными
2. Соблюдайте best practices:
    - использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
    - информативные имена (а не a, b);
    - четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
    - использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/

function Electrodevice(inputPower) {
    this.power = inputPower;
    this.needPlug = true;
    this.isPlugged = false;
    this.isOn = false;
};

Electrodevice.prototype.plugIn = function() {
    if (!this.isPlugged) {
        this.isPlugged = true;
        console.log("Устройство успешно подключено к розетке");
    } else {
        console.log("Устройство уже подключено к розетке");
    };
};

Electrodevice.prototype.plugOut = function() {
    if (this.isPlugged) {
        this.isPlugged = false;
        if (this.needPlug) {
            this.turnOff();
        };
        console.log("Устройство успешно отключено от розетки");
    } else {
        console.log("Устройство уже отключено от розетки");
    };
};

Electrodevice.prototype.turnOn = function() {
    if (this.isPlugged || !this.needPlug) {
        this.isOn = true;
        console.log("Устройство включено");
    } else {
        console.log("Устройство не включается");
    };
};

Electrodevice.prototype.turnOff = function() {
    this.isOn = false;
    console.log("Устройство отключено");
};

Electrodevice.prototype.getPower = function() {
    console.log(`Потребляемая мощность: ${this.power} Ватт`);
};

function Computer(inputPower, needPlug = true) {
    this.power = inputPower;
    this.needPlug = needPlug;
    this.loading = 0;
};


Computer.prototype = new Electrodevice;

Computer.prototype.turnOn = function() {
    if (this.isPlugged || !this.needPlug) {
        if (!this.isOn) {
            this.isOn = true;
            console.log("Устройство включено, загрузка ОС");
            this.loading = setTimeout(() => console.log("ОС загружена"), 2000);
        }
    } else {
        console.log("Устройство не включается");
    };
};

Computer.prototype.turnOff = function() {
    this.isOn = false;
    clearTimeout(this.loading);
    console.log("Устройство отключено");
};


function DesktopLamp(inputPower, lightColor = "Теплый") {
    this.power = inputPower;
    this.lightColor = lightColor;
};

DesktopLamp.prototype = new Electrodevice;

DesktopLamp.prototype.turnOn = function() {
    if (this.isPlugged || !this.needPlug) {
        if (!this.isOn) {
            this.isOn = true;
            console.log("Лампа освещает помещение");
        };
    } else {
        console.log("Лампа не включается");
    };
};

DesktopLamp.prototype.turnOff = function() {
    this.isOn = false;
    console.log("Лампа погасает");
};

DesktopLamp.prototype.seeTheLight = function() {
    if (this.isOn) {
        console.log(`${this.lightColor} свет разливается по комнате`);
    } else {
        console.log("Лампа не горит");
    };
};

let laptop = new Computer(400, false);
let bedroomLamp = new DesktopLamp(80);
let desktopComputer = new Computer(800);

bedroomLamp.plugIn();
bedroomLamp.turnOn();
bedroomLamp.getPower();
bedroomLamp.seeTheLight();
bedroomLamp.plugOut();

laptop.turnOn();
laptop.plugIn();
laptop.turnOn();
laptop.turnOff();
laptop.getPower();

desktopComputer.turnOn();
desktopComputer.plugIn();
desktopComputer.turnOn();
desktopComputer.turnOff();
desktopComputer.getPower();
desktopComputer.turnOn();
