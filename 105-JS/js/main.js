/* Мінімум

Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
Норма

Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/


//TASK 1
//distance = 600;
/**
 * hour = 
 * hours =  distance / average speed;
 * hours = 5.
 */
const btnShow = document.getElementById('btn-show');
const addDriverName = document.getElementById('addDriverName');
const checkName = document.getElementById('checkName');
const showJourney = document.getElementById('showJourney');

const carObject = {
    manufacturer: 'Volkswagen',
    model: 'Arteon',
    productionYear: 2021,
    averageSpeed: 110,
    fuelTank: 55,
    averageFuelSpend: 12,
    drivers: ['Pedro'],
    generalCarInfo: function() {
        let carInfo = '';
        for(let key in this){
            if(typeof this[key] !== 'function') {
                carInfo += '<p>'+ key + ': ' + this[key] + ' ' + '</p>';
            }
        }
        return carInfo;
    },
    addDriverToList: function(driverName) {
        this.drivers.push(driverName);
    },
    checkDriverName: function(driverCheckName) {
        if(this.drivers.includes(driverCheckName)) {
            alert('this driver is in the list');
        } else{
            alert('This driver is not in list');
        }
    },
    journeyTrip: function(distance) {
        let hoursToDrive = distance / this.averageSpeed; // 600 / 110 = 5.45 ; 0.45 *60 =  5 : 27; 880 / 110 = 8;
        let countPauses = Math.trunc(hoursToDrive / 4); 
        let totalTime = hoursToDrive + countPauses; //6.45; second option 10 
        if(totalTime % 1=== 0 && totalTime % 4 === 0) {
            totalTime -=1;
        }
        let hour = Math.trunc(totalTime); // 6;
        let minutes = Math.trunc((totalTime %  1) * 60); // minutes 27;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    }
};


btnShow.addEventListener('click', function() {
    const outputShow = document.getElementById('autoInfo');
    outputShow.innerHTML = carObject.generalCarInfo();
});

addDriverName.addEventListener('click', function() {
    const driverName = document.getElementById('driverName');
    carObject.addDriverToList(driverName.value);
    driverName.value = '';
});

checkName.addEventListener('click', function() {
    const checkDriverInput = document.getElementById('checkDriverInput');
    carObject.checkDriverName(checkDriverInput.value);
    checkDriverInput.value = '';
});

showJourney.addEventListener('click', function() {
    const distance = document.getElementById('distance');
    carObject.journeyTrip(distance.value);
    distance.value = '';
});

showJourney.addEventListener('click', function() {
    const showDistanceAndTime = document.getElementById('showDistanceAndTime');

});

