function submitHandler(e) {
    e.preventDefault(); 
    const nameElement = document.getElementById("name"); 
    const surnameElement = document.getElementById("surname");

    const nameValue = nameElement.value;
    const surnameValue = surnameElement.value;
    const data = {
        name: nameValue,
        surname: surnameValue,
    }
    console.log(data);
}