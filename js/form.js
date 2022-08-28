const cadastro = document.querySelector("#cadastro");
const nome = document.querySelector("#nome");
const tag = document.querySelector("#tag");
const numero = document.querySelector("#numero");
const endereco = document.querySelector("#endereco");

class currentCadastro {
  constructor() {
    this.nome = false;
    this.tag = false;
    this.numero = false;
    this.endereco = false;
  }
  validInputs() {
    if (
      this.nome === true &&
      this.tag === true &&
      this.numero === true &&
      this.endereco == true
    )
      return true;
    else return false;
  }
}

inputsValidos = new currentCadastro();

nome.addEventListener("blur", () => {
  const re = /^\S[A-Za-z ]+$/;
  if (re.test(nome.value)) {
    nome.classList = "";
    inputsValidos.nome = true;
  } else {
    nome.classList = "invalid";
    inputsValidos.nome = false;
  }
});

tag.addEventListener("blur", () => {
  const re = /^[A-Za-z_.]+$/;
  if (re.test(tag.value)) {
    tag.classList = "";
    inputsValidos.tag = true;
  } else {
    tag.classList = "invalid";
    inputsValidos.tag = false;
  }
});

numero.addEventListener("blur", () => {
  const re = /^\+?([0-9]){1,3}(\s?)([0-9]\-?\.?){7,9}(\s?x[0-9]{1,5})?$/;
  if (re.test(numero.value)) {
    numero.classList = "";
    inputsValidos.numero = true;
  } else {
    numero.classList = "invalid";
    inputsValidos.numero = false;
  }
});

endereco.addEventListener("blur", () => {
  if (endereco.value == "") {
    endereco.classList = "invalid";
    inputsValidos.endereco = false;
  } else {
    endereco.classList = "";
    inputsValidos.endereco = true;
  }
});

cadastro.addEventListener("submit", () => {
  if (inputsValidos.validInputs()) {
    CreateUser(nome.value, nome.value, tag.value, numero.value, endereco.value);
  SendLocal();
  removeButtons = document.querySelectorAll(".removebtn");
  openButtons = document.querySelectorAll(".title");
  updateOptions();
  cadastro.reset();
  inputsValidos = new currentCadastro();
  }
  else alert('Coloque inputs validos!');
  event.preventDefault();
});
