'use strict';
const btnModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

// console.log(overlay)

// created a for each to add a event listener to each element represented by 'e' with that I have access to each separete btn! 
btnModal.forEach((e)=>{
    e.addEventListener('click', ()=>{
        // console.log(e)
        modal.classList.remove('hidden')
        modal.classList.add('modal')
        overlay.classList.remove('hidden')
    })
})

// just to close the window and add the classes back.
btnCloseModal.addEventListener('click', ()=>{
    close()
})

document.addEventListener('keydown', (keyP)=>{
    // console.log(keyP.key)
    if(keyP.key === 'Escape'){
        close()
    }else{
        return
    }
    
})

// closes the windows and adds classes
function close(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}