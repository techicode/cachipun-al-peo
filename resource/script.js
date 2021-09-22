const imgs = ['/resource/img/papel.svg', '/resource/img/piedra.svg', '/resource/img/tijera.svg'];
const times = [1000, 1150, 1000, 1000, 1150, 2000];

let leftScore = 0;
let rigthScore = 0;

const choosePapel = document.querySelector('#choose-papel')
const choosePiedra = document.querySelector('#choose-piedra')
const chooseTijera = document.querySelector('#choose-tijera')


const button = document.querySelector('button');
const leftImg = document.querySelector('#left-img');
const rightImg = document.querySelector('#right-img');
const textResult = document.querySelector('#text-result');
const leftResult = document.querySelector('#left-results');
const rightResult = document.querySelector('#right-results');


chooseTijera.addEventListener('click', () => {
    cachipumText();
    leftImg.src = imgs[2];
    results(2);
})

choosePiedra.addEventListener('click', () => {
    cachipumText();
    leftImg.src = imgs[1];
    results(1);
})

choosePapel.addEventListener('click', () => {
    cachipumText();
    leftImg.src = imgs[0];
    results(0);
})

const declareWinner = (left, right) => {
    console.log(`left is: ${left} , right: ${right}`);

    if (left === right) {
        console.log('empate')
        textResult.innerText = 'Empate!'
    } else if (left === 1 && right === 0) {
        textResult.innerText = 'Gana Papel!'
        winnerCounter(1);

    } else if (left === 2 && right === 0) {
        textResult.innerText = 'Gana Tijera'
        winnerCounter(0);

    } else if (left === 0 && right === 1) {
        textResult.innerText = 'Gana Papel'
        winnerCounter(0);

    } else if (left === 2 && right === 1) {
        textResult.innerText = 'Gana Piedra!'
        winnerCounter(1);

    } else if (left === 1 && right === 2) {
        textResult.innerText = 'Gana Piedra!'
        winnerCounter(0);

    } else if (left === 0 && right === 2) {
        textResult.innerText = 'Gana tijera'
        winnerCounter(1);
    }
}

const randomNum = () => {
    return Math.floor(Math.random() * 3);
}

const timeDelayed = () => {
    return [1500, 1500, 1000, 500, 500, 2500];
}

const results = (leftInput) => {
    let i = 0;
    for (const time of times) {
        setTimeout(() => {
            rightImg.src = imgs[i];
            console.log('time ' + time + " i = " + i)
            i++;
            if (i > 2) {
                i = 0;
            }
        }, time);

    }

    setTimeout(() => {
        const randomRight = randomNum();
        rightImg.src = imgs[randomRight];
        declareWinner(leftInput, randomRight);
    }, 3500)
}

const cachipumText = () => {
    textResult.innerText = 'Ca Chi Pum!'
}

const winnerCounter = (winner) => {
    if (winner === 0) {
        leftScore++;
        leftResult.innerText = leftScore;
    } else {
        rigthScore++;
        rightResult.innerText = rigthScore;
    }
}