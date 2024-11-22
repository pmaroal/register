import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async register(email: string, password: string): Promise<string> {
    // Aquí simularíamos el almacenamiento, por ejemplo:
    console.log(`User registered with email: ${email}`);
    return 'User successfully registered';
  }
}
