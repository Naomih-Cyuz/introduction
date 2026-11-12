let customerNames = ["Aline Kabano", "Janette Kabera", "Paul Smith", "John Lennon","Marie Josee"]
let customerBalance = [100000, 0,575000, 50000, 20000000]
console.log(`Bank System Records`)
console.log(customerNames[0],":","$",customerBalance[0])
console.log(customerNames[1],":","$",customerBalance[1])
console.log(customerNames[2],":","$", customerBalance[2])
console.log(customerNames[3],":","$", customerBalance[3])
console.log(customerNames[4],":","$", customerBalance[4])
customerBalance[0] = customerBalance[0] - 10000
console.log(`Updated Bank System Records`)
console.log(customerNames[0],":","$", customerBalance[0])
console.log(customerNames[1],":","$", customerBalance[1])
console.log(customerNames[2],":","$", customerBalance[2])
console.log(customerNames[3],":","$", customerBalance[3])
console.log(customerNames[4],":","$", customerBalance[4])
