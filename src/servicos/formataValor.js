export default function formataValor(valor = 0) {
  return `R$ ${valor.toFixed(2)}`.replace('.', ',');
}
