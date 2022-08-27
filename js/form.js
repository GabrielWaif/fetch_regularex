const cadastro = document.querySelector('#cadastro');
const nome = document.querySelector('#nome');
const tag = document.querySelector('#tag');
const numero = document.querySelector('#numero');
const endereco = document.querySelector('#endereco');

nome.addEventListener("blur", () => {
    const re = /^\S[A-Za-z ]+$/;
    if(re.test(nome.value)){
        nome.classList = '' ;
    }
    else{
        nome.classList = 'invalid';
    }
});

tag.addEventListener("blur", () => {
    const re = /^[A-Za-z_.]+$/;
    if(re.test(tag.value)){
        tag.classList = '' ;
    }
    else{
        tag.classList = 'invalid';
    }
});

numero.addEventListener("blur", () => {
    const re = /^\+?([0-9]){1,3}(\s?)([0-9]\-?\.?){7,9}(\s?x[0-9]{1,5})?$/;
    if(re.test(numero.value)){
        numero.classList = '' ;
    }
    else{
        numero.classList = 'invalid';
    }
});

endereco.addEventListener("blur", () => {
    if(endereco.value == ''){
        endereco.classList = 'invalid';
    }
    else{
        endereco.classList = '' ;
    }
});

cadastro.addEventListener('submit', () => {
    CreateUser(nome.value, nome.value, tag.value, numero.value, endereco.value);
    removeButtons = document.querySelectorAll(".removebtn");
    openButtons = document.querySelectorAll('.title')
    updateOptions();
    cadastro.reset();
    event.preventDefault();
});