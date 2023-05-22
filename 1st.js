let str = prompt("Пожалуйста, введите любое число");

if (!str.trim()) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  let x = +str;
  if (typeof x === 'number' && !isNaN(x)) {
    if (x % 2 === 0) {
      console.log("Это четное число")
    } else {
      console.log("Это нечетное число")
    }

  } else {
    console.log("Упс, кажется, вы ошиблись")

  }

}
