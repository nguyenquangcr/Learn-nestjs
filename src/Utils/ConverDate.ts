import { format } from 'date-fns';

export default function ConvertDay(date: string): string {
  const formattedDate = format(new Date(date), 'dd/MM/yyyy HH:mm:ss');
  return formattedDate;
}
