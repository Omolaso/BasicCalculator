let display = document.getElementById('display');
// console.log(display.innerText)
let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(buttons)

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target.innerText)
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1)
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'error'
                }
                break;
            default:
                 display.innerText += e.target.innerText
        }
    })
})

