import formatDate from '@/utils/date-format';
jest.genMockFromModule('date-fns');

describe('Date Format', () => {
  it('should format a date string', () => {
    expect(formatDate('1996-06-22', 'dd/MM/yyyy')).toEqual('22/06/1996');
  });

  it('should format a date', () => {
    const date = formatDate(new Date(1903, 8, 15), 'dd/MM/yyyy');
    expect(date).toEqual('15/09/1903');
  });
});
