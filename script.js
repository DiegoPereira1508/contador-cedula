document.getElementById('contadorForm').addEventListener('input', function() {
    const notas = [
        { id: 'nota200', valor: 200 },
        { id: 'nota100', valor: 100 },
        { id: 'nota50', valor: 50 },
        { id: 'nota20', valor: 20 },
        { id: 'nota10', valor: 10 },
        { id: 'nota5', valor: 5 },
        { id: 'nota2', valor: 2 },
        { id: 'moeda1', valor: 1 },
        { id: 'moeda050', valor: 0.50 },
        { id: 'moeda025', valor: 0.25 },
        { id: 'moeda010', valor: 0.10 },
        { id: 'moeda005', valor: 0.05 },
        { id: 'moeda001', valor: 0.01 }
    ];

    let total = 0;
    let detalhes = "";

    notas.forEach(nota => {
        const quantidade = document.getElementById(nota.id).value;
        const valorTotal = quantidade * nota.valor;
        total += valorTotal;
        if (quantidade > 0) {
            detalhes += `${quantidade} x R$${nota.valor.toFixed(2)} = R$${valorTotal.toFixed(2)}<br>`;
        }
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('detalhes').innerHTML = detalhes;
    document.getElementById('detalhes').classList.add('mostrar');
});

function resetForm() {
    document.getElementById('contadorForm').reset();
    document.getElementById('total').textContent = "0.00";
    document.getElementById('detalhes').innerHTML = "";
    document.getElementById('detalhes').classList.remove('mostrar');
}

function copyTotal() {
    const total = document.getElementById('total').textContent;
    navigator.clipboard.writeText(total).then(() => {
        alert(`Total copiado: R$${total}`);
    });
}

let historico = [];

function salvarHistorico() {
    const total = document.getElementById('total').textContent;
    const detalhes = document.getElementById('detalhes').innerHTML;
    if (total !== "0.00") {
        historico.push({ total, detalhes });
        atualizarHistorico();
    }
}

function atualizarHistorico() {
    const historicoLista = document.getElementById('historicoLista');
    historicoLista.innerHTML = historico.map((item, index) => `
        <li>
            <strong>${index + 1}. Total: R$${item.total}</strong><br>
            ${item.detalhes}
        </li>
    `).join('');
}

function limparHistorico() {
    historico = [];
    atualizarHistorico();
}