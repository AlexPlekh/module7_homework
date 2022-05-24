// Задание 5.

/* Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6. */

class Electrodevice {
    constructor(inputPower) {
        this.power = inputPower;
        this.needPlug = true;
        this.isPlugged = false;
        this.isOn = false;
    }
    plugIn() {
        if (!this.isPlugged) {
            this.isPlugged = true;
            console.log("Устройство успешно подключено к розетке");
        } else {
            console.log("Устройство уже подключено к розетке");
        };
    }
    plugOut() {
        if (this.isPlugged) {
            this.isPlugged = false;
            if (this.needPlug) {
                this.turnOff();
            };
            console.log("Устройство успешно отключено от розетки");
        } else {
            console.log("Устройство уже отключено от розетки");
        };
    }
    turnOn() {
        if (this.isPlugged || !this.needPlug) {
            this.isOn = true;
            console.log("Устройство включено");
        } else {
            console.log("Устройство не включается");
        };
    }
    turnOff() {
        this.isOn = false;
        console.log("Устройство отключено");
    }
    getPower() {
        console.log(`Потребляемая мощность: ${this.power} Ватт`);
    }
};

class Computer extends Electrodevice {
    constructor(inputPower, needPlug = true) {
        super(inputPower);
        this.needPlug = needPlug;
        this.loading = 0;   
    };
    turnOn() {
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
    turnOff() {
        this.isOn = false;
        clearTimeout(this.loading);
        console.log("Устройство отключено");
    };   
};


class DesktopLamp extends Electrodevice {
    constructor(inputPower, lightColor = "Теплый") {
        super(inputPower);
        this.lightColor = lightColor;
    };
    turnOn() {
        if (this.isPlugged || !this.needPlug) {
            if (!this.isOn) {
                this.isOn = true;
                console.log("Лампа освещает помещение");
            };
        } else {
            console.log("Лампа не включается");
        };
    };
    turnOff() {
        this.isOn = false;
        console.log("Лампа погасает");
    };
    seeTheLight() {
        if (this.isOn) {
            console.log(`${this.lightColor} свет разливается по комнате`);
        } else {
            console.log("Лампа не горит");
        }
    };
    
};

let laptop = new Computer(400, false);
let bedroomLamp = new DesktopLamp(80);
let desktopComputer = new Computer(800);

bedroomLamp.plugIn();
bedroomLamp.turnOn();
bedroomLamp.seeTheLight();
bedroomLamp.getPower();
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