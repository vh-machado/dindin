const meses = {
  1: 'jan',
  2: 'fev',
  3: 'mar',
  4: 'abr',
  5: 'maio',
  6: 'jun',
  7: 'jul',
  8: 'ago',
  9: 'set',
  10: 'out',
  11: 'nov',
  12: 'dez',
};

export default function formataMes(mes) {
  return meses[mes];
}
