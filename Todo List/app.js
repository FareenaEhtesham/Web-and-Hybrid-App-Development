
const add_item = document.querySelector(".add")
const ul = document.querySelector(".list-group")
li = document.querySelector("list-group-item")

function AddingItems(text){

    const html = `
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${text}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    
    `
    ul.innerHTML += html;

}


document.querySelector(".adding").addEventListener("click" , function(event){

    event.preventDefault();

    //trim is the method that not include any whitespace in the text

    const text = add_item.add.value.trim();
    console.log(text.length)

    if(text.length){

        AddingItems(text)
        add_item.reset()
    }
    else {
        alert("please Write!")
       
    }
})


//DELETE


ul.addEventListener("click" , function(e){    
    // alert("hello")
  
    if(e.target.classList.contains("delete")){

        e.target.parentElement.remove()
    }


})

//SEARCHING

function Filter(search_value){

    Array.from(ul.children).filter((todo) =>{

        return !todo.textContent.toLowerCase().includes(search_value)

    }).forEach((todo) => {

        todo.classList.add("filtered");

    });


    Array.from(ul.children).filter((todo) =>{

        return todo.textContent.toLowerCase().includes(search_value)

    }).forEach((todo) => {

        todo.classList.remove("filtered");

    })

    
}

const form = document.querySelector(".search");

form.addEventListener("keyup" , function(){
    
    const search_value = form.search.value.trim().toLowerCase();

    Filter(search_value)

})