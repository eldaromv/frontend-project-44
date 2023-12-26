import readlineSync from 'readline-sync';

export function greetUser() { 
    let userName = readlineSync.question("May I have your name? ");
    console.log('Hey ' + userName + '!'); 
}
