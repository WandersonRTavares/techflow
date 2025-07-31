// Seleciona os elementos do DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tarefas = [];

// Carrega tarefas do localStorage ao iniciar
window.onload = () => {
    const dados = localStorage.getItem("tarefas");
    if (dados) {
        tarefas = JSON.parse(dados);
        renderizarTarefas();
    }
};

// Adiciona uma nova tarefa
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto !== "") {
        tarefas.push(texto);
        input.value = "";
        salvarETornarVisivel();
    }
});

// Renderiza as tarefas na tela
function renderizarTarefas() {
    list.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.onclick = () => {
            tarefas.splice(index, 1);
            salvarETornarVisivel();
        };

        li.appendChild(botao);
        list.appendChild(li);
    });
}

// Salva no localStorage e atualiza a lista
function salvarETornarVisivel() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
}
