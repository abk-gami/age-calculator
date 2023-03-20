let calculate = document.querySelector('button');
let result = document.querySelector('.h3');
let input = document.querySelector('.input');
let result1 = document.querySelector('.first');
let result2 = document.querySelector('.last');

input.onfocus = function hide(){
    result1.textContent = " ";
    result2.textContent = " ";
};


calculate.onclick = function calculateAge(){
    let bYear = document.querySelector('#year').value;
    let bMonth = document.querySelector('#month').value;
    let bDate = document.querySelector('#date').value;

    
    let today = new Date();
    let pDate = today.getDate();
    let pMonth = 1 + today.getMonth();
    let pYear = today.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(bDate > pDate){
        pDate = pDate + month[pMonth - 1];
        pMonth = pMonth - 1;
    }
    if(bMonth > pMonth){
        pMonth = pMonth + 12;
        pYear = pYear - 1;
    }

    let nDate = pDate - bDate;
    let nMonth = pMonth - bMonth;
    let nYear = pYear - bYear;

    if(bYear.length == 0 || bYear > pYear || bYear.length > 4 || bYear.length < 4 || bYear.length < 1 && bMonth.length == 0 || bMonth.length > 2 || bMonth > 12 ||  bMonth.length < 1 && bDate == 0 || bDate.length > 2 || bDate.length < 1 || bDate > 31){

    result1.style.color = "red"  ;
    result2.style.color = "red" ;
    result1.textContent = "There is an error somewhere"  ;
    result2.textContent = "Check your input!!" ;
    }else{
        result1.style.color = "white"  ;
        result2.style.color = "white" ;
    result1.textContent = "You are " + nYear + " Years, " +  nMonth + " Months "  ;
    result2.textContent = "and " + nDate + " Days Old!" ;
    }


};