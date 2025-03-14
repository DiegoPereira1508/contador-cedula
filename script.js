// Adiciona um listener para o evento 'input' no formulário
document.getElementById('contadorForm').addEventListener('input', calcularTotal);

function calcularTotal() {
    const notas = [
        { id: 'nota200', valor: 200 },
        { id: 'nota100', valor: 100 },
        { id: 'nota50', valor: 50 },
        { id: 'nota20', valor: 20 },
        { id: 'nota10', valor: 10 },
        { id: 'nota5', valor: 5 },
        { id: 'nota2', valor: 2 }
    ];

    // Calcula o total
    const total = notas.reduce((acc, nota) => {
        const quantidade = parseFloat(document.getElementById(nota.id).value) || 0;
        return acc + (quantidade * nota.valor);
    }, 0);

    // Atualiza o valor exibido
    document.getElementById('total').textContent = total.toFixed(2);
}

function resetForm() {
    // Reseta o formulário e o total
    document.getElementById('contadorForm').reset();
    document.getElementById('total').textContent = "0.00";
}
