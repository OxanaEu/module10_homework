let myMap = new Map();

myMap.set("cat", "pet");

myMap.set("NY", "city");

myMap.set(3, "number");

for (let name of myMap) {

  console.log(`Ключ - ${name[0]}, значение - ${name[1]}`);

}
