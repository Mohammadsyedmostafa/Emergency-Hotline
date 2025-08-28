
let counter = 0;
let coins = 100;
const history = []

const heartButtons = document.querySelectorAll('.heart-button');
for (const btn of heartButtons) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        counter++;
        document.getElementById('heart-count').innerText = counter;
    });
}
