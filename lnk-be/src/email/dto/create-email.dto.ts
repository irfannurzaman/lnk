// src/email/dto/create-email.dto.ts

import { IsEmail, IsNotEmpty, IsBoolean, IsString, IsDate } from 'class-validator';

export class CreateEmailDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  allDay: boolean;

  @IsEmail()
  email: string;

  @IsDate()
  start: Date;

  @IsDate()
  end: Date;
}
