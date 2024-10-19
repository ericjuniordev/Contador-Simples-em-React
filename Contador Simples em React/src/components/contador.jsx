import { useState } from "react";
// Define o componente funcional Contador
const Contador = () => {
// Inicializa o estado “valor” com 0
const [valor, setValor] = useState(0);
// Função para incrementar o contador
const incrementar = () => {
// Verifica se o valor é menor que 10 antes de incrementar
if (valor < 10) {
setValor(valor + 1); // Incrementa o valor em 1
}
};
// Função para decrementar o contador
const decrementar = () => {
// Verifica se o valor é maior que 0 antes de decrementar
if (valor > 0) {
setValor(valor- 1); // Decrementa o valor em 1
}
};
// Retorna a estrutura JSX do componente
return (
<div>
<h1>Contador: {valor}</h1> {/* Exibe o valor atual do contador */}
<div>
<button onClick={incrementar}>Incrementar</button > {/* Botão para incrementar */}
<button onClick={decrementar}>Decrementar</button > {/* Botão para decrementar */}
</div>
{valor === 10 && <p>Valor máximo a ngido</p>} {/* Exibe mensagem ao a ngir 10 */}
</div>
);
};
export default Contador;