//1.Напишите функцию generateRandomNumber, которая принимает диапазон чисел и колбэк-функцию, и передает в нее случайное число из этого диапазона.

// function generateRandomNumber(min, max, callback) {
//   const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

//   callback(randomNumber);
// }

// generateRandomNumber(1, 10, function (randomNum) {
//   console.log(randomNum);
// });

// generateRandomNumber(10, 50, function (randomNum) {
//   console.log(randomNum);
// });

//2.Напишите функцию checkEven, которая принимает число и колбэк-функцию, и передает в нее true, если число четное, и false, если нечетное.

// function checkEven(number, callback) {
//   const isEven = number % 2 === 0;

//   callback(isEven);
// }

// const exampleNum = 7;

// checkEven(exampleNum, function (result) {
//   console.log(result);
// });

//3.Фильтрация положительных чисел из массива:
//Создайте массив чисел, включающий в себя как положительные, так и отрицательные числа. Используя метод forEach,
// отфильтруйте только положительные числа и добавьте их в новый массив. Выведите новый массив с положительными числами.

// const numbers = [5, -2, 10, -8, 3, -1, 7, -4];
// const positiveNums = [];

// numbers.forEach(function (number) {
//   if (number > 0) {
//     positiveNums.push(number);
//   }
// });

// console.log(positiveNums);

//4.Создание объекта из массива пар ключ-значение:
//Создайте массив, состоящий из пар ключ-значение. Используя метод forEach,
//добавьте каждую пару ключ-значение в объект. Выведите объект.

// const keyValuePairs = [
//   ["name", "Gerald"],
//   ["age", 50],
//   ["city", "Rivia"],
//   ["gender", "Mutant"],
// ];

// const newObj = {};

// keyValuePairs.forEach(function (pair) {
//   const key = pair[0];
//   const value = pair[1];
//   newObj[key] = value;
// });

// console.log(newObj);

//5.Преобразование массива строк в массив их длин:
//Создайте массив строк. Используя метод forEach, преобразуйте каждую строку в массиве в ее длину и добавьте результат в новый массив.
//Выведите новый массив с длинами строк.

// const strings = ["apple", "banana", "cherry", "peach", "strawberry"];

// const stringsLength = [];

// strings.forEach(function (str) {
//   stringsLength.push(str.length);
// });

// console.log(stringsLength);

//Представьте, что вы создаете приложение для управления задачами. Напишите функцию completeTask, которая принимает идентификатор задачи (например, числовой или строковый) и колбэк функцию. Колбэк функция должна обновить статус задачи на "завершено" и выполнить какие-либо дополнительные действия, например, вывод сообщения о завершении задачи.

// const tasks = [
//   { id: 1, description: "Завершить проект", status: "в процессе" },
//   { id: 2, description: "Подготовить презентацию", status: "в ожидании" },
//   { id: 3, description: "Отправить отчет", status: "в ожидании" },
// ];

// function completeTask(taskId, callback) {
//   let taskFound = false;

//   tasks.forEach((task) => {
//     if (task.id === task.id) {
//       task.status = "завершено";
//       taskFound = true;
//       callback(`Задача ${taskId} завершена : ${task.description}`);
//     }
//   });

//   if (!taskFound) {
//     console.error(`Задача с идентификатором ${taskId} не найдена`);
//   }
// }

// completeTask(2, function (message) {
//   console.log(message);
// });

// console.log(tasks);
