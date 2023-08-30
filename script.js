let num = +prompt('Enter the number')
let power = +prompt('Enter the power number')
let answer = 1
// let i = 1

for (let i = 1; i <= power; i++) {
    answer = answer * num;
}
alert(answer);

// while(i <= power){
//     answer = answer * num;
//     i++
// }
// alert(answer);

// do{
//     answer = answer * num;
//     i++
// }while (i <= power){
//     alert(answer)
// }

// alert(num ** stephen);

// let i = Math.pow(num, stephen)
// alert(i);

let a = +prompt('Enter number of steps')
let b = prompt('Enter the character')
let c = prompt('Enter the ending character')

for (let i = 1; i < a; i++){
    console.log(c);
    c = b + c
}

