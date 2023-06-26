let form = document.querySelector('form');
let inputname = document.getElementById('inputname');
let inputemail = document.getElementById('exampleInputEmail1');
let inputnumber = document.getElementById('inputnumber');
let ul = document.querySelector('ul')

//declaring the function

function savetodo(e){
    e.preventDefault()
    
    let newli = document.createElement('li')
    newli.className = 'list-group-item mt-5 rounded-0'

    let name = document.createElement('p')
    name.innerText = inputname.value
    newli.appendChild(name)

    let Email = document.createElement('p')
    Email.innerText = inputemail.value
    newli.appendChild(Email)

    let Number= document.createElement('p')

    Number.innerHTML =`
            <p>Number: ${inputnumber.value}
            <a href='tel:+91${inputnumber.value}' target=_blank"><i class="bi bi-telephone-forward text-primary fs-5 ms-4"></i></a>
            <a href='//api.whatsapp.com/send?phone=+91${inputnumber.value}&text=Hello ${inputname.value}'target="_blank"title=" whatsapp"><i class="bi bi-whatsapp text-success fs-5 ms-4"></i></a>
            </p>
        `;
        newli.appendChild(Number)
        ul.appendChild(newli)
        alert("your data is successfully saved")

        let delbtn = document.createElement('button')
        delbtn.className = 'btn btn-danger rounded-0 btn-sm fw-semibold float-end'
        delbtn.innerText = 'DELETE'
        newli.appendChild(delbtn)
    

    
    form.reset()
};



//calling the function

form.addEventListener('submit', savetodo);

const deletetodo =((e)=>{
    if(e.target.className.includes('btn-danger')){
        let newli = e.target.parentElement;
        ul.removeChild(newli)
        alert("your data is deleted")
    }
})

ul.addEventListener('click', deletetodo)