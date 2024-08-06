const readline = require('readline');
const rl= readline.createInterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});
rl.question('Enter Your Number: ',(input)=>{
    console.log('Your Name is : ${input}');
    rl.close();
});