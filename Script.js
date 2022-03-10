var salario = Number(prompt("Digite seu salário: "))

window.document.write(`seu salário é ${salario.toLocaleString('PT-BR', {
    style: 'currency',
    currency: 'BRL'
})}`)