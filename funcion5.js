function horaAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString();
}

console.log(horaAtual());