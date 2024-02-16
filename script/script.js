1.// Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.
const employees = [
    { name: 'alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'charlie', salary: 4500 }
  ];
//=========== 1 ============================
  // Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата".
//   const result = employees.map(employees => {
//     return{name: employees.name, salary: employees.salary*2};
// });
//   console.log(result);
//
//=============================================
//              2
//2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.
// const result = employees.filter(employees => {
//   return employees.salary>5500;
// });
// console.log(result);
//
//==============================================
//               3
//. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.
// const result = employees.reduce((acc , employees) => {
//   return acc + employees.salary;
// }, 0);
// console.log(result);
//
//===============================================
//                4
//Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.
const result = employees.map(employee  => {
  return{name:employee.name.toUpperCase(), salary: employee.salary}
});
console.log(result);