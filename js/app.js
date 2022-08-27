const cadastrados = document.querySelector("#cadastrados");
let removeButtons = document.querySelectorAll(".removebtn");
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
    updateOptions();
  });

function createChild(content) {
  const info = document.createElement("p");
  info.innerHTML = content;
  return info;
}

function CreateUser(first_name, last_name, username, phone_number, address) {
  const usuario = document.createElement("div");
  usuario.id = "usuario";

  const nome = document.createElement("h1");
  nome.innerHTML = first_name;
  usuario.appendChild(nome);

  const nomeCompleto = createChild(`Nome: ${first_name} ${last_name}`);
  usuario.appendChild(nomeCompleto);

  const arroba = createChild(`Tag: @${username}`);
  usuario.appendChild(arroba);

  const numero = createChild(`Número: ${phone_number}`);
  usuario.appendChild(numero);

  const endereco = createChild(`Endereço: ${address}`);
  usuario.appendChild(endereco);

  const button = document.createElement("button");
  button.innerHTML = "Remover";
  button.classList = "removebtn";
  usuario.appendChild(button);

  cadastrados.appendChild(usuario);
}

function updateOptions() {
  removeButtons.forEach((button) => {
    button.addEventListener("click", (x) => {
      x.target.parentElement.remove();
    });
  });
}
