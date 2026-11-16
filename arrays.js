let names =['sulaiman','sadallah','Naomih','Mahboub'];
// console.log(names);
// names[2]=names[2].toLowerCase();
// names[1]='Christian';
// console.log(names);
// console.log(names.length);
// console.log(names[names.length-1])
// names.push('Abdrahman');
// console.log(names);
// console.log(names[names.length-1])
// names.unshift("John");
// console.log(names);
// names.pop();
// names.shift();
// console.log(names);
names.splice(0, 1, "Isimbi")
console.log(names)
let topThree = names.slice(0, 3)
console.log(topThree)
let name = "Isimbi is beautiful"
console.log(name.split(" ").reverse().join(" "))
console.log(name[0])
let name_2 = name.slice(2,1)
console.log(name_2)
let parts = name.split("i")

console.log(`parts:  + ${parts}`)
console.log(parts)
console.log(parts.reverse())
console.log(parts.join(" "))

// let number1=8;
// let number2='8';
// console.log(typeof(number1));
// console.log(typeof(number2));
// console.log(number1==number2);
