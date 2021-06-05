/*
    CIT 281 Lab 1
    Name: Brad Walther
*/
function square(num) {
    return num*num;
}
console.log('Square operations:')
for (let i = 2; i <= 10; i+=2) {
    console.log(`Square of ${i} is ${square(i)}`);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
alphabet.push(1);
console.log(alphabet);