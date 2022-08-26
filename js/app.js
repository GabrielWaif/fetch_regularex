const cadastrados = document.querySelector('#cadastrados');
const http = new Http();

http
  .get("https://random-data-api.com/api/v2/users?size=5?response_type=json")
  .then((res) => {
    console.log(res);

    const item = res[0];

    const usuario = document.createElement("div");
    usuario.id = "usuario";
    const nome = document.createElement("h1");
    nome.innerHTML = item.first_name;
    usuario.appendChild(nome);
    const nomeCompleto = document.createElement("p");
    nomeCompleto.innerHTML = `Nome: ${item.first_name} ${item.last_name}`;
    usuario.appendChild(nomeCompleto);
    const numero = document.createElement("p");
    numero.innerHTML = `Número: ${item.phone_number}`;
    usuario.appendChild(numero);
    cadastrados.appendChild(usuario);
  });

