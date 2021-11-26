const selInput = function(msg) {
    document.querySelector('.itemDisplay').value += msg;
};
const clrInput = function(msg) {
    document.querySelector('.itemDisplay').value = msg;
};

// document.querySelector(".itemSymbol-C").addEventListener("click", selInput(""));

document.querySelector('.itemNumber-1').addEventListener('click', function() {
    selInput('1');
});
document.querySelector('.itemNumber-2').addEventListener('click', function() {
    selInput('2');
});
document.querySelector('.itemNumber-3').addEventListener('click', function() {
    selInput('3');
});
document.querySelector('.itemNumber-4').addEventListener('click', function() {
    selInput('4');
});
document.querySelector('.itemNumber-5').addEventListener('click', function() {
    selInput('5');
});
document.querySelector('.itemNumber-6').addEventListener('click', function() {
    selInput('6');
});
document.querySelector('.itemNumber-7').addEventListener('click', function() {
    selInput('7');
});
document.querySelector('.itemNumber-8').addEventListener('click', function() {
    selInput('8');
});
document.querySelector('.itemNumber-9').addEventListener('click', function() {
    selInput('9');
});
document.querySelector('.itemNumber-0').addEventListener('click', function() {
    selInput('0');
});
document.querySelector('.itemSymbol-C').addEventListener('click', function() {
    clrInput('');
});
document
    .querySelector('.itemSymbol-div')
    .addEventListener('click', function() {
        selInput('/');
    });
document
    .querySelector('.itemSymbol-mul')
    .addEventListener('click', function() {
        selInput('*');
    });
document
    .querySelector('.itemSymbol-sub')
    .addEventListener('click', function() {
        selInput('-');
    });
document
    .querySelector('.itemSymbol-add')
    .addEventListener('click', function() {
        selInput('+');
    });
document.querySelector('.itemSymbol-pt').addEventListener('click', function() {
    selInput('.');
});
document
    .querySelector('.itemSymbol-per')
    .addEventListener('click', function() {
        selInput('%');
    });
document
    .querySelector('.itemSymbol-equ')
    .addEventListener('click', function() {
        document.querySelector('.itemDisplay').value = eval(
            document.querySelector('.itemDisplay').value
        );
    });