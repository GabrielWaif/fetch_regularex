pessoas = localStorage.getItem('cadastrados');

class Http{
    async get(url){
        if(pessoas == null){
        const response = await fetch(url);
        const data = await response.json();
        return data;
        }
        else{
            cadastrados.innerHTML = pessoas;
            return [];
        }
    }
}