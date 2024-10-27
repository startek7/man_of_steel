import * as jwt from 'jsonwebtoken';
import { ENV } from '../../env.config';

export class JWTService {
  private accessTokenSecret = ENV.JWT_SECRET;
  private refreshTokenSecret = ENV.JWT_SECRET;

  public signAccessToken(payload: any): string {
    return jwt.sign(payload, this.accessTokenSecret, { expiresIn: '15m' });
  }

  public signRefreshToken(payload: any): string {
    return jwt.sign(payload, this.refreshTokenSecret, { expiresIn: '7d' });
  }

  public verifyAccessToken(token: string): any {
    return jwt.verify(token, this.accessTokenSecret);
  }

  public verifyRefreshToken(token: string): any {
    return jwt.verify(token, this.refreshTokenSecret);
  }
}