export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;

  if (typeof PLN === 'string') {
    return NaN;
  } else if (typeof PLN === 'number') {
    if (PLN < 0) {
      return '$0.00';
    }
    // Dodaj kod konwersji dla przypadku, gdy PLN jest liczbą większą lub równą zero.
  } else {
    return 'Error';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}