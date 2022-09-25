const boxesContainer = document.getElementById('boxes')




const colors = ['#ffd900', '#8e44ad', '#3498db','#e67e22','#2ecc71']


function createCalculator() {
    const symbol = ['clr','(',')','del','9','8','7','/','6','5', '4', '*', '3','2','1','-','.','0','=','+']
    let w = 0;
    let k = 0;
    
    for (let i = 0; i < 5; i++) {
        for(let j = 0; j < 4; j++) {
            const label = document.createElement('label')

            const box = document.createElement('input')
            box.type = 'button'
            box.name = 'calcBtn'
            // box.classList.add('box')

            box.setAttribute("id",`number${++w}`)
            
            
            box.value = `${symbol[k]}`
            k++

            label.appendChild(box)
            
        
            boxesContainer.appendChild(label)

            box.addEventListener('mouseover', () => setColor(box))
    
            box.addEventListener('mouseout', () => removeColor(box))


        }
    }

    

    let btn = document.querySelectorAll('input');
            let val = document.querySelector('.value');
            let result = document.querySelector('.result');
            
            btn.forEach((number) => {
                let dataVal = number.value;
                number.addEventListener('click', () => {

                    switch(dataVal) {
                       
                    case '=':
                        
                        result.innerHTML = eval(val.innerHTML)
                        val.innerHTML = result.innerHTML
                        break;
                        
                    case 'clr':
                        result.innerHTML = "";
                        val.innerHTML = "";
                        break;
                    
                    case 'del':
                        val.innerHTML = val.innerHTML.slice(0,-1);
                        
                        // if (dataVal == "(" && ")" && "9" && "8" && "7" && "6" && "5" && "4" && "3" && "2" && "1" && "." && "0") {
                        //     val.innerHTML = val.innerHTML.slice(0,-1);
                        // }

                        // if (val.innerHTML.length != 0 && result.innerHTML.length != 0 ) {
                        //     if (val.innerHTML.length > result.innerHTML.length) {
                        //         val.innerHTML.slice(0,-1)
                        //     }
                        // } else {
                        //     val.innerHTML = ""
                        // }

                        if (val.innerHTML.length == 0 && result.innerHTML.length !== 0){
                            result.innerHTML = "";
                        }   
                        
                        break
            
                    default:
                        val.innerHTML += dataVal;
                        break;
                    }
                    
                    console.log(val.innerHTML.length)
                    console.log(result.innerHTML.length)
                    
                    
                })
            })
}







function setColor(element) {
    const color = getRandomColor()
    console.log(color)
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}


function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

    
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

createCalculator()