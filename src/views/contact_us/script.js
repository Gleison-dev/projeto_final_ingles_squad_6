const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;
    const firstname = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('input[name="message"]').value;


    if (firstname === "") {
        valid = false;
    }

    if (lastname === "") {
        valid = false;
    }

    if (email === "") {
        valid = false;
    }

    if (message === "") {
        valid = false;
    }

    if (valid) {
        document.querySelector('input[name="firstname"]').value = "";
        document.querySelector('input[name="lastname"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="message"]').value = "";

        alert("O formulário foi enviado com sucesso.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});