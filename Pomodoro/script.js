// variaveis

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

//display
window.onload = () => {
    document.getElementById('minutos').innerHTML = workTime;
    document.getElementById('segundos').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {
    // trocar botão
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // mudar tempo
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //mudar display
        document.getElementById('minutos').innerHTML = workMinutes;
        document.getElementById('segundos').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // mudar painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    // continuar estudando
                    workMinutes = workTime;
                    breakCount++

                    // mudar painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}