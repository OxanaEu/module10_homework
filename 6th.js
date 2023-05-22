let mas = [0, 1, "b", "n", 14];
let i = 0
for (i; mas[0] === mas[i+1]; i<mas.length){
    i++;
}
if (i === mas.length-1){
    console.log(true)
}else {
    console.log(false)
}