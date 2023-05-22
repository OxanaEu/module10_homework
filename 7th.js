let mas = [13, 100, 0.25, 0, 5, 0.1, 29, true, undefined];

let zero = 0;

let number = 0;

let even = 0;

let odd = 0;

for (let i = 0; i < mas.length; i++) {

  if (typeof mas[i] === "number") {

    number += 1;

    if (mas[i] === 0) {

      zero += 1;

    } else if (mas[i] % 2 === 0) {

      even += 1;

    } else {

      odd += 1;

    }

  }

}

console.log(`цифр ${number}, четных ${even}, нечетных ${odd}, нулей ${zero}`);