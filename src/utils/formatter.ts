export const transformWords = (
  word: string,
  type: 'upper' | 'lower' | 'capital'
) => {
  const words = word.split(/[-\s_/]/);
  switch (type) {
    case 'upper':
      return words.map((word) => word.toUpperCase()).join(' ');
    case 'lower':
      return words.map((word) => word.toLowerCase()).join(' ');
    case 'capital':
      return words
        .map((element) => {
          return element.charAt(0).toUpperCase() + element.slice(1);
        })
        .join(' ');
    default:
      return '';
  }
};

export const commaFormatter = (val: string | number, dp: number = 0) => {
  const value = val.toString().split(',').join('');

  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: dp,
  }).format(Number(value));
};
