// Code your solutions in this file
function writeCards(name){
    let message = name.map(
        (name) => `Thank you, ${name}, for the wonderful surprise gift!`
    );
    return message;

}

function countDown(num) {
    num = 0;
    for(let i=0; i<11; i++){
        num++
        console.log(i);
    }
};