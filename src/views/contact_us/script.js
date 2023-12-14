const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;
    const name = document.querySelector('input[name="username"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const menssage = document.querySelector('textarea[name="message"]').value;

    if (name === "") {
        valid = false;
    }

    if (email === "") {
        valid = false;
    }

    if (phone.length < 11) {
        alert("O número de telefone deve conter o DDD.");
        valid = false;
    }

    if (menssage === "") {
        valid = false;
    }

    if (valid) {
        document.querySelector('input[name="username"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="phone"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";

        alert("O formulário foi enviado com sucesso.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});
