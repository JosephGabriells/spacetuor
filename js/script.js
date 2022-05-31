// elementos
let form = document.querySelector(".myForm");
let userName = document.querySelector("#nome");
let userEmail = document.querySelector("#email");
let userCpf = document.querySelector("#cpf");
let userDate = document.querySelector("#data-nascimento");
let userText = document.querySelector("#texto");
let userGenF = document.querySelector("#genero-f");
let userGenM = document.querySelector("#genero-m");

// const forms = form.addEventListener("submit", () => {})

//Validação

const validar = () => {
  let isValidate = true;

  if (userName.value.length < 3) {
    alert("Preencha o campo nome");
    userName.focus();
    return (isValidate = false);
  }

  if (userEmail.value === "" || userEmail.value.indexOf("@") === -1) {
    alert("Preencha o campo email corretamente (@)");
    userEmail.focus();
    return (isValidate = false);
  }

  if (
    userCpf.value === "" ||
    userCpf.value.length < 11 ||
    isNaN(userCpf.value)
  ) {
    alert("Preencha o campo CPF (somente números) no padrão ###########");
    userCpf.focus();
    return (isValidate = false);
  }

  if (userGenM.checked == false && userGenF.checked == false) {
    alert("Selecione seu genero");
    return (isValidate = false);
  }

  if (userDate.value === "") {
    alert("Preencha o campo data de nascimento");
    userDate.focus();
    return (isValidate = false);
  }

  if (userText.value === "") {
    alert("Preencha o campo texto");
    userText.focus();
    return (isValidate = false);
  }

  return isValidate ? alert("Seu cadastro foi efetuado com sucesso") : false;
};
