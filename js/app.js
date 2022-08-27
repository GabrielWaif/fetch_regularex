const cadastrados = document.querySelector("#cadastrados");
let removeButtons = document.querySelectorAll(".removebtn");
let openButtons = document.querySelectorAll('.title')
const http = new Http();

http
  .get("https://random-data-api.com/api/v2/users?size=5?response_type=json")
  .then((res) => {
    res.forEach((item) => {
      CreateUser(
        item.first_name,
        item.last_name,
        item.username,
        item.phone_number,
        `${item.address.country}, ${item.address.state}, ${item.address.city}, ${item.address.street_address}`
      );
    });
    removeButtons = document.querySelectorAll(".removebtn");
    openButtons = document.querySelectorAll('.title')
    updateOptions();
  });

function createChild(content) {
  const info = document.createElement("p");
  info.innerHTML = content;
  return info;
}

function CreateUser(first_name, last_name, username, phone_number, address) {
  const usuario = document.createElement("div");
  usuario.classList = "usuario";


  const title = document.createElement("div");
  title.classList = 'title';

  const nome = document.createElement("h1");
  nome.innerHTML = first_name;
  title.appendChild(nome);

  const button = document.createElement("button");
  button.innerHTML = "Remover";
  button.classList = "removebtn";
  title.appendChild(button);

  usuario.appendChild(title);

  const info = document.createElement("div");
  info.classList = 'info';

  const nomeCompleto = createChild(`Nome: ${first_name} ${last_name}`);
  info.appendChild(nomeCompleto);

  const arroba = createChild(`Tag: @${username}`);
  info.appendChild(arroba);

  const numero = createChild(`Número: ${phone_number}`);
  info.appendChild(numero);

  const endereco = createChild(`Endereço: ${address}`);
  info.appendChild(endereco);

  usuario.appendChild(info);
  cadastrados.appendChild(usuario);
}

function updateOptions() {
  removeButtons.forEach((button) => {
    button.addEventListener("click", (x) => {
      x.target.parentElement.parentElement.remove();
    });
  });
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.querySelector('.info').style.display = 'block';
    });
  });
}
