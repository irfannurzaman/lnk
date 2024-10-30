// src/email/email.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body: CreateEmailDto) {
    const emailData = {
      id: body.id,
      allDay: body.allDay,
      title: body.title,
      email: body.email,
      start: new Date(body.start),
      end: new Date(body.end),
    };

    await this.emailService.sendEmail(emailData);
    return { message: 'Email sent and saved successfully!' };
  }
  @Get('list')
  async getEmailList(): Promise<CreateEmailDto[]> {
    return this.emailService.findAll();
  }
}
