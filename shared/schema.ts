import { z } from "zod";

// Simple type definitions without database tables
export interface User {
  id: number;
  username: string;
  password: string;
}

export interface ContactForm {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertContactForm = z.infer<typeof contactFormSchema>;
