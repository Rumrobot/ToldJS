/**
 * @param {string} valuta
 */
export async function getCurrencyRate(valuta) {
  if (valuta.toLowerCase() === "dkk") {
    return 1;
  }
  const response = await fetch('https://www.floatrates.com/daily/dkk.json');
  const data = await response.json();
  console.log(data);
  console.log(valuta);
  let result = data[valuta.toLowerCase()].inverseRate;
  return result;
}