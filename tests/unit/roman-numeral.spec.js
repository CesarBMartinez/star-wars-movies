import numberToRoman from '@/utils/roman-numeral';

describe('Roman Numeral', () => {
  it('should convert a number to roman numeral', () => {
    expect(numberToRoman(5)).toEqual('V');
  });
});
