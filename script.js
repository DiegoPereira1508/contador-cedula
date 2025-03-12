document.getElementById('contadorForm').addEventListener('input', function() {
    const notas = [
        { id: 'nota200', valor: 200 },
        { id: 'nota100', valor: 100 },
        { id: 'nota50', valor: 50 },
        { id: 'nota20', valor: 20 },
        { id: 'nota10', valor: 10 },
        { id: 'nota5', valor: 5 },
        { id: 'nota2', valor: 2 }
    ];

    const total = calcularTotal(notas);
    atualizarTotal(total);
});

function calcularTotal(notas) {
    return notas.reduce((total, nota) => {
        const quantidade = parseFloat(document.getElementById(nota.id).value) || 0;
        return total + (quantidade * nota.valor);
    }, 0);
}

function atualizarTotal(total) {
    document.getElementById('total').textContent = total.toFixed(2);
    document.querySelector('h2').classList.toggle('mostrar', total > 0);
}

function resetForm() {
    document.getElementById('contadorForm').reset();
    atualizarTotal(0);
}

// Função auxiliar para obter o valor de um elemento e convertê-lo para número
function getValorNumerico(id) {
    const valor = document.getElementById(id).value;
    return parseFloat(valor) || 0;
}
