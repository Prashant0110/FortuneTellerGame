let userName = "";

userName ? console.log(`Hello,${userName}`) : console.log('Hello!');

let userQuestion = '';
console.log('what was asked jane?');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 1:
        eightBall = "It is certain.";
        break;
    case 2:
        eightBall = "It is decidedly so.";
        break;
    case 3:
        eightBall = "Without a doubt.";
        break;
    case 4:
        eightBall = "Yes – definitely.";
        break;
    case 5:
        eightBall = "You may rely on it.";
        break;
    case 6:
        eightBall = "As I see it, yes.";
        break;
    case 7:
        eightBall = "Most likely.";
        break;
    case 8:
        eightBall = "Outlook good.";
        break;
    default:
        eightBall = "Reply hazy, try again.";
}

console.log(eightBall);