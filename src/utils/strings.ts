export const isCountyCode = (st: string): boolean => {
  if (st.length !== 2) return false;
  const regex = new RegExp('[A-Z]{2}');
  return regex.test(st);
};

export const getStatesString = (states: { name: string }[]): string =>
  states.reduce(
    (accumulator: string, currentValue: { name: string }, index: number) => {
      const stateName = currentValue.name.split(' ').reverse().join(' ');
      return `${accumulator}${index !== 0 ? ', ' : ''}${stateName}`;
    },
    ''
  );
