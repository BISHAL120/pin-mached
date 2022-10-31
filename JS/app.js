function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}

function generatepin() {
    const pin = getpin();
    document.getElementById('fastnumber').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('secondnumber');
    const mached = document.getElementById('mached');
    const dontmach = document.getElementById('dontmach');
    const fastnumber = document.getElementById('fastnumber');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
            mached.style.display = 'none';
            dontmach.style.display = 'none';
            fastnumber.value = '';
        }
    }
    else {
        const previouscalc = calc.value;
        const newcalc = previouscalc + number;
        calc.value = newcalc;
    }

})

document.getElementById('submit').addEventListener('click', function (event) {
    const fastnumber = document.getElementById('fastnumber').value;
    const secondnumber = document.getElementById('secondnumber').value;
    const mached = document.getElementById('mached');
    const dontmach = document.getElementById('dontmach');
    if (fastnumber == secondnumber) {
        mached.style.display = 'block';
        dontmach.style.display = 'none';
    }
    else {
        dontmach.style.display = 'block';
        mached.style.display = 'none';
    }
})