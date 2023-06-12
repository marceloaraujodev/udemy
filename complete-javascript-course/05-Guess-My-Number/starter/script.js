'use strict';
const guess = document.querySelector('.guess')
const message = document.querySelector('.message').textContent
const checkBtn = document.querySelector('.btn.check')

checkBtn.addEventListener('click', ()=>{
      if(guess.value == ''){
        alert('Enter a number')
      }else{
        console.log(guess.value)  
      }

})


// console.log(checkBtn);