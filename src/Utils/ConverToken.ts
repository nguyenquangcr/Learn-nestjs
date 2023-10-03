import * as jwt from 'jsonwebtoken';

export default function ConverToken(rawToken: any) {
  const token = rawToken?.authorization?.split(' ')[1];
  return jwt.decode(token);
}
