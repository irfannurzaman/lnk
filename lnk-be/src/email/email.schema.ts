// src/email/schemas/email.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Email extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  allDay: boolean;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  start: Date;

  @Prop({ required: true })
  end: Date;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
