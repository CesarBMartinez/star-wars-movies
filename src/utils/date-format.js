import { format, parseISO } from 'date-fns';

function formatDate(date, dateFormat = 'dd/MM/yyyy') {
  let dateToFormat = date;
  if (typeof dateToFormat === 'string') {
    dateToFormat = parseISO(date);
  }
  return format(dateToFormat, dateFormat);
}

export default formatDate;
