let students = ["Kate", "Randall", "Kevin"]
let borrowers = ["Kate", "Randall", "Kevin"]
let fines = [20000, 30000, 10000]
console.log(`Library Records`)
console.log(`Student name: ${students[0]}, Fines: ${fines[0]}`)
console.log(`Student name: ${students[1]}, Fines: ${fines[1]}`)
console.log(`Student name: ${students[2]}, Fines: ${fines[2]}`)
students.unshift("Pearson")
borrowers.unshift("Pearson")
fines.unshift(0)
console.log(`Library Records *Updated after student count*`)
console.log(`Student name: ${students[0]}, Fines: ${fines[0]}`)
console.log(`Student name: ${students[1]}, Fines: ${fines[1]}`)
console.log(`Student name: ${students[2]}, Fines: ${fines[2]}`)
console.log(`Student name: ${students[3]}, Fines: ${fines[3]}`)
students.pop()
borrowers.pop()
fines.pop()
console.log(`Library Records *After updated fines/count*`)
console.log(`Student name: ${students[0]}, Fines: ${fines[0]}`)
console.log(`Student name: ${students[1]}, Fines: ${fines[1]}`)
console.log(`Student name: ${students[2]}, Fines: ${fines[2]}`)
console.log("Student name: Randall", " Updated fines:,", fines[fines.length - 1] * 2)
fines[0] = fines[0] - fines[0]
fines[0] = fines[1] 
fines[1] = 0
console.log(`Student name: ${students[0]}, Fines: ${fines[0]}`)
console.log(`Student name: ${students[1]}, Fines: ${fines[1]}`)
console.log(`Student name: ${students[2]}, Fines: ${fines[2]}`)
console.log("Student name: Randall", " Updated fines:,", fines[fines.length - 1] * 2)