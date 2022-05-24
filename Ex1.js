// Задание 1

/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */

function getOwnKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + " : " + obj[key]);
        }
    }
}

// Проверка:

const primary = {
    one : 1,
    two : 2,
    three : 3,
}
const secondary = Object.create(primary);
secondary["first"] = "1st";
secondary["second"] = "2nd";
secondary["trird"] = "3rd";

getOwnKeysAndValues(secondary);



