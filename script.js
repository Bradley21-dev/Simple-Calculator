const display = document.querySelector('.display');

console.log(display);

function displayValue(value){
    display.textContent +=value;
}

function clearAll(){
    display.textContent = '';
}

function calculate(){
    try{
        display.textContent = eval(display.textContent)

    }catch(error){
            display.textContent = `${error}`;
        }
}