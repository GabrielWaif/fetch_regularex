const cadastrados = document.querySelector("#cadastrados");
const http = new Http();

http
  .get("https://random-data-api.com/api/v2/users?size=5?response_type=json")
  .then((res) => {
    console.log(res);
    res.forEach((item) => {
      const usuario = document.createElement("div");
      usuario.id = "usuario";

      const nome = document.createElement("h1");
      nome.innerHTML = item.first_name;
      usuario.appendChild(nome);

      const nomeCompleto = createChild(`Nome: ${item.first_name} ${item.last_name}`);
      usuario.appendChild(nomeCompleto);

      const arroba = createChild(`Tag: @${item.username}`);
      usuario.appendChild(arroba);

      const numero = createChild(`Número: ${item.phone_number}`);
      usuario.appendChild(numero);

      const endereco = createChild(
        `Endereço: ${item.address.country}, ${item.address.state}, ${item.address.city}, ${item.address.street_address}`
      );
      usuario.appendChild(endereco);

      cadastrados.appendChild(usuario);
    });
  });

function createChild(content) {
  const info = document.createElement("p");
  info.innerHTML = content;
  return info;
}
