import { format, addHours } from 'date-fns';

export default function ConvertDay(date: string): string {
  const parsedDate = new Date(date);
  const adjustedDate = addHours(parsedDate, 7);
  const formattedDate = format(adjustedDate, 'dd/MM/yyyy HH:mm:ss');
  return formattedDate;
}
