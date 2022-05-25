// Selecionando elemento ul do HTML
const ul = document.querySelector(".containerListaProdutos ul");

function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';

  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    // Adicionando dados do produto aos elementos
    img.src = produto.img;
    img.alt = produto.nome;
    h3.innerText = produto.nome;
    p.innerText = `R$ ${produto.preco.toFixed(2)}`;
    span.innerText = produto.secao;

    // Adicionando o elementos para o li
    li.append(img, h3, span, p);

    // Adicionando li ao HTML
    ul.append(li);
  });
}

montarListaProdutos(produtos)




function filtrarPorHortifruti() {
    let valor = 0;
    const listaHortifruti = produtos.filter((produto) => {
        if(produto.secao === "Hortifruti") {
            valor += produto.preco;
            const precoTotal = document.querySelector('#precoTotal');
            precoTotal.innerText = valor.toFixed(2);
            return true;
        }
  });

  montarListaProdutos(listaHortifruti);
}

const botaoMostrarHortifruti = document.querySelector(
    ".estiloGeralBotoes--filtrarHortifruti"
  );
botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti);



function filtrarPorPanificadora() {
    let valor = 0;
    const listaPanificadora = produtos.filter((produto) => {
        if(produto.secao === "Panificadora") {
            valor += produto.preco;
            const precoTotal = document.querySelector('#precoTotal');
            precoTotal.innerText = valor.toFixed(2);
            return true;
        }
  });

  montarListaProdutos(listaPanificadora);
}

const botaoMostrarPanificadora = document.querySelector(
    ".estiloGeralBotoes--filtrarPanificadora"
  );
botaoMostrarPanificadora.addEventListener("click", filtrarPorPanificadora);



function filtrarPorLaticinios() {
    let valor = 0;
    const listaLaticinios = produtos.filter((produto) => {
        if(produto.secao === "Laticínio") {
            valor += produto.preco;
            const precoTotal = document.querySelector('#precoTotal');
            precoTotal.innerText = valor.toFixed(2);
            return true;
        }
  });

  montarListaProdutos(listaLaticinios);
}

const botaoMostrarLaticinios = document.querySelector(
    ".estiloGeralBotoes--filtrarLaticinios"
  );
botaoMostrarLaticinios.addEventListener("click", filtrarPorLaticinios);


function filtrarPorNome() {
    let valor = 0;
    const nomeProduto = document.querySelector('.campoBuscaPorNome').value.toLowerCase();
    const listaNome = produtos.filter((produto) => {
        if(produto.nome.toLowerCase().startsWith(nomeProduto)) {
            valor += produto.preco;
            const precoTotal = document.querySelector('#precoTotal');
            precoTotal.innerText = valor.toFixed(2);
            return true;
        }
        else if(produto.nome.startsWith(nomeProduto) == false) {
            const precoTotal = document.querySelector('#precoTotal');
            precoTotal.innerText = valor.toFixed(2)
        }
    })

    montarListaProdutos(listaNome);
}

const botaoBuscaPorNome = document.querySelector(
    ".estiloGeralBotoes--botaoBuscaPorNome"
);
botaoBuscaPorNome.addEventListener("click", filtrarPorNome);




function mostrarTodos() {
    let valor = 0;
    const ListaProd = produtos.filter((produto) => {
        valor += produto.preco;
        const precoTotal = document.querySelector('#precoTotal');
        precoTotal.innerText = valor.toFixed(2);
    })
    montarListaProdutos(produtos);
}

const botaoMostrarTodos = document.querySelector(
    ".estiloGeralBotoes--mostrarTodos"
);
botaoMostrarTodos.addEventListener("click", mostrarTodos);
