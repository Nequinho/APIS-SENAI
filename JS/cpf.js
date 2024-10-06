function buscar(){
    //Função qie carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/Nequinho/API-CPF/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
   
    var identificador = document.getElementById('valor').value
    console.log(corpo)

    corpo.forEach(pessoa => {
        if(identificador == pessoa.cpf){
            var linkSite = `<a href="${pessoa.link}"> Visite nosso site</a>`
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
            document.getElementById('cidade').innerHTML = pessoa.cidade;
            document.getElementById('pais').innerHTML = pessoa.pais;
            document.getElementById('erro').innerHTML = '';
            encontrado = true;
        }
    });

    // Verifica se o CPF foi encontrado
    if (!encontrado) {
        document.getElementById('erro').innerHTML = "Registro Inválido";
    }
})
.catch(error => {
    console.error("Erro ao carregar o JSON:", error);
    document.getElementById('erro').innerHTML = "CPF indisponível";
});
}