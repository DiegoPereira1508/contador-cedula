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

    let total = 0;

    notas.forEach(nota => {
        const quantidade = parseFloat(document.getElementById(nota.id).value) || 0;
        total += quantidade * nota.valor;
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.querySelector('h2').classList.add('mostrar');
});

function resetForm() {
    document.getElementById('contadorForm').reset();
    document.getElementById('total').textContent = "0.00";
    document.querySelector('h2').classList.remove('mostrar');
}
