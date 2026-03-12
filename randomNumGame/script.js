


const int1 = document.getElementById('int1')
const btn = document.getElementById('btn')
const p = document.getElementById('p')
const p1 = document.getElementById('p1')


let max = 1000
let min = 1

let random = Math.floor(Math.random() * (max - min + 1)) + min

p.textContent = "1 dan 1000 gacha bolgan sonlarni topamz"
let i = 10
function handleGuess() {
    const rannum = +int1.value;
    i--;
    console.log(random)
    if (i <= 0 && rannum !== random) {
        p1.textContent = 'Siz yutqazdingiz';
        i = 10;
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return;
    }

    p1.textContent = i + ' ta urinishlar soni qoldi';

    if (rannum === random) {
        p.textContent = "Molodes! Topdingiz";
        p1.textContent = 'Siz yutdingiz'
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        i = 10;
    } else if (rannum > random) {
        p.textContent = "bu sondan  kichkinaroq";
    } else if (rannum < random) {
        p.textContent = "bu sondan kattaroq";
    }
}

btn.addEventListener('click', handleGuess);
int1.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleGuess();
        int1.value = ''
    }
});


