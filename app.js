//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Lista de amigos

// Função para adicionar amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo === '') {
        console.log('Por favor, digite um nome');
        return;
    }
    
    amigos.push(nomeAmigo); // Adiciona o amigo à lista
    document.getElementById('amigo').value = ''; // Limpa o campo de input 
    
    // Exibe a lista de amigos na página
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novamente

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        console.log('É necessário pelo menos dois amigos para sortear!');
        return;
    }

    let amigosSorteados = [...amigos]; // Copia a lista de amigos
    let resultados = []; // Lista para armazenar os resultados

    // Sortear os amigos
    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        resultados.push({ amigo: amigos[i], sorteadoPara: amigoSorteado });
    }

    // Exibir os resultados
    exibirResultados(resultados);
}

// Função para exibir os resultados do sorteio
function exibirResultados(resultados) {
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpa os resultados antes de adicionar novamente

    resultados.forEach((resultado) => {
        let li = document.createElement('li');
        li.textContent = `${resultado.amigo} sorteou: ${resultado.sorteadoPara}`;
        listaResultado.appendChild(li);
    });
}
