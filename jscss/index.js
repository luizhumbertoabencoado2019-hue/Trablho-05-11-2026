
const cards = document.querySelectorAll(".card");
const resumo = document.getElementById("resumo");
const btnLimpar = document.getElementById("limpar");

function atualizarResumo() {
    const n = document.querySelectorAll(".selecionado").length;

    if (n === 0) {
        resumo.textContent = "Nenhum item selecionado";
    } else {
        resumo.textContent = n === 1
            ? "1 item selecionado."
            : n + " itens selecionados.";
    }
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("selecionado");
        atualizarResumo();
    });
});

btnLimpar.addEventListener("click", () => {
    cards.forEach((card) => {
        card.classList.remove("selecionado");
    });

    atualizarResumo();
});
