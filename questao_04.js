const ListDefaturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotalEstado = Object.values(ListDefaturamento).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

for (const estado in ListDefaturamento) {
    const percentualtotal = (ListDefaturamento[estado] / faturamentoTotalEstado) * 100;
    console.log(`${estado}: ${percentualtotal.toFixed(2)}%`);
}