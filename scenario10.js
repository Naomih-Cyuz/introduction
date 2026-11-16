let passengers = ["Flamingo", "Raphael", "Genesis"]
let distances = [50, 30, 20]
let fares = [5000, 3000,2000]
console.log(`Ride-share tracking`)
console.log(`Passenger Name: ${passengers[0]}, Distance (km): ${distances[0]}, Fares (RWF): ${fares[0]}`)
console.log(`Passenger Name: ${passengers[1]}, Distance (km): ${distances[1]}, Fares (RWF): ${fares[1]}`)
console.log(`Passenger Name: ${passengers[2]}, Distance (km): ${distances[2]}, Fares (RWF): ${fares[2]}`)
fares[1] = fares[1] + 500
passengers.shift()
distances.shift()
fares.shift()
console.log(`*Updated* Ride-share tracking`)
console.log(`Passenger Name: ${passengers[0]}, Distance (km): ${distances[0]}, Fares (RWF): ${fares[0]}`)
console.log(`Passenger Name: ${passengers[1]}, Distance (km): ${distances[1]}, Fares (RWF): ${fares[1]}`)
passengers.push("Fred")
distances.push(60)
fares.push(6000)
console.log(`*Updated* Ride-share tracking`)
console.log(`Passenger Name: ${passengers[0]}, Distance (km): ${distances[0]}, Fares (RWF): ${fares[0]}`)
console.log(`Passenger Name: ${passengers[1]}, Distance (km): ${distances[1]}, Fares (RWF): ${fares[1]}`)
console.log(`Passenger Name: ${passengers[2]}, Distance (km): ${distances[2]}, Fares (RWF): ${fares[2]}`)
fares[0] = fares[0] / 2
fares[fares.length - 1] = fares[fares.length - 1] + fares[0]
console.log(`*Updated* Ride-share tracking`)
console.log(`Passenger Name: ${passengers[0]}, Distance (km): ${distances[0]}, Fares (RWF): ${fares[0]}`)
console.log(`Passenger Name: ${passengers[1]}, Distance (km): ${distances[1]}, Fares (RWF): ${fares[1]}`)
console.log(`Passenger Name: ${passengers[2]}, Distance (km): ${distances[2]}, Fares (RWF): ${fares[2]}`)