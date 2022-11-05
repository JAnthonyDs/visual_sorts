const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var init_button = document.getElementById('init')
var bubble_button = document.getElementById('bubble')
var selection_button = document.getElementById('selection')
var insertion_button = document.getElementById('insertion')
// var quick_button = document.getElementById('quick')

let listNumbers = []
var higherNumber
var smallestNumber

function init(){
    stopAll()
    listNumbers = []
    higherNumber = 900
    smallestNumber = 0
    for(let i = 0; i < 730; i++){
        let number = Math.floor(Math.random() * 800)
        if(!(listNumbers.includes(number))){
            listNumbers.push(number)
            if(number < higherNumber){
                higherNumber = number
                
            }

            if(number > smallestNumber){
                smallestNumber = number
            }
            
        }        
    }
    
    redraw()
    
}

function stopAll(){
    clearInterval(insertion)
    clearInterval(bubble)
    clearInterval(selection)
    // clearInterval(quick)
}

function redraw() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
   
    for(axios in listNumbers){
        if(listNumbers[axios] == higherNumber){
            ctx.fillStyle = "blue";
        }else if(listNumbers[axios] == smallestNumber){
            ctx.fillStyle = "red"
        }
        else{
            ctx.fillStyle = "black"
        }
        ctx.fillRect((2 * axios), listNumbers[axios], 1, 1000-listNumbers[axios] )
    }
}

function bubbleSort() {
    
    bubble = setInterval( () => {
        if(veriOrdenacao()) clearInterval(bubble);

        for(let i = 1; i < listNumbers.length; i ++){
            
            if(listNumbers[i - 1] < listNumbers[i]){
                temp = listNumbers[i]
                listNumbers[i] = listNumbers[i-1]
                listNumbers[i -1] = temp
            }
             
            redraw()

        }
    }, 100)
}

function selectionSort(){
    let n = 0;

    selection = setInterval(() => {
        if(n >= listNumbers.length) clearInterval(selection)

        let imenor = n
            
        if(veriOrdenacao()) clearInterval()
            for(let j = n+1; j< listNumbers.length; j++){
                if(listNumbers[j] > listNumbers[imenor]){
                    imenor = j
                }
            }
                    
            if(imenor != n){
                temp = listNumbers[n]
                listNumbers[n] = listNumbers[imenor]
                listNumbers[imenor] = temp
            }
                    
        
            redraw()
        n++        
        
    }, 100)
    
}

function insertionSort(){
    let n = 1
    insertion = setInterval(() => {
        if(n >= listNumbers.length) clearInterval(insertion)

        for(let i = 0; i < n;i++){
            if(listNumbers[i] < listNumbers[n]){
                temp = listNumbers[n]
                listNumbers[n] = listNumbers[i]
                listNumbers[i] = temp
            }
        }
        redraw()

        n++;

    },100)
}

// QuickSort

function quickInit(){
    quickSort(listNumbers,0,listNumbers.length -1)
}

function quickSort(vetor,inicio,fim){
        if(inicio < fim){
            var p = particao(vetor, inicio,fim)
            console.log(p)
            quickSort(vetor,inicio,p-1)
            quickSort(vetor,p+1,fim)
        }
        
}



function particao(lista,inicio,fim){
    let pivot = lista[fim]
    let pont_menor = inicio
    let n = inicio
    let aux2 = inicio
    
    
    // console.log('pont_menor: ',pont_menor)

    for(i = inicio; i <= fim + 1; i++){
        if(lista[i] >= pivot){
            //  aux = lista[pont_menor]
            //  lista[pont_menor] = lista[i]
            //  lista[i] = aux
             pont_menor += 1
    //         // n = i
        }
    }

    redraw()

    quick = setInterval(() => {
        if(n >= fim + 100) clearInterval(quick)
        
        else{
            if(lista[n] >= pivot){
                aux = lista[aux2]
                lista[aux2] = lista[n]
                lista[n] = aux
                aux2 += 1
            }
        }

        redraw()

        n++;
         
     }, 100)

    
    // console.log('pont_menor: ',pont_menor)
    
    return pont_menor - 1
}

//

function veriOrdenacao(){
    for(let i = 0; i < listNumbers.length -1; i ++){
        if(listNumbers[i] > listNumbers[i +1]){
            return false
        }
    }

    return true
}

init_button.addEventListener('click', () => {
    init()
})

bubble_button.addEventListener('click', () => {
    bubbleSort()
})

selection_button.addEventListener('click', () => {
    selectionSort()
})

insertion_button.addEventListener('click', () => {
    insertionSort()
})

// quick_button.addEventListener('click', () => {
//     quickInit()
// })