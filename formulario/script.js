// elementos
let form = document.querySelector(".myForm");
let userName = document.querySelector("#nome");
let userEmail = document.querySelector("#email");
let userCpf = document.querySelector("#cpf");
let userDate = document.querySelector("#data-nascimento");
let userText = document.querySelector("#texto");
console.log(userDate.value);

//Validação
const validar = () => {
  //   if (userName.value == "") {
  //     alert("Preencha o campo nome");
  //     userName.focus();
  //     return false;
  //   }

  //   if (userEmail.value === "" || userEmail.value.indexOf("@") === -1) {
  //     alert("Preencha o campo email corretamente (@)");
  //     userEmail.focus();
  //     return false;
  //   }
  //   if (
  //     userCpf.value === "" ||
  //     userCpf.value.length < 11 ||
  //     isNaN(userCpf.value)
  //   ) {
  //     alert("Preencha o campo CPF (somente números) no padrão ###########");
  //     userCpf.focus();
  //     return false;
  //   }
  //   if (userDate.value === "") {
  //     alert("Preencha o campo data de nascimento");
  //     userDate.focus();
  //     return false;
  //   }

  if (userText.value === "") {
    alert("Preencha o campo texto");
    userText.focus();
    return false;
  }
  return true;
};
