const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var init_button = document.getElementById('init')
var bubble_button = document.getElementById('bubble')
var selection_button = document.getElementById('selection')
var insertion_button = document.getElementById('insertion')

let listNumbers = []

function init(){
    stopAll()
    listNumbers = []
    for(let i = 0; i < 50; i++){
        let number = Math.floor(Math.random() * 800)
        if(!(listNumbers.includes(number))){
            listNumbers.push(number)
        }
        
    }
    
    redraw()
    
}

function stopAll(){
    clearInterval(insertion)
    clearInterval(bubble)
    clearInterval(selection)
}

function redraw() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "black";
    
    for(axios in listNumbers){
        ctx.fillRect((20 * axios), listNumbers[axios], 5, 1000-listNumbers[axios] )
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


