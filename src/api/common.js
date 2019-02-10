export const isEmpty = (object) => {
  return ((object == null) && typeof(object) !== 'number') || Object.keys(object).length === 0;
};

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",", symbol = '$') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign
      + symbol
      + (j ? i.substr(0, j) + thousands : '')
      + i.substr(j)
        .replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i)
        .toFixed(decimalCount)
        .slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

export const formatUSD = (amount) => formatMoney(amount);


