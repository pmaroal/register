import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): string {
    return 'ok';
  }

  @Get('register')
  async register(
    @Query('email') email: string,
    @Query('password') password: string,
  ): Promise<string> {
    //check if email or password are empty
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|es)$/;
    if (!emailRegex.test(email)) {
      throw new BadRequestException('Invalid email format');
    }

    // Validate password
    if (password.length < 8) {
      throw new BadRequestException(
        'Password must be at least 8 characters long',
      );
    }

    return await this.appService.register(email, password);
  }
}
