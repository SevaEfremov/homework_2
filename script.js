const student = "Ефремов Севастьян Павлович"; 

document.getElementById("student").innerHTML = student;

//Вводим постоянные переменные
const week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const session1 = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const week2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const session2 = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();

let array = [week, session1, holidays, week2, session1].flat();  //Порядок всех событий
let days = 0;

//Набор параметров №3
let a = 24687; // стоимость приставки
let b = 31; // стоимость проезда
let c = 50; // сколько дают на презд
let d = 200; // сколько дают на еду

let money = 0;
let e = c - b;   //Разница проезда 

for (let lesson = 0; lesson < array.length; lesson++) {   //let lesson - это кол-во занятий в событии
    if (money >= a) {
        break
    } 
    if ((array[lesson] <= 3) && (array[lesson] > 0)) {
        money = money + e + d
    } else if (array[lesson] > 3) {
        money = money + e
    }  
    days = days + 1
    continue
}

//Результат 
if (money >= a) {
    alert('Удалось накопить за ' + Number(days) + ' день')
    alert('Общая накопленная сумма составляет: ' + Number(money) + ' рублей ');
} else {
    alert('Нужная сумма не была набрана, за всё время было накоплено ' + Number(money) + ' рублей');
}