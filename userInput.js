const readLine = require("readline")
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter a sentence: ", function(sentence){
    console.log(sentence)
    console.log(sentence.split(" ").reverse().join(" "))
    console.log(sentence.split(" "))
    let newSentence = sentence.split(" ")
    newSentence.splice(2,0,"very")
    console.log(newSentence)
    console.log(newSentence.join(" "))
    rl.close()

})
