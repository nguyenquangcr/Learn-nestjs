import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import appConfig from '../config/app.config';
import { AuthService } from './auth.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(public authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: appConfig().appSecret,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
