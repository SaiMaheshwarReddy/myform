const btns = document.querySelectorAll('.btn');
const output = document.querySelector('#calc_output');
const equalBtn = document.querySelector('#calc_equal');
const clearBtn = document.querySelector('#calc_clear');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        let num = btns[i].getAttribute('data-num');
        output.value += num;
    })
}

equalBtn.addEventListener('click', function() {

    if(output.value === ''){
        alert('input is empty');
    }

    else{

    let value = eval(output.value);
    output.value = value;
    }
})

clearBtn.addEventListener('click', function () {
    output.value = '';
})