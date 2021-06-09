//---------- СТРЕЛОЧНАЯ ФУНКЦИЯ
// В спецификацию ЕSб введен новый долгожданный синтаксис
// стрелочной нотации
// (arrow notation).

const f1 = function () {
  return console.log("hello");
};
// У стрелочных функций действительно есть одно
// серьезное отличие от обычных
// функций: переменная this привязывается лексически,
// точно так же, как и любая другая переменная.
const f1arrow = () => {
  console.log("hello");
};
