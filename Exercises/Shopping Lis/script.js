const btn = document.getElementById('btn')
const userInput = document.getElementsByTagName('input')[0]
const ul = document.querySelector('ul')
const deleteBtn = document.getElementById('delete')
const editBtn = document.getElementById('edit')
const saveBtn = document.getElementById('saveEdit')
const checkedBox = document.querySelectorAll('input[type="checkbox"]')



function addCheckbox(){
    let addCheckbox = document.createElement('input')
    addCheckbox.type = 'checkbox'

    addCheckbox.addEventListener('change', (e)=>{
        e.target.parentElement.classList.toggle('active')
    })
    // console.log(addCheckbox, 'this')
    return addCheckbox
}

function saveItems(){
    const ulElement = document.getElementById('myList')
    let editingInputItems = ulElement.querySelectorAll('input[type="text"]')
    // console.log(editingInputItems)
    editingInputItems.forEach((element)=>{
        let liItem = element.parentElement
        if(liItem.firstChild.value === ''){
            liItem.firstChild.value = liItem.firstChild.placeholder
            liItem.classList.remove('active')
        }
        liItem.innerHTML = ''
        liItem.innerHTML = element.value
        // let addCheckbox = document.createElement('input') // refactored delete later if dont break
        // addCheckbox.type = 'checkbox' // refactored
        addCheckbox()
        liItem.appendChild(addCheckbox())
        liItem.classList.remove('active')
        // adds event listener to new checkbox items refactor this
        addCheckbox()
        // addCheckbox.addEventListener('change', (e)=>{                 // refactored
        //     e.target.parentElement.classList.toggle('active')         // refactored
        // })
        
    })

}


function createListItem(){
    let li = document.createElement('li')
        li.appendChild(document.createTextNode(userInput.value)) // o child do li é o texto que vai ser criado com o userinput.value
        // let addCheckbox = document.createElement('input')
        // addCheckbox.type = 'checkbox'
        addCheckbox()
        li.appendChild(addCheckbox())
        ul.appendChild(li) // o child aqui é o li que foi criado acima
        userInput.value = ''

        // addCheckbox.addEventListener('change', (e)=>{
        //     e.target.parentElement.classList.toggle('active')
        // })

    }

checkedBox.forEach((element)=>{
    element.addEventListener('change', (e)=>{
        // console.log(e.target.parentElement)
        let liItem = e.target.parentElement
        liItem.classList.toggle('active')
    })
})


saveBtn.addEventListener('click', ()=>{
    saveItems()
})

    function editItems(){
        
        let checkInputs = document.querySelectorAll('input')
        checkInputs.forEach((inputs)=>{
            if(inputs.checked === true){ 
                let liItem = inputs.parentElement
                let newEdit = document.createElement('input')
                newEdit.type = "text"
                newEdit.placeholder = liItem.innerText
                liItem.innerHTML = '' // first assign to a empty string then add the item, or get error!
                liItem.appendChild(newEdit)
            }
        });
    }


    editBtn.addEventListener('click', ()=>{
        editItems()
    })


    function inputLength (){
        return userInput.value.length
        //return a number value to compare in the if statements
    }



    function deleteItems(){
        let checkInputs = document.querySelectorAll('input')

        checkInputs.forEach((e)=>{
            if(e.checked === true){
                e.parentElement.remove()
            }
        })
    }

    btn.addEventListener('click', ()=>{
        if(inputLength() > 0){
            createListItem()
        }
    })

    userInput.addEventListener('keypress', (e)=>{

        if(inputLength() > 0 && e.code === 'Enter'){
            createListItem()
        }
    })

    deleteBtn.addEventListener('click', ()=>{
        deleteItems()
    })
    

