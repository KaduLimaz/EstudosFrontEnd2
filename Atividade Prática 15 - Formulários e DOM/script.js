const form = document.getElementById('formulario');
const submit = document.getElementById('submit');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formName = form.name.value;
    const formAdress = form.address.value;
    const formCity = form.city.value;
    const formState = form.state.value;

    alert("name",formName)

})
