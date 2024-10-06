function buscar(){
    //Função qie carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/Nequinho/API-Ecommerce/refs/heads/main/ecommerce.json').then(resposta => resposta.json()).then(corpo => {
   
    var identificador = document.getElementById('valor').value
    console.log(corpo)

    corpo.forEach(pessoa => {
        if(identificador == pessoa.marca){
            document.getElementById('imagem').innerHTML = pessoa.imagem;
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('marca').innerHTML = pessoa.marca;
            document.getElementById('preco').innerHTML = pessoa.preco;
            encontrado = true;
        }
    });

    // Se não encontrou nenhum produto, exibe mensagem de erro
    if (!encontrado) {
        document.getElementById('erro').innerHTML = "Registro inválido. Verifique a marca e tente novamente.";
        document.getElementById('imagem').src = '';
        document.getElementById('nome').innerHTML = '';
        document.getElementById('marca').innerHTML = '';
        document.getElementById('preco').innerHTML = '';
    }
    }).catch(erro => {
        console.error("Erro ao carregar o JSON: ", erro);
        document.getElementById('erro').innerHTML = "Registro inválido. Verifique a marca e tente novamente.";
    });

}
