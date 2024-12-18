// базовые классы компонентов
class Engine {
    constructor(power) {
        this.power = power;
    }

    toString() {
        return `с мощностью в ${this.power} лошадиных сил`;
    }
}

class Transmission {
    constructor(type) {
        this.type = type;
    }

    toString() {
        return `Коробка передач: ${this.type}`;
    }
}

class AudioSystem {
    constructor(speakers) {
        this.speakers = speakers;
    }

    toString() {
        return `Аудиосистема имеет ${this.speakers} колонок`;
    }
}

class ClimateControl {
    constructor(zones) {
        this.zones = zones;
    }

    toString() {
        return `Климат-контроль с ${this.zones} зоной`;
    }
}

// конкретные компоненты
class PetrolEngine extends Engine {
    constructor() {
        super(150);
        this.fuelType = 'Бензиновый двигатель';
    }

    toString() {
        return `${this.fuelType} ${super.toString()}`;
    }
}

class DieselEngine extends Engine {
    constructor() {
        super(180);
        this.fuelType = 'Дизельный двигатель';
    }

    toString() {
        return `${this.fuelType} ${super.toString()}`;
    }
}

class ElectricEngine extends Engine {
    constructor() {
        super(200);
        this.fuelType = 'Электрический двигатель';
    }

    toString() {
        return `${this.fuelType} ${super.toString()}`;
    }
}

class ManualTransmission extends Transmission {
    constructor() {
        super('Механика');
    }
}

class AutomaticTransmission extends Transmission {
    constructor() {
        super('Автомат');
    }
}

class BasicAudioSystem extends AudioSystem {
    constructor() {
        super(4);
    }
}

class PremiumAudioSystem extends AudioSystem {
    constructor() {
        super(12);
    }
}

class BasicClimateControl extends ClimateControl {
    constructor() {
        super(1);
    }
}

class AdvancedClimateControl extends ClimateControl {
    constructor() {
        super(4);
    }
}

// класс комплектации автомобиля
class Car {
    constructor(engine, transmission, audioSystem, climateControl) {
        this.engine = engine;
        this.transmission = transmission;
        this.audioSystem = audioSystem;
        this.climateControl = climateControl;
    }

    toString() {
        return `Конфигурация автомобиля:\n` +
               `- ${this.engine.toString()}\n` +
               `- ${this.transmission.toString()}\n` +
               `- ${this.audioSystem.toString()}\n` +
               `- ${this.climateControl.toString()}`;
    }
}

// массив для хранения всех созданных автомобилей
const cars = [];

// кнопка "создать автомобиль"
document.getElementById('createCarButton').addEventListener('click', () => {
    const engineType = document.getElementById('engine').value;
    const transmissionType = document.getElementById('transmission').value;
    const audioSystemType = document.getElementById('audioSystem').value;
    const climateControlType = document.getElementById('climateControl').value;

    // экземпляры класса
    let engine, transmission, audioSystem, climateControl;

    if (engineType === 'PetrolEngine') engine = new PetrolEngine();
    else if (engineType === 'DieselEngine') engine = new DieselEngine();
    else if (engineType === 'ElectricEngine') engine = new ElectricEngine();

    if (transmissionType === 'ManualTransmission') transmission = new ManualTransmission();
    else if (transmissionType === 'AutomaticTransmission') transmission = new AutomaticTransmission();

    if (audioSystemType === 'BasicAudioSystem') audioSystem = new BasicAudioSystem();
    else if (audioSystemType === 'PremiumAudioSystem') audioSystem = new PremiumAudioSystem();

    if (climateControlType === 'BasicClimateControl') climateControl = new BasicClimateControl();
    else if (climateControlType === 'AdvancedClimateControl') climateControl = new AdvancedClimateControl();

    // создаем автомобиль
    const car = new Car(engine, transmission, audioSystem, climateControl);

    // пушим автомобиль в массив
    cars.push(car);

    // список автомобилей
    displayCars(); //функция
});

// ф-ия для отображения списка автомобилей
function displayCars() {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // очищеннный список без повторов
    cars.forEach((car, index) => { // выполнение функции для каждого элемента массива
        const carItem = document.createElement('div'); //создание нового элемента
        carItem.innerHTML = `<strong>Машина ${index + 1}:</strong>
        <br> 
        ${car.toString()}`; // возвращение автомобиля в виде строки
        carList.appendChild(carItem); // отображение списка и добавление элементов
    });
}