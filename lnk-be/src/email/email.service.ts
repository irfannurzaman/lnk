// src/email/email.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import nodemailer from 'nodemailer';
import { Email } from './schemas/email.schema';

@Injectable()
export class EmailService {
  constructor(@InjectModel(Email.name) private emailModel: Model<Email>) {}

  async sendEmail(emailData: { id: number, allDay: boolean,  title: string; email: string; start: Date; end: Date }) {
    // KIRIM KE EMAIL
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.example.com',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: 'your-email@example.com',
    //     pass: 'your-email-password',
    //   },
    // });

    // const mailOptions = {
    //   from: '"Event Notifier" <your-email@example.com>',
    //   to: emailData.email,
    //   subject: emailData.title,
    //   text: `Event: ${emailData.title}\nStart: ${emailData.start}\nEnd: ${emailData.end}`,
    // };

    // await transporter.sendMail(mailOptions);

    // Simpan email ke MongoDB
    const emailEntry = new this.emailModel({
      id: emailData.id,
      allDay: emailData.allDay,
      title: emailData.title,
      email: emailData.email,
      start: emailData.start,
      end: emailData.end,
    });

    console.log("emailEntry", emailEntry);
    
    
    return emailEntry.save();
  }

  async findAll(): Promise<Email[]> {
    return this.emailModel.find().exec();
  }
}
