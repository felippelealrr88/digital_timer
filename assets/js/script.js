//Pega os parametros do HTML
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//variável relógio usa a função time
const relogio = setInterval(function time(){
    let dateToday = new Date(); //instancia um objeto date
    //variáveis que receberão a hora atualizada
    let hours = dateToday.getHours(); 
    let min = dateToday.getMinutes(); 
    let sec = dateToday.getSeconds();

//coloca o zero antes dos nomeros menores que 10. Ex: 09:05:04    
    if(hours < 10) hr = '0' + hours;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    
//Passa os valores atualizados para o HTML    
    horas.textContent = hours;
    minutos.textContent = min;
    segundos.textContent = sec;
});