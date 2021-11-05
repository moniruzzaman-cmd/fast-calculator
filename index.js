let display01 = document.querySelector('.display1');
let display02 = document.querySelector('.display2');
let tempResult = document.querySelector('.temp-result');
let numberall = document.querySelectorAll('.number');
let oparetionEl = document.querySelectorAll('.oparetion');
let clearallEl = document.querySelector('.clearAll');
let clearLastOne = document.querySelector('.clear-lastOne');
let equaleEl = document.querySelector('.equal');



let dis1num = '';
let dis2num = '';
let result = '';
let lestOparetion = '';
let haveDot = false;

numberall.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        dis2num += e.target.innerHTML;
        display02.innerText = dis2num;
    })
});

oparetionEl.forEach(oparation => {
    oparation.addEventListener('click', (e) => {
        if (!dis2num) return;
        haveDot = false;
        var oparationName = e.target.innerText;
        if (dis1num && dis2num && lestOparetion) {
            mathOparation()

        } else {
            result = parseFloat(dis2num)
        }
        clearVar(oparationName)
        lestOparetion = oparationName;
    })
})
function clearVar(number = '') {
    dis1num += dis2num + ' ' + number + ' ';
    display01.innerText = dis1num;
    display02.innerText = '';
    dis2num = ''
    tempResult.innerText = result

}
function mathOparation() {
    if (lestOparetion === 'X') {
        result = parseFloat(dis1num) * parseFloat(dis2num)
    } else if (lestOparetion === '-') {
        result = parseFloat(dis1num) - parseFloat(dis2num)
    }
    else if (lestOparetion === '+') {
        result = parseFloat(dis1num) + parseFloat(dis2num)
    }
    else if (lestOparetion === '/') {
        result = parseFloat(dis1num) / parseFloat(dis2num)
    }
    else if (lestOparetion === '%') {
        result = parseFloat(dis1num) % parseFloat(dis2num)
    }

}
equaleEl.addEventListener('click', (e) => {
    if (!dis1num || !dis2num) return;
    haveDot = false;
    mathOparation();
    clearVar();
    display02.innerText = result;
    tempResult.innerText = '';
    dis2num = result;
    dis1num = '';


})
clearallEl.addEventListener('click', (e) => {
    display01.innerText = '0'
    display02.innerText = '0'
    dis1num = ''
    dis2num = ''
    tempResult = '0'
    result = ''
})

// clearLastOne.addEventListener('click', (e) => {
//     display01.innerText = '0'
//     display02.innerText = '0'
//     dis1num = ''
//     dis2num = ''
//     tempResult = '0'
//     result = ''

// })