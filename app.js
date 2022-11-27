let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clearButton = document.querySelector('.btn-clear');
let equalButton = document.querySelector('.btn-equal');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
    });
});

equalButton.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

clearButton.addEventListener('click', function(e) {
    screen.value = "";
});